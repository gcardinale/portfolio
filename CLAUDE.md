# Portfolio personale — Gaetano Cardinale

Sito vetrina personale per recruiter / CTO. Linkabile da CV, email candidature, LinkedIn, Indeed.

- **Dominio:** `gaetanocardinale.dev` (HTTPS forzato, TLD developer)
- **Stack:** Astro (sito statico) + **GitHub Pages** (hosting gratuito, deploy via GitHub Actions, dominio custom). *(Cloudflare Pages è un'alternativa equivalente — scelto GitHub Pages per immediatezza, repo già su GitHub.)*
- **Niente:** backend, database, form di contatto con server, CMS, login, animazioni gratuite, JS pesante, tracker invasivi. Contatti via `mailto:` / `tel:` puri.
- **Owner:** Gaetano Cardinale — tel +39 327 754 9296 · gcardinale@protonmail.com · https://www.linkedin.com/in/gaetano-cardinale-81350a17a/

## Cosa è già pronto (in questo repo) vs cosa manca

**Pronto** — i contenuti in `content/`:
- `content/home.md` — copy della home (hero, pitch, blocchi competenze, CTA)
- `content/about.md` — bio breve
- `content/projects/*.md` — 4 case study (Alcolock 4.0, Argo 2.0, BI-MOB, Medika), frontmatter + corpo

**Da fare** (sviluppatore):
1. `npm create astro@latest` in questo repo (template minimale o blog), TypeScript opzionale
2. Configurare una **content collection `projects`** che legga `content/projects/*.md` (o spostare i file in `src/content/projects/` e adeguare gli import) — schema frontmatter sotto
3. Layout + componenti: `BaseLayout` (head, OpenGraph, font), `Home` (hero, about, griglia card progetti, contatti, footer), `ProjectPage` (template case study: titolo, meta, sezioni)
4. Stile: pulito, sobrio, responsive. Dark mode opzionale. Una palette, niente fronzoli. (Tailwind o CSS vanilla — scelta sviluppatore)
5. **OpenGraph + immagine preview** (`/og.png` ~1200×630) — il link deve fare bella figura incollato su LinkedIn/Indeed/email. `<title>` tipo "Gaetano Cardinale — Senior .NET / Software Architect"
6. `favicon.svg`, `robots.txt`, `sitemap` (integration `@astrojs/sitemap`)
7. **Niente CV pubblico scaricabile** (scelta dell'owner): nessun `public/cv.pdf`, nessun pulsante "Scarica CV". Al suo posto i **contatti devono essere molto visibili** — email (`mailto:`), telefono (`tel:`), LinkedIn — in **hero**, in **footer** e in una **sezione "Contatti" dedicata**. Messaggio: "CV completo su richiesta".
8. **Deploy su GitHub Pages — in due fasi (la Fase 1 va online subito, senza aspettare il DNS):**

   **Fase 1 — pubblicazione immediata su `https://<username>.github.io/portfolio/`** (presumibilmente `gcardinale` — VERIFICARE lo username):
   - `astro.config.mjs`: `site: 'https://gcardinale.github.io'`, `base: '/portfolio'`
   - **NIENTE** `public/CNAME` in questa fase
   - Workflow `.github/workflows/deploy.yml` con `withastro/action` + `actions/deploy-pages` (build su push a `main` → pubblica `dist`)
   - Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
   - ⚠️ I link interni devono rispettare il `base`: usare `import.meta.env.BASE_URL` (o `<base href={...}>` / helper) ovunque, **mai** path assoluti tipo `/projects/...` hardcoded — così il passaggio alla Fase 2 è indolore.
   - Online in pochi minuti. URL da usare subito (anche nella mail Euris): `https://gcardinale.github.io/portfolio/`

   **Fase 2 — dominio custom `gaetanocardinale.dev`** (quando comodo, anche giorni dopo):
   - `astro.config.mjs`: `site: 'https://gaetanocardinale.dev'`, `base: '/'`
   - aggiungere `public/CNAME` con una sola riga: `gaetanocardinale.dev`
   - Su GitHub: **Settings → Pages → Custom domain: `gaetanocardinale.dev`** + spuntare "Enforce HTTPS"
   - DNS del dominio: per l'apex i 4 record **A** di GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) + i relativi **AAAA**; in alternativa, se il DNS è su Cloudflare, un **CNAME** verso `gcardinale.github.io` (CNAME flattening). Propagazione ~minuti/ore.
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
- **IbleaAcque: NDA → NON appare per niente.** Niente progetto, niente settore, niente. Ometterlo del tutto.
- **Esperienza ex-datore con contenzioso (BI-MOB): solo lato tecnico.** MAI menzionare vertenze / recupero crediti / contenziosi. Solo stack e risultati tecnici, azienda anonima.
- **Settore automotive (Alcolock/Zaldy): livello "vetrina" e generico.** Architettura, stack, capacità (gestione flotte, telemetria IoT, dispositivi interlock, app mobile) sì; **evitare dettagli che de-anonimizzano** (es. "uno dei due soli sistemi omologati dal Ministero", nome del produttore hardware, ecc.). Credenziali/segreti/chiavi/dati di utenti finali → MAI.
- **Loggia / appartenenze associative private: NON appaiono.**
- **Date dei progetti:** usare le date reali di inizio/fine servizio (non placeholder).
- **Nessun dato personale di terzi** (telefoni, email, nomi di persone, clienti, pazienti) e nessuno screenshot con dati reali.
- **Niente link al GitHub pubblico dell'owner** dal sito: i nomi dei repo pubblici rivelerebbero clienti/datori, vanificando l'anonimato. (LinkedIn sì, GitHub no.)
- Niente affermazioni non verificabili: i numeri nei case study vengono dal vault/git dell'owner — se un numero non è solido, ammorbidirlo o toglierlo.

## Tono

Peer-level, professionale, asciutto. Frasi brevi. Niente buzzword vuote, niente superlativi gratuiti. Mostra cosa è stato costruito e che risultato ha prodotto. Lingua: italiano (eventuale variante EN in fase 2).
