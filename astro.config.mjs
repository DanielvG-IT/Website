// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build
export default defineConfig({
  // 1. CANONICAL ORIGIN & ROUTING
  // Every absolute URL (canonical tags, OpenGraph, sitemap) derives from here.
  // This guarantees that traffic from .nl and .dev 301 redirects never leaks into markup.
  site: "https://danielvanginneken.com",
  output: "static",
  trailingSlash: "never",

  // 2. INTERNATIONALIZATION (i18n)
  // English is the root locale today (/about). Adding 'nl' later will be purely additive
  // (/nl/about) without modifying or breaking any existing canonical .com URLs.
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // 3. AUTOMATED INTEGRATIONS
  integrations: [
    // Generates sitemap-index.xml and sitemap-0.xml at build time
    sitemap({
      // Dynamically injects x-default and alternate hreflang tags for future-proofing i18n
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          nl: "nl-NL",
        },
      },
      // Optional: Filter out administrative or unneeded system pages
      filter: (page) =>
        !page.includes("/404") && !page.includes("/secret-page"),
    }),

    // Generates a perfect robots.txt file mapping back to your canonical sitemap
    robotsTxt({
      // `true` derives {site}/sitemap-index.xml from the configured origin.
      // Never hardcode it: a literal string here drifts from `site` silently,
      // and a bare origin is not a sitemap URL at all.
      sitemap: true,
      host: "danielvanginneken.com",
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/404", "/api/"],
        },
      ],
    }),
  ],

  // 4. PERFORMANCE & LOCAL FONTS (CSP Compliant)
  // Fonts are downloaded at build time and emitted into <build.assets>/fonts/.
  // This satisfies your public/.htaccess CSP rule: `font-src 'self' data:`.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Space Grotesk",
      cssVariable: "--font-display",
      weights: ["500", "700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-sans",
      weights: ["400", "500", "600"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      weights: ["400", "500"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["ui-monospace", "SFMono-Regular", "monospace"],
    },
  ],

  // 5. SERVER-SPECIFIC BUILD FORMAT
  build: {
    // Emits /about.html instead of /about/index.html.
    // This allows Apache to serve clean URLs on Plesk without directory-index rewrites.
    format: "file",
    // Optimizes build assets for fast caching and delivery
    assets: "_assets",
  },
});
