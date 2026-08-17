import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Imported from astro/zod directly: the `z` re-export on astro:content is
// deprecated and flagged for removal.
import { z } from 'astro/zod';

/**
 * Projects. Frontmatter holds the facts (status, stack, what it taught me);
 * the markdown body holds the narrative. Keeping those separate means the
 * cards and the detail pages read the same source without duplicated prose.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences. Used on cards, in <meta description>, and in OG. */
    summary: z.string(),
    /** Honest current state, e.g. "Early-stage architecture". Shown as a badge. */
    status: z.string(),
    /**
     * Grouping on /projects. 'featured' renders first and larger; 'concept'
     * renders last and is visually de-emphasised so early ideas aren't
     * mistaken for shipped work.
     */
    category: z.enum(['featured', 'build', 'concept']).default('build'),
    technologies: z.array(z.string()).default([]),
    /** "What I learned" bullets. */
    outcomes: z.array(z.string()).default([]),
    /** Sort key within a category. Lower is first. */
    order: z.number().default(100),
    /** Optional outbound links. Omit rather than pointing at an empty repo. */
    repo: z.string().optional(),
    link: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Writing. Defined so the RSS feed has a real collection to read, but there is
 * no /writing route and no nav entry until there are actual posts. An empty
 * directory here is intentional, not an oversight.
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
