// Colección de contenido del blog (Astro 5 Content Layer).
// El esquema Zod ES el frontmatter estándar: un generador (humano o IA) solo debe
// producir un .md que lo cumpla; publicar no requiere cambios de código.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_SLUGS, AUTHOR_IDS } from './data/blog';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Identidad / SEO
    title: z.string().max(75),
    description: z.string().min(50).max(180),
    keywords: z.array(z.string()).default([]),

    // Taxonomía (topic clusters)
    category: z.enum(CATEGORY_SLUGS),
    author: z.enum(AUTHOR_IDS).default('equipo-editorial'),
    // Revisor clínico (E-E-A-T / YMYL): en contenido de salud animal (vacunación,
    // dosis, consentimiento) debe apuntar a un autor MVZ con `credentials`.
    // Renderiza byline "Revisado por…" + schema reviewedBy(Person).
    reviewer: z.enum(AUTHOR_IDS).optional(),

    // Fechas
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Media
    image: z.string().optional(), // ruta en /public; si falta, usa /og-image.png
    imageAlt: z.string().optional(),

    // Presentación / estado
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // CTA contextual: hereda el defaultCta de la categoría y permite override por
    // artículo (clave para posts transversales, p.ej. "reducir ausencias" → CTA de
    // recordatorios WhatsApp). Todos opcionales; se resuelven con resolveCta().
    ctaKind: z.enum(['trial', 'demo', 'sales']).optional(),
    ctaTitle: z.string().optional(),
    ctaText: z.string().optional(),
    ctaLabel: z.string().optional(),

    // FAQ OBLIGATORIO (mín. 3): alimenta FAQPage schema → featured snippets / PAA.
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .min(3, 'Cada artículo debe incluir al menos 3 preguntas frecuentes (SEO).'),

    // Interlinking explícito: slugs de artículos hermanos. El resolver valida en
    // build que existan; si se deja vacío, se autocompleta por categoría.
    related: z.array(z.string()).default([]),

    // Override opcional del tiempo de lectura calculado
    readingTimeOverride: z.number().optional(),
  }),
});

export const collections = { blog };
