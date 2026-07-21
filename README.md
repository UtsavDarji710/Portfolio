# Utsav Darji — Portfolio

A premium, highly animated personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and shadcn-style UI primitives.

## Tech Stack

- **Next.js 14** (App Router, Server Components where possible)
- **TypeScript**
- **Tailwind CSS** + `tailwindcss-animate`
- **Framer Motion** — animations, transitions, micro-interactions
- **Lenis** — smooth scrolling
- **react-countup** — animated statistics
- **next-themes** — dark / light mode
- **lucide-react** + **react-icons** — icons

## Features

- Full-screen animated hero with gradient blobs, floating particles, and a live "code showcase"
- About section with animated stat counters
- Interactive skill cards with animated proficiency bars
- Vertical animated experience timeline
- Premium project cards with gradient overlays and tech badges
- Animated achievement counters
- Education card
- Contact form with animated send button
- Dark / light mode toggle
- Cursor glow effect, scroll progress bar, scroll-to-top, loading screen
- Active navbar with animated indicator and animated mobile menu
- Full SEO: metadata, OpenGraph, Twitter cards, JSON-LD Person schema, `robots.ts`, `sitemap.ts`, dynamic OG image at `/og`
- Fully responsive and accessibility-minded

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Customization

- **Personal data & content:** `constants/data.ts`, `constants/site.ts`, `constants/navigation.ts`
- **Colors / theme:** CSS variables in `app/globals.css` and `tailwind.config.ts`
- **Resume:** replace `public/resume.txt` with your `resume.pdf`
- **Contact form:** wire up the `handleSubmit` in `components/sections/contact.tsx` to an API route or email service (e.g. Resend, Nodemailer)

## Project Structure

```
app/                 # App Router pages, layout, SEO routes, dynamic OG
components/
  ui/                # Reusable primitives (button, card, input, counter...)
  sections/          # Page sections (hero, about, skills, projects...)
  layout/            # Navbar, footer, providers, effects
constants/           # Site config, navigation, portfolio data
hooks/               # Custom React hooks
lib/                 # Utilities and Framer Motion variants
types/               # Shared TypeScript types
public/              # Static assets (favicon, resume)
```

> Update the social links, email, phone, and `url` in `constants/site.ts` before deploying.
