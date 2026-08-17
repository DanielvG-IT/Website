# danielvanginneken.com

Personal site — built with [Astro](https://astro.build), output as a fully
static bundle and deployed to a Plesk-hosted origin over rsync.

## Local development

```bash
npm ci
npm run dev      # http://localhost:4321
```

| Command           | Does                                            |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                      |
| `npm run build`   | Static build into `dist/`                       |
| `npm run preview` | Serve the built output locally                  |
| `npm run check`   | Type-check `.astro` and `.ts` files             |

## Domains

`danielvanginneken.com` is canonical — everything lives there.

| Domain                    | Behaviour                          |
| ------------------------- | ---------------------------------- |
| `danielvanginneken.com`   | The site                           |
| `danielvanginneken.nl`    | 301 → `.com`                       |
| `danielvanginneken.dev`   | 301 → `.com/projects`              |

The redirects are configured in Cloudflare/Plesk and are not part of this repo.
Every canonical tag, OpenGraph URL, sitemap entry, and RSS link is generated
from the `site` value in `astro.config.mjs`, so the `.com` origin is the single
source of truth in markup.

## Structure

```
src/
  consts.ts            Identity, socials, nav — edit these first
  content.config.ts    Collection schemas (projects, writing)
  content/projects/    One markdown file per project
  data/now.ts          The /now page content
  data/uses.ts         The /uses page content
  lib/url.ts           Path normalisation (see note below)
  components/          SEO, Nav, Footer, ProjectCard
  layouts/Layout.astro The only page shell
  pages/               Routes
public/
  .htaccess            Clean URLs + security headers for Apache
```

### Adding a project

Drop a markdown file in `src/content/projects/`. The filename becomes the URL
slug. Frontmatter carries the facts; the body carries the narrative. See
`src/content.config.ts` for the schema — the build fails on invalid frontmatter,
which is intentional.

### Updating /now

Edit `src/data/now.ts`, including the `updated` date.

## A note on `build.format: 'file'`

The build emits `about.html`, not `about/index.html`, so URLs are extensionless
with no trailing slash. Two consequences:

1. `public/.htaccess` carries the Apache rewrites that serve `/about` from
   `about.html`. **If the site 404s after a deploy, check that file survived.**
2. `Astro.url.pathname` is `/about` in dev but `/about.html` during the build.
   Always normalise with `cleanPath()` from `src/lib/url.ts` before comparing
   or publishing a path.

## Internationalisation

English only today, served from the root (`/about`, not `/en/about`). The i18n
config is already in place with `prefixDefaultLocale: false`, so adding `nl`
later is additive — no existing `.com` URL changes.

## RSS

`/rss.xml` is wired up and builds, but is deliberately **not linked** anywhere:
no `<link rel="alternate">`, no nav entry. The `writing` collection is empty by
design. When real posts exist, add a `/writing` route, the nav item, and the
alternate link in `src/components/SEO.astro`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: `npm ci` →
`astro build` → `rsync -avz --delete dist/` to the origin over SSH.

Required repository secrets (environment: `production`):

| Secret                | Value                                            |
| --------------------- | ------------------------------------------------ |
| `DEPLOY_SSH_KEY`      | Private key, PEM format, no passphrase           |
| `DEPLOY_KNOWN_HOSTS`  | Output of `ssh-keyscan -p <port> <host>`         |
| `DEPLOY_HOST`         | Origin hostname                                  |
| `DEPLOY_USER`         | SSH user                                         |
| `DEPLOY_PATH`         | Absolute path to the web root, e.g. `/var/www/vhosts/.../httpdocs` |
| `DEPLOY_PORT`         | Optional, defaults to `22`                       |

The workflow verifies `dist/index.html` and `dist/.htaccess` exist and that at
least five pages were built before it runs an rsync with `--delete`, so a
broken build cannot wipe the live site.
