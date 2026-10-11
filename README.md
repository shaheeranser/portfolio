# portfolio

Personal portfolio site for Muhammad Shaheer — a full-stack software engineer. Built with Next.js (App Router) and Tailwind CSS, it presents experience, selected projects, and skills.

## Sections

- **Hero** — intro, availability, and a fastfetch-style system-info window
- **Experience** — roles
- **Projects** — featured projects, plus shipped and open-source contribution lists
- **Stack & systems** — skills, education, certifications
- **Connect** — email, phone, LinkedIn, GitHub, resume

## Stack

- Next.js 16 (App Router, React 19, Turbopack)
- TypeScript
- Tailwind CSS v4
- `next/font` (Inter, JetBrains Mono)

## Design

A riced-desktop theme built on the Catppuccin palettes (Mocha by default, Latte for the light
theme). The layout uses a GNOME/macOS-style app metaphor — a top panel with clock, tray, theme
toggle and scroll progress, a floating dock with scroll-spy, an app-grid of projects, and an
optional spotlight launcher (press `⌘K` / `Ctrl+K` to jump between sections, open links, or
copy contact details). Dark/light theme persists via `localStorage`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Notes

- Site content (profile, roles, projects, contributions, skills) is curated in `src/lib/content.ts`.
- The page is fully statically prerendered; no runtime data fetch.