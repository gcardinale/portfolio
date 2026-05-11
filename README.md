# gaetanocardinale.dev — portfolio

Sito statico personale (Astro + Cloudflare Pages). Vedi **`CLAUDE.md`** per brief completo, struttura, schema contenuti e vincoli di privacy.

## Stato

- ✅ Contenuti pronti in `content/` (home, about, 4 case study)
- ⬜ Scaffold Astro, layout/componenti, stile, OpenGraph, deploy → da fare (vedi `CLAUDE.md` § "Da fare")

## Sviluppo (una volta scaffoldato Astro)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview
```

## Deploy

**GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml` con `withastro/action`). Su GitHub: Settings → Pages → Source = "GitHub Actions"; Custom domain = `gaetanocardinale.dev` (+ Enforce HTTPS). Nel repo: `public/CNAME` = `gaetanocardinale.dev`, e in `astro.config.mjs` → `site: 'https://gaetanocardinale.dev'`, `base: '/'`. Configurare il DNS del dominio verso GitHub Pages (CNAME → `gcardinale.github.io`).

## Contenuti

`content/home.md`, `content/about.md`, `content/projects/*.md` — Markdown con frontmatter (schema in `CLAUDE.md`). Nessun CV pubblico: i contatti (email/telefono/LinkedIn) vanno resi molto visibili, "CV su richiesta".
