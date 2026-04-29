# guayaba.run landing

Static landing page for guayaba.run. Built with **Next.js 15 (App Router)**, React 19, TypeScript and Tailwind CSS 3. Exported to a fully static `out/` directory and deployed to AWS S3.

## Stack

- [Next.js 15](https://nextjs.org/) with App Router and `output: 'export'` (fully static, no Node runtime in production)
- React 19
- TypeScript
- Tailwind CSS 3
- Lenis (smooth scroll)
- Swiper, Headless UI, react-icons, lucide-react

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & export

```bash
npm run build        # outputs static site to ./out
```

The `out/` directory contains a fully self-contained static site. Every route (`/`, `/terms/`, `/privacy-policy/`) is pre-rendered as a standalone HTML file with its own `<title>`, `<meta description>`, canonical URL, and Open Graph / Twitter Card tags — which is what makes social previews and crawlers happy.

## Project layout

```
app/
  layout.tsx            # Root layout: <head>, fonts, gtag, JSON-LD, providers
  providers.tsx         # Client-side wrapper: Lenis + WebGL noise
  globals.css           # Tailwind base + global styles + animations
  page.tsx              # Home (/)
  terms/page.tsx        # /terms (own metadata export)
  privacy-policy/page.tsx
components/
  Common/               # Button, TopNav, PromoModal, Accordion, ...
  MainBlocks/           # Jumbotron, Pains, Agents, Pricing, FAQ, Footer, ...
  Separators/           # Marquee, glitch separators
public/
  images/               # All static assets (referenced as /images/...)
  sitemap.xml
  robots.txt
  caption-v1.jpg        # OG image
```

### Server vs Client components

Pages (`app/**/page.tsx`) and the layout are React Server Components — that's what gives us proper per-route metadata and pre-rendered HTML.

Components that use hooks, browser APIs, or portals are marked with `"use client"`:
- `WebGLNoise`, `Marquee`, `MetaBalls`, `PromoModal`, `TopNav`, `Accordion`, `Button`, `Jumbotron`, `AgentIdentity`, `AgentPayments`, `ModelPrivacy`, `CustomCarousel`, `CustomTabs`, `PeopleSlider`.

The rest (Pains, Agents, Pricing, FAQ, Footer, ClaimBlock, ClaimBlueBlock, PrivacyClaim, PrivacyPains, OpenSource, glitch separators, PaletteBlock) are server components and ship zero JS for themselves.

## Adding a new page

1. Create `app/<slug>/page.tsx`.
2. Export `metadata` from it (title, description, alternates.canonical, openGraph, twitter).
3. Add the URL to `public/sitemap.xml`.

## Deployment

Deployed to AWS S3 as a static website via the GitHub Actions workflow `.github/workflows/release-version.yaml`. The workflow runs `npm run build` and then `aws s3 sync ./out s3://$AWS_BUCKET --delete`.

CI build verification runs on every push via `.github/workflows/check-build.yaml`.

### S3 / CloudFront tips

- Set the S3 "error document" to `404.html` (Next exports a static 404).
- Cache headers: serve `index.html` files with `Cache-Control: no-cache` and assets in `_next/static/` with `Cache-Control: public, max-age=31536000, immutable`. Vanilla `aws s3 sync` doesn't set these — use `--cache-control` flags or a CloudFront response policy.
