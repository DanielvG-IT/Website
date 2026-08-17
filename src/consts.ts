/**
 * Single source of truth for identity, links, and navigation.
 *
 * Deliberately framework-agnostic plain data: the site's identity should
 * survive a future re-platform without being untangled from components.
 */

export const SITE = {
  /** Canonical origin. Must match `site` in astro.config.mjs. */
  url: 'https://danielvanginneken.com',
  name: 'Daniël van Ginneken',
  /** Used for OpenGraph `site_name` and the browser title suffix. */
  title: 'Daniël van Ginneken',
  description:
    'Software engineering student with infrastructure roots, building systems-aware software in .NET and TypeScript.',
  locale: 'en',
  ogLocale: 'en_US',
} as const;

/**
 * Profiles that establish identity across the web. Emitted as `sameAs` in the
 * Person JSON-LD, which is how search engines connect this site to those
 * accounts. Order is not significant.
 */
export const SOCIALS = {
  github: 'https://github.com/DanielvG-IT',
  linkedin: 'https://www.linkedin.com/in/danielvanginneken',
  youtube: 'https://www.youtube.com/@danielvanginneken',
} as const;

/** Needs a matching mailbox on the Plesk origin before launch. */
export const EMAIL = 'hello@danielvanginneken.com';

/** Everything with a non-empty value, for JSON-LD `sameAs`. */
export const SAME_AS: string[] = Object.values(SOCIALS).filter(Boolean);

/**
 * Primary navigation. Five items, deliberately capped — a nav that grows is a
 * nav that stops being read. /writing stays out until it has real posts.
 */
export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/now', label: 'Now' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' },
] as const;
