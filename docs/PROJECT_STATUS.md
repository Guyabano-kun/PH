# PH Project Status

Last verified against GitHub `main`: 2026-11-20

## Repository state
- Repository: `Guyabano-kun/PH`
- Branch: `main`
- Code/data baseline before adding project-control files: `c78d7d17bda612fdb9bf7ab5973fff99014f18`
- Dataset version: `0.2.53`
- `data/beaches.json`: 16 records
- `data/sources.json`: 117 sources
- Manifest counts: `beach_count=16`, `selection_beach_count=13`, `research_only_record_count=3`
- The manifest, beach dataset, source dataset, `weather.html`, and `beaches.html` were freshly fetched from GitHub `main` before creating the project-control files.
- Repository operating instructions and continuity records are now present on `main`: `AGENTS.md`, `docs/PROJECT_DECISIONS.md`, `docs/PROJECT_STATUS.md`, and `docs/CHAT_START.md`.
- These context files were re-fetched from GitHub `main` after creation and their contents were verified.

## Site-wide price emphasis (2026-11-15)
- Monetary amounts and price ranges are emphasized in bold on all content pages: `boracay.html`, `beaches.html`, `currency.html`, and `weather.html`.
- `boracay.html` already contained the price-emphasis renderer; the same renderer and CSS were added to the other three pages.
- The renderer processes visible text nodes, including content inserted dynamically after language changes or data loading. Existing bold markup is preserved.
- On `currency.html`, live FX conversion values and rate cards are excluded so exchange rates are not misclassified as product/service prices; ATM fees and withdrawal amounts remain emphasized.
- No price values, rates, labels, data, links, page structure, or site architecture were changed.
- Structural checks: one renderer per content page, no duplicate HTML IDs, `index.html` redirect unchanged. GitHub Pages visual/deployment verification remains NOT VERIFIED because the published URLs could not be retrieved and the commit has no reported CI statuses.
## Completed work
### English pages on separate URLs (2026-11-16)
- Added `tools/build_en.py`, generated `en/boracay.html`, `en/weather.html`, `en/currency.html`, and `.github/workflows/build-en.yml` to regenerate them on push.
- Added `hreflang` alternates to the three source pages and to `sitemap.xml`; English pages have their own canonical URL, title, description, Open Graph, Twitter and JSON-LD metadata.
- Language button now navigates between the Russian and English URL, keeping the fragment. `currency.html` now reads its starting language from `<html lang>` like the other pages.
- Translated the strings that were still Russian in English mode (utility figures, source-link labels, season table headers, loading placeholders, phone labels).
- Local headless-browser check (390 px viewport, external APIs blocked): all seven pages load with no script errors; no Cyrillic text on the three English pages; RU↔EN navigation works; no local 404s. Live GitHub Pages deployment and the Actions rebuild are NOT VERIFIED.
- Open: `beaches.html` has no English version.

### SEO and indexation foundation (2026-11-16)
- Added a shared 1200×630 PNG Open Graph image at `assets/og-philippines.png`; all four canonical content pages now expose Open Graph image metadata, Twitter large-image cards, and matching `primaryImageOfPage` JSON-LD. Existing canonical URLs and page-level descriptions were preserved.
- Fixed the missing page-level H1 on `weather.html` using the existing bilingual heading strings and matching heading styles. The four canonical content pages now each have one H1.
- Extended the beach catalogue's JSON-LD with an `ItemList` containing all 16 named records. Actual beaches use Schema.org `Beach`; Angol Point uses `TouristAttraction`. Stable fragment IDs were added to rendered cards. No unverified coordinates, public-access claims, ratings, or unsupported descriptions were added.
- Completed cross-navigation among the four content pages. The sitemap contains all four canonical HTML pages with last-modified dates; the root `index.html` redirect and JSON datasets are intentionally excluded because they are not independent indexable landing pages.
- Search-engine indexation remains `NOT VERIFIED`: no Search Console coverage data is available, public GitHub Pages URLs could not be retrieved by the available browser check, and an empty `site:` search is not proof of non-indexation.
- Final SEO source commit: `511fb70836ab0d7c253f3eaa8dea4e12a67b7679`; OG PNG correction: `5758656b458ea09e6fbdc164fbcb4505fa936e59`. GitHub Pages build and deployment workflow for the final source commit completed successfully; direct public-page retrieval remains `NOT VERIFIED` in the available browser environment.

