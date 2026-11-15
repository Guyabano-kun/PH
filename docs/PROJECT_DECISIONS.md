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
- Integrate into existing `weather.html` and existing weather/map experience; do not create a separate application.
- Five activities: `swimming`, `beach_relaxation`, `snorkeling`, `kitesurfing_windsurfing`, `boat_excursions`.
- Three query modes: month + activity → best beach; month + beach → suitable activities; activity + beach → best months.
- Default: top 5 beaches for current month. “More details” exposes all 13 rankings, then methodology, criteria, weights, sources, and confidence.
- Planned model: 12 months × 5 activities × 13 selected beaches.
- Factors include waves, wind, tide, rain, currents, geography, underwater conditions, access, and safety; weights depend on activity.
- Missing evidence must reduce confidence or prevent scoring, not improve a score by default.
- Do not assign scores or publish a monthly matrix until methodology, evidence sufficiency, unknown-data treatment, weights, and confidence rules have been reviewed and approved.
- Do not confuse long-term seasonal suitability with date-specific sea/bathing conditions.

## Change control
- Follow the agreed sequence and architecture for each work package.
- Do not silently expand scope or change approved decisions.
- Change a durable decision only with explicit user approval or when a critical factual/technical error requires correction; record reason and date.
