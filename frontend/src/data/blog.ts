// Fuente única de verdad del blog: categorías (hub / pillar pages), autores,
// CTA contextual y helpers. El esquema de la colección (content.config.ts) valida
// contra CATEGORY_SLUGS y AUTHOR_IDS exportados aquí.

export interface CtaConfig {
  kind: 'trial' | 'demo' | 'sales';
  title: string;
  text: string;
  label: string;
}

/** Solución de un problema en la hub page; si `slug` existe y está publicado, se enlaza. */
export interface Solution {
  text: string;
  slug?: string;
}

export interface QA {
  q: string;
  a: string;
}

export interface PillarCategory {
  slug: string;
  name: string; // navegación / chips
  eyebrow: string; // etiqueta superior de la hub
  title: string; // H1 + <title> de la hub (INTENCIÓN INFORMACIONAL)
  description: string; // meta description de la hub
  keyword: string; // keyword informacional del hub (NO el término cabeza comercial)
  icon: string; // nombre en components/icons
  intro: string; // lead de la hub
  whatIs: string[]; // "¿Qué es…?" (definicional)
  problems: string[]; // problemas comunes
  solutions: Solution[]; // cómo se solucionan (cada uno enlaza a un artículo si existe)
  faq: QA[]; // FAQ a nivel categoría → FAQPage schema
  defaultCta: CtaConfig; // CTA contextual por defecto del clúster
  // Guarda anti-canibalización: ancla del término cabeza COMERCIAL hacia la home.
  commercialAnchor?: { text: string; href: string };
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  sameAs?: string[]; // perfiles verificados → Person schema (E-E-A-T)
  credentials?: string; // p.ej. "MVZ · Céd. Prof. 1234567" → revisor clínico (E-E-A-T YMYL)
  isVet?: boolean; // true = puede firmar como revisor clínico
}

