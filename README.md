# Railway Infrastructure Simulator

A sizeable, fan-made, fictional 2D railway infrastructure career simulator designed to run as a static website on GitHub Pages.

> **Important:** This is not affiliated with, endorsed by, or representative of Network Rail. All scenarios, employee records, departments, roles, work processes and training are fictional. The game is for entertainment and general railway-interest learning only. It does not provide real railway safety training, technical work instructions, qualifications or permission to work on railway infrastructure.

## What's included in this build

- Responsive operations-centre dashboard
- Employee profile, generated employee ID, department and career level
- Seven fictional departments
- Work-order library with multiple scenario types
- Illustrated 2D worksite scene with drag-and-drop and tap-to-place interactions
- Job sequence tracking, submission, XP, credits and performance score
- Training academy with interactive knowledge assessments
- Game-only course records
- Fleet and equipment register including a seasonal RHTT planning scenario
- Career progression and employee record
- Management centre with a fair fictional review framework
- Work completion audit trail
- Local save using browser localStorage
- JSON save export and reset
- Mobile layout and touch interaction
- Discord and online-play roadmap

## Run locally

1. Download and extract the ZIP.
2. Open `index.html` in a modern browser.
3. Start with **Work orders**, select a task, then drag the three illustrated items into the highlighted zone.
4. Complete courses in **Training academy**.
5. Your progress saves automatically in that browser.

No build tools or package installation are required for the starter version.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `railway-infrastructure-simulator`.
2. Upload the contents of this folder to the repository root. `index.html` must be in the root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The Pages panel will show the website address.

The project uses relative paths, so it can run from a GitHub Pages project URL.

## File structure

```text
railway-infrastructure-simulator/
├── index.html
├── README.md
├── LICENSE
├── .nojekyll
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   └── app.js
└── docs/
    ├── ROADMAP.md
    ├── BACKEND_PLAN.md
    └── GAME_DESIGN.md
```

## Save data

The starter version stores progress in local browser storage. This means:
- The save belongs to that browser on that device.
- It is not shared between devices or users.
- Clearing browser website data can remove it.
- Use Settings → Export save to download a JSON backup.

## Discord and multiplayer

The Discord page is currently a roadmap, not a live connection. Real Discord OAuth, bot role management, shared employee accounts and multiplayer need a secure backend. Do not put Supabase service-role keys, Discord bot tokens, OAuth client secrets or other private credentials in frontend JavaScript or a public GitHub repository.

See `docs/BACKEND_PLAN.md` for the next-stage architecture.

## Development roadmap

See `docs/ROADMAP.md`. This is a playable first foundation, not a finished production-scale online game. Future work should add richer illustrated scenes, more job-specific interaction types, cloud accounts, server-validated multiplayer, moderation, admin tools and secure Discord integration.
