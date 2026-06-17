# Veteris — Landing Page SaaS B2B Veterinario

## Problema original (verbatim del usuario)
Crear una landing page profesional para un SaaS B2B de gestión de clínicas veterinarias.
**Mensaje clave:** "Toda la operación de una veterinaria conectada en una sola plataforma."

### Requisitos del producto
- Funciones de gestión clínica (pacientes, expedientes, consultas, vacunas)
- Organización (agenda, roles de staff)
- Operaciones (inventario, productos, servicios)
- Administración (facturación, POS, métricas)
- Automatización (WhatsApp)
- Experiencia memorable con scroll animations / visual storytelling
- Alto enfoque en SEO, performance y accesibilidad
- **Idioma:** Español (toda la UI)

### Restricción técnica
Usuario pidió Astro + TS; entorno usa React + JS (Vite/CRA). Compensamos con SEO meta tags, JSON-LD schema y animaciones premium con Framer Motion.

---

## Estado actual (Feb 2026)
**MVP completo y validado al 100%** — landing estática lista para producción visual.

### Stack
- React 19 + react-router-dom 7
- Tailwind CSS 3.4 + shadcn/ui
- Framer Motion 11.18 (scroll-driven animations)
- Sonner (toasts)
- HSL design tokens (sage forest green + warm terracotta)

### Arquitectura
```
/app/frontend/src/
├── App.js                       (router + Toaster sonner)
├── index.css                    (HSL tokens, gradients, keyframes)
├── pages/Landing.jsx            (agregador de secciones)
├── hooks/useCountUp.js          (IntersectionObserver countup)
├── lib/cta.js                   (ctaToast helper: trial|demo|sales|login)
└── components/site/
    ├── Logo.jsx
    ├── Navbar.jsx              (sticky + backdrop-blur on scroll)
    ├── ScrollProgress.jsx      (barra gradient top, Linear-style)
    ├── Hero.jsx                (useScroll/useTransform parallax)
    ├── HeroDashboard.jsx       (mockup agenda animado)
    ├── LogosStrip.jsx          (marquee infinito)
    ├── ProblemSolution.jsx     (sin Veteris vs con Veteris)
    ├── Features.jsx            (8 cards + SpotlightCard hover)
    ├── SpotlightCard.jsx       (radial-gradient mouse follower)
    ├── ProductTour.jsx         (4 tabs: Agenda, Expediente, Inventario, POS)
    ├── HowItWorks.jsx          (5 pasos zig-zag)
    ├── Automation.jsx          (mockup WhatsApp con stagger)
    ├── Metrics.jsx             (countup animado: 68%, 3.4x, +24%, 99.9%)
    ├── Testimonials.jsx        (4 cards, big card en bento)
    ├── Pricing.jsx             (3 tiers + switch mensual/anual)
    ├── FAQ.jsx                 (Accordion shadcn, 6 preguntas)
    ├── FinalCTA.jsx            (dark CTA card)
    └── Footer.jsx              (4 columnas + social)
```

### SEO / Performance / Accesibilidad
- `<html lang="es">`, meta description, OG tags, Twitter card, JSON-LD SoftwareApplication schema
- Fonts preconnected (Space Grotesk + Inter)
- `prefers-reduced-motion` respetado vía Framer Motion
- Aria-labels en iconos, semántica con `<section>`, `<figure>`, `<footer>`
- data-testid en todos los CTAs principales

---

## Implementado en esta sesión (Feb 2026)
1. **ScrollProgress** — barra de progreso fija top, gradient primary→accent (Linear-style)
2. **Hero parallax** — dashboard mockup con useScroll + useTransform (y, scale, rotate)
3. **Blobs parallax** + grid fade-out al scrollear
4. **CountUp animado** en sección Métricas (IntersectionObserver, easing cubic)
5. **SpotlightCard** en grid de Features (radial-gradient mouse follower)
6. **Toast notifications** (sonner) en todos los CTAs: Hero, Navbar, Pricing, FinalCTA
7. **Micro-interacciones**: hover -translate-y-0.5, scale + rotate en iconos de cards
8. **17 componentes** de landing + design tokens HSL

---

## Backlog (P1/P2)
- **P1**: Captura real de leads — integrar Resend (email) + MongoDB para guardar trials/demos
- **P1**: Página de precios detallada como ruta separada con tabla comparativa completa
- **P2**: Variaciones A/B del Hero (gradient text vs underline animado)
- **P2**: Blog SEO sub-route + sitemap.xml + robots.txt
- **P2**: Selector de idioma (PT-BR para mercado brasileño)
- **P3**: Calculadora ROI interactiva
- **P3**: Live chat widget

---

## Test status
- `iteration_1.json` — 100% pass, 18/18 features verificados, 0 errores de consola
- No requiere credenciales (sitio estático)
