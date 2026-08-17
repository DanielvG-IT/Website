/**
 * The /now page — what has your attention at this point in time.
 *
 * This is the one page on the site that goes stale fastest. Keep `updated`
 * honest: a /now page with a six-month-old date says more about you than an
 * empty one would. Edit this file, nothing else.
 */

export const NOW = {
  /** ISO date. Rendered as "Last updated ..." at the top of the page. */
  updated: '2026-08-17',

  intro:
    'Third-year software engineering student at Avans Hogeschool, currently interning with the IT/AI team at Basic-Fit.',

  sections: [
    {
      title: 'Working on',
      items: [
        'Interning with the IT/AI team at Basic-Fit, working alongside engineers on real systems rather than coursework projects.',
        'Learning how a large organisation actually ships and operates software — the review, release, and on-call side that a classroom cannot simulate.',
      ],
    },
    {
      title: 'Learning',
      items: [
        '.NET and C# for backend and API work, with more attention to architecture than syntax at this point.',
        'TypeScript and frontend structure, mostly through building things end to end.',
        'How AI tooling fits into an engineering workflow without becoming a substitute for understanding the code.',
      ],
    },
    {
      title: 'Building on the side',
      items: [
        'OpenCaptive — an open-source captive portal platform, currently in early-stage architecture.',
        'This site, rebuilt in Astro as a static bundle.',
      ],
    },
  ],
} as const;
