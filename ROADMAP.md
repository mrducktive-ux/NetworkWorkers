# Development roadmap

## Phase 1 — Playable GitHub Pages foundation (included)
- Responsive operations UI
- Local employee profile and save
- Work order catalogue
- Drag-and-drop worksite interaction
- Academy quizzes and course records
- Department, fleet, career, management and report pages
- Exportable save backup

## Phase 2 — Richer 2D game scenes
- Replace the starter illustrated scene with hand-authored SVG/Canvas/Phaser scenes
- Create unique scenes for track, signalling, OLE, drainage, telecoms and depot jobs
- Add animated workers, weather, day/night, equipment and camera transitions
- Add job-specific puzzles rather than one generic placement task
- Add touch-friendly drag handles and accessibility alternatives

## Phase 3 — Career simulation
- More employee grades and progression requirements
- Shift rosters, depot allocation and team assignment
- Supervisor review workflows and documented improvement plans
- Job quality dimensions: preparation, accuracy, reporting and teamwork
- Additional work order generation and seasonal events

## Phase 4 — Online accounts and cloud saves
- Supabase Auth
- Postgres employee, work order, course and record tables
- Row Level Security policies
- Server-side validation for all XP, credits, job completion and rank changes
- Realtime crew presence and shared work order state

## Phase 5 — Discord
- OAuth sign-in via a secure server callback
- Link game profile to Discord ID
- Bot hosted outside GitHub Pages
- Role sync based on server-verified game records
- Shift announcements and moderation tools

## Phase 6 — Multiplayer operations
- Crew rooms and co-op jobs
- Shared worksite state
- Server-authoritative job progress
- Supervisor and dispatcher roles
- Abuse prevention, audit logs and report tools

## Definition of done for a production release
- All gameplay actions validated server-side
- No secrets in frontend source
- Tested on iPhone Safari and desktop browsers
- Keyboard and touch accessibility
- Backups, account recovery and moderation procedures
- Clear privacy notice and community rules
- All scenarios reviewed to ensure they remain fictional and do not function as real-world railway maintenance instructions
