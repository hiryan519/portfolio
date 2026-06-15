# Hiryan Hang — AI Product Manager Portfolio

A responsive one-page portfolio built with Next.js and Tailwind CSS. The visual direction is inspired by Portavia's minimal Framer-style portfolio: large condensed typography, generous whitespace, pill navigation, grayscale project visuals, and a focused personal-brand layout.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit personal content

Most copy, project data, skills, links, FAQ items, and article placeholders live in:

```txt
src/data/profile.ts
```

Edit this file to update:

- Name, role, hero headline, and intro
- About text
- RAG / Agent project descriptions
- Project keywords, status, and case details
- Email, LinkedIn, GitHub, and Resume links
- Services, FAQ, article placeholders, and contact items

## Page structure

Page entry:

```txt
src/app/page.tsx
```

Components:

```txt
src/components
```

Main sections:

- `Header`: floating pill navigation with mobile menu
- `Hero`: centered portfolio hero
- `ServicesSection`: accordion-style capability section
- `AboutSection`: personal intro and stats
- `ProjectsSection`: large grayscale project cards
- `FaqSection`: accordion FAQ
- `ArticlesSection`: reserved product thinking area
- `ContactSection`: contact area
- `Footer`: footer bar

## Fonts

The site uses `next/font/google`:

- `Antonio` for large condensed headings
- `Inter` for body copy and UI text

## Replace visuals

The current version uses CSS-generated abstract placeholders instead of external images. To replace them:

1. Add images to `public`.
2. Use `next/image` or CSS background images.
3. Start with `src/components/hero.tsx` and `src/components/projects-section.tsx`.

## Checks

```bash
npm run lint
npm run build
```
