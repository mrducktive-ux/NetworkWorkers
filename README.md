# RAILWORKERS

**A fictional British-inspired railway infrastructure career simulator.**

Current package status: **0.1.0 — playable early-access foundation**, not a completed 1.0 launch. The game is an independent fictional project and is not affiliated with Network Rail or any railway operator. All maintenance activities are fictionalised awareness/gameplay exercises, not real-world railway operating or maintenance instructions.

## Included in this build

- Responsive browser game interface with desktop and mobile navigation.
- Local employee profile, career ranks, XP, credits and performance.
- 30 original work orders across six departments.
- Ten academy courses with interactive knowledge checks and local qualifications.
- Multiple playable assignment mechanics: evidence selection, asset matching, workflow sequencing, logic questions, quizzes, comparison, evidence triage and resource planning.
- Completion reports, quality scoring, rewards and achievement unlocks.
- Fictional depot, fleet, staff, weather, worksite and management views.
- Local automatic saving, JSON export/import and reset controls.
- GitHub Pages build/deploy workflow.
- Separate Windows 7 compatibility test utility source and artifact workflow.
- Automated core-system tests.

## Run locally

Requirements: Node.js 18 or newer. No third-party runtime dependencies are required.

```bash
npm run build
npm run serve
```

Open the local preview URL printed by the server. To run tests and create a production build:

```bash
npm test
npm run build
npm run serve
```

The GitHub Pages workflow is configured for `https://mrducktive-ux.github.io/RailWorkers/` and expects the repository's deployment branch to be `main`. If the repository uses a different default branch, change `.github/workflows/pages.yml` accordingly.

## Save data

Career data is saved in browser local storage under `railworkers-save-v1`. Use Settings → Export career save to create a portable JSON backup. Import validates the save format before replacing the current in-memory career.

## Windows 7 compatibility test

See [`windows7/README-WINDOWS7.txt`](windows7/README-WINDOWS7.txt). The small WinForms diagnostic targets .NET Framework 4.0 and x86. GitHub Actions compiles it on a Windows runner and uploads it as an artifact. A modern CI build does **not** prove Windows 7 compatibility; test the executable on Windows 7 SP1 or a verified VM before making that claim. This utility is not the full game.

## Architecture

- `src/data/content.js` — departments, 30 work orders, courses, staff, depots, fleet and achievement catalogue.
- `src/core/store.js` — career state, local persistence, save import/export, rank and reward calculations.
- `src/core/engine.js` — shared simulation and scoring helpers.
- `src/systems/` — weather, progression, notifications and reporting systems.
- `src/minigames/` — activity mechanic catalogue.
- `src/scenes/` — illustrated location/scene registry.
- `src/validation/` — save-envelope validation.
- `src/main.js` — page rendering, interactions and mini-game orchestration.
- `src/ui/styles.css` — responsive visual system and illustrated interface treatments.
- `tests/` — Node test suite.
- `windows7/` — separate .NET Framework compatibility utility.

## Known limitations / next development phase

- Online multiplayer, account linking, cloud saves and Discord integration are not configured; there is no fake online mode.
- The browser game is currently a responsive web release, not a native Windows desktop game.
- The 2D worksite artwork is an initial illustrated scene system; a full animated sprite library and deeper department-specific scenes remain planned.
- The current game is a substantial playable foundation, but more scenario variety, persistence hardening, accessibility testing and release QA are required before version 1.0.0.
- The Windows 7 EXE is produced by CI; no prebuilt binary is included in this source package.
