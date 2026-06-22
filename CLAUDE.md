# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Veteris** — a Spanish-language (`es-MX`) marketing landing page for a B2B SaaS that manages veterinary clinics. The live site is a fully **static** Astro build; there are no backend calls from the page.

## Active migration: React → Astro

The repo is mid-migration on branch `feature/migration-astro`. The old Create React App / React 19 frontend has been deleted (still staged as `D` in git) and replaced by Astro components under `frontend/src/`. Two docs describe the **pre-migration** stack and are now **stale** — do not trust them for current architecture:

- `frontend/README.md` — default CRA readme.
- `memory/PRD.md` — describes the old React + Framer Motion + shadcn/ui structure.

Everything `.astro` is current; anything referencing `.jsx`, CRA, craco, Framer Motion, or shadcn is gone.

## Commands

All frontend work happens inside `frontend/`:

```bash
cd frontend
npm install
npm run dev      # astro dev on 0.0.0.0:3000
npm run build    # astro build → frontend/dist/ (static)
npm run preview  # serve the production build on :3000
```

There is **no lint, test, or typecheck script** configured in the frontend. `astro build` is the only validation gate.

## Frontend architecture (`frontend/src/`)

Single-page site, no router, no client framework / no React islands.

- **`pages/index.astro`** — the only page; imports and orders every section component.
- **`layouts/Base.astro`** — HTML shell. Injects `SEO` + two `JsonLD` blocks (Organization + SoftwareApplication schema), and contains the **global scroll-reveal observer**: a single `IntersectionObserver` that adds `.is-visible` to any `[data-reveal]` element (gated on `prefers-reduced-motion`).
- **`components/sections/`** — the page sections (`Hero`, `Features`, `Pricing`, `FAQ`, etc.). This is where most editing happens.
- **`components/icons/`** — hand-rolled inline-SVG components (one per icon, replaces `lucide-react`). Convention: `const { class: cls = "h-5 w-5" } = Astro.props` and apply `cls` to the `<svg>`. Add new icons here rather than pulling in an icon library.
- **`components/seo/`** — `SEO.astro` (title/description/OG/Twitter), `JsonLD.astro` (renders a schema object via `set:html`).
- **`components/animations/`** — `ScrollProgress`, `HeroDashboard`.
- **`components/ui/`** — `Logo.astro`.
- **`lib/`** — plain JS helpers, imported **inside client `<script>` blocks** in `.astro` files: `cta.js` (`ctaToast`), `countUp.js` (`initCountUp`), `utils.js` (`cn` = filter+join classnames).
- **`styles/global.css`** — Tailwind layers + Google Fonts import + design-token-based `@layer components` classes and `[data-reveal]` animation variants.

## Conventions (follow these when editing)

- **Spanish UI.** All visible copy is Spanish. Keep it Spanish.
- **Design tokens, not raw colors.** `tailwind.config.js` defines the palette: `brand` (sage green), `accent` (terracotta), `ink`/`ink-secondary`/`ink-tertiary` (text), `page`/`surface`/`muted`/`line`. Use these semantic names. Reusable component classes live in `global.css`: `.btn-primary` / `.btn-secondary` / `.btn-brand`, `.container-base` / `.container-narrow` / `.container-wide`, `.eyebrow`, `.bg-gradient-hero` / `-primary` / `-accent`. Tailwind base styles are **off** (`applyBaseStyles: false`) — base resets come from `global.css`.
- **Scroll animations are declarative.** To animate an element on scroll, add `data-reveal="fade-up"` (variants: `zoom-in`, `zoom-out`, `blur-in`, `slide-left`, `slide-right`, `tilt`, `rise`) and optional `data-reveal-delay="0.2"`. The Base.astro observer wires it up — no per-component JS needed.
- **Interactivity is vanilla.** Use inline `<script>` blocks or `onclick` attributes (see the mobile menu in `sections/Header.astro`). No state libraries, no hydration directives.
- **CTAs use the toast helper.** Mark a button with `data-cta-kind="trial|demo|sales|login"` and call `ctaToast(el.getAttribute('data-cta-kind'))` from a component `<script>` (pattern in `Hero`, `Pricing`, `FinalCTA`).

## Backend (`backend/`) — scaffold, not wired to the landing

`backend/server.py` is a FastAPI + MongoDB (`motor`) boilerplate from the original platform base image: a `StatusCheck` CRUD under the `/api` prefix. The static landing **does not call it**. It needs `MONGO_URL`, `DB_NAME`, and optional `CORS_ORIGINS` in `backend/.env`. Run with `uvicorn server:app` from `backend/`. Treat it as dormant unless a task explicitly involves lead capture / an API.

## Platform notes

This project was scaffolded by the "emergent" platform (`.emergent/emergent.yml`). `test_result.md` is that platform's agent-coordination file — its top "Testing Protocol" block is marked DO NOT EDIT; leave it alone.
