# This is NOT the Astro you know

This project runs **Astro 7**. APIs, conventions, and file structure may differ
from your training data — Astro has had breaking changes across majors, and
content collections in particular were reworked.

Astro does not ship offline docs in `node_modules`. Before writing code that
touches an unfamiliar API, **verify against the installed package** rather than
recalling it:

- Config options: `node_modules/astro/dist/types/public/config.d.ts`
- Content collections: `node_modules/astro/templates/content/types.d.ts`
- Loaders (`glob`, `file`): `node_modules/astro/dist/content/loaders/`

## Conventions in this repo

- **Output is fully static.** `output: 'static'`, no adapter, no server code.
  Anything needing a runtime belongs somewhere else.
- **Content config lives at `src/content.config.ts`** (not the older
  `src/content/config.ts`). Collections use the loader API: `glob()` from
  `astro/loaders`.
- **Rendering an entry is `render(entry)`** imported from `astro:content`. The
  old `entry.render()` method no longer exists.
- **Zod is v4**, re-exported as `z` from `astro:content`.
- **`build.format: 'file'`** emits `/about.html`. This makes
  `Astro.url.pathname` differ between dev and build, so anything comparing or
  publishing a path must go through `cleanPath()` in `src/lib/url.ts`.
  Forgetting this works in dev and breaks in production.
- **Canonical URLs always derive from `Astro.site`** (the `.com` origin), never
  from the request host — `.nl` and `.dev` 301 to `.com`, and the markup must
  never disagree.
- **Styling is plain CSS** with custom properties in `src/styles/global.css`
  plus scoped `<style>` blocks in components. No CSS framework. Keep it that
  way unless there is a strong reason not to.
- **Nav is capped at five items.** Adding a sixth is a product decision, not a
  code change.