### Beach passport parameter reduction (2026-11-15)
- Dataset advanced to `0.2.53`.
- Removed the approved low-priority / hard-to-source parameters across all 16 beach records: `coastline_orientation_degrees`, `shoreline_geometry`, `shore_slope`, `seasonal_erosion`, `sediment_study`, `reef_crest`, `nearshore_depth`, `bathymetry_source`, `wave_climate`, `visibility`, and `emergency_access`.
- Retained hydrodynamic safety context (`current_speed`, `current_direction`, `rip_currents`, `tide_effects`), lifeguard coverage, reef condition, pollution sources and monitoring stations.
- Removed corresponding UI rendering and data references from `beaches.html`; top-level categories, beach IDs, picker logic and selection behavior are unchanged.
- Recalculated field-review status counts and removed obsolete unknown-field paths / known-gap entries.

## Previous completed work
### Evidence-led beach picker on the Boracay guide (2026-11-15)
- Added a compact activity-first picker to `boracay.html`: five activity cards in a horizontal row, each with an icon, one leading beach name, and a `Подробнее / More` toggle for the alternatives. A `?` button opens a short methodology dialog.
- Desktop layout uses five columns; mobile layout is a horizontally scrollable row. The card shows only the beach name, with no per-card evidence badges. The methodology explains evidence ordering.
- The picker uses existing `data/beaches.json` records and the current `Asia/Manila` season (Amihan: November–May; Habagat: June–October). It displays up to 3 candidates, without padding missing results or calculating numeric scores.
- Only `supported` and `provisional` observations are eligible. Swimming candidates with explicit strong-current / steep-drop-off warning evidence are excluded. Seasonal matching is required for swimming, kite/windsurfing, and boat excursions. Evidence status is used internally to order alternatives.
- White Beach recommendation cards carry a short DENR/EMB water-quality monitoring note for Boat Stations 1–3. The separate Monitoring map filter and the three standalone DENR sampling-point tourist markers have been removed. The sampling coordinates remain in the underlying evidence records; they have not been reassigned as beach coordinates.
- The map now displays 31 tourist points after removing the 3 monitoring-only markers. The existing beach category remains; no separate Monitoring category remains.
- Added a direct details link to `weather.html`. No changes to `weather.html`, `data/beaches.json`, the Leaflet library, or the existing route/map mechanisms.
- Main UI commit: `6d2b3ebcc76ecec06ade89ca282129c39138c8c8`; beach-name-only cards commit: `63b375eed5433e407c249080a4123896a62267ce`; bilingual map-note correction: `29b65be1394a37efb98d77db4341d8c161fb956a`.
- Validation against current HEAD `29b65be`: all 9 inline scripts pass JavaScript syntax compilation; no duplicate HTML IDs; 31 map place entries remain; Monitoring filter and all three standalone sampling markers are absent; five activity icons, alternatives toggles, methodology dialog, desktop five-column layout, mobile horizontal scroll, and bilingual White Beach monitoring note are present.
- Visual rendering on the published URL remains `NOT VERIFIED` until the latest deployment is checked in a browser.
- Scope: this is the default current-season evidence summary only. The three full query modes and a comparative monthly suitability matrix are not implemented; numeric scoring remains blocked pending methodology and evidence approval.

### Beach selection scope and dataset
- The approved 13-beach selection pool is recorded in `data/beaches.json` and `data/manifest.json`.
- Three research-only records remain outside the selection pool: Angol Point, Hagdan Beach, and Lugutan Beach.
- Newcoast Cove hierarchy is recorded as Cove 1 → Lapus-Lapus, Cove 2 → Boracay Newcoast Beach, Cove 3 → Savoy Beach.
- Stable IDs and selection eligibility are explicit.
- Newcoast and Savoy have no fabricated beach-centroid coordinates; POIs are typed reference points where applicable.

### Beach passport evidence review
- All 13 selected beaches have a `data_quality.field_review` audit covering identity, geography, shore, underwater, hydrodynamics, activities, access, excursions, ecology, evidence, and data quality.
- Unknown and provisional fields remain explicit. The audit does not claim all physical/geographic information is complete.
- Activity assessments remain `not_scored`; activity values remain null/unknown.
- Known gaps include the unscored five-activity assessment, unassessed 12-month suitability matrix, and absence of current date-specific sea/bathing conditions.
- Previous implementation review checked field-level source references. The dataset remains an evidence-backed draft, not a completed physical survey.

### Previous validation results
The previous work package recorded:
- unique IDs: PASS;
- recursive source references: PASS;
- selected/research-only scope counts: PASS;
- passport audit presence for all 13 selected beaches: PASS;
- all five activities remain null/unknown/unscored: PASS;
- no beach-specific coordinates invented for Newcoast/Savoy: PASS;
- static renderer compatibility check for `beaches.html`: PASS;
- `beaches.html` and `weather.html` were not modified in that dataset work.

These are historical checks. Re-run relevant checks against current `main` after subsequent edits.

