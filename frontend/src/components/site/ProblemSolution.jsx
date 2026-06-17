import React from "react";
import { X, Check } from "lucide-react";
import Reveal from "./Reveal";

const problems = [
  "Citas en cuadernos, Google Calendar y WhatsApp",
  "Historial clínico disperso o en papel",
  "Inventario que no cuadra al final del mes",
  "Cobros y caja en hojas de Excel",
  "Recordatorios manuales que se olvidan",
  "Sin visibilidad real del negocio",
];

const solutions = [
  "Agenda online sincronizada con tu equipo",
  "Expediente clínico digital unificado por paciente",
  "Inventario que se descuenta automáticamente",
  "Punto de venta y caja integrados",
  "Recordatorios automáticos por WhatsApp",
  "Métricas en tiempo real de tu clínica",
];

export default function ProblemSolution() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">El problema</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            La operación de tu veterinaria está fragmentada en demasiadas herramientas.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Cuando recepción, veterinarios y administración trabajan en silos, se pierde información, tiempo y clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Without Veteris */}
          <Reveal
            variant="zoom-in"
            className="rounded-3xl border border-border bg-card p-8 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-destructive/5" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">Sin Veteris</h3>
            <p className="text-sm text-muted-foreground mb-6">Información dispersa, equipo descoordinado</p>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* With Veteris */}
          <Reveal
            variant="zoom-in"
            delay={0.12}
            className="rounded-3xl border border-primary/30 bg-gradient-card p-8 relative overflow-hidden shadow-soft"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10" />
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Con Veteris
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">Una sola plataforma</h3>
            <p className="text-sm text-muted-foreground mb-6">Todo el equipo viendo la misma información, en tiempo real</p>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
