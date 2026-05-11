import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// I case study vivono in /content/projects/*.md (fuori da src/, così sono facili
// da editare anche senza toccare il codice del sito). Vedi CLAUDE.md.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    role: z.string(),
    period: z.string(),
    sector: z.string(), // tipologia/settore del committente — MAI il nome (vedi CLAUDE.md)
    status: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(true),
  }),
});

export const collections = { projects };
