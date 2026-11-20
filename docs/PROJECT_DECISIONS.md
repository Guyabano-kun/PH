# PH Project Decisions

Last reviewed: 2026-11-15

This file records approved durable decisions, not a chat transcript or duplicate source dataset.

## Product direction
- PH is a practical information and geographic portal for tourists and residents in the Philippines.
- Current geographic priority: Boracay. Mactan, Cebu, and other Philippine regions are within the broader scope.
- The portal combines practical information with reliable geographic tools; it is not only a travel blog.

## Technical architecture
- Static GitHub Pages site using HTML, CSS, JavaScript, and JSON.
- Leaflet remains the primary mapping library.
- Preserve existing Cloudflare Worker integrations where applicable.
- No technology replacement, architectural redesign, directory restructuring, or duplicate functionality without demonstrated critical need.
- Preserve existing behavior and backward compatibility. Prefer minimal additive changes.

## Repository as project memory
- Repository `Guyabano-kun/PH`, branch `main`, is canonical for current code, data, approved decisions, and project status.
- Chat history is not authoritative. New chats must reload current repository records before continuing.
- Durable decisions belong here; current execution state belongs in `docs/PROJECT_STATUS.md`; the one-prompt continuation procedure belongs in `docs/CHAT_START.md`.
- Do not store full chat transcripts, transient reasoning, or speculative proposals as approved decisions.

## Geographic integrity
- Never fabricate, eyeball, or borrow coordinates from nearby objects.
- Associate every coordinate with the identity and type of the actual mapped object. Beach centroid/representative point, entrance, facility, landmark, monitoring station, pier, and transport stop are distinct point types.
- Do not treat monitoring-station or resort/hotel coordinates as beach coordinates.
- Do not infer public access or legal right-of-way from proximity, a map path, or a tourism listing. Record public beach access, physical route, and permission through private property as separate questions.
- When sources conflict, preserve the conflict and investigate identity; do not automatically select one coordinate.
- Important geographic records should retain provenance, checked date, accuracy/confidence, contradictions, and explicit verification status.

## Evidence and data quality
- Prioritize Philippine government and municipal sources (NAMRIA, DENR, EMB, DOT, LGUs), then official operators/organizations, OpenStreetMap and other cartographic data, reputable tourism references, and user-generated content.
- Historical environmental/water-quality results are not current safety advice.
- Unknown values remain null/unknown and must not be silently converted into neutral, positive, or negative assessments.
- Missing evidence reduces confidence or makes an assessment unavailable; it does not justify an invented score.
- Source records must distinguish what a source actually supports from assumptions or extrapolations.

## Boracay beach selection scope
The approved core selection pool contains exactly 13 beaches, in this order:
1. White Beach — `white`
2. Bulabog Beach — `bulabog`
3. Puka Shell Beach — `puka`
4. Diniwid Beach — `diniwid`
5. Punta Bunga Beach — `punta`
6. Balinghai Beach — `balinghai`
7. Banyugan Beach — `banyugan`
8. Ilig-Iligan Beach — `ilig`
9. Lapus-Lapus Beach — `lapus`
10. Tulubhan Beach — `tulubhan`
11. Tambisaan Beach — `tambisaan`
12. Boracay Newcoast Beach — `newcoast`
13. Savoy Beach — `savoy`

Three additional research-only records remain outside the selection pool: Angol Point (`reference_feature`), Hagdan Beach (`provisional_beach_candidate`), and Lugutan Beach (`named_beach_research_only`).

## Newcoast hierarchy
Approved project hierarchy:
- Cove 1 → Lapus-Lapus Beach (`lapus`)
- Cove 2 → Boracay Newcoast Beach (`newcoast`)
- Cove 3 → Savoy Beach (`savoy`)

This is approved project scope/hierarchy, not a surveyed statement of physical boundaries. Do not create duplicate Cove 1 records or infer beach coordinates from resort/hotel/transport POIs. Newcoast and Savoy beach-specific coordinates remain unverified/null until independently established.

## Beach suitability recommender
- User-approved placement update (2026-11-15): put the compact, evidence-led beach picker on the main Boracay guide `boracay.html`; link detailed sea, weather, tide, and seasonal information to `weather.html`. This supersedes the earlier plan to place the entry point only in `weather.html`.
- Five activities: `swimming`, `beach_relaxation`, `snorkeling`, `kitesurfing_windsurfing`, `boat_excursions`.
- The guide-page first stage defaults to the current season calculated in `Asia/Manila` and shows up to 3 evidence-backed beach options per activity. Do not pad results when evidence is insufficient.
- Compact UI: five activity cards in one horizontal row, each with an activity icon, the leading beach name, and a `More` toggle for the remaining alternatives (up to 2). A `?` button opens a short methodology dialog. Keep the visible card content minimal; evidence tiers are used internally for ordering and explained in the methodology, not printed as badges under every beach.
- The current guide-page picker is an evidence summary, not a comparative suitability ranking, safety assessment, or day-specific sea forecast. It must not imply that a beach is safe to swim or that a listed meeting point is a universal boat departure terminal.
- Three full query modes remain the target: month + activity → best beach; month + beach → suitable activities; activity + beach → best months. These modes must not be presented as fully implemented until their evidence basis is available.
- Planned assessment scope: 12 months × 5 activities × 13 selected beaches. Factors include waves, wind, tide, rain, currents, geography, underwater conditions, access, and safety; weights depend on activity.
- Missing evidence must reduce confidence or prevent scoring, not improve a score by default.
- Do not assign scores or publish a monthly matrix until methodology, evidence sufficiency, unknown-data treatment, weights, and confidence rules have been reviewed and approved.
- Do not confuse long-term seasonal suitability with date-specific sea/bathing conditions.

## Change control
- Follow the agreed sequence and architecture for each work package.
- Do not silently expand scope or change approved decisions.
- Change a durable decision only with explicit user approval or when a critical factual/technical error requires correction; record reason and date.


## Three-mode selector implementation update (2026-11-15)
- Implemented the three query paths on `boracay.html`: month + activity → evidence-backed beach options; month + beach → evidenced activities; activity + beach → explicitly evidenced seasonal months.
- The selector filters the 13 approved selection-eligible beach records and five activities. It uses only `supported` / `provisional` observations with `recommendation_eligible=true`.
- This implementation does not calculate numeric suitability scores, weights, or a complete monthly matrix. It must not label evidence ordering as a scored ranking. If a seasonal month range is not explicitly supported, the tool returns insufficient evidence rather than extrapolating.
- The existing compact current-season summary remains alongside the full selector. This is an additive implementation, not a replacement of the approved page placement or architecture.


## Month-only beach selector revision (2026-11-15)
- Supersedes the three-mode UI implementation description above: the user selected a simpler interaction consisting of one month selector and five fixed activity cards.
- Each activity card returns evidence-backed beach recommendations for the selected month. The default is the current month in `Asia/Manila`.
- The previous month + beach and activity + beach query paths are removed from the UI and client logic.
- Preserve the existing evidence gate, supported-before-provisional ordering, and swimming hazard exclusions. Do not invent scores or infer seasonal suitability without eligible evidence.


## Separate English URLs (2026-11-16)
- Owner-approved: English is published at its own URLs under `en/` (`en/boracay.html`, `en/weather.html`, `en/currency.html`) so search engines can index it. The Russian pages stay at the root and remain the single editable source.
- `en/` is generated by `tools/build_en.py` (standard library only) and rebuilt by `.github/workflows/build-en.yml` on every push to `main` that touches a source page. Never edit `en/*.html` by hand.
- Every visible string on the three source pages must carry both `data-ru` and `data-en` (or `data-html-ru` / `data-html-en`). The build reports any static Russian string left on an English page. Script-generated text must branch on `document.documentElement.lang`.
- Each source page keeps three `<link rel="alternate" hreflang>` tags (`ru`, `en`, `x-default` → English) next to its canonical link; the build fails without them. English titles and descriptions live in `PAGES` inside `tools/build_en.py`.
- The language button navigates to the counterpart URL (handler in `site-core.js`) instead of switching text in place.
- `beaches.html` is Russian-only: its interface strings are hard-coded in the page script. English pages link to the Russian catalogue until it is made bilingual.


