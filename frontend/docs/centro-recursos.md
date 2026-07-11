# Centro de Recursos — arquitectura (diseño, aún NO construido)

> Estado: **solo arquitectura**. Se construirá cuando el blog esté consolidado (decisión del owner).
> Objetivo estratégico: convertir SaaslyVet en un activo de **link-building** (herramientas/plantillas atraen enlaces naturales que ninguna landing consigue) y en un **motor de leads** (descargables a cambio de email). Es la palanca real para competir por términos cabeza (*software/sistema veterinario*), que dependen de autoridad de dominio + enlaces, no solo de on-page.

## Árbol de información

```
/recursos                          hub paraguas (pillar; enlaza y describe todo)
├── /blog                          ← YA EXISTE. No migrar (romper URLs es caro).
├── /recursos/guias/[slug]         guías largas (3.000–6.000 palabras)
├── /recursos/plantillas/[slug]    expediente, consentimiento, contratos…
├── /recursos/checklists/[slug]    abrir clínica, apertura de caja…
├── /recursos/calculadoras/[slug]  rentabilidad de consultas (interactivo)
├── /recursos/descargables/[slug]  PDF / Excel
└── /recursos/comparativas/[slug]  "X vs Y", "alternativa a Z"
```

`/blog` queda conceptualmente dentro de Recursos, **sin cambiar su ruta**. `/recursos` lo enlaza como una sección más.

## Modelo de datos

Nueva colección `resources` (Markdown, Content Layer) — reutiliza casi todo el frontmatter del blog + campos propios:

```ts
// content.config.ts (a añadir)
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    type: z.enum(['guia', 'plantilla', 'checklist', 'descargable', 'comparativa']),
    title, description, keywords, category,      // = blog (reusa las 6 categorías)
    author, publishDate, updatedDate?,
    reviewer?,                                    // E-E-A-T clínico (igual que blog)
    image?, imageAlt?,
    file?: z.string(),                            // ruta al PDF/Excel en /public/descargables
    gated: z.boolean().default(false),            // true → pide email antes de descargar
    preview?: z.string(),                         // captura del recurso
    faq: z.array(...).min(3),                     // obligatorio (igual que blog)
    related: z.array(z.string()).default([]),
    ctaKind?, ctaTitle?, ctaText?, ctaLabel?,
  }),
});
```

**Calculadoras = páginas `.astro` bespoke** bajo `/recursos/calculadoras/` (código, no Markdown). Es uno de los pocos lugares donde el JS de cliente se justifica (cálculo interactivo).

## Estrategia de descargables (decisión tomada: MEZCLA)

- **Ungated = link-bait** (herramientas que la gente enlaza): calculadora de rentabilidad, control de inventario en Excel, calendario de vacunación. Acceso directo, cero fricción → maximiza backlinks.
- **Gated = lead** (plantillas de alto valor): checklist para abrir clínica, formato de expediente (PDF), consentimiento informado. Modal de email (reutiliza el patrón **Formspree** de `RegisterModal.astro`) → entrega el archivo.

## Reutilización de componentes existentes

- `ResourceCard` ≈ `ArticleCard` (line-grid `gap-px bg-line`).
- `TypeNav` ≈ `CategoryNav` (chips por tipo de recurso).
- `Pagination`, `Breadcrumbs`, `BlogCTA`, `TableOfContents` → reutilizables tal cual.
- Modal de descarga gated ≈ `RegisterModal` (Formspree + vista de éxito).

## Schema.org

| Tipo | Schema |
|------|--------|
| Guía | `Article` / `HowTo` (schema válido aunque el rich result esté retirado) |
| Plantilla / descargable | `DigitalDocument` / `CreativeWork` |
| Calculadora | `WebApplication` |
| `/recursos` (hub) | `CollectionPage` + `BreadcrumbList` |

## Interlinking

- Cada **artículo del blog** enlaza a su recurso relacionado (*content upgrade* → email → nurture → trial). Cierra el embudo blog ↔ recursos ↔ leads.
- `/recursos` enlaza a todas las sub-secciones y a los clústeres del blog (distribuye equity).
- Las **comparativas** usan la skill `competitor-alternatives` (formatos "vs" / "alternativa a").

## Backlog inicial priorizado (cuando se construya)

**P0 (link-bait, ungated):**
1. 🧮 Calculadora de rentabilidad de consultas — nadie enlaza un post, todos enlazan una calculadora.
2. 📊 Control de inventario en Excel (descargable).
3. 💉 Calendario de vacunación (perros / gatos) — **requiere revisor MVZ** (E-E-A-T / YMYL).

**P1 (lead, gated):**
4. ✅ Checklist para abrir una clínica veterinaria.
5. 📄 Formato de expediente clínico veterinario (PDF).
6. 📝 Plantilla de consentimiento informado — **requiere revisor MVZ**.

## Requisito bloqueante para contenido clínico

Calendario de vacunación, consentimiento y cualquier dosis/protocolo tocan **YMYL** (salud animal). Antes de publicarlos: dar de alta un autor **MVZ con cédula** en `src/data/blog.ts` (`credentials`, `isVet: true`, `sameAs`) y asignarlo como `reviewer`. El mecanismo (`reviewer` → byline "Revisado por…" + schema `reviewedBy`) ya está implementado en el blog y se reutiliza aquí.
