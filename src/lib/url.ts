/**
 * Normalise a pathname to its canonical, routable form.
 *
 * Necessary because `build.format: 'file'` makes `Astro.url.pathname` differ
 * between dev and build: the dev server sees `/about`, but during the static
 * build the same page is emitted as `/about.html`. Anything that compares or
 * publishes a path — canonical tags, OpenGraph URLs, nav active state — must
 * go through here, or it silently works in dev and breaks in production.
 *
 *   /index.html              -> /
 *   /about.html              -> /about
 *   /projects/opencaptive/   -> /projects/opencaptive
 */
export function cleanPath(pathname: string): string {
  let path = pathname;

  // Drop the emitted .html extension, including the implicit index document.
  path = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');

  // Collapse any trailing slash; the site is configured trailingSlash: 'never'.
  path = path.replace(/\/+$/, '');

  return path || '/';
}
