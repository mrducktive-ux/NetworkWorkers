# Technical Architecture

RAILWORKERS is a dependency-free ES-module web application. It is designed to be served as static files and hosted from the `/RailWorkers/` GitHub Pages project path.

## Runtime layers

- Presentation: `index.html` and `src/ui/styles.css`.
- Application orchestration: `src/main.js`.
- Content: `src/data/content.js`.
- Core career state: `src/core/store.js`.
- Shared engine helpers: `src/core/engine.js`.
- Domain systems: `src/systems/`.
- Interactive activity definitions: `src/minigames/`.
- Illustrated location registry: `src/scenes/`.
- Save validation: `src/validation/`.
- Windows compatibility diagnostic: `windows7/`.

## Build and test

`npm ci` installs the empty dependency graph reproducibly. `npm test` runs Node's built-in test runner. `npm run build` copies the static runtime into `dist/`. `npm run serve` serves the production folder on port 4173.

## Deployment

`.github/workflows/pages.yml` builds and deploys `dist/` using GitHub Pages Actions. The configured public project path is `/RailWorkers/`.

## Future extension points

Cloud persistence should be implemented behind a repository interface and must never place service-role credentials in browser code. Multiplayer should be implemented as a real server-authoritative service; until configured, the game remains offline-first. Discord bot credentials must remain server-side.
