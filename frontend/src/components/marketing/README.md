# Marketing Dashboard (mockup del Hero)

Versión **"sesión fotográfica"** del panel de SaaSlyVet. Existe con un único
propósito: renderizarse aislada, capturarse en alta resolución e insertarse
dentro de la tablet del Hero de la landing.

> ⚠️ **No es el dashboard de producción.** Es una representación visual del
> producto, optimizada para verse premium en una imagen — no para que un
> usuario la opere. El dashboard real de la app **no se tocó**.

## Archivos

| Archivo | Rol |
| --- | --- |
| `MarketingDashboard.astro` | El panel. Componente autónomo, sin estado ni JS. |
| `../../pages/mockup-dashboard.astro` | Página interna de captura (aislada, `noindex`, fuera del sitemap). |

## Cómo capturar

La página fija el **ancho en 1440px** y deja que la **altura la defina el
contenido** (≈ 980px, relación ~3:2, encaja bien en una tablet). Dos modos:

- **Normal** (`/mockup-dashboard`) — tarjeta con fondo y sombra, para revisar
  el diseño aislado.
- **Bare** (`/mockup-dashboard?bare`) — sin fondo, padding ni bordes: la
  captura queda recortada exactamente al rectángulo del dashboard, listo para
  rellenar la pantalla de la tablet.

```bash
# 2× ≈ 2880px de ancho. Para 4K real sube el factor a ~2.7.
chrome --headless=new --hide-scrollbars --force-device-scale-factor=2.7 \
  --window-size=1480,1080 --screenshot=dashboard.png \
  "http://localhost:3000/mockup-dashboard?bare"
```

## Qué se simplificó (y por qué)

Todo se decidió priorizando **claridad, aire y jerarquía** sobre cantidad de
información o fidelidad al producto real (referencias: Apple, Linear, Notion,
Stripe).

| Área | Producción (real) | Aquí | Por qué |
| --- | --- | --- | --- |
| **Sidebar** | Muchas secciones (Cobros, Recetas, Hospital, etc.) | Solo 5: Dashboard, Agenda, Pacientes, Historial clínico, Inventario | Reduce ruido; deja las opciones que comunican valor de un vistazo. |
| **Fila superior** | Métricas densas | 4 tarjetas grandes: Consultas hoy · Pacientes · Ventas del día · Recordatorios | Números grandes = valor inmediato; mucho espacio entre tarjetas. |
| **Agenda** | Lista larga / calendario | Solo 3 consultas (Luna, Rocky, Mía) | Suficiente para transmitir "gestión de citas" sin saturar. |
| **Panel lateral** | Varios widgets | 2: "Próximo turno" y "Estado de la clínica" | La pantalla respira; nada compite por atención. |
| **Gráfico** | Reportes interactivos | Un único gráfico de barras **decorativo** (Ingresos de la semana) | Aporta señal visual de "analítica" sin lógica ni interacción. |
| **Tipografía** | Tamaño de app | Ligeramente mayor | Sigue legible cuando el dashboard se reduce dentro del mockup. |
| **Iconografía** | Abundante | Solo donde aporta claridad | Menos ruido visual. |
| **Datos** | Reales/variables | Fijos y coherentes (12, 248, $8,450, 5…) | Consistencia; nada de placeholders. |
| **Interacción** | Completa | Ninguna (sin JS, sin hover/estado) | Es una composición para foto, no una UI operable. |

## Identidad visual

Reutiliza los **tokens de diseño existentes** (`tailwind.config.js`): sidebar
`brand` (verde), textos `ink`, superficies `surface`/`page`/`muted`, acentos
`success`/`warning`/`accent`, fuentes `Inter` + `Space Grotesk`, y los iconos
inline de `components/icons/`. No introduce colores ni dependencias nuevas.