### Boracay map audit and corrections (2026-11-15)
- Updated `boracay.html` map category behavior: selecting a category or search result now fits the map bounds to the visible markers. This fixes the case where remote attractions remained outside the initial viewport.
- The map previously contained 34 points: 10 beach references, 8 landmarks, 3 DENR/EMB monitoring points, 11 shopping points and 2 jetty ports. The three monitoring-only markers were subsequently removed from the tourist map on 2026-11-15; current total is 31 points. All 34 records passed structural checks for name/category/coordinates, valid Boracay coordinate ranges and duplicate names.
- The three DENR/EMB points fronting Boat Stations 1–3 are now classified separately as monitoring locations, not physical boat stations or beach markers.
- Tambisaan Beach and Tambisaan Jetty Port are separate points. The beach retains its OSM beach-feature reference; the port uses OSM node 298305717 (amenity=ferry_terminal), at 11.94924, 121.94738.
- E Mall Boracay was moved to the Mapbox POI coordinate 11.95417383, 121.93146091, corroborated by Plus Code XW3J+MHH. The previous point matched an individual business near the mall, not the mall POI.
- Angol Point is classified as a landmark/reference feature, not a beach.
- Lambros Point is cross-checked against Mapbox and Lakad Pilipinas GPS within about 1.3 m. Cujo's Keyhole remains a reference point with about 25 m difference between guide and OSM references. Sigbin Cave's Plus Code and Mapbox POI agree within about 1.4 m; the entrance itself is not visually confirmed.
- Lugutan Mangrove Park retains OSM Mangrove Boardwalk node 13518302721 at 11.95639, 121.93451. The Mapbox park POI is about 42 m away and is not substituted for the boardwalk point; official LT Group material documents the boardwalk at Sitio Lugutan.
- The Ruins Art Gallery remains provisional: Plus Code XWH5+2X5 is retained, while Mapbox separately identifies West Cove Ruins about 37 m away. Their identity is not assumed to be identical.
- GitHub Pages build and deployment workflow for code commit `c60e4abfac41743d386ecfc9095c7c44c5c6b94e` completed successfully. Direct browser retrieval of the published page was unavailable in the verification channel; rendered visual behavior remains NOT VERIFIED.

## Outstanding / not verified
- GitHub Pages live deployment was not verified in the previous work package. Do not report deployment PASS without a fresh live check.
- The 12 × 5 seasonal suitability matrix has not been researched, assessed, or scored.
- Activity scoring methodology and weights have not been approved or implemented.
- Significant physical data gaps remain in the 13 passports. Do not disguise unknowns as completed research.
- Current date-specific water quality, currents, waves, and bathing safety are not established by the seasonal dataset.

## Current work package and exact next step

**Current baseline (2026-11-15): evidence-enriched 13-beach picker, dataset 0.2.52.**

- 16 records total: 13 eligible beaches and 3 research-only records; selection order is continuous 1–13.
- 117 registered sources; source-reference audit has no dangling IDs or duplicate source IDs.
- 13 passports now contain island-scale tidal-circulation context, scoped reef/dive-site references, available historical water-quality data, seasonal activity observations and access caveats. Island-scale context is not represented as beach-level measurements.
- Field audit across the 13 selected passports: 85 supported, 50 provisional and 435 unknown field values. Per passport, 30–37 tracked fields remain unknown.
- All 65 activity suitability values (13 beaches × 5 activities) remain null and unscored. No 12-month × 5-activity suitability matrix has been calculated.
- Picker evidence confidence and recommendation eligibility are separate. The optional `recommendation_eligible` gate excludes caution-only, adverse, non-specific or access-unconfirmed claims; condition/access notes are shown under recommendations.
- Current evidence-backed candidate output:
  - **Amihan:** swimming — White Beach, Diniwid; beach relaxation — White Beach, Puka, Diniwid; shore snorkelling — Tambisaan, Diniwid, Balinghai; kite/windsurfing — Bulabog; boat-excursion meeting point — White Beach Station 1.
  - **Habagat:** no swimming or kite/windsurfing candidate is currently supported; beach relaxation — White Beach, Puka, Diniwid; shore snorkelling — Tambisaan, Diniwid, Balinghai; operator-specific boat-excursion meeting point — Bulabog.
