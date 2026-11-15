# PH Project Status

Last verified against GitHub `main`: 2026-11-15

## Repository state
- Repository: `Guyabano-kun/PH`
- Branch: `main`
- Code/data baseline before adding project-control files: `c78d7d17bda612fdb9bf7ab5973fff99014f18`
- Dataset version: `0.2.47`
- `data/beaches.json`: 16 records
- `data/sources.json`: 109 sources
- Manifest counts: `beach_count=16`, `selection_beach_count=13`, `research_only_record_count=3`
- The manifest, beach dataset, source dataset, `weather.html`, and `beaches.html` were freshly fetched from GitHub `main` before creating the project-control files.
- Repository operating instructions and continuity records are now present on `main`: `AGENTS.md`, `docs/PROJECT_DECISIONS.md`, `docs/PROJECT_STATUS.md`, and `docs/CHAT_START.md`.
- These context files were re-fetched from GitHub `main` after creation and their contents were verified.

## Completed work
### Evidence-led beach picker on the Boracay guide (2026-11-15)
- Added a compact activity-first picker to `boracay.html`: five activity cards in a horizontal row, each with an icon, one leading beach name, and a `Подробнее / More` toggle for the alternatives. A `?` button opens a short methodology dialog.
- Desktop layout uses five columns; mobile layout is a horizontally scrollable row. The card shows only the beach name, with no per-card evidence badges. The methodology explains evidence ordering.
- The picker uses existing `data/beaches.json` records and the current `Asia/Manila` season (Amihan: November–May; Habagat: June–October). It displays up to 3 candidates, without padding missing results or calculating numeric scores.
- Only `supported` and `provisional` observations are eligible. Swimming candidates with explicit strong-current / steep-drop-off warning evidence are excluded. Seasonal matching is required for swimming, kite/windsurfing, and boat excursions. Evidence status is used internally to order alternatives.
- White Beach recommendation cards carry a short DENR/EMB water-quality monitoring note for Boat Stations 1–3. The separate Monitoring map filter and the three standalone DENR sampling-point tourist markers have been removed. The sampling coordinates remain in the underlying evidence records; they have not been reassigned as beach coordinates.
- The map now displays 31 tourist points after removing the 3 monitoring-only markers. The existing beach category remains; no separate Monitoring category remains.
- Added a direct details link to `weather.html`. No changes to `weather.html`, `data/beaches.json`, the Leaflet library, or the existing route/map mechanisms.
- Main UI commit: `6d2b3ebcc76ecec06ade89ca282129c39138c8c8`; simplified beach-name-only cards commit: `63b375eed5433e407c249080a4123896a62267ce`.
- Validation before the final simplification: all 9 inline scripts passed syntax compilation; no duplicate HTML IDs; Monitoring filter and standalone markers removed; five activity icons and methodology dialog present. Re-run checks against current HEAD after this commit.
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

**Continue evidence assessment for the three full beach-query modes and the 12-month × 5-activity suitability matrix.**

Required sequence:
1. Preserve the current guide-page evidence summary; do not convert it into a numerical ranking.
2. Research missing activity-relevant evidence selectively across the 13 approved beaches: seasonal wind, wave exposure, tides, currents, rainfall, bathymetry/underwater features, water quality, safety, and access.
3. Record source, checked date, exact geographic/seasonal coverage, limitations, and confidence at field level.
4. Keep unsupported fields unknown. Do not calculate scores yet.
5. Develop scoring methodology, unknown-data treatment, activity-specific factors, weights, and confidence rules for review/approval.
6. Only after methodology approval, implement the three query modes and any monthly matrix, preserving the current guide-page summary and detailed `weather.html` experience.
7. Validate code/data, diff, mobile/desktop behavior, and GitHub Pages deployment. Visual verification remains outstanding for the current published guide change.

Do not invent suitability, access rights, safety conclusions, or missing physical parameters.

## Scope protection
- No changes to site architecture or map library.
- No replacement of Leaflet.
- No recommender implementation in `weather.html` during the current evidence-research stage.
- No activity scores until methodology approval.
- No invented coordinates, access rights, safety conclusions, or missing physical parameters.
