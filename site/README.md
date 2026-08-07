# Isadora & Associates — Website

Next.js 16 + Tailwind CSS v4 + Framer Motion. Built from the firm's 2026 Canva
company profile.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

**Almost all text on the site lives in one file: [`src/lib/data.ts`](src/lib/data.ts).**
Team bios, service descriptions, core values, contact details, achievements,
client names — it's all there as plain objects/arrays. Edit the text there;
you don't need to touch any component/JSX code for a copy change.

Examples:
- Add/remove a team member → edit the `team` array in `data.ts`.
- Change a service's description or key services list → edit the matching
  entry in the `services` array.
- Update the phone number or address → edit `site.phone` / `site.address`.

## Editing images

Images live in `public/images/`, organized by type:

```
public/images/
  branding/    logo
  team/        headshots, managing partner photo, group photo
  backgrounds/ practice-area photography
  logos/       client grid, achievement badges, industry engagement
```

To swap a photo, replace the file at the same path (same filename) and
refresh — no code changes needed, since `data.ts` references these paths.
If you add a genuinely new image, add its path to the relevant entry in
`data.ts` and drop the file in the matching folder.

A full-resolution copy of every source image (as extracted from the original
Canva PDF) is kept one level up, in `../assets/`, organized the same way —
useful if you ever need a higher-res crop than what's in `public/images/`.

## Design system

The brand's colors, type, and component patterns are documented in
`../design/design-system.html` (open directly in a browser) and
`../design/brand-book-a4.pdf` (print-ready one-pager). Both are generated
from the same source facts as this site — colors and fonts are defined once,
in `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx` (font
imports), so the site and the design docs should never drift apart.

Brand tokens (Tailwind utilities, so `bg-gold`, `text-ink`, `font-serif`, etc.
work anywhere in the codebase):

| Token | Value | Use |
|---|---|---|
| `ink` | `#000000` | panels, headings, footer |
| `gold` | `#E2BD48` | accents, dividers, CTAs |
| `gold-deep` / `gold-light` | `#9B6606` / `#FEE195` | gradient ends |
| `paper` | `#FAF9F6` | alternating section background |
| `font-display` | Poppins | all UI/body/heading text |
| `font-serif` | Playfair Display | logo wordmark + large ceremonial numerals only |

## Structure

- `src/app/page.tsx` — assembles all sections in order.
- `src/components/` — one component per section (`Hero`, `Team`,
  `Services`, etc.), plus shared primitives `SectionHeading` and `Reveal`
  (the scroll-in-view animation wrapper used everywhere).
- `src/lib/data.ts` — all content, see above.

## Deploying

This is a stock Next.js App Router project — push it to a Git repo and
import it on [Vercel](https://vercel.com/new) with zero config. No
environment variables are required.