- Candidate output is evidence-based and conditional, not a safety ranking or same-day sea-state forecast. Snorkelling notes require calm water/high tide as applicable; Balinghai requires resort admission and tide planning.
- **Water quality:** latest publicly ingested station-specific annual dataset is CY 2023. The 2024 RSoBER documents a real-time pilot at Lugutan Bridge, but the results are confidential and not numerically published. March 2026 outfall samples are not ambient beach-water samples; laboratory TSS, color and fecal-coliform results were pending in the reports reviewed.
- **Wind:** Bulabog now has an operator-front Kwind station and qualitative historical distribution chart. No machine-readable monthly percentages were available. White Beach's Amihan shelter evidence remains provisional.
- **Reefs:** Tambisaan nearshore reef presence is supported; Diniwid is provisional; Balinghai, Ilig-Iligan and Tulubhan references remain locality/nearby-site evidence. Reef polygons and live-coral condition remain unverified; detailed visibility and beach-level bathymetry are no longer tracked as passport parameters.
- **Access:** practical routes are recorded where reported, but formal public right-of-way and current gate/entry status remain unverified for several beaches. Resort-managed access is not treated as unrestricted public access.
- **Newcoast:** Cove 1 / Lapus-Lapus, Cove 2 / Boracay Newcoast Beach, Cove 3 / Savoy Beach mappings remain project-approved naming relationships, not surveyed boundaries. The DENR New Coast station is parent-area monitoring only, not assigned to any individual cove.
- **Hagdan:** remains a provisional name candidate outside the 13-beach pool; no separate beach boundary or beach coordinate is established.

### Remaining data required for a fully validated suitability model

1. **Hydrography:** obtain NAMRIA bathymetry, tidal predictions and station/time-specific tidal-current data for Boracay; validate chart coverage and source type before using any gridded values.
2. **Nearshore conditions:** collect beach-specific wave exposure, current speed/direction, rip-current observations, entry/exit and tide-dependent access observations. Copernicus global grids are too coarse for individual beaches.
3. **Wind climatology:** obtain a machine-readable multi-year monthly wind series for Bulabog and west/north/east/south Boracay sectors. The operator chart is qualitative and does not support monthly numerical scoring.
4. **Water quality:** obtain station-level 2024–2026 EMB results, sampling dates, compliance/event counts and laboratory parameters; keep outfall results separate from ambient beach stations.
5. **Safety and access:** obtain current LGU/MDRRMO/Coast Guard swimming-zone maps, lifeguard deployment, red-flag rules, public approach routes and resort day-entry terms.
6. **Marine ecology:** obtain georeferenced reef/seagrass polygons and recent coral-condition surveys; retain current observations only where they can be sourced at beach-relevant scale.
7. **Suitability methodology:** define activity-specific criteria, seasonal weighting, evidence confidence, access gates, adverse-condition exclusions and unknown-data treatment before calculating any of the 65 values or the 12 × 5 monthly matrix.

### Validation status
- GitHub JSON and JavaScript syntax checks: PASS.
- Source-reference integrity and field-review path counts: PASS.
- 65 numeric activity scores remain null by design.
- GitHub Pages live retrieval and rendered mobile/desktop verification: NOT VERIFIED. The published pages could not be retrieved in the current verification environment; do not report deployment PASS.

Do not invent suitability, access rights, safety conclusions, beach boundaries or coordinates.

## Scope protection
- No changes to site architecture or map library.
- No replacement of Leaflet.
- No recommender implementation in `weather.html` during the current evidence-research stage.
- No activity scores until methodology approval.
- No invented coordinates, access rights, safety conclusions, or missing physical parameters.


## Standing repository authorization (2026-11-15)
- The repository owner explicitly authorizes ChatGPT to read and modify this repository directly, commit and push routine project changes to `main`, and publish through GitHub Pages without asking for repeated approval for each change.
- This authorization covers ordinary implementation, data, documentation, validation, commit, push, and deployment actions within the approved project scope.
- The authorization does not override GitHub authentication, branch protection, tool/platform availability, or safety constraints. A technical failure must be reported as BLOCKED; never claim an unperformed action.
- `AGENTS.md` is the operational source of truth for this standing authorization and the required verification protocol.
- Authorization recorded in commit `e59dad8bfb8280da3677ab2167d9823ff3f6fb49`.


## Three-mode beach selector implementation (2026-11-15)
- Implemented on `boracay.html` in commits `3ca5ebfd1e62d05d5eafaa1017bf837f0b00cbaf` and `045e3aa013a21a10be0c1b66bf8b1cca40b1d28e`.
- Added the three agreed query modes: month + activity → evidence-backed beach options; month + beach → activities with eligible evidence; activity + beach → months supported by explicit seasonal observations.
- Inputs use the 12 months, five existing activities and exactly the 13 selection-eligible beaches from `data/beaches.json`. The selector is bilingual and defaults to the current month in `Asia/Manila`.
- Eligibility is evidence-gated: only observations with status `supported` or `provisional`, a claim, and `recommendation_eligible=true` are used. Supported observations sort before provisional; no numeric scores or synthetic rankings are calculated.
- For swimming, kite/windsurfing and boat excursions, a seasonal observation matching the selected month-season is required. General evidence without an explicit season does not create a month list in activity + beach mode. No unsupported months are inferred.
- Existing compact five-activity current-season summary and methodology dialog remain in place. No changes to the data schema, beach IDs, Leaflet, or weather page.
- Dataset baseline remains `0.2.53` (16 records, 13 eligible, 3 research-only).
- Verification performed: source and data fetched from current `main`; commit diff inspected; three query modes and controls present; 12-month and 13-beach data sources confirmed. Full browser interaction, mobile/desktop visual rendering, and live GitHub Pages deployment remain NOT VERIFIED in this pass.
- Known limitation: this is an evidence-filtering query tool, not the full weighted 12 × 5 × 13 suitability model. Monthly claims are limited to explicitly season-tagged evidence and current Amihan/Habagat month mapping; October/season-boundary evidence requires further source review.


