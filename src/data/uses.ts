/**
 * The /uses page — the tools actually reached for, not an aspirational list.
 *
 * Keep this honest and short. Every entry here is something a reviewer might
 * ask about in an interview.
 */

interface Item {
  name: string;
  note?: string;
}

interface Group {
  title: string;
  items: Item[];
}

export const USES: Group[] = [
  {
    title: "Editors & AI",
    items: [
      {
        name: "VS Code",
        note: "Primary editor for TypeScript, web development, and general project work.",
      },
      {
        name: "JetBrains Rider",
        note: "Preferred environment for .NET and C# projects, especially larger solutions.",
      },
      {
        name: "Claude Code",
        note: "Used in the terminal for exploration, refactoring, debugging, and working through unfamiliar code.",
      },
    ],
  },
  {
    title: "Languages & frameworks",
    items: [
      {
        name: "C# / .NET",
        note: "Backend services, APIs, application logic, and reusable libraries.",
      },
      {
        name: "TypeScript",
        note: "Frontend applications, tooling, and full-stack development.",
      },
      {
        name: "React",
        note: "Interactive web interfaces and application frontends.",
      },
      {
        name: "Astro",
        note: "This portfolio and other content-focused websites.",
      },
    ],
  },
  {
    title: "Data & development",
    items: [
      {
        name: "PostgreSQL",
        note: "Primary relational database for projects and application backends.",
      },
      {
        name: "Docker",
        note: "Local services, databases, and reproducible development environments.",
      },
      {
        name: "Postman",
        note: "Testing and exploring APIs during development.",
      },
      {
        name: "Git + GitHub",
        note: "Version control, collaboration, pull requests, and project hosting.",
      },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      {
        name: "Linux",
        note: "Servers, development environments, containers, and infrastructure work.",
      },
      { name: "Proxmox", note: "Virtualisation and homelab infrastructure." },
      {
        name: "UniFi",
        note: "Networking, switching, wireless, and homelab infrastructure.",
      },
      {
        name: "GitHub Actions",
        note: "CI/CD automation, builds, tests, and deployments.",
      },
    ],
  },
  {
    title: "Machine",
    items: [
      {
        name: "MacBook Pro",
        note: "Primary development machine and daily driver.",
      },
      {
        name: "macOS",
        note: "Main operating system for development and daily work.",
      },
      {
        name: "Terminal · zsh",
        note: "A large part of my development workflow happens from the terminal.",
      },
      {
        name: "Keychron K13 Max",
        note: "Low-profile mechanical keyboard used at my desk.",
      },
    ],
  },
];
