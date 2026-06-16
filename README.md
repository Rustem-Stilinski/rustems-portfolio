# Rustem Aisariyev — Portfolio (CS601 Term Project)

A personal portfolio site built with **React + TypeScript + Vite** and routed
with **React Router**. Nine content pages: Home, About, Interests, Resume,
Projects, Skills, Lab, Guestbook, and Contact.

Live demo: _add your GitHub Pages URL here once deployed._

---

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into /dist
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

---

## Before you publish — customize these

The content is pre-filled with real info, but a few things are placeholders:

- [ ] **Social links** — `src/components/Footer.tsx` (GitHub / LinkedIn URLs).
- [ ] **Resume PDF** — drop `resume.pdf` into `public/` so the Download button works.
- [ ] **Photos (optional)** — the Interests gallery uses generated artwork.
      To use real photos, add images to `public/images/` and swap the
      `<GalleryArt />` component in `src/pages/Interests.tsx` for `<img>` tags.
- [ ] **Contact form backend (optional)** — the form validates and simulates a
      send. To actually receive messages, sign up for a free service like
      [Formspree](https://formspree.io) and POST the form data in
      `src/pages/Contact.tsx` (the spot is marked with a comment).
- [ ] **Project links** — add `link:` values in `src/data/projects.ts` to make
      cards clickable.

---

## Put it on GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio term project"
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## Deploy to GitHub Pages (free hosting)

This project is already configured for Pages: `vite.config.ts` uses a relative
`base` and the app uses `HashRouter`, so links work with no server config.

```bash
npm run deploy
```

This builds the site and pushes `/dist` to a `gh-pages` branch. Then on GitHub:
**Settings → Pages → Source: `gh-pages` branch**. Your site goes live at
`https://<your-username>.github.io/<repo-name>/`.

---

## Project structure

```
src/
├── components/    Navbar, Footer, ProjectCard, SkillBar, ThemeToggle,
│                  DecisionGraph (signature SVG), GalleryArt,
│                  DragReorder, DoodleCanvas, GeoLocator, WorkerDemo (Lab)
├── pages/         Home, About, Interests, Resume, Projects, Skills,
│                  Lab, Guestbook, Contact
├── context/       ThemeContext (light/dark, persisted)
├── hooks/         useTheme (custom hook)
├── services/      guestbook (CRUD: Supabase REST or localStorage)
├── workers/       score.worker (off-main-thread simulation)
├── data/          projects, skills, content (typed data modules)
├── types/         shared TypeScript interfaces
├── App.tsx        routes + layout
└── main.tsx       entry: HashRouter + ThemeProvider
```

---


### Hook the Guestbook up to a real database (optional)

The guestbook works immediately using `localStorage`. To satisfy the
"connect to a database" requirement with a real Postgres backend:

1. Create a free project at [supabase.com](https://supabase.com).
2. In the SQL editor, run:

   ```sql
   create table guestbook (
     id uuid primary key default gen_random_uuid(),
     name text not null,
     message text not null,
     created_at timestamptz not null default now()
   );
   alter table guestbook enable row level security;
   -- Demo policy: allow anonymous read/write (fine for a class project).
   create policy "public access" on guestbook
     for all using (true) with check (true);
   ```

3. Copy `.env.example` to `.env` and fill in your project URL and anon key.
4. Restart `npm run dev`. The page now reads/writes to Postgres — the banner
   on the page confirms which backend is live.

---

## Course material used (CS601)

| Concept | Where to find it |
| --- | --- |
| Function components & composition | every file in `components/` and `pages/` |
| TypeScript interfaces & typed props | `types/index.ts`, all component props |
| `useState` | `Contact.tsx` (form), `Navbar.tsx` (menu), `ThemeContext.tsx` |
| `useEffect` | `ThemeContext.tsx`, `Navbar.tsx`, `App.tsx` (scroll) |
| `useContext` + custom hook | `context/ThemeContext.tsx`, `hooks/useTheme.ts` |
| Client-side routing | `App.tsx`, `main.tsx`, `NavLink` in `Navbar.tsx` |
| Controlled form + validation | `pages/Contact.tsx` |
| Typed events | `ChangeEvent`/`FormEvent` in `Contact.tsx` |
| Data-driven rendering with `.map()` | `Projects`, `Skills`, `Interests`, `Resume` |
| Responsive CSS (grid, flex, media queries, variables) | `index.css`, `pages/pages.css` |
| Accessibility (focus-visible, ARIA, reduced motion, skip link) | `index.css`, `App.tsx`, form + progressbar |
| SVG + CSS animation | `DecisionGraph`, `GalleryArt`, `SkillBar` |
| Vite build tooling + ESLint | `vite.config.ts`, `.eslintrc.cjs` |
