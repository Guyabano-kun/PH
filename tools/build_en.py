#!/usr/bin/env python3
"""Generate the English pages in en/ from the bilingual Russian source pages.

The source pages (boracay.html, weather.html, currency.html) carry both
languages in data-ru / data-en attributes and switch with JavaScript on one
URL, so search engines only ever see Russian. This script writes a static
English copy of each page to en/<page>.html with:
  - <html lang="en"> (page scripts read this and render English strings);
  - every [data-ru][data-en] element pre-rendered in English;
  - English title, description, Open Graph, Twitter and JSON-LD;
  - canonical / og:url pointing at the en/ URL;
  - relative paths rewritten to the shared files one level up.

en/ is generated output: never edit it by hand, edit the source page and
re-run `python3 tools/build_en.py` (CI does this on every push to main).
Standard library only. Exits non-zero if a page cannot be built correctly.
"""
import html
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://guyabano-kun.github.io/PH/"
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link",
        "meta", "source", "track", "wbr"}
CYRILLIC = re.compile(r"[А-Яа-яЁё]")

# English metadata. "short" is the breadcrumb / JSON-LD page name.
PAGES = {
    "boracay": {
        "title": "Boracay: a practical guide for visitors and residents | Philippines",
        "description": "A practical guide to Boracay: beaches, transport, airport transfers, "
                       "housing and utilities, weather, mobile data, payments and everyday life on the island.",
        "short": "Boracay — a practical guide",
    },
    "weather": {
        "title": "Boracay weather: monsoons, wind, sea state and tides | Philippines",
        "description": "Boracay weather by season: Amihan and Habagat monsoons, wind, sea state, "
                       "which coast is sheltered, and tide tables.",
        "short": "Boracay weather and sea conditions",
    },
    "currency": {
        "title": "Money on Boracay: currency exchange, ATMs, cards, Maya and GCash | Philippines",
        "description": "How to pay on Boracay: cash exchange, ATM fees and limits, bank cards, "
                       "Maya, GCash and QR Ph for foreign visitors.",
        "short": "Currency exchange and payments on Boracay",
    },
}
# Pages that have no English version yet: links to them go back to the Russian page.
RU_ONLY = ["beaches"]


class Finder(HTMLParser):
    """Record (inner_start, inner_end, replacement_html) for translatable elements."""

    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.text = text
        self.line_starts = [0]
        for m in re.finditer("\n", text):
            self.line_starts.append(m.end())
        self.open = []   # [tag, depth, inner_start, replacement]
        self.edits = []
        self.feed(text)
        self.close()

    def _abs(self):
        line, col = self.getpos()
        return self.line_starts[line - 1] + col

    def handle_starttag(self, tag, attrs):
        for item in self.open:
            if item[0] == tag:
                item[1] += 1
        a = dict(attrs)
        if tag in VOID:
            return
        if "data-ru-only" in a:          # Russian-only block: emptied in the English page
            self.open.append([tag, 1, self._abs() + len(self.get_starttag_text()), ""])
            return
        if "data-ru" not in a or "data-en" not in a:
            return
        if "data-html-ru" in a:
            replacement = a.get("data-html-en") or ""
        else:
            replacement = html.escape(a["data-en"] or "", quote=False)
        inner_start = self._abs() + len(self.get_starttag_text())
        self.open.append([tag, 1, inner_start, replacement])

    def handle_endtag(self, tag):
        pos = self._abs()
        for item in list(self.open):
            if item[0] != tag:
                continue
            item[1] -= 1
            if item[1] == 0:
                self.open.remove(item)
                self.edits.append((item[2], pos, item[3]))


class VisibleText(HTMLParser):
    """Collect text outside <script>/<style>, to report strings left untranslated."""

    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.chunks, self.skip = [], 0
        self.feed(text)
        self.close()

    def handle_starttag(self, tag, attrs):
        self.skip += tag in ("script", "style", "title")

    def handle_endtag(self, tag):
        self.skip -= tag in ("script", "style", "title")

    def handle_data(self, data):
        if not self.skip and data.strip():
            self.chunks.append(data.strip())


def prerender(text):
    finder = Finder(text)
    if finder.open:
        raise SystemExit(f"unclosed translatable elements: {[i[0] for i in finder.open]}")
    out, last, done = [], 0, 0
    for start, end, replacement in sorted(finder.edits):
        if start < last:      # nested inside an element already replaced
            continue
        out += [text[last:start], replacement]
        last = end
        done += 1
    out.append(text[last:])
    return "".join(out), done


