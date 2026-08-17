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
    title: 'Editors',
    items: [
      {
        name: 'VS Code',
        note: 'Primary editor for TypeScript, web work, and everything in this repo.',
      },
      {
        name: 'JetBrains Rider',
        note: 'For .NET solutions, where the refactoring and debugger earn their keep.',
      },
      {
        name: 'Claude Code',
        note: 'In the terminal, for refactors and working through unfamiliar codebases.',
      },
    ],
  },
  {
    title: 'Languages & runtimes',
    items: [
      { name: '.NET / C#', note: 'Backend, APIs, and reusable libraries.' },
      { name: 'TypeScript', note: 'Frontend and tooling.' },
    ],
  },
  {
    title: 'Development',
    items: [
      {
        name: 'Docker',
        note: 'Local databases and services, so environments stay reproducible.',
      },
      {
        name: 'Postman',
        note: 'Exercising APIs while building them.',
      },
      { name: 'Git', note: 'With GitHub for hosting, reviews, and CI.' },
    ],
  },
  {
    title: 'Machine',
    items: [
      { name: 'macOS', note: 'Daily driver.' },
      { name: 'Terminal · zsh', note: 'Where most of the work actually happens.' },
      {
        name: 'Keychron K13 Max',
        note: 'Low-profile Gateron Reds, hot-swappable, wireless.',
      },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'GitHub Actions', note: 'Builds and deploys this site on every push to main.' },
      { name: 'Plesk', note: 'Origin host for danielvanginneken.com.' },
      { name: 'Cloudflare', note: 'DNS, and the .nl / .dev redirects.' },
    ],
  },
];
