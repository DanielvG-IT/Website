import type { APIRoute } from 'astro';

/**
 * Generated rather than dropped in public/ so the sitemap URL can never drift
 * from the configured canonical origin.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