// ── Categorías (topic clusters) ────────────────────────────────────────────────
// Orden = orden en la navegación. Software primero (mayor intención comercial).
export const CATEGORIES: PillarCategory[] = [
  {
    slug: 'software-veterinario',
    name: 'Software Veterinario',
    eyebrow: 'Guía completa',
    // INTENCIÓN INFORMACIONAL: la home gana "software veterinario"/"sistema veterinario"
    // (transaccional). Esta hub apunta a "qué es / cómo elegir".
    title: 'Qué es un software veterinario y cómo elegir el correcto',
    description:
      'Qué es un software veterinario, para qué sirve, qué funciones importan y cómo elegir el sistema correcto para tu clínica. Guía informativa, sin tecnicismos.',
    keyword: 'qué es un software veterinario',
    icon: 'Stethoscope',
    intro:
      'Antes de comparar precios o pedir una demo conviene entender qué es realmente un software veterinario, qué problemas resuelve y cómo distinguir uno bueno de uno que solo suma pantallas. Esta guía te da ese criterio.',
    whatIs: [
      'Un software veterinario es una plataforma que centraliza la operación de una clínica —agenda, expediente clínico, inventario y cobros— en un solo lugar conectado. La palabra clave es "conectado": cuando atiendes una consulta, el sistema descuenta el medicamento, registra el cobro y guarda la nota clínica en un solo movimiento.',
      'No es un calendario de citas con más colores ni un Excel compartido. Si después de registrar una venta tienes que "actualizar el inventario en otro lado", ese software no está resolviendo el problema, lo está moviendo de lugar.',
    ],
    problems: [
      'El trabajo administrativo se come el día: recordar citas, cuadrar caja y buscar historiales toma horas.',
      'La información vive dispersa entre libretas, hojas de cálculo y recibos sueltos que no se hablan entre sí.',
      'Demasiadas opciones en el mercado, precios opacos y promesas que suenan idénticas.',
    ],
    solutions: [
      { text: 'Entiende qué funciones sí importan y cuáles son relleno antes de decidir.', slug: 'que-funciones-software-veterinario' },
      { text: 'Compara las opciones del mercado con criterios objetivos, no por lista de funciones.', slug: 'mejor-software-veterinario' },
      { text: 'Elige entre software web o de escritorio según cómo opera tu clínica.', slug: 'software-veterinario-nube-vs-escritorio' },
      { text: 'Migra desde Excel o la libreta sin frenar la operación.', slug: 'migrar-de-excel-a-software-veterinario' },
    ],
    faq: [
      {
        q: '¿Qué es exactamente un software veterinario?',
        a: 'Es una plataforma que reúne agenda, expediente clínico, inventario y cobros de la clínica en un solo sistema conectado, de forma que cada acción (una consulta, una venta) actualiza todo lo demás automáticamente.',
      },
      {
        q: '¿Para qué sirve un software veterinario?',
        a: 'Sirve para reducir el trabajo administrativo, evitar errores (citas perdidas, inventario descuadrado, cobros sin registrar) y tomar decisiones con datos reales. En la práctica, devuelve horas cada semana.',
      },
      {
        q: '¿Qué debe tener un buen software veterinario?',
        a: 'Agenda con recordatorios automáticos por WhatsApp, expediente clínico digital, inventario que se descuenta solo, cobros con cierre de caja, automatización de seguimiento y reportes. Y que sea fácil de usar sin capacitación de días.',
      },
    ],
    defaultCta: {
      kind: 'trial',
      title: '¿Listo para ver un software veterinario en acción?',
      text: 'SaaslyVet conecta agenda, expediente, inventario y cobros en un solo lugar. Pruébalo gratis, sin tarjeta.',
      label: 'Empieza gratis',
    },
    // El término cabeza comercial se enlaza a la home, no a esta hub.
    commercialAnchor: { text: 'software de gestión veterinaria', href: '/' },
  },
  {
    slug: 'gestion-veterinaria',
    name: 'Gestión Veterinaria',
    eyebrow: 'Operación diaria',
    title: 'Gestión veterinaria: cómo organizar la operación de tu clínica',
    description:
      'Guía de gestión veterinaria: agenda, expediente clínico, flujo de pacientes y procesos para operar una clínica ordenada, sin caos administrativo.',
    keyword: 'gestión veterinaria',
    icon: 'CalendarCheck2',
    intro:
      'Gestionar una clínica es coordinar agenda, expediente, personal y cobros sin que nada se caiga. La mayoría de los problemas de una veterinaria no son clínicos, son de organización. Aquí verás cómo ponerles orden.',
    whatIs: [
      'La gestión veterinaria abarca todos los procesos que hacen que una clínica funcione: cómo se agendan las citas, cómo se registra la historia clínica, cómo fluye el paciente de recepción al cobro y cómo se decide con datos en vez de intuición.',
      'Incluye el expediente clínico —físico o digital—, la coordinación del equipo y el seguimiento de cada paciente. Una buena gestión ataca las fugas (citas perdidas, expedientes incompletos, seguimientos olvidados) antes de que se vuelvan pérdidas de dinero.',
    ],
    problems: [
      'Citas que se pierden por ausentismo y huecos en la agenda que nadie llena.',
      'Expedientes incompletos o repartidos en papel que no se encuentran cuando el paciente vuelve.',
      'Seguimientos post-consulta y refuerzos de vacuna que dependen de que "alguien se acuerde".',
    ],
    solutions: [
      { text: 'Reduce el ausentismo a citas con recordatorios y confirmaciones.', slug: 'reducir-ausentismo-citas-veterinaria' },
      { text: 'Digitaliza el expediente clínico y define qué debe incluir.', slug: 'expediente-clinico-veterinario' },
      { text: 'Organiza la agenda para aprovechar cada hora de consulta.', slug: 'agenda-veterinaria' },
      { text: 'Da seguimiento a cada paciente después de la consulta.', slug: 'seguimiento-pacientes-veterinaria' },
    ],
    faq: [
      {
        q: '¿Qué es la gestión veterinaria?',
        a: 'Es el conjunto de procesos que mantienen operando una clínica: agenda, expediente clínico, flujo de pacientes, seguimiento y toma de decisiones con datos. Va más allá de la parte clínica.',
      },
      {
        q: '¿Cómo mejorar la gestión de una clínica veterinaria?',
        a: 'Estandarizando procesos (cómo se agenda, cómo se registra el expediente, cómo se cobra) y apoyándolos en un sistema que conecte todo, para eliminar la recaptura y las fugas de información.',
      },
      {
        q: '¿Qué es un expediente clínico veterinario?',
        a: 'Es el registro completo de cada paciente: consultas, recetas, vacunas, peso, imágenes y archivos. Digital, permite consultar toda la historia en una pantalla y no perder información entre visitas.',
      },
    ],
    defaultCta: {
      kind: 'trial',
      title: '¿Tu clínica en orden, en un solo lugar?',
      text: 'Agenda, expediente e historial de cada paciente conectados. Prueba SaaslyVet gratis, sin tarjeta.',
      label: 'Ordena tu clínica',
    },
  },
  {
    slug: 'automatizacion',
    name: 'Automatización',
    eyebrow: 'WhatsApp e IA',
    title: 'Automatización para clínicas veterinarias: recordatorios y flujos',
    description:
      'Cómo automatizar recordatorios por WhatsApp, confirmaciones de cita, seguimiento de vacunas y recuperación de pacientes en tu clínica veterinaria.',
    keyword: 'automatización veterinaria',
    icon: 'Sparkles',
    intro:
      'Cada recordatorio que mandas a mano es tiempo que no dedicas a atender. La automatización se encarga de las tareas repetitivas —confirmar, recordar, dar seguimiento, recuperar— para que tu equipo se enfoque en los pacientes.',
    whatIs: [
      'Automatizar en una clínica significa que el sistema hace solo las tareas de comunicación y seguimiento que hoy hace una persona: confirmar la cita por WhatsApp, recordar la próxima vacuna, dar seguimiento tras una cirugía o reactivar a un cliente que no vuelve.',
      'El canal que más rinde en México es WhatsApp, por sus altísimas tasas de apertura. Una clínica que automatiza recordatorios reduce el ausentismo de forma drástica: el cliente confirma con un toque y la agenda deja de tener huecos silenciosos.',
    ],
    problems: [
      'Se pierde tiempo enviando recordatorios y confirmaciones uno por uno.',
      'Vacunas y refuerzos que vencen porque nadie avisó a tiempo.',
      'Clientes que dejan de venir y nunca se les vuelve a contactar.',
    ],
    solutions: [
      { text: 'Automatiza los recordatorios de citas por WhatsApp.', slug: 'recordatorios-whatsapp-veterinaria' },
      { text: 'Programa avisos de vacunas y desparasitación.', slug: 'automatizar-recordatorios-vacunas' },
      { text: 'Recupera pacientes inactivos con campañas simples.', slug: 'recuperar-clientes-veterinaria' },
    ],
    faq: [
      {
        q: '¿Qué se puede automatizar en una clínica veterinaria?',
        a: 'Confirmaciones y recordatorios de cita, avisos de vacunas y desparasitación, seguimiento post-consulta y campañas de recuperación de pacientes inactivos, principalmente por WhatsApp.',
      },
      {
        q: '¿Por qué WhatsApp para las clínicas veterinarias?',
        a: 'Porque en México tiene tasas de apertura muy superiores al correo o la llamada, y el cliente responde de inmediato. Es el canal que más citas rescata y más reduce el ausentismo.',
      },
      {
        q: '¿La automatización reemplaza a la recepción?',
        a: 'No: la libera de tareas repetitivas. Recepción deja de mandar mensajes a mano y dedica ese tiempo a atender bien a quien está en la clínica.',
      },
    ],
    defaultCta: {
      kind: 'trial',
      title: '¿Quieres que los recordatorios se manden solos por WhatsApp?',
      text: 'SaaslyVet confirma citas, avisa de vacunas y recupera pacientes en automático. Pruébalo gratis, sin tarjeta.',
      label: 'Automatiza tu clínica',
    },
  },
  {
    slug: 'administracion',
    name: 'Administración',
    eyebrow: 'Inventario e indicadores',
    title: 'Administración de clínicas veterinarias: inventario y rentabilidad',
    description:
      'Cómo administrar una clínica veterinaria: control de inventario, caducidades, indicadores, gastos y decisiones basadas en datos reales.',
    keyword: 'administración de clínicas veterinarias',
    icon: 'BarChart3',
    intro:
      'Detrás de cada clínica que funciona hay una administración que no se ve: inventario al día, personal coordinado y números claros. Esta guía es para el dueño que, además de atender, dirige.',
    whatIs: [
      'La administración de una clínica conecta las piezas que no son estrictamente clínicas: control de inventario y caducidades, permisos del personal, seguimiento de gastos e ingresos, y los indicadores que dicen si el negocio está sano.',
      'No hace falta un MBA. Con procesos claros y un sistema que muestre los números correctos, la administración deja de ser una carga y se vuelve una ventaja competitiva.',
    ],
    problems: [
      'Medicamentos que caducan o faltantes que se descubren cuando ya no hay stock.',
      'No saber con certeza cuánto deja cada servicio ni dónde se va el dinero.',
      'Accesos sin control: todos ven y tocan todo, con riesgo de errores.',
    ],
    solutions: [
      { text: 'Controla el inventario sin contar a mano y evita mermas.', slug: 'inventario-veterinario' },
      { text: 'Evita caducidades con alertas automáticas.', slug: 'control-de-caducidades-veterinaria' },
      { text: 'Define qué indicadores (KPIs) revisar cada semana.', slug: 'kpis-clinica-veterinaria' },
      { text: 'Asigna permisos por rol para trabajar sin accidentes.', slug: 'roles-y-permisos-veterinaria' },
    ],
    faq: [
      {
        q: '¿Cómo administrar una clínica veterinaria?',
        a: 'Con procesos claros para inventario, personal y finanzas, apoyados en un sistema que muestre indicadores reales: rentabilidad por servicio, ocupación de agenda, rotación de inventario y retención de clientes.',
      },
      {
        q: '¿Cómo controlar el inventario de una veterinaria?',
        a: 'Con un sistema que descuente el stock automáticamente con cada tratamiento y alerte de existencias bajas y caducidades, en lugar de conteos manuales que nunca cuadran.',
      },
      {
        q: '¿Qué indicadores debe revisar el dueño de una clínica?',
        a: 'Ingresos y su tendencia, productos y servicios más rentables, ocupación de la agenda, rotación de inventario y retención de clientes. Semanalmente, no una vez al año.',
      },
    ],
    defaultCta: {
      kind: 'demo',
      title: 'Controla inventario, caja e indicadores sin Excel',
      text: 'Mira en una demo cómo SaaslyVet te da los números de tu clínica en tiempo real.',
      label: 'Ver una demo',
    },
  },
  {
    slug: 'facturacion-electronica',
    name: 'Facturación Electrónica',
    eyebrow: 'SAT y CFDI',
    title: 'Facturación electrónica para veterinarias: CFDI, SAT y cobros',
    description:
      'Guía de facturación electrónica y cobros para clínicas veterinarias en México: CFDI, SAT, cierre de caja y métodos de pago sin recapturar.',
    keyword: 'facturación electrónica veterinaria',
    icon: 'CreditCard',
    intro:
      'El dinero que entra a tu clínica merece el mismo orden que el expediente de un paciente. Esta guía cubre cobros, cierre de caja y facturación electrónica (CFDI) para que ningún peso se pierda en el camino.',
    whatIs: [
      'La facturación en una clínica va más allá de emitir un CFDI: incluye cómo cobras en el mostrador, qué métodos de pago aceptas, cómo cierras la caja al final del día y cómo evitas recapturar la misma venta en dos sistemas.',
      'Cuando el cobro está conectado al expediente y al inventario, cada venta queda documentada y el cierre de caja se vuelve automático. La facturación electrónica (CFDI ante el SAT) se apoya en esos datos ya capturados.',
    ],
    problems: [
      'Servicios que no se registran, descuentos mal aplicados y cajas que no cuadran.',
      'Recapturar la misma venta para cobrar y luego para facturar.',
      'Dudas sobre cómo cumplir con el CFDI y el SAT sin volverse contador.',
    ],
    solutions: [
      { text: 'Cierra la caja cada día sin errores ni recaptura.', slug: 'cierre-de-caja-veterinaria' },
      { text: 'Factura correctamente (CFDI) desde la operación de la clínica.', slug: 'facturacion-veterinaria-mexico' },
      { text: 'Elige y cobra con los métodos de pago que convienen.', slug: 'metodos-de-pago-veterinaria' },
    ],
    faq: [
      {
        q: '¿Cómo se factura en una clínica veterinaria en México?',
        a: 'Emitiendo CFDI ante el SAT por los servicios y productos vendidos. Lo ideal es que el sistema de cobro alimente la facturación con los datos ya capturados, para no recapturar cada venta.',
      },
      {
        q: '¿Qué diferencia hay entre cobrar y facturar?',
        a: 'Cobrar es recibir el pago en el mostrador (efectivo, tarjeta, transferencia). Facturar es emitir el comprobante fiscal (CFDI) de esa venta. Deben estar conectados para no duplicar el trabajo.',
      },
      {
        q: '¿Qué es el cierre de caja y por qué importa?',
        a: 'Es cuadrar al final del día lo cobrado contra lo registrado. Si el sistema lo hace automático a partir de las ventas, evitas descuadres y sumar recibos a mano.',
      },
    ],
    defaultCta: {
      kind: 'trial',
      title: 'Cobra y factura sin recapturar',
      text: 'Cobros, cierre de caja y comprobantes conectados a tu operación. Prueba SaaslyVet gratis, sin tarjeta.',
      label: 'Ordena tus cobros',
    },
  },
  {
    slug: 'transformacion-digital',
    name: 'Transformación Digital',
    eyebrow: 'Del papel a lo digital',
    title: 'Transformación digital para clínicas veterinarias: del papel al sistema',
    description:
      'Cómo digitalizar una clínica veterinaria: dejar el papel y el Excel, migrar tus datos y adoptar un sistema sin frenar la operación.',
    keyword: 'digitalizar clínica veterinaria',
    icon: 'TrendingUp',
    intro:
      'Pasar del papel y el Excel a un sistema no es un salto al vacío: es una transición de un par de semanas bien planeada. Esta guía te muestra cómo digitalizar tu clínica sin perder información ni frenar la atención.',
    whatIs: [
      'La transformación digital de una clínica es el paso de procesos manuales (libretas, hojas de cálculo, recibos sueltos) a un sistema que centraliza y conecta todo. No se trata de "usar tecnología" por moda, sino de eliminar el trabajo repetitivo y los errores.',
      'El mayor freno no es técnico, es el miedo a "perder días capturando todo" o a que el equipo no lo adopte. Ambos se resuelven con una migración por etapas y un sistema fácil de usar.',
    ],
    problems: [
      'Información atrapada en papel y Excel que no se respalda ni se comparte.',
      'Miedo a que migrar signifique parar la clínica o perder datos.',
      'Resistencia del equipo a cambiar la forma de trabajar.',
    ],
    solutions: [
      { text: 'Migra de Excel a un sistema sin frenar la operación.', slug: 'migrar-de-excel-a-software-veterinario' },
      { text: 'Digitaliza el expediente clínico por etapas.', slug: 'expediente-clinico-veterinario' },
      { text: 'Logra que tu equipo adopte el nuevo sistema.', slug: 'adopcion-equipo-software-veterinario' },
    ],
    faq: [
      {
        q: '¿Cómo digitalizar una clínica veterinaria?',
        a: 'Por etapas: se arranca registrando a los pacientes conforme llegan a consulta y se prioriza el histórico de los clientes frecuentes. En pocas semanas la base activa está en el sistema, sin haber parado la operación.',
      },
      {
        q: '¿Es difícil dejar el papel y el Excel?',
        a: 'No si se hace gradualmente y con apoyo del proveedor para la carga inicial de pacientes, productos y precios. La transición típica dura un par de semanas, no meses.',
      },
      {
        q: '¿Y si mi equipo se resiste al cambio?',
        a: 'La adopción mejora cuando el sistema es fácil de usar y cada persona ve un beneficio concreto (menos recaptura, menos llamadas, cierre de caja automático). Empezar por una función que resuelva un dolor evidente ayuda.',
      },
    ],
    defaultCta: {
      kind: 'trial',
      title: 'Deja atrás el papel y el Excel',
      text: 'Migra tu clínica a un sistema en la nube, por etapas y sin frenar la atención. Prueba SaaslyVet gratis.',
      label: 'Empieza la migración',
    },
  },
];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [string, ...string[]];