## Boracay travel planning and commercial content architecture (2026-11-20)
- The user approved expanding the Boracay portal around six content directions: Explore Boracay, Plan Your Trip, Tours & Activities, Practical Information, Weather & Sea, and Living on Boracay.
- The commercial core is implemented first as three independent bilingual pages: `flights.html`, `accommodation.html`, and `tours.html`, with generated English counterparts under `en/`.
- The main `boracay.html` remains the island landing page and links to the three commercial pages. Existing beaches, weather/sea, currency/payments, transportation, airport transfers, connectivity and utilities content remains in its current pages/sections unless a later approved package requires extraction.
- Flight guidance compares Caticlan (MPH) and Kalibo (KLO) and emphasizes total door-to-door journey cost, not airfare alone. Airport transfer detail remains on `boracay.html#airport-transfers`.
- Accommodation guidance is separate from long-term living costs. It provides area-selection and booking checks; it does not publish unverified hotel rankings, prices, coordinates or availability.
- Tours content groups activities by type and links to external booking listings. A listing is not a safety approval or a guarantee of operator quality.
- No custom booking/payment engine is to be developed. External platforms own inventory, prices, availability, booking terms and customer service.
- External links added in this package are standard non-affiliate links. Do not claim affiliate revenue or add tracking parameters until the relevant affiliate program is approved and real partner identifiers/terms are available.
- P2 and P3 remain roadmap scope, not implemented scope: Places & Attractions, Restaurants, Connectivity expansion/eSIM, Travel Guide, Health & Safety, Living on Boracay expansion and Local Services. Geographic/business listings require verified identities, coordinates and sources before publication.


## Boracay practical-guide expansion (2026-11-20)
- The second implementation package adds five bilingual pages: `places.html`, `restaurants.html`, `connectivity.html`, `travel-guide.html`, and `health-safety.html`, with generated English counterparts.
- `places.html` uses official DOT visitor guidance and links to the existing beach passports and Leaflet map. It does not introduce new POI coordinates or imply that every described landmark has a verified map marker.
- `restaurants.html` is a non-ranked directory of 12 venues grouped by area. It uses area/address references and map-search links only; it does not publish ratings, opening hours, prices, precise coordinates, or verified entrance points. Listing presence is not a quality or availability endorsement.
- `connectivity.html` covers Globe and Smart SIM/eSIM options and links to the providers' official pages. Plan availability, price, device compatibility and SIM-registration requirements must be rechecked with the provider; avoid hardcoding promotional prices.
- `travel-guide.html` connects the existing Flights, Accommodation, Transfers, Tours, Weather, Payments and Connectivity guides into a practical trip-planning sequence.
- `health-safety.html` publishes only the Philippine national emergency number 911 and Ciriaco S. Tirol Hospital's official Aklan contact details. It is not a medical directory or medical advice. Recheck phone numbers and service availability before relying on them.
- The Boracay landing page groups the commercial entry points under "Plan your trip" and the five practical guides under "Practical guides", keeping the original eight quick links intact.
- P3 remaining scope: a separate long-term Living on Boracay guide. Local Services and Shopping & Essentials are implemented as one practical directory page to avoid thin, overlapping pages.
- The Local Services directory is a non-ranked, bilingual reference covering laundry, pharmacies, groceries, delivery and household supplies. Do not publish ratings, dynamic opening hours, prices, stock claims or availability without current primary evidence.
- For businesses without independently verified entrance coordinates, show an area/address reference and a Google Maps name-search link only. Do not add these businesses as Leaflet markers or imply that the search result is a surveyed entrance.
- Avoid duplicating the existing Restaurants, Connectivity, Health & Safety, Currency/ATM and Accommodation pages.
