# gaetanocardinale.dev — portfolio

Sito statico personale (Astro + Cloudflare Pages). Vedi **`CLAUDE.md`** per brief completo, struttura, schema contenuti e vincoli di privacy.

## Stato

- ✅ Contenuti in `content/` (home, about, 4 case study anonimizzati)
- ✅ Scaffold Astro funzionante (layout, home, pagina case study, CSS, workflow GitHub Pages) — build verificata
- ⬜ Polish/restyling, `og.png`, sitemap/robots, nuovi case study — vedi `CLAUDE.md`

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # output in dist/
npm run preview
```

## Deploy

**Fase 1 (configurata):** GitHub Pages via GitHub Actions — pushare `main`, poi su GitHub → Settings → Pages → Source = "GitHub Actions" → sito live su `https://<username>.github.io/portfolio/` (`astro.config.mjs`: `site: 'https://gcardinale.github.io'`, `base: '/portfolio/'`).

**Fase 2 (dominio custom):** cambiare in `astro.config.mjs` → `site: 'https://gaetanocardinale.dev'`, `base: '/'`; aggiungere `public/CNAME` = `gaetanocardinale.dev`; su GitHub → Pages → Custom domain + Enforce HTTPS; DNS del dominio verso GitHub Pages (A/AAAA records, oppure CNAME → `gcardinale.github.io` su Cloudflare). Dettagli in `CLAUDE.md`.

## Contenuti

`content/home.md`, `content/about.md`, `content/projects/*.md` — Markdown con frontmatter (schema in `CLAUDE.md`). Nessun CV pubblico: i contatti (email/telefono/LinkedIn) vanno resi molto visibili, "CV su richiesta".