// Tamaño de página para el listado del blog y los hubs de categoría.
export const POSTS_PER_PAGE = 9;

// ── Autores (E-E-A-T: varias voces, no un solo autor) ──────────────────────────
export const AUTHORS: Author[] = [
  {
    id: 'equipo-editorial',
    name: 'Equipo Editorial SaaslyVet',
    role: 'Redacción',
    bio: 'El equipo editorial de SaaslyVet investiga y escribe guías prácticas sobre gestión, software y operación de clínicas veterinarias, junto a veterinarios y clínicas reales.',
  },
  {
    id: 'equipo-saaslyvet',
    name: 'Equipo SaaslyVet',
    role: 'Producto',
    bio: 'El equipo de producto de SaaslyVet comparte cómo funciona el software de gestión veterinaria por dentro: agenda, expediente, inventario, cobros y automatización.',
  },
  {
    id: 'felipe-diaz',
    name: 'Felipe Díaz',
    role: 'Fundador de SaaslyVet',
    bio: 'Fundador de SaaslyVet. Escribe sobre las lecciones técnicas y de negocio de construir software para clínicas veterinarias en México, a partir del trabajo directo con ellas.',
    sameAs: [],
  },
];

export const AUTHOR_IDS = AUTHORS.map((a) => a.id) as [string, ...string[]];

