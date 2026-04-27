# Andri Páll Helgason – Portfolio

Personal portfolio website built with Next.js showcasing projects, CV, and contact links. Supports Icelandic and English.

**Live:** https://andripall.is

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- SCSS (global styles + CSS Modules)
- Vercel

## Quick Start

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Structure

```
app/             # Pages (home, about, projects, cv)
components/      # NavBar, Footer, Providers
context/         # Language context (EN/IS toggle)
data/            # site.ts, projects.ts, translations.ts
styles/          # SCSS modules per page + globals
public/          # Static assets and project screenshots
```

## Data Files

- `data/site.ts` — name, email, and social links
- `data/projects.ts` — projects (title, description, stack, image, links)
- `data/translations.ts` — all UI strings in English and Icelandic

## Production

```bash
npm run build
npm start
```

## Deployment

Deployed on Vercel. Push to `main` to trigger a new deployment.

## License

MIT