## Month-only beach recommendation selector (2026-11-15)
- Simplified the beach selector on `boracay.html` to one month dropdown followed by the five existing activity cards. Each card recommends beaches for that activity and the selected month.
- The month defaults to the current month in `Asia/Manila`; manual month selection is preserved when the interface language changes.
- Removed the three-mode query UI and its separate query script. The five activity cards, methodology dialog, evidence eligibility rules and swimming cautions remain.
- Data remains unchanged: `data/beaches.json` version `0.2.53`, 16 beaches, 13 selection-eligible, five activities.
- Source-level structural checks and JSON parsing passed. Browser interaction, visual checks on mobile/desktop, and published Pages verification are pending.


## Activity recommendation fallback and hero Map shortcut (2026-11-15)
- Removed the visible “Insufficient data / Недостаточно данных” card state. When no eligible observation matches the selected monsoon season, the activity card now retains its evidence-backed beach candidate and displays a seasonal qualification rather than an empty result.
- Swimming fallback is restricted to the eligible White Beach Amihan evidence and explicitly warns that Habagat exposure is higher; it is not a same-day safety clearance. Kite/windsurfing and boat-excursion fallbacks state that the selected month differs from the main evidence-backed season and require checking current conditions/operator details.
- Added a compact SVG Map shortcut over the top-right of the Boracay hero banner, linking to the existing interactive map section. No new map implementation or data was introduced.
- Browser/mobile visual verification and published Pages verification remain pending.

### Shared site runtime (2026-11-16)
- Added root-level `site-core.js`, loaded by all four canonical content pages: `boracay.html`, `beaches.html`, `weather.html`, and `currency.html`.
- Centralized the duplicated dynamic price-emphasis renderer and MutationObserver in the shared runtime. Currency conversion pairs, rate values, and the live rates block remain excluded through `data-price-exclude=".pair,.value,#rates"` on `currency.html`.
- Centralized theme rendering (mode icon and accessible label) behind `PHSite.renderTheme()`; the beach catalogue's standalone theme button is now connected to the same three-mode theme cycle. Existing page-specific theme state and translation logic remain in place.
- Added a shared `PHSite.notifyLanguageChange()` event contract and wired it into the pages that already implement language toggles. Page-specific translation dictionaries and dynamic content refresh hooks were deliberately retained.
- Removed the four duplicated page-level price-renderer implementations. No build tools, frameworks, directory restructuring, or external dependencies were introduced.
- Source validation against current `main`: one shared runtime reference per content page; no duplicate HTML IDs; all inline JavaScript blocks pass syntax compilation; all four pages retain one H1 and the price-emphasis CSS; currency exclusions remain configured; no local duplicate price regex remains.
- GitHub Pages deployment was triggered for the final source commit, but browser-level visual and functional regression checks remain `NOT VERIFIED` pending deployment completion and an accessible published-page check.
- Shared runtime commit: `8dd3e6146cb9261b9530b005f3b819ae3f18f0cc`; final source head at this status update: `d8d9cb4b95f5f6953b23ec2100f9a58c1c3670ef`.


