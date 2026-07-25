# santhosh_vemuluri_portfolio

[![Build](https://github.com/santhoshvemuluri/santhosh_vemuluri_portfolio/actions/workflows/build.yml/badge.svg)](https://github.com/santhoshvemuluri/santhosh_vemuluri_portfolio/actions/workflows/build.yml)

This repository now contains a React + Vite portfolio site scaffold based on the provided portfolio.

Preview locally:

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 3001
```

Build locally:

```bash
npm run build
```

One-click deployment:

- Vercel: import the repo at https://vercel.com/new and use the default settings.
- Netlify: connect the repo at https://app.netlify.com/start and configure the build command as `npm run build` and publish directory as `dist`.

Deployment config files:
- `vercel.json`
- `netlify.toml`

Project files:
- `package.json` — project manifest and build scripts
- `vite.config.js` — Vite configuration
- `src/main.jsx` — React entry point
- `src/App.jsx` — portfolio app component
- `src/styles.css` — styles
- `src/Certifications.jsx` — certifications section
- `src_projects.json` — GitHub project data
- `.github/workflows/build.yml` — GitHub Actions build workflow

The site uses your resume data (extracted from the PDF you provided). Tell me any edits you want (display name, projects to remove/add, wording).

---

### Deploy buttons

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/santhoshvemuluri/santhosh_vemuluri_portfolio)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/santhoshvemuluri/santhosh_vemuluri_portfolio)
