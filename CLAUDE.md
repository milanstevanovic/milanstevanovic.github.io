# CLAUDE.md

Personal and company site for Milan Stevanović at https://milan.bio.
Astro 7, static output, Tailwind 4, hosted on GitHub Pages. Milan is the only editor.

## Commands
- `npm run dev`: local preview at http://localhost:4321
- `npm run build`: build to `dist/`
- `npx astro check`: type and content checks
- `npm run check:urls`: confirms every URL in the contract exists in `dist/`

## Rules
- Never change an existing URL. Post URLs are `/posts/<file name>/`, so never rename a file in `src/content/posts/`.
- All page URLs end with a slash.
- Do not rewrite Milan's copy unless he asks. Fix structure, not wording.
- One H1 per page, taken from the front matter `title`. Body headings start at `##`.
- Images go in `src/assets/img/` and are referenced with relative paths. Nothing goes in `public/` except `CNAME`, `robots.txt` and favicons.
- Site-wide text (name, role line, navigation, social links, footer) lives in `src/site.ts`.
- Colours, fonts and spacing live in `src/styles/global.css` as tokens.
- No client JavaScript unless Milan asks for it.
- No analytics, no cookies.
- Do not touch DNS, `public/CNAME` or the Formspree form action.
- Check Astro APIs against the docs before using them. Use `npx astro add` for integrations.

## Content
- New case study: add `src/content/posts/<name>.md` with `title`, `description`, `date`, `cover.image`, `cover.alt`.
- Pages: `src/content/pages/services.md`, `cv.md`, `contact.md`.

## Deploy
- Push to `main` deploys through `.github/workflows/deploy.yml`.
- Small edits go straight to `main`. Larger changes go on a branch with a pull request.
- Run `npm run build` and `npm run check:urls` before every push.

## Open items
- Get a proper email address on a company domain. Until then the site uses milan.stevanovic.nl@gmail.com (in `src/site.ts`, `src/content/pages/contact.md` and `cv.md`).
- Pick a proper new company name. "Milan Ventures" is the name for now.
