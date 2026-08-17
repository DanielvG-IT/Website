import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE } from '../consts';

/**
 * Wired up ahead of the content: the feed builds and validates today, but it
 * stays unlinked (no <link rel="alternate">, no nav entry) until /writing has
 * real posts. When it does, add the alternate link in SEO.astro.
 */
export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.id}`,
    })),
  });
};
