# portfolio

Personal portfolio site for Muhammad Shaheer — a full-stack software engineer. Built with Next.js (App Router) and Tailwind CSS, it presents experience, selected projects, and skills.

## Sections

- **Hero** — intro, availability, profile card and links
- **Experience** — roles timeline
- **Projects** — featured projects, open-source contributions, and a strip of recent public repos fetched live from the GitHub API
- **Stack & credentials** — skills, education, certifications
- **Contact** — email, phone, LinkedIn, GitHub

## Stack

- Next.js 16 (App Router, React 19, Turbopack)
- TypeScript
- Tailwind CSS v4
- `next/font` (Syne, Inter, JetBrains Mono)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configuration

- `GITHUB_USERNAME` — GitHub user whose public repos are shown in the "More from GitHub" strip (defaults to `shaheeranser`). Fetched with 12-hour ISR revalidation.

## Build

```bash
npm run build
npm start
```

## Notes

- Featured projects and open-source contributions are curated in `src/components/ProjectGrid.tsx`.