## Boracay commercial core — implementation package 1 (2026-11-20)
- Implementation commits: `1e5d89f6f8ec42a8b4dd4312203726a60093a1b2` (new pages, main-guide links, generator/workflow and sitemap); `b4019eeefcf8b3b1032d92c05031b8032bd36283` and `d4db091dc817de5c3a3fcea5cdb49a1b0937dfa3` (correction of arrival guidance text).
- Added `commercial.css`, `flights.html`, `accommodation.html`, and `tours.html`.
- Added three bilingual entry cards to `boracay.html` and updated its description to include flights, accommodation and tours.
- Extended `tools/build_en.py` and `.github/workflows/build-en.yml` to generate and validate English versions of all three new pages. Generated files: `en/flights.html`, `en/accommodation.html`, `en/tours.html`.
- Updated `sitemap.xml` from 8 to 14 URLs. Each new RU/EN pair has reciprocal hreflang entries and x-default to English; new-page lastmod is 2026-11-20.
- New pages include title/description, canonical, reciprocal hreflang, Open Graph/Twitter metadata and WebSite/WebPage JSON-LD. English generation rewrites shared CSS/runtime paths.
- Content: Flights explains MPH/KLO choice and full route cost; Accommodation explains area selection and booking checks; Tours groups the main activity types and pre-booking checks. All pages link to relevant existing guides.
- Verified external destinations during implementation: Google Flights Boracay search, Traveloka Caticlan flight search, Skyscanner Caticlan search, Booking.com Boracay accommodation, and Klook Boracay destination/island-hopping listings.
- No affiliate identifiers were available. External booking/search links are standard links, not affiliate links. No commission or conversion tracking is claimed.
- GitHub Actions English build passed: all six generated English pages reported zero remaining static Russian strings; `en/beaches.html` structural checks passed; sitemap bilingual URL/hreflang validation passed.
- Source checks: one H1 per new page; no duplicate IDs; expected local navigation paths; RU and EN canonical URLs present. The flight arrival paragraph was corrected and English pages regenerated.
- GitHub Pages visual/runtime deployment and desktop/mobile rendering: NOT VERIFIED in this pass. A Pages build check for the first source commit was cancelled during runner image setup; do not treat this as a successful deployment.
- Next package: P2 content, beginning with a source-backed Places & Attractions scope and Connectivity/eSIM expansion. Restaurants and Health & Safety require current source/business verification before publication. Do not add unverified POIs or medical/emergency claims.


## Boracay practical-guide expansion — implementation package 2 (2026-11-20)
- Main implementation commit: `1341fbaedd848a32577493b9a4d485ab6cbd8293`; follow-up corrections: `2b25ac2b25363af591eab6e122a069c0c76c0153` and `308fcf06d4d6bdb56b5378566039f8e8ae0cfdcc`; English regeneration commit: `7dc570377953fecd164528e35c0f962d41bec631`.
- Added `places.html`, `restaurants.html`, `connectivity.html`, `travel-guide.html`, and `health-safety.html`; generated `en/` counterparts through the existing build workflow.
- Extended `tools/build_en.py`, `.github/workflows/build-en.yml`, and `sitemap.xml`. Sitemap now contains 24 unique URLs (12 RU/EN page pairs), with reciprocal hreflang and x-default links.
- Added a separate "Practical guides" section to `boracay.html`; the original eight quick-link cards remain in their own grid. Commercial pages remain grouped under "Plan your trip".
- Places page links to the official DOT Boracay guide, beach passports and existing Leaflet map. No new coordinates or unverified POI markers were introduced.
- Restaurants page contains 12 non-ranked venue listings grouped by area. It omits ratings, opening hours and prices; Google Maps links are search links, not exact-coordinate claims. Listing/address references checked 2026-11-20; venue entrances and exact coordinates were not independently surveyed.
- Connectivity page links to official Globe Traveler SIM/eSIM and Smart eSIM/tourist SIM pages. No static promotional price or availability claim is made.
- Travel Guide links the six key trip-planning steps to existing pages and official eTravel.
- Health & Safety page includes national emergency number 911 and Ciriaco S. Tirol Hospital, Balabag, Boracay, phone +63 36 288-3041, with links to official eHotlines and Aklan Province sources. It explicitly warns that details can change and is not medical advice.
- GitHub Actions English build passed. All 11 generated English pages reported zero remaining static Russian strings; the manually maintained English beach catalogue passed structural checks; sitemap bilingual URL/hreflang validation passed.
- Structural checks on new RU/EN pages: one H1 each, valid JSON-LD, no duplicate HTML IDs, correct canonical URLs. English pages contain no visible Cyrillic text. Restaurant map query parameters are HTML-escaped.
- GitHub Pages deployment and browser-level desktop/mobile rendering remain NOT VERIFIED. Public Pages URL retrieval failed in the available browser check; earlier Pages build jobs were cancelled during runner image setup. Do not claim the live site is updated until verified.
- P3 remaining: separate long-term Living on Boracay guide. Local Services and Shopping & Essentials are implemented together as a bilingual practical directory; do not duplicate existing accommodation, utilities, restaurants, connectivity, health/safety or currency sections.


