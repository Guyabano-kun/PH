# PH Project Status

Last verified against GitHub `main`: 2026-11-15

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
