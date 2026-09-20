# Nijamuthdeen J — Portfolio

Black + red premium portfolio built with React 19, Vite, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Add your real content before deploying

Everything below is placeholder and clearly marked in the code — replace before going live:

- **Photo**: drop your headshot at `public/profile-photo.jpg` (Hero falls back to "NJ" initials if missing).
- **Resume**: add your PDF at `public/resume.pdf` (linked from the "Download Resume" button).
- **Project images**: `public/projects/stackorax.jpg`, `nisha-collection.jpg`, `student-management.jpg`, `rudhra-dental.jpg`.
- **Certificate images**: `public/certificates/cert-1.jpg` through `cert-6.jpg`.
- **OG share image**: `public/og-image.jpg` (1200×630 recommended).
- **Text content**: `src/data/content.js` (bio, education, experience, testimonials, socials, email/phone), `src/data/projects.js`, `src/data/certifications.js` — swap in your real dates, links, and copy.
- **Contact form**: `src/components/sections/Contact.jsx` — set `FORM_ENDPOINT` to a form backend (e.g. Formspree) to receive submissions directly; until set, it opens the visitor's email client instead.
- **Domain**: update the canonical/OG URLs in `index.html` and the sitemap URL in `public/sitemap.xml` and `public/robots.txt`.
- **Google Analytics**: add your measurement snippet in `index.html` `<head>` when ready.

## Structure

```
src/
  components/
    layout/     Navbar, Footer, loading screen, scroll progress, cursor, particles, back-to-top
    sections/   Hero, About, Skills, Experience, Projects, Certifications, TechStack, Services, Achievements, Testimonials, Contact
    ui/         GradientButton, GlassCard, SectionHeading, AnimatedCounter, Icon
  data/         All site copy and content, separate from components
  pages/        NotFound (404)
```

## Deploying

Any static host works — Vercel, Netlify, GitHub Pages, Cloudflare Pages. Build command `npm run build`, output directory `dist`.