## Boracay Local Services directory — implementation package 3 (2026-11-20)
- Added `local-services.html` as a bilingual directory covering laundry, pharmacies, groceries, island delivery/errands and household/hardware supplies.
- Added the page to the main Boracay guide under Practical guides, the English-page generator metadata, the build workflow path filter and the bilingual sitemap. The existing static architecture and shared `commercial.css` are retained.
- Laundry: A-KON Laundry's two outlets are listed from its operator website; Waszann Wear Laundry is shown with a location reference and a map name-search link.
- Pharmacies: Watsons Boracay Beach Front and Watsons City Mall Boracay use official Watsons branch pages.
- Groceries: Savemore CityMall, Budget Mart D'Mall and Robinsons Supermarket Station B Mall are shown as area references with map name-search links.
- Delivery: Boracay Delivery is linked to its official website and terms; the page describes only services explicitly stated by the operator.
- Household supplies: ACE Hardware CityMall is shown as a business listing with a map name-search link.
- No ratings, prices, dynamic hours, stock or service availability claims were published. No new business coordinates or Leaflet markers were added. Existing Restaurants, Connectivity, Health & Safety, Currency/ATM and Accommodation content was not duplicated.
- Research sources checked 2026-11-20: A-KON operator website; Watsons official store listings; Aklan Provincial Government grocery listing; Boracay Delivery website and terms; public business listings for area references.
- English generation completed in commit `a9b2c0b3631dbf643acb29ea85041103d6614f01`; the generated `en/local-services.html` is present. The existing generator's sitemap validation passed as part of that run.
- Structural checks: one H1 on each language page; valid RU JSON-LD; correct RU/EN canonical URLs; no duplicate HTML IDs; no visible Cyrillic text in the generated English page; sitemap contains 26 URLs and the reciprocal RU/EN pair; main guide and workflow path include the new page.
- Diff review confirms only the intended page, generator metadata, workflow path, main-guide card, sitemap, generated English page and project-control records changed. No map data or Leaflet code changed.
- GitHub Pages live deployment and desktop/mobile rendering remain NOT VERIFIED; no browser-level published-page verification was completed.
- Source implementation commit: `c4c86371d3185e4afefbdc5e77dd7599dd7aa61f`; English generation commit: `a9b2c0b3631dbf643acb29ea85041103d6614f01`.


## Boracay Living on Boracay guide — implementation package 4 (2026-11-20)
- Added `living-on-boracay.html` and generated `en/living-on-boracay.html`.
- The page covers long-stay area selection, full monthly budget categories, move-in costs, rental due diligence, utility/internet verification, everyday infrastructure and a scoped rent-control note.
- Avoids inventing an island-wide monthly budget or rent range. The existing `boracay.html#utilities` calculator remains the source for detailed utility estimates; the new page links to it instead of duplicating calculations.
- AKELCO's official rate page is linked directly; DOE monthly distribution-utility rate data is also linked. TIEZA's Boracay drainage/water-system guidance is linked for island-specific water/wastewater context.
- Rent-control text is limited to NHSB Resolution No. 2024-01, which expressly covers the period through 31 December 2026 and residential units up to PHP 10,000/month subject to its conditions. The page warns not to assume application to all rentals or continuation in 2027. The official DHSUD resolution and Lawphil RA 9653 text are linked.
- Added the page to the main Boracay practical-guides section, English generator metadata, workflow path filter and bilingual sitemap. Sitemap now contains 28 URLs (14 RU/EN pairs).
- English generation completed in commits `dbe7a0b9c78e5cefec2d332479a1d4eda67805e3` and `3d66747cfb542535f7f384f65c9b5cad2542c87b`. The final regeneration updated the English page after the AKELCO link correction.
- Structural checks: one H1 per language page; no duplicate IDs; balanced HTML tag nesting; no visible Cyrillic text in generated English page; English canonical URL and reciprocal sitemap pair present. JSON-LD parses successfully.
- Live GitHub Pages deployment and desktop/mobile visual rendering remain NOT VERIFIED.

## Approved site language default (2026-11-20)
- English is approved as the default public experience once the site is ready.
- The language-default change is deliberately deferred until the final site-readiness package. At that stage, the root entry URL should open `en/boracay.html`; Russian remains available at existing Russian URLs with explicit language switching and reciprocal hreflang. Do not force language by browser locale or geo-IP.
- This decision is recorded in `docs/PROJECT_DECISIONS.md`; current `index.html` still redirects to the Russian `boracay.html` and has not yet been changed.

## Next work package
- Technical Foundation: verify OG image asset and dimensions, reconcile sitemap lastmod dates and coverage, audit cross-language internal links, and check live GitHub Pages deployment/rendering. Keep English-default root redirect deferred until the final readiness pass.

