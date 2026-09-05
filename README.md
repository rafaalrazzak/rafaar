# Portfolio - Rafa Al Razzak

Static personal site built with Astro and Tailwind CSS v4. The project is intentionally small: no React runtime, no UI component dependency, and no client-side router.

## Stack

- Astro 7 static output
- Tailwind CSS v4 through the Vite plugin
- TypeScript for data and config
- Local Astro SVG icons
- Oxlint and Oxfmt
- Cloudflare Pages via `wrangler.toml`

## Commands

```bash
bun install
bun run dev
bun run format
bun run lint
bun run build
bun run preview
```

## Cloudflare Pages

The project builds to `dist`, matching `wrangler.toml`.

```bash
bun run deploy
```

Cloudflare Pages dashboard settings:

- Build command: `bun run build`
- Build output directory: `dist`
- Node version: `22.12.0` or newer

## Structure

```text
src/
  components/   Header, Section, Icon, ThemeToggle
  data/         resume-data.ts, social-media.ts, site-metadata.ts
  layouts/      Layout.astro
  pages/        index.astro
  styles/       globals.css
```

The site is a single page. `/cv` and `/links` used to be separate routes that
repeated the same content; they are now sections of `/`, with 301s in
`public/_redirects`. The CV is the page itself — the print stylesheet in
`globals.css` strips the chrome, so the header print button (or Cmd/Ctrl+P)
produces an A4 resume.

## Content

All content lives in `src/data/resume-data.ts` — intro, work, projects,
education, stack and external links. Site-wide meta is in
`src/data/site-metadata.ts`.

## GitHub activity

The GitHub section shows contributions and active days rather than repo, star or
follower counts: contribution totals include private and organisation work, which
is where most of the activity is, while the public counts do not reflect it.

GitHub's calendar page sends no `Access-Control-Allow-Origin`, so the browser
cannot read it directly. Two paths share one parser in `src/lib/github.ts`:

- **Build time** renders the section, so it works with JavaScript disabled.
- **`functions/api/contributions.ts`**, a Cloudflare Pages Function, proxies the
  same page from our own origin, edge-cached for an hour. The page fetches it on
  load and repaints the numbers and calendar.

Either failing leaves the other's values in place, so neither a GitHub outage nor
a cold Function can break the page or the build.

## Fonts

Manrope and Source Serif 4 are self-hosted from `public/fonts` rather than pulled
from Google, so the critical path carries no third-party request and the CSP does
not have to allow `fonts.googleapis.com` or `fonts.gstatic.com`. Both are OFL
licensed, which permits redistribution.

`src/styles/fonts.css` holds the `@font-face` rules, generated from the Google CSS
so the `unicode-range` values are exact - `latin-ext` only downloads if a character
needs it. Manrope carries 400-600 as a variable range; Source Serif is pinned to
600, the only weight the page uses, which takes it from 119 KB to 50 KB while
keeping its optical-size axis. The two latin faces are preloaded in the head.

## Brand assets

`public/favicon.svg` carries the RAF mark and swaps its plate and stroke colours
via `prefers-color-scheme`, so it inverts with the viewer's theme. Its stroke is
heavier than the source artwork (190 vs 90) purely so the strokes still separate
at 16px — the geometry is untouched.

`favicon.ico` (16/32/48) and `apple-touch-icon.png` are rasterised from that same
SVG, and `og.png` is the 1200x630 social card. All three are generated, not
hand-drawn: regenerating them needs an SVG rasteriser (`@resvg/resvg-js`) and the
Manrope / Source Serif 4 files, neither of which is kept as a project dependency.
