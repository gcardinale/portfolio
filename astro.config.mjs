// @ts-check
import { defineConfig } from 'astro/config';

// FASE 1 — pubblicazione su GitHub Pages al sotto-percorso /portfolio/
// (verificare che lo username GitHub sia 'gcardinale'; se diverso, cambiare 'site' e 'base')
//
// FASE 2 — dominio custom: cambiare in
//   site: 'https://gaetanocardinale.dev',
//   base: '/',
// e aggiungere public/CNAME con la riga: gaetanocardinale.dev
export default defineConfig({
  site: 'https://gcardinale.github.io',
  base: '/portfolio/', // trailing slash: così import.meta.env.BASE_URL === '/portfolio/' e i path concatenati restano corretti
});
