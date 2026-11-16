# RAILWORKERS Project Status

**Current version:** 0.1.0 — playable early-access foundation  
**Status:** Phase 1 foundation implemented; early Phase 2 gameplay systems implemented.  
**Last updated:** 2026-11-16

## Completed in this checkpoint

- [x] Created a new modular, dependency-free JavaScript project with a static production build.
- [x] Added responsive dark railway operations interface and mobile navigation.
- [x] Added dashboard, work orders, worksite, academy, departments, depots, fleet, staff, management, career, achievements, statistics and settings views.
- [x] Added 30 work order definitions across six fictional departments.
- [x] Added eight interactive work-order activity types.
- [x] Added work order completion reports, scoring, XP, credits and achievement checks.
- [x] Added career ranks and local employee profile editing.
- [x] Added ten academy courses with interactive knowledge checks and qualification records.
- [x] Added fictional depot, staff, fleet and weather catalogues.
- [x] Added local auto-save and save import/export.
- [x] Added GitHub Pages deployment workflow and project documentation.
- [x] Added eight automated core-system and catalogue tests.
- [x] Added a separate .NET Framework 4.0 x86 Windows Forms compatibility-test project.
- [x] Added GitHub Actions workflow to compile and publish the Windows test EXE artifact.

## Files created

- `index.html`, `package.json`, `vite.config.js`, `README.md`
- `src/main.js`
- `src/core/store.js`, `src/core/engine.js`
- `src/data/content.js`
- `src/ui/styles.css`
- `public/assets/railworkers-mark.svg`, `public/manifest.webmanifest`, `public/sw.js`
- `tests/core.test.js`
- `.github/workflows/pages.yml`, `.github/workflows/windows7-test.yml`
- `windows7/RailWorkersCompatibility/RailWorkersCompatibility.csproj`
- `windows7/RailWorkersCompatibility/Program.cs`
- `windows7/RailWorkersCompatibility/CompatibilityForm.cs`
- `windows7/README-WINDOWS7.txt`

## Tests performed

- `npm ci` completed successfully with no third-party dependencies.
- `npm test`: 12 tests passed, 0 failed.
- `npm run build`: passed; static production output created in `dist/`.
- Local HTTP smoke test: `/` returned HTTP 200 and served `index.html`.
- Build and test commands are `npm test` and `npm run build`.
- Actual test/build results must be recorded after running them in an environment with dependencies installed.
- Windows executable compilation and Windows 7 runtime compatibility have not yet been verified in this Linux build environment.

## Known issues / remaining work

- Add deeper custom 2D scenes and original sprite/animation assets.
- Expand work-order mini-games with more scenario-specific rules and objective variety.
- Add incident case management, recruitment, operations scheduling and campaign progression.
- Add dedicated multiplayer/Discord status pages that clearly state online services are not configured.
- Add stronger import validation, save migration and browser storage failure handling.
- Add accessibility review and device testing on real iPhone/Android browsers.
- Run Windows CI, download the generated EXE and test on Windows 7 SP1.
- Connect repository and publish through GitHub Pages after repository access is available.

## Next exact task

Run `npm ci`, `npm test`, and `npm run build`; fix any errors. Then push this project to the `mrducktive-ux/RailWorkers` repository on a development branch and run both GitHub Actions workflows.
