/**
 * The /now page — what has your attention at this point in time.
 *
 * This is the one page on the site that goes stale fastest. Keep `updated`
 * honest: a /now page with a six-month-old date says more about you than an
 * empty one would. Edit this file, nothing else.
 */

export const NOW = {
  updated: "2026-08-18",
  intro:
    "HBO Informatica student at Avans Hogeschool, moving from an IT systems background deeper into software development and preparing for my upcoming internship with the IT/AI team at Basic-Fit.",
  sections: [
    {
      title: "Software development",
      items: [
        "Deepening my knowledge of .NET and C# for backend and API development.",
        "Getting more comfortable with TypeScript, React, and building complete applications end to end.",
        "Learning to think more about architecture, maintainability, deployment, and reliability instead of only making features work.",
      ],
    },
    {
      title: "Internship",
      items: [
        "Preparing for my upcoming internship with the IT/AI team at Basic-Fit.",
        "Getting ready to work in a professional software environment where code reviews, releases, collaboration, and real users matter.",
        "Looking forward to learning how a larger organisation approaches software development and AI in practice.",
      ],
    },
    {
      title: "Building on the side",
      items: [
        "OpenCaptive — an open-source captive portal platform, currently being shaped into a proper multi-tenant product.",
        "DentechSync — an internal platform for connecting systems and automating operational workflows.",
        "This portfolio — built in Astro as a fast, static site and used as a place to document the work.",
      ],
    },
    {
      title: "Learning",
      items: [
        "How to design software that is easier to deploy, monitor, maintain, and extend.",
        "Deployment, CI/CD, Docker, cloud platforms, databases, and the infrastructure around applications.",
        "Using AI tools as part of development while keeping ownership of the architecture and understanding of the code.",
      ],
    },
    {
      title: "Outside of code",
      items: [
        "Staying consistent with training and working toward my fitness goals.",
        "Learning more about motorcycles and working toward my A2 license.",
        "Building a life where software development, technical projects, fitness, and personal growth all have a place.",
      ],
    },
  ],
} as const;
