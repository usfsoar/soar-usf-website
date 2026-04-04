# SOAR USF Website

<img width="1200" alt="SOAR USF site" src="https://github.com/user-attachments/assets/5b132a8d-a7a5-4cb8-b519-8e5f6ed02c2b" />

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://usfsoar.vercel.app/)

## Overview

The Society of Aeronautics and Rocketry (SOAR) website is a Next.js application used to present the student club's projects, events, membership info, and media. It uses the Next.js App Router, Tailwind and utility components to render pages and small API routes for project-specific endpoints.

This README documents the purpose of the repository's key files and folders so maintainers and contributors can quickly find where to make changes.

---

## Quick Start

Prerequisites: Node.js (18+ recommended), pnpm/yarn/npm.

Install and run in development:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Available npm scripts (from `package.json`):

- `dev`: starts Next.js in development mode (`next dev`)
- `build`: builds the app for production (`next build`)
- `start`: runs the built app (`next start`)
- `lint`: runs ESLint across the project
- `bullsconnect:auth`: runs a script to authenticate with BullsConnect and save session state (used for the daily member count sync workflow)
- `bullsconnect:sync`: runs a script to fetch the latest member count from BullsConnect and update `data/soar-member-count.json` (used by the daily sync workflow)

---

## Project structure and key files

Top-level files
- `package.json`: project metadata, dependencies and npm scripts.
- `next.config.mjs`: Next.js configuration — this project enables Turbopack root, configures image formats and device sizes, and sets `typescript.ignoreBuildErrors: true` (so TypeScript build errors won't block production builds).
- `tsconfig.json`: TypeScript compiler options (project-wide types/settings).
- `postcss.config.mjs`: PostCSS configuration used by Tailwind.
- `components.json`: (project-specific) configuration file used by the app for component-level data (if present).

Top-level folders
- `app/` — The Next.js App Router source. Key entries:
	- `app/layout.tsx` — global layout and wrappers (theme provider, header/footer injection)
	- `app/page.tsx` — the homepage entry component
	- `app/globals.css` — global styles used by the App Router
	- `app/about/page.tsx` — about page
	- `app/blogs/page.tsx` — blogs listing page
	- `app/current-projects/*` — pages for current projects (IREC, TORITO, certifications)
	- `app/past-projects/*` — pages for past projects (PAST NSL, Hybrid)
	- `app/positions/page.tsx` — officer positions
	- `app/shop/page.tsx` and `app/success/` — shop and checkout flow pages
	- `app/api/` — Next.js route handlers; subfolders:
		- `app/api/checkout/` — checkout API endpoints
		- `app/api/contact/` — contact form handler endpoints
		- `app/api/soar-members/` — membership-related APIs
		- `app/api/socials/discord/route.ts` — an example API route that forwards or handles Discord-related operations

- `components/` — React components used across pages. Key components:
	- `about.tsx` — About section component used on the About page
	- `blogs.tsx` — blogs list / teaser component
	- `contact.tsx` — contact form UI used on contact pages
	- `eboard-yearbook.tsx` — officer yearbook / roster component
	- `footer.tsx` — site footer
	- `hero.tsx` — homepage hero/banner
	- `irec.tsx` — IREC project overview component
	- `logo-motto.tsx` — brand logo and motto display
	- `multi-calendar.tsx` — combined calendar UI used to show events
	- `navbar.tsx` — the main navigation bar included in `layout.tsx`
	- `page-header.tsx` — page header used across pages for consistent title/subtitle
	- `sponsors.tsx` & `sponsorships.tsx` — sponsor listings and sponsorship information
	- `stats.tsx` — site or membership statistics visualization (charts/metrics)
	- `theme-provider.tsx` — theme context/provider for dark/light mode and persists selection
	- `torito.tsx`, `tra-certifications.tsx` — project/certification components

	UI primitives (under `components/ui/`):
	- `button.tsx` — shared button component with variants
	- `card.tsx` — generic card container
	- `input.tsx`, `label.tsx`, `textarea.tsx` — form primitives used by `contact` and other forms

- `data/` — JSON or JS data files used to seed pages (teams, events, sponsors, etc.). Use this to update static content.
- `lib/` — utility functions and helpers; notable file:
	- `lib/utils.ts` — shared helper functions used across pages/components
- `public/` — static assets (images, icons, downloads). Place images here and reference via `/` paths.
- `scripts/` — project-specific scripts (deploy helpers, asset generation, etc.).
- `styles/` — additional CSS files; `styles/globals.css` contains Tailwind and application-level CSS.

---

## Configuration highlights

- `next.config.mjs`:
	- `turbopack.root` set: a Turbopack optimization setting used by the Next.js toolchain.
	- `typescript.ignoreBuildErrors: true` — TypeScript errors do not fail the production build (use with care: fix types locally before merging).
	- `images` configuration: declares supported image formats (`avif`, `webp`) and device sizes used by Next/Image.

- `tailwind` and PostCSS: configured through `postcss.config.mjs` and Tailwind installed in `devDependencies`.

---

## Where to edit content

- Pages and routes: edit files under `app/` (each folder's `page.tsx` defines a route).
- Global layout & header/footer: `app/layout.tsx` and `components/navbar.tsx`, `components/footer.tsx`.
- Styles: Tailwind config and `styles/globals.css` or `app/globals.css`.
- Images and static assets: `public/`.
- Reusable UI: `components/` and `components/ui/`.

---

## Deployment

This project is Vercel-friendly and uses Next.js defaults. The repository includes a Vercel-deployed instance at the top badge — deploys run `npm run build` and `npm start` in production.

## Contributing

1. Fork the repo by typing:
```bash
git clone https://github.com/Dmish13/soar-usf-website.git
```
2. Create a feature branch.
```bash
git checkout -b feature/your-feature-name
```
3. Run `npm install` and `npm run dev`.
5. Open a PR with a clear description.


## Daily BullsConnect Sync with GitHub Actions

This repo includes a workflow at `.github/workflows/bullsconnect-sync.yml` that runs once per day and updates `data/soar-member-count.json`.

### 1) Create local auth session

Run once on your machine:

```bash
npm run bullsconnect:auth
```

After login, this creates `.auth/bullsconnect-storage.json`.

### 2) Add GitHub secret

The workflow restores this auth state from a base64 secret named `BULLSCONNECT_STORAGE_STATE_B64`.

PowerShell command to generate the secret value:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes(".auth/bullsconnect-storage.json"))
```

Copy the output and add it in:

`GitHub Repo -> Settings -> Secrets and variables -> Actions -> New repository secret`

### 3) Push and run

Push this branch, then run the workflow manually once from the Actions tab (`workflow_dispatch`) to verify it works.

### Notes

- Scheduled workflows run from the repository default branch only.
- The workflow commits changes only when `data/soar-member-count.json` actually changes.
- If SOAR login expires, refresh local auth and update `BULLSCONNECT_STORAGE_STATE_B64`.

- Dependencies and devDependencies are managed in `package.json`. Keep versions consistent and update carefully because Next 16 and React 19 are used here.
- The project intentionally sets TypeScript to ignore build-time errors; ensure types are corrected locally before merging.


