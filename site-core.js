/* PH shared site mechanisms. Page-specific translation and content logic stays in each HTML file. */
(function(){
  'use strict';
  const root=document.documentElement;
  const pricePattern=/(?:₱|PHP\s*|US\$\s*|USD\s*|\$\s*)\d[\d,]*(?:\.\d{1,2})?(?:\s*[–—-]\s*(?:₱|PHP\s*|US\$\s*|USD\s*|\$\s*)?\d[\d,]*(?:\.\d{1,2})?)?/g;
  const skipTags=new Set(['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','INPUT','OPTION','SELECT','STRONG','B','EM']);
  function excluded(element){
    const selector=root.dataset.priceExclude;
    try{return Boolean(selector&&element.closest(selector));}catch(error){return false;}
  }
  function emphasizeTextNode(node){
    const parent=node.parentElement;
    if(!parent||skipTags.has(parent.tagName)||parent.closest('strong,b,.price-emphasis')||excluded(parent))return;
    const value=node.nodeValue;
    pricePattern.lastIndex=0;
    if(!pricePattern.test(value))return;
    pricePattern.lastIndex=0;
    const fragment=document.createDocumentFragment();
    let last=0,match;
    while((match=pricePattern.exec(value))){
      if(match.index>last)fragment.append(document.createTextNode(value.slice(last,match.index)));
      const strong=document.createElement('strong');
      strong.className='price-emphasis';
      strong.textContent=match[0];
      fragment.append(strong);
      last=match.index+match[0].length;
    }
    if(last<value.length)fragment.append(document.createTextNode(value.slice(last)));
    node.replaceWith(fragment);
  }
  function scan(node){
    if(node.nodeType===Node.TEXT_NODE){emphasizeTextNode(node);return;}
    if(node.nodeType!==Node.ELEMENT_NODE&&node.nodeType!==Node.DOCUMENT_FRAGMENT_NODE)return;
    if(node.nodeType===Node.ELEMENT_NODE&&(skipTags.has(node.tagName)||excluded(node)))return;
    const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);
    const texts=[];
    while(walker.nextNode())texts.push(walker.currentNode);
    texts.forEach(emphasizeTextNode);
  }
  function renderTheme({theme='auto',language='en',button,icon}={}){
    root.dataset.theme=theme;
    if(icon)icon.textContent=theme==='dark'?'☾':theme==='light'?'☀':'◐';
    if(button){
      const labels={ru:{auto:'Автоматическая тема',light:'Светлая тема',dark:'Тёмная тема'},en:{auto:'Theme: auto',light:'Theme: light',dark:'Theme: dark'}};
      button.setAttribute('aria-label',(labels[language]||labels.en)[theme]||(labels[language]||labels.en).auto);
    }
  }
  window.PHSite=window.PHSite||{};
  window.PHSite.renderTheme=renderTheme;
  window.PHSite.notifyLanguageChange=function(language){
    document.dispatchEvent(new CustomEvent('ph:languagechange',{detail:{language}}));
  };
  /* Each language has its own URL (see tools/build_en.py). When the page declares a
     counterpart via <link rel="alternate" hreflang>, the language button navigates there
     instead of switching text in place; pages without a counterpart keep the in-place switch. */
  document.addEventListener('click',function(event){
    const button=event.target&&event.target.closest?event.target.closest('#lang-btn'):null;
    if(!button)return;
    const other=root.lang==='en'?'ru':'en';
    const link=document.querySelector('link[rel="alternate"][hreflang="'+other+'"]');
    if(!link||!link.href)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.href=link.href.split('#')[0]+window.location.hash;
  },true);
  function start(){
    scan(document.body);
    const observer=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(scan)));
    observer.observe(document.body,{childList:true,subtree:true});
    const simpleThemeButton=document.getElementById('theme');
    if(simpleThemeButton){
      const themes=['auto','light','dark'];
      let theme=root.dataset.theme||'auto';
      const apply=()=>{
        renderTheme({theme,language:root.lang==='ru'?'ru':'en',button:simpleThemeButton});
        simpleThemeButton.textContent=theme==='dark'?'☾':theme==='light'?'☀':'◐';
      };
      simpleThemeButton.addEventListener('click',()=>{
        theme=themes[(themes.indexOf(theme)+1)%themes.length];
        apply();
      });
      apply();
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();