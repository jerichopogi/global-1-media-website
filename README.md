# Global One Media — Website

Modern, multi-page marketing site for Global One Media (broadcast, digital &
streaming advertising). Built with **Vite + React + TypeScript + Tailwind CSS v4
+ React Router**.

## Pages

`/` Home · `/about` · `/solutions` · `/stations` · `/careers` · `/contact`
(routes defined in `src/App.tsx`, pages in `src/pages/`).

## Quick start

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Editing content (no React knowledge needed)

All copy lives in `src/data/` — change one file and the site updates:

| File | Controls |
|------|----------|
| `src/data/site.ts` | Name, tagline, contact details, socials, app links, footer |
| `src/data/nav.ts` | Top navigation links |
| `src/data/stations.ts` | Station directory (add/edit a station here) |
| `src/data/solutions.ts` | Advertising solutions cards |
| `src/data/leadership.ts` | Executive bios (add `photo: "/name.jpg"` when headshots arrive) |
| `src/data/careers.ts` | Careers intro, open positions, locations |
| `src/data/company.ts` | About copy, headline stats, partner ticker |
| `src/data/nav.ts` | Top-nav routes |
| `src/data/images.ts` | All stock imagery (swap a `photo-…` id to change an image) |

## Structure

```
public/logos/             # official Global One Media SVGs (icon-main.svg)
src/
├── data/                 # ← all editable content (incl. images.ts)
├── pages/                # one file per route (HomePage, AboutPage, …)
├── components/
│   ├── brand/            # Logo wordmark (uses the official globe SVG as the "O")
│   ├── layout/           # Navbar, Footer, ScrollToTop
│   ├── ui/               # Button, Section, PageHero, Reveal primitives
│   ├── icons/            # Social + app-store icons
│   └── sections/         # Hero, About, Solutions, Stations, CTA, teasers, …
├── hooks/                # useScrolled
├── App.tsx               # routes + app shell (nav/footer)
└── index.css             # Tailwind theme tokens (brand palette)
```

## Logos

The official brand SVGs live in `public/logos/`. `icon-main.svg` (the color
globe) is used in the navbar, footer, hero, and as the favicon. To use a
different official variant, drop it in `public/logos/` and update the `src` in
`src/components/brand/Logo.tsx` (and `Hero.tsx`).

## Brand palette

Preserved from the original site (`global1media-content.md`) and defined as
Tailwind theme tokens in `src/index.css` (`bg`, `surface`, `brand`,
`brand-bright`, `accent`, `warm`, `muted`, `dim`, ...).

## Assets to drop in later

- Executive headshots → add to `/public`, reference via `photo` in `leadership.ts`
- Real client logos → replace the `partners` list in `company.ts`
- Station logos → can be added to each station card in `Stations.tsx`

## Notes

- The contact and newsletter forms are **client-side only** in this build.
  Wire them to a handler (Formspree, Netlify Forms, or a custom API) to deliver
  submissions — see the TODO comments in `Contact.tsx` / `Newsletter.tsx`.
- The logo is rebuilt as scalable SVG in `components/brand/GlobeMark.tsx`.
  Drop in an official SVG there if you'd rather use the source file.
