# Portfolio personale — Gaetano Luigi Matteo Cardinale

Sito vetrina personale per recruiter / CTO. Linkabile da CV, email candidature, LinkedIn, Indeed.

- **Dominio:** `gaetanocardinale.dev` (HTTPS forzato, TLD developer)
- **Stack:** Astro (sito statico) + **GitHub Pages** (hosting gratuito, deploy via GitHub Actions, dominio custom). *(Cloudflare Pages è un'alternativa equivalente — scelto GitHub Pages per immediatezza, repo già su GitHub.)*
- **Niente:** backend, database, form di contatto con server, CMS, login, animazioni gratuite, JS pesante, tracker invasivi. Contatti via `mailto:` / `tel:` puri.
- **Owner:** Gaetano Luigi Matteo Cardinale (nome completo; nei contatti/firma email va bene anche "Gaetano Cardinale") — tel +39 327 754 9296 · gcardinale@protonmail.com · https://www.linkedin.com/in/gaetano-cardinale-81350a17a/

## Cosa è già pronto vs cosa manca

**Pronto (committato):**
- Contenuti in `content/`: `home.md` (copy home), `about.md` (bio), `projects/*.md` (4 case study **anonimizzati**, slug neutri).
- **Scaffold Astro funzionante** (build verificata, 5 pagine generate):
  - `package.json` (Astro 5), `package-lock.json`, `tsconfig.json`, `astro.config.mjs` (`site` + `base: '/portfolio/'`)
  - `src/content/config.ts` — collection `projects` via `glob` loader che legge `./content/projects/**/*.md` (i contenuti restano fuori da `src/`)
  - `src/layouts/Base.astro` — head, OpenGraph, CSS globale (palette sobria, responsive)
  - `src/components/SiteFooter.astro` — footer con contatti
  - `src/pages/index.astro` — home: hero + chi sono + competenze + griglia progetti + esperienza + contatti
  - `src/pages/progetti/[slug].astro` — pagina case study (meta + stack + corpo Markdown renderizzato)
  - `public/favicon.svg`
  - `.github/workflows/deploy.yml` — build + deploy su GitHub Pages
- Build locale: `npm install && npm run build` → `dist/` con `index.html` + 4 pagine `progetti/<slug>/`. Tutti i link rispettano `import.meta.env.BASE_URL`. Zero nomi di azienda nell'HTML generato.

**Da fare / da rifinire (sviluppatore, quando vuole):**
- Restyling/polish: tipografia, dark mode opzionale, micro-interazioni — è un layout volutamente minimale, da migliorare a piacere senza toccare `content/`.
- `og.png` (~1200×630) reale + meta `og:image` nel `Base.astro` (ora c'è solo `og:title`/`og:description`).
- `robots.txt`, sitemap (`@astrojs/sitemap`), canonical link.
- Eventuale pagina `/chi-sono` separata (ora il "chi sono" è una sezione della home; `content/about.md` è la copy sorgente).
- Nuovi case study: aggiungere un `.md` in `content/projects/` con lo schema sotto (es. ATI Enna / settore pubblico, Wevoz / settore tech ASR, ecc.) — **sempre anonimi, solo settore**.

## Deploy su GitHub Pages — in due fasi (Fase 1 va online subito, senza aspettare il DNS)

**Fase 1 — già configurata: pubblicazione su `https://<username>.github.io/portfolio/`** (presumibilmente `gcardinale` — VERIFICARE lo username; se diverso, cambiare `site` in `astro.config.mjs`):
- `astro.config.mjs`: `site: 'https://gcardinale.github.io'`, `base: '/portfolio/'` (trailing slash → `import.meta.env.BASE_URL === '/portfolio/'`)
- niente `public/CNAME` in questa fase
- workflow `.github/workflows/deploy.yml` già presente (`withastro/action` + `actions/deploy-pages`)
- Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions** → al primo push su `main` parte il build → sito live in pochi minuti su `https://gcardinale.github.io/portfolio/`

**Fase 2 — dominio custom `gaetanocardinale.dev`** (quando comodo):
- `astro.config.mjs`: `site: 'https://gaetanocardinale.dev'`, `base: '/'`
- aggiungere `public/CNAME` con una riga: `gaetanocardinale.dev`
- Su GitHub: **Settings → Pages → Custom domain: `gaetanocardinale.dev`** + spuntare "Enforce HTTPS"
- DNS: apex → 4 record **A** GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) + relativi **AAAA**; oppure, se DNS su Cloudflare, **CNAME** verso `gcardinale.github.io` (CNAME flattening)
- poi: aggiornare l'URL nella mail Euris e su LinkedIn/Indeed da `gcardinale.github.io/portfolio` a `gaetanocardinale.dev`
9. *(dopo)* aggiungere il case study **Wevoz — Real-time ASR** quando disponibili le metriche; valutare una versione EN del sito

## Schema frontmatter dei case study (`content/projects/*.md`)

```yaml
title: string          # titolo case study — descrittivo, MAI il nome di una società
order: number          # ordine in home (1 = primo)
role: string           # ruolo ricoperto
period: string         # es. "2023–2025" o "in corso (dal 2019)"
sector: string         # tipologia/settore del committente — MAI il nome (es. "Azienda operante nel settore sanitario")
status: string         # "in corso" | "concluso"
summary: string        # 1-2 frasi per la card in home
stack: string[]        # tag tecnologici
featured: boolean       # true = mostrato in home
```
Corpo Markdown con sezioni: `## Contesto` · `## Sfida` · `## Cosa ho costruito` · `## Stack` · `## Risultati`.

## ⚠️ VINCOLI DI PRIVACY / ONESTÀ — non negoziabili

- **🔒 MAI il nome di un'azienda/cliente/datore.** L'owner è molto riservato: nel sito (artefatto pubblico) **non compare nessun nome di società** — né clienti, né datori di lavoro, né fornitori/partner. Si usa **solo la tipologia / il settore**: es. "Azienda operante nel settore automotive", "Associazione nazionale di tutela dei consumatori", "Azienda operante nel settore sanitario", "Azienda operante nel settore dei trasporti e della logistica". Vale per tutto: frontmatter (`sector:`), titoli, corpo dei case study, sezione esperienza della home. *(Nota: su LinkedIn i nomi compaiono — è una scelta dell'owner avere il sito più anonimo. Non "armonizzare" portando i nomi qui.)*
- **IbleaAcque (NDA reciproco): solo in forma GENERICA** — deciso dall'owner il 21/10/2026, sostituisce la regola precedente "non appare per niente". Ammesso solo come "ente partecipato pubblico, settore utility" (case study `ente-partecipato-fractional-cto.md`). **MAI**: nome, regione/territorio, "idrico"/acqua/condomini/bollette, nomi di persone, importi, gare, fornitori. Non aggiungere dettagli che lo rendano riconoscibile.
- **Esperienza ex-datore con contenzioso (BI-MOB): solo lato tecnico.** MAI menzionare vertenze / recupero crediti / contenziosi. Solo stack e risultati tecnici, azienda anonima.
- **Settore automotive (Alcolock/Zaldy): livello "vetrina" e generico.** Architettura, stack, capacità (gestione flotte, telemetria IoT, dispositivi interlock, app mobile) sì; **evitare dettagli che de-anonimizzano** (es. "uno dei due soli sistemi omologati dal Ministero", nome del produttore hardware, ecc.). Credenziali/segreti/chiavi/dati di utenti finali → MAI.
- **Loggia / appartenenze associative private: NON appaiono.**
- **Date dei progetti:** usare le date reali di inizio/fine servizio (non placeholder).
- **Nessun dato personale di terzi** (telefoni, email, nomi di persone, clienti, pazienti) e nessuno screenshot con dati reali.
- **Niente link al GitHub pubblico dell'owner** dal sito: i nomi dei repo pubblici rivelerebbero clienti/datori, vanificando l'anonimato. (LinkedIn sì, GitHub no.)
- Niente affermazioni non verificabili: i numeri nei case study vengono dal vault/git dell'owner — se un numero non è solido, ammorbidirlo o toglierlo.

## Tono

Peer-level, professionale, asciutto. Frasi brevi. Niente buzzword vuote, niente superlativi gratuiti. Mostra cosa è stato costruito e che risultato ha prodotto. Lingua: italiano (eventuale variante EN in fase 2).
