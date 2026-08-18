// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
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

  // Fonts are downloaded at build time and emitted into _astro/fonts/, so they
  // are served from our own origin. This is not a preference — the CSP in
  // public/.htaccess sets `font-src 'self' data:`, so a <link> to Google Fonts
  // would be blocked in the browser. Weights are listed explicitly: every extra
  // weight is another file on the critical path.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-display',
      weights: ['500', '700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['400', '500', '600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: ['400', '500'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
  ],

  build: {
    // Emit /about.html rather than /about/index.html so Apache serves clean
    // URLs on Plesk without directory-index rewrites.
    format: 'file',
  },
});