def set_attr_content(text, selector_re, value):
    """Replace content="..." of the single tag matched by selector_re."""
    pattern = re.compile(r'(<meta\s+' + selector_re + r'\s+content=")[^"]*(")')
    new, n = pattern.subn(lambda m: m.group(1) + html.escape(value) + m.group(2), text)
    if n != 1:
        raise SystemExit(f"expected exactly one tag for {selector_re!r}, found {n}")
    return new


def fix_jsonld(text, page):
    meta = PAGES[page]
    pattern = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)
    m = pattern.search(text)
    if not m:
        raise SystemExit(f"{page}: JSON-LD block not found")
    data = json.loads(m.group(2))

    def en_url(u):
        for p in PAGES:
            u = u.replace(f"{BASE}{p}.html", f"{BASE}en/{p}.html")
        return u

    def walk(node):
        if isinstance(node, dict):
            if node.get("@type") == "WebPage":
                node["name"], node["description"] = meta["short"], meta["description"]
                node["inLanguage"] = "en"
            if node.get("@type") == "WebSite":
                node["inLanguage"] = ["ru", "en"]
            if node.get("@type") == "ListItem":
                for p in PAGES:
                    if str(node.get("item", "")).endswith(f"/{p}.html"):
                        node["name"] = "Boracay" if p == "boracay" else PAGES[p]["short"]
            for k, v in list(node.items()):
                if isinstance(v, str):
                    v = en_url(v)
                    if k == "description" and CYRILLIC.search(v):
                        v = "Boracay Island, Philippines"
                    node[k] = v
                else:
                    walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)

    walk(data)
    body = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    return text[:m.start(2)] + body + text[m.end(2):]


def build(page):
    src = (ROOT / f"{page}.html").read_text(encoding="utf-8")
    meta = PAGES[page]
    for lang in ("ru", "en", "x-default"):
        if f'hreflang="{lang}"' not in src:
            raise SystemExit(f"{page}.html: missing <link rel=\"alternate\" hreflang=\"{lang}\">")

    text, count = prerender(src)

    text, n = re.subn(r'<html lang="ru"', '<html lang="en"', text, count=1)
    if n != 1:
        raise SystemExit(f"{page}: <html lang=\"ru\"> not found")
    text, n = re.subn(r"<title>[^<]*</title>", "<title>" + html.escape(meta["title"], quote=False) + "</title>", text, count=1)
    if n != 1:
        raise SystemExit(f"{page}: <title> not found")
    text = set_attr_content(text, r'name="description"', meta["description"])
    text = set_attr_content(text, r'property="og:title"', meta["title"])
    text = set_attr_content(text, r'property="og:description"', meta["description"])
    text = set_attr_content(text, r'name="twitter:title"', meta["title"])
    text = set_attr_content(text, r'name="twitter:description"', meta["description"])
    text = set_attr_content(text, r'property="og:locale"', "en_US")
    text = set_attr_content(text, r'property="og:url"', f"{BASE}en/{page}.html")
    text, n = re.subn(r'(<link rel="canonical" href=")[^"]*(")', rf"\g<1>{BASE}en/{page}.html\g<2>", text)
    if n != 1:
        raise SystemExit(f"{page}: expected one canonical link, found {n}")
    text = fix_jsonld(text, page)

    # Shared files live one level up; links between translated pages stay inside en/.
    text = re.sub(r'((?:href|src)=["\'])(boracay\.css|site-core\.js)', r"\1../\2", text)
    text = re.sub(r'''(["'(])((?:data|assets)/)''', r"\1../\2", text)
    for p in RU_ONLY:
        text = re.sub(rf"(?<![\w/.-]){p}\.html", f"../{p}.html", text)

    head = text[:text.index("</head>")]
    if CYRILLIC.search(head):
        raise SystemExit(f"{page}: Russian text left in <head>: {CYRILLIC.search(head).group(0)!r}")

    out = ROOT / "en" / f"{page}.html"
    out.parent.mkdir(exist_ok=True)
    out.write_text(text, encoding="utf-8")
    leftovers = sorted(set(s for s in VisibleText(text).chunks if CYRILLIC.search(s)))
    print(f"en/{page}.html: {count} elements pre-rendered, {len(leftovers)} static strings still Russian")
    for s in leftovers[:20]:
        print("   untranslated:", s[:90])


if __name__ == "__main__":
    for name in PAGES:
        build(name)
    sys.exit(0)
