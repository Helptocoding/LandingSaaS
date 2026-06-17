import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck2, Stethoscope, FileSignature, CreditCard, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck2,
    title: "El cliente agenda",
    desc: "Online desde tu sitio o por WhatsApp. La cita aparece en la agenda del equipo al instante.",
  },
  {
    icon: Stethoscope,
    title: "El veterinario atiende",
    desc: "Consulta el historial, registra hallazgos y aplica tratamientos. Todo desde una sola pantalla.",
  },
  {
    icon: FileSignature,
    title: "Tratamiento y receta",
    desc: "Los productos usados descuentan inventario automáticamente. La receta se envía digital.",
  },
  {
    icon: CreditCard,
    title: "Recepción cobra",
    desc: "El POS ya tiene los servicios y productos del ticket. Solo elige el método de pago.",
  },
  {
    icon: MessageCircle,
    title: "Veteris da seguimiento",
    desc: "Envía recordatorios, encuestas de satisfacción y reactiva clientes inactivos por WhatsApp.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">Cómo funciona</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Un flujo continuo, sin baches entre tareas.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Desde que el cliente agenda hasta que vuelve. Veteris orquesta cada paso.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-10 lg:space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-6 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:text-right" : ""}>
                  <div className={`inline-flex items-center gap-3 mb-3 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Paso {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-md lg:max-w-none lg:inline-block">{s.desc}</p>
                </div>
                <div className="relative h-40 lg:h-48 rounded-3xl border border-border bg-gradient-card overflow-hidden">
                  <div className="absolute inset-0 grid place-items-center">
                    <s.icon className="h-20 w-20 text-primary/15" strokeWidth={1.2} />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-xl bg-card/90 backdrop-blur border border-border px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <p className="text-xs text-muted-foreground">Sincronizado con el equipo en tiempo real</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
