# Azer Khamassi — Portfolio

Personal portfolio site for Azer Khamassi, Full Stack Engineer. Retro, terminal-inspired design (monospace type, hard-offset shadows, sharp corners, light/dark themes), fully bilingual (English/French), and built on the Next.js App Router.

Live at [azerxkhamassi.netlify.app](https://azerxkhamassi.netlify.app).

## Features

- **Bilingual (EN/FR)** via a `/en` / `/fr` route segment, with a hand-rolled dictionary-based i18n system (no external i18n library) — both locales are fully statically generated at build time.
- **Light/dark theme**, persisted in `localStorage`, with an animated View Transitions–powered toggle and zero flash-of-incorrect-theme on load.
- **Sections**: Hero, Projects, About, Experience, Education & Certificates, Contact.
- **Contact form** backed by [Resend](https://resend.com) and [react-email](https://react.email), with server-side validation via Zod.
- **Interactive terminal** in the footer — type `help` for a list of commands (jump to sections, toggle theme, open social links, and a few easter eggs).
- **Keyboard shortcuts overlay** — press `?` (or click the bottom-right badge) to see available shortcuts.
- **SEO**: per-locale metadata, JSON-LD, sitemap, robots.txt, and web manifest.
- Custom 404 page and active-section highlighting in the nav as you scroll.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Resend](https://resend.com) + [react-email](https://react.email) for the contact form
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) for form validation
- Deployed on [Netlify](https://netlify.com)

## Getting started

Install dependencies and copy the example environment file:

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local` with a [Resend](https://resend.com) API key and the contact email addresses (see `.env.example` for the expected shape). Note that Next.js only reads `.env.local`, not `.env.example`.

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en` or `/fr` based on your browser's language.

## Scripts

- `npm run dev` — start the development server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
- `npm run email:dev` — preview email templates (`src/emails`) in the react-email dev server

## Project structure

```
src/
  app/
    [locale]/        # localized routes (/en, /fr) — page, layout, metadata, 404
    api/contact/      # contact form submission endpoint
  components/         # UI components (mostly client islands alongside server components)
  emails/              # react-email templates
  i18n/                # locale list, dictionary type, en/fr dictionaries, getDictionary()
  lib/                 # shared client-side logic (theme, active-section tracking, etc.)
  proxy.ts             # locale-detection redirect (Next 16's middleware)
```