## Technical Foundation verification — 2026-11-20
- Current implementation baseline before this status update: `f2597dd9e8d2704476ee2f7423a5423731c63781`.
- Replaced the accommodation platform label and outbound URL in `accommodation.html`: Booking.com → Agoda (`https://www.agoda.com/city/boracay-island-ph.html`). English `en/accommodation.html` was regenerated by the existing workflow; both RU and EN were checked for the Agoda URL and absence of Booking.com references.
- Agoda city URL was reachable through the external web check. The link is a standard outbound link; no affiliate ID, tracking parameter, partnership approval or commission attribution is configured.
- `assets/og-philippines.png` exists in GitHub; PNG signature and IHDR confirm 1200×630 px. Public Pages asset retrieval remains NOT VERIFIED.
- `sitemap.xml` contains 28 URLs (14 RU/EN pairs). Updated `lastmod` only for `boracay.html` and `en/boracay.html` to 2026-11-20, reflecting the actual source and generated-page changes. Existing bilingual/hreflang validation passed in `tools/build_en.py`.
- Audited local href targets across all 14 Russian source pages and the manually maintained `en/beaches.html` against the repository tree. Boracay fragment targets referenced by guides were checked against `boracay.html` IDs. No missing local page targets or referenced Boracay anchors were found. English generator workflow passed; full rendered navigation remains NOT VERIFIED.
- Searched 17 core HTML/JS files for GA4/GTM loader patterns and measurement/container IDs; none were found. GA4/GTM is therefore NOT CONFIGURED in the audited site runtime.
- GitHub Actions: English build PASS for commit `f2597dd9e8d2704476ee2f7423a5423731c63781`; GitHub Pages build/deployment workflow PASS for the same commit.
- Direct public retrieval of GitHub Pages URLs still fails in the available verification environment. Desktop/mobile visual inspection, responsive layout and large-gap review remain NOT VERIFIED.
- `index.html` remains unchanged and continues to redirect to the Russian page. English-first root redirect remains deferred until the final site-readiness pass.
- Files changed in this package: `accommodation.html`, generated `en/accommodation.html`, `sitemap.xml`. Project-control checkpoint updated here.

## Remaining Technical Foundation work
1. Obtain an accessible browser session or equivalent rendering evidence to verify published desktop/mobile pages and inspect full-page section spacing.
2. Confirm public HTTP retrieval for the Pages landing page, accommodation page, sitemap and OG image.
3. Configure GA4/GTM only after a real measurement/container ID is supplied and the tracking scope is approved.
4. Keep English-first root redirect locked until final readiness, after the remaining EN content and links are verified.



## Site-readiness checkpoint — 2026-11-20
- Current source HEAD before this checkpoint: `543c2d622ffe77cdb718f784db98fd29c27e84bb`.
- English-first root entry is now implemented in `index.html`: meta refresh and JavaScript redirect to `en/boracay.html`; canonical points to the English landing page; fallback link is English. Existing Russian page URLs and reciprocal language switching are unchanged.
- The change follows the approved language decision. The English page set is complete: 14 RU/EN pairs (13 generated English pages plus the separately maintained `en/beaches.html`).
- Source-level internal reference audit covered all 28 content HTML pages. All local page, CSS, JS and media targets resolve against the current repository tree. Referenced Boracay section fragments were checked against the current guide IDs. No missing local targets or checked Boracay anchors were found.
- Sitemap audit: 28 unique URLs, 14 language pairs; each URL entry has exactly one `ru`, `en` and `x-default` alternate with reciprocal destinations. Existing lastmod values are retained: 2026-11-16 for the four original guide pairs and 2026-11-20 for pages updated/added on 2026-11-20.
- HTML source checks on the audited batches found no duplicate IDs, exactly one H1 per content page, valid canonical declarations, and parseable JSON-LD. English build workflow passed on the immediately preceding content commit `f2597dd9e8d2704476ee2f7423a5423731c63781`; no content files changed after that build.
- GitHub Pages deployment for `a74cdec9970c9faf3a8b017bfc75cbc08bf0968a` completed successfully (run `44762931712`). Deployment for the new root-redirect commit `543c2d622ffe77cdb718f784db98fd29c27e84bb` was triggered (run `44768635986`) and was IN PROGRESS at the time of this checkpoint.
- Public GitHub Pages retrieval via the available browser verification channel remains unavailable. Therefore live HTTP response, browser execution, desktop/mobile rendering, responsive behavior and full-page section-gap inspection remain NOT VERIFIED. Do not equate a successful Pages workflow with browser-level verification.
- GA4/GTM remains NOT CONFIGURED; no real Measurement ID / GTM Container ID is present in the audited runtime. Do not add placeholders or fabricated IDs.
- OG asset source validation remains PASS (PNG, 1200×630); public asset retrieval remains NOT VERIFIED.
- No affiliate attribution is configured for Agoda or other outbound platforms. Existing links are standard outbound links.
- Files changed in this finalization step: `index.html`; this status checkpoint.
- Next verification: confirm Pages run `44768635986` reaches `success`; if it fails, inspect the job logs and correct the actual failure. Re-attempt public browser verification when an accessible route is available. Do not claim visual acceptance until a real desktop/mobile render is inspected.
