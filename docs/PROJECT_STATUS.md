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
- The map now contains 34 points: 10 beach references, 8 landmarks, 3 DENR/EMB monitoring points, 11 shopping points and 2 jetty ports. All 34 records passed structural checks for name/category/coordinates, valid Boracay coordinate ranges and duplicate names.
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

**Prepare the evidence base for a 12-month × 5-activity suitability matrix across the 13 approved beaches.**

Required sequence:
1. Re-read current `main` sources and confirm current branch HEAD.
2. Review existing beach records and source provenance; do not overwrite or reinterpret existing evidence without justification.
3. Research missing activity-relevant evidence selectively: seasonal wind, wave exposure, tides, currents, rainfall, bathymetry/underwater features, water quality, safety, and access.
4. Record source, checked date, exact geographic/seasonal coverage, limitations, and confidence at field level.
5. Keep unsupported fields unknown. Do not calculate scores yet.
6. Develop scoring methodology, unknown-data treatment, activity-specific factors, weights, and confidence rules for review/approval before implementation.
7. Only after methodology approval, implement scoring/matrix and integrate it into existing `weather.html`, preserving the current dashboard and Leaflet map.
8. Validate code/data, diff, mobile/desktop behavior, and GitHub Pages deployment.

Do not skip ahead to scoring or UI integration before evidence and methodology are ready and approved.

## Scope protection
- No changes to site architecture or map library.
- No replacement of Leaflet.
- No recommender implementation in `weather.html` during the current evidence-research stage.
- No activity scores until methodology approval.
- No invented coordinates, access rights, safety conclusions, or missing physical parameters.