// CTA global de reserva si una categoría no define defaultCta (no debería pasar).
export const FALLBACK_CTA: CtaConfig = {
  kind: 'trial',
  title: '¿Listo para ordenar tu clínica?',
  text: 'SaaslyVet centraliza agenda, expediente, inventario y cobros en un solo lugar. Pruébalo gratis, sin tarjeta.',
  label: 'Empieza gratis',
};

// ── Helpers ────────────────────────────────────────────────────────────────────

export function getCategory(slug: string): PillarCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getAuthor(id: string): Author | undefined {
  return AUTHORS.find((a) => a.id === id);
}

/**
 * Resuelve el CTA contextual de un artículo: overrides del frontmatter
 * (ctaKind/ctaTitle/ctaText/ctaLabel) sobre el defaultCta de su categoría.
 */
export function resolveCta(
  category: PillarCategory | undefined,
  overrides: { kind?: CtaConfig['kind']; title?: string; text?: string; label?: string } = {}
): CtaConfig {
  const base = category?.defaultCta ?? FALLBACK_CTA;
  return {
    kind: overrides.kind ?? base.kind,
    title: overrides.title ?? base.title,
    text: overrides.text ?? base.text,
    label: overrides.label ?? base.label,
  };
}

/** Tiempo estimado de lectura (min). ~200 palabras/min, mínimo 1. */
export function readingTime(markdown: string, override?: number): number {
  if (override && override > 0) return override;
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Fecha larga en es-MX: "6 de julio de 2026". */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** ISO (YYYY-MM-DD) para <time datetime> y schema. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
