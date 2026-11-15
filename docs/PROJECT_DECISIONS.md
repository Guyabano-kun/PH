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
