# Rohit Singh: QA Leader Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. All content lives in `data/portfolio.ts`.

## Folder structure

```
app/                 routes: / /experience /projects /skills /about /contact, api/contact, sitemap, robots, OG image, 404, loading
components/          Navbar, Footer, Hero, Timeline, ProjectCard, ProjectsExplorer, StatCounter, ProfileImage, ...
data/portfolio.ts    ALL content (edit here)
lib/                 utils, icon map, SEO helper
public/              profile.jpg and Rohit_Singh_Resume.pdf go here
```

## Setup

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
npm run typecheck
```

## Customise checklist

1. **Photo**: add `public/profile.jpg` (800x800, square). Without it an "RS" gradient avatar is shown.
2. **LinkedIn**: already set in `LINKEDIN_URL` at the top of `data/portfolio.ts`.
3. **GitHub** (optional): set `GITHUB_URL`; leave `""` to hide it everywhere.
4. **Resume**: add `public/Rohit_Singh_Resume.pdf`.
5. **Content**: edit `data/portfolio.ts` (profile, stats, Beamer spotlight, experience, projects, skills, about). Project "Problem / Approach / Impact" text was written from your bullet points; review it and adjust wording or numbers.
6. **Site URL**: set `NEXT_PUBLIC_SITE_URL` (env var) to your real domain for SEO, sitemap and Open Graph.
7. **Contact form -> Google Sheet**: follow the steps in `google-apps-script/Code.gs`, then set `GOOGLE_SHEET_WEBHOOK_URL` and `GOOGLE_SHEET_SECRET` in `.env.local` and in Vercel. Optionally set `RESEND_API_KEY` to also get an email. With neither set the form opens the visitor's email app (mailto fallback).

## Deploy to Vercel

1. Push the project to GitHub (`git init && git add . && git commit -m "portfolio" && git push`).
2. On vercel.com choose **Add New, Project**, import the repo. Framework is detected as Next.js; no extra config needed.
3. Add environment variables: `NEXT_PUBLIC_SITE_URL`, `GOOGLE_SHEET_WEBHOOK_URL`, `GOOGLE_SHEET_SECRET` (and optionally `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).
4. Click **Deploy**. Add a custom domain under Project Settings, Domains, then update `NEXT_PUBLIC_SITE_URL`.