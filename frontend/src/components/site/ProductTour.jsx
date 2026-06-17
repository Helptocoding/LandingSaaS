import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CalendarDays, FileText, Package, CreditCard, Check } from "lucide-react";

const tabs = [
  {
    id: "agenda",
    label: "Agenda",
    icon: CalendarDays,
    title: "Una agenda que tu equipo entiende sin entrenarse",
    desc: "Visualiza citas por veterinario, sala o servicio. Arrastra para reagendar, confirma con WhatsApp y reduce ausencias hasta un 68%.",
    bullets: [
      "Citas online desde tu sitio web",
      "Recordatorios automáticos 24h antes",
      "Vista de día, semana o calendario",
    ],
  },
  {
    id: "clinico",
    label: "Expediente",
    icon: FileText,
    title: "Toda la historia clínica del paciente en una pantalla",
    desc: "Notas SOAP, recetas, vacunas, peso, imágenes diagnósticas y antecedentes. Lo que necesitas para decidir, donde lo necesitas.",
    bullets: [
      "Plantillas clínicas configurables",
      "Recetas y certificados en un clic",
      "Historial de vacunación con alertas",
    ],
  },
  {
    id: "inventario",
    label: "Inventario",
    icon: Package,
    title: "Inventario que se mueve solo con cada consulta",
    desc: "Cuando aplicas un medicamento o producto, el stock se descuenta automáticamente. Sin dobles registros.",
    bullets: [
      "Alertas de stock mínimo",
      "Control de vencimientos",
      "Reportes por proveedor y rotación",
    ],
  },
  {
    id: "pos",
    label: "POS & Caja",
    icon: CreditCard,
    title: "Cobra en segundos y cierra caja sin estrés",
    desc: "Suma servicios y productos al ticket. Recibe efectivo, tarjeta o transferencia. Concilia al final del día con un clic.",
    bullets: [
      "Tickets de venta digitales",
      "Múltiples métodos de pago",
      "Cierre de caja y arqueos",
    ],
  },
];

const Visuals = {
  agenda: AgendaVisual,
  clinico: ClinicoVisual,
  inventario: InventarioVisual,
  pos: PosVisual,
};

export default function ProductTour() {
  const [active, setActive] = useState("agenda");
  const current = tabs.find((t) => t.id === active);
  const Visual = Visuals[active];

  return (
    <section id="tour" className="py-24 lg:py-32">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary mb-3">Producto</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Echa un vistazo a Veteris.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cuatro módulos. Una sola fuente de verdad para tu clínica.
          </p>
        </div>

        <Tabs value={active} onValueChange={setActive}>
          <TabsList className="flex flex-wrap justify-center bg-muted/60 p-1.5 rounded-2xl h-auto gap-1 mx-auto">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                className="data-[state=active]:bg-card data-[state=active]:shadow-soft data-[state=active]:text-foreground text-muted-foreground gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-12 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight text-balance">
                    {current.title}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    {current.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {current.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-foreground">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute inset-0 -z-10 translate-y-6 rounded-3xl bg-gradient-primary opacity-10 blur-2xl" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Visual />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

function AgendaVisual() {
  const hours = ["09:00", "10:00", "11:00", "12:00", "13:00"];
  const cells = [
    { row: 0, col: 0, pet: "Toby", svc: "Consulta", color: "bg-primary/15 border-primary/40 text-primary" },
    { row: 1, col: 1, pet: "Mía", svc: "Vacuna", color: "bg-accent/15 border-accent/40 text-accent" },
    { row: 2, col: 2, pet: "Rocky", svc: "Cirugía", color: "bg-chart-3/15 border-chart-3/40 text-foreground" },
    { row: 3, col: 1, pet: "Luna", svc: "Control", color: "bg-primary/15 border-primary/40 text-primary" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">Lunes 18 · Marzo</p>
          <p className="text-xs text-muted-foreground">3 veterinarios en turno</p>
        </div>
        <div className="flex gap-1">
          <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">Día</span>
          <span className="text-xs px-2 py-1 rounded-md bg-foreground text-background">Semana</span>
        </div>
      </div>
      <div className="grid grid-cols-4 text-xs border-b border-border">
        <div></div>
        {["Dra. Vega", "Dr. Ortiz", "Dra. Mora"].map((v) => (
          <div key={v} className="px-3 py-2 font-medium text-muted-foreground border-l border-border">{v}</div>
        ))}
      </div>
      <div className="grid grid-cols-4">
        <div className="flex flex-col">
          {hours.map((h) => (
            <div key={h} className="h-14 px-3 py-1 text-[10px] text-muted-foreground border-t border-border">{h}</div>
          ))}
        </div>
        {[0, 1, 2].map((col) => (
          <div key={col} className="flex flex-col border-l border-border">
            {hours.map((_, row) => {
              const cell = cells.find((c) => c.row === row && c.col === col);
              return (
                <div key={row} className="relative h-14 border-t border-border p-1">
                  {cell && (
                    <div className={`h-full rounded-md border ${cell.color} px-2 py-1 text-[11px] font-medium`}>
                      {cell.pet}
                      <div className="text-[10px] opacity-80 font-normal">{cell.svc}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function ClinicoVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center font-display font-semibold">L</div>
        <div className="flex-1">
          <p className="font-display text-sm font-semibold text-foreground">Luna · Schnauzer mini · 4 años</p>
          <p className="text-xs text-muted-foreground">Propietario: Ana Torres · 6.2 kg</p>
        </div>
        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-primary-soft text-primary">Esterilizada</span>
      </div>
      <div className="grid grid-cols-3 divide-x divide-border text-xs">
        {[
          { l: "Última visita", v: "Hace 12 días" },
          { l: "Vacunas", v: "Al día" },
          { l: "Alergias", v: "Ninguna" },
        ].map((s) => (
          <div key={s.l} className="px-4 py-3">
            <p className="text-muted-foreground">{s.l}</p>
            <p className="mt-1 font-semibold text-foreground">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="px-5 py-4 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Notas SOAP · 18 Mar</p>
        {[
          { tag: "S", t: "Dueña reporta picor moderado en patas traseras desde hace 5 días." },
          { tag: "O", t: "Eritema interdigital bilateral. Sin fiebre. Frecuencia cardíaca 120 lpm." },
          { tag: "A", t: "Sospecha de dermatitis atópica. Descartar componente alimentario." },
          { tag: "P", t: "Apoquel 5,4 mg c/24h x 14 días. Control en 2 semanas." },
        ].map((n, i) => (
          <div key={i} className="flex gap-3 text-xs">
            <span className="h-6 w-6 shrink-0 rounded-md bg-muted text-foreground font-mono font-semibold flex items-center justify-center">{n.tag}</span>
            <p className="text-muted-foreground leading-relaxed">{n.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InventarioVisual() {
  const items = [
    { name: "Apoquel 5.4 mg", cat: "Antialérgico", stock: 42, min: 20, status: "ok" },
    { name: "Bravecto 250 mg", cat: "Antiparasitario", stock: 8, min: 15, status: "low" },
    { name: "Royal Canin Renal 2kg", cat: "Alimento", stock: 24, min: 10, status: "ok" },
    { name: "Amoxi-Tab 250 mg", cat: "Antibiótico", stock: 4, min: 12, status: "critical" },
    { name: "Vacuna Sextuple", cat: "Biológico", stock: 31, min: 20, status: "ok" },
  ];
  const statusStyle = {
    ok: "bg-success/15 text-success",
    low: "bg-warning/20 text-warning",
    critical: "bg-destructive/15 text-destructive",
  };
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <p className="font-display text-sm font-semibold text-foreground">Inventario · 248 productos</p>
        <span className="text-xs text-muted-foreground">Actualizado en vivo</span>
      </div>
      <table className="w-full text-xs">
        <thead className="bg-muted/40">
          <tr className="text-left text-muted-foreground">
            <th className="px-5 py-2 font-medium">Producto</th>
            <th className="px-3 py-2 font-medium">Categoría</th>
            <th className="px-3 py-2 font-medium">Stock</th>
            <th className="px-5 py-2 font-medium">Estado</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.name} className="border-t border-border">
              <td className="px-5 py-2.5 font-medium text-foreground">{it.name}</td>
              <td className="px-3 py-2.5 text-muted-foreground">{it.cat}</td>
              <td className="px-3 py-2.5 font-mono text-foreground">{it.stock} u.</td>
              <td className="px-5 py-2.5">
                <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider font-medium ${statusStyle[it.status]}`}>
                  {it.status === "ok" ? "Óptimo" : it.status === "low" ? "Bajo" : "Crítico"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PosVisual() {
  const items = [
    { name: "Consulta general", qty: 1, total: 35 },
    { name: "Vacuna séxtuple", qty: 1, total: 28 },
    { name: "Antiparasitario Bravecto", qty: 1, total: 42 },
  ];
  const subtotal = items.reduce((a, i) => a + i.total, 0);
  return (
    <div className="grid grid-cols-5 gap-0 rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
      <div className="col-span-3 p-5">
        <p className="font-display text-sm font-semibold text-foreground mb-3">Ticket #2418</p>
        <div className="space-y-2">
          {items.map((it) => (
            <div key={it.name} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-foreground">{it.name}</p>
                <p className="text-xs text-muted-foreground">x{it.qty}</p>
              </div>
              <p className="font-mono text-foreground">${it.total}.00</p>
            </div>
          ))}
        </div>
        <div className="mt-5 border-t border-border pt-3 space-y-1 text-sm">
          <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span className="font-mono">${subtotal}.00</span></div>
          <div className="flex justify-between text-muted-foreground"><span>IVA 16%</span><span className="font-mono">${(subtotal * 0.16).toFixed(2)}</span></div>
          <div className="flex justify-between font-semibold text-foreground text-base pt-1"><span>Total</span><span className="font-mono">${(subtotal * 1.16).toFixed(2)}</span></div>
        </div>
      </div>
      <div className="col-span-2 bg-muted/40 p-5 flex flex-col">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Método de pago</p>
        <div className="space-y-2">
          {[
            { l: "Tarjeta", active: true },
            { l: "Efectivo" },
            { l: "Transferencia" },
          ].map((m) => (
            <div
              key={m.l}
              className={`rounded-lg border px-3 py-2.5 text-sm font-medium ${
                m.active
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-foreground border-border"
              }`}
            >
              {m.l}
            </div>
          ))}
        </div>
        <button className="mt-auto w-full rounded-xl bg-gradient-accent text-accent-foreground font-semibold text-sm py-3 shadow-accent-glow">
          Cobrar ${(subtotal * 1.16).toFixed(2)}
        </button>
      </div>
    </div>
  );
}
