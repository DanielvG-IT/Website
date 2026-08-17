// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical origin. Every absolute URL on the site (canonical tags, OpenGraph,
  // sitemap, RSS) derives from this, so .nl / .dev 301s never leak into markup.
  site: 'https://danielvanginneken.com',
  output: 'static',
  trailingSlash: 'never',

  // English is the only shipped locale today. `prefixDefaultLocale: false` keeps
  // it at the root (/about, not /en/about), so adding 'nl' later is purely
  // additive — no existing .com URL changes.
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],

  build: {
    // Emit /about.html rather than /about/index.html so Apache serves clean
    // URLs on Plesk without directory-index rewrites.
    format: 'file',
  },
});
