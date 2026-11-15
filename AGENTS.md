# PH Project Instructions

This is the operational entry point for contributors and AI agents.

## Mandatory context loading
Before any change, read from current GitHub `main`:
1. `AGENTS.md`
2. `docs/PROJECT_DECISIONS.md`
3. `docs/PROJECT_STATUS.md`
4. `docs/CHAT_START.md`
5. The current source files and dependencies relevant to the task.

Check the current branch HEAD and relevant file versions. GitHub is the source of truth. Never base edits on stale local copies or chat summaries. If context files conflict or are stale, reconcile them before implementation.

## Repository-first continuity
The repository is the durable project memory; chat history is not authoritative.
- `docs/PROJECT_DECISIONS.md`: approved durable decisions, constraints, architecture rules, data policies, and rationale.
- `docs/PROJECT_STATUS.md`: current verified state, latest relevant commit, completed work, open issues, blockers, and exact next step.
- `docs/CHAT_START.md`: one copy-paste prompt for a new chat.
Update these records when a material decision is approved, a milestone is completed, a blocker/status changes, or the next work package changes. Do not store full chat transcripts, transient reasoning, or speculative proposals as approved decisions.

## Project purpose
PH is a practical information and geographic portal for tourists and residents in the Philippines. Current focus: Boracay; broader scope includes Mactan, Cebu, and other regions. It is an information/geographic tool, not merely a travel blog.

Repository: `Guyabano-kun/PH`
Branch: `main`
GitHub Pages: https://guyabano-kun.github.io/PH/

## Architecture constraints
- Static GitHub Pages project using HTML, CSS, JavaScript, and JSON.
- Leaflet remains the primary map library.
- Preserve existing Cloudflare Worker integrations where applicable.
- Do not replace the stack, restructure directories, or introduce duplicate mechanisms without demonstrated critical need.
- Preserve backward compatibility and existing functionality.
- Make the smallest change that satisfies the approved requirement.
- Do not create auxiliary documents unless explicitly requested, except these durable project-control files.

## Geography and evidence integrity
Never invent, eyeball, or transfer coordinates from a nearby or similarly named feature.
For each important geographic point distinguish object identity, point type (beach centroid/representative point, entrance, facility, landmark, monitoring station, etc.), coordinates, primary source, independent checks, accuracy/tolerance, confidence, contradictions, and verification status.
Do not conflate beach coordinates with pier, monitoring station, parking, resort, hotel, or transport-stop coordinates. Do not infer legal public access from proximity or a mapped path. Distinguish public beach access, actual route, and permission/right-of-way through private property.
When sources conflict, preserve the conflict and investigate identity; do not automatically select one coordinate.
Prefer Philippine government/municipal sources (NAMRIA, DENR, EMB, DOT, LGU), then official operators, OpenStreetMap/cartographic data, reputable guides, and user-generated sources. Record source and checked date for material facts.
Unknown data must remain unknown. Missing evidence must not be converted into neutral or favorable scores. Historical water-quality results are not current safety advice.

## Development and verification protocol
1. Define outcome and acceptance criteria.
2. Read current GitHub `main` sources and dependencies.
3. Inspect existing implementation and risks.
4. Make the minimum necessary change.
5. Validate syntax, JSON, IDs, source references, links, paths, and compatibility as applicable.
6. Inspect the diff and confirm unrelated functionality was not removed or changed.
7. Check desktop/mobile behavior where UI is affected.
8. Verify GitHub Pages deployment when accessible.
Report precisely as DONE, PASS, FAIL, BLOCKED, or NOT VERIFIED. A successful commit is not proof of correct runtime behavior or deployment. Never claim a check that was not performed.
If a critical error makes further work meaningless, stop and resolve it. Otherwise preserve the agreed architecture and sequence.

## Chat efficiency
Keep progress reports concise. Do not repeatedly restate project history or rules. Use repository records as canonical context and update them as the project evolves. On a new chat, follow `docs/CHAT_START.md` and continue from `docs/PROJECT_STATUS.md`.


## Explicit user authorization for repository operations
The repository owner has explicitly authorized ChatGPT to work directly in this repository without requesting confirmation for each ordinary project change. This standing authorization includes:
- Read current files and repository history from GitHub.
- Edit existing files and create or remove files when required by an approved project task.
- Commit and push changes directly to the `main` branch.
- Trigger and verify GitHub Pages publication.
- Run relevant code/data checks and inspect diffs.

Do not ask the user to re-approve routine edits, commits, pushes, or publication. This authorization does not bypass GitHub authentication, branch protection, platform/tool availability, or safety requirements. If an operation is technically unavailable or rejected, report the exact blocker; do not claim the operation was completed. Continue using the least disruptive valid route and preserve the mandatory verification protocol above.
