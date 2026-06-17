import React from "react";
import { motion } from "framer-motion";
import { Calendar, Search, Bell, Plus, Stethoscope, PawPrint, TrendingUp, Syringe } from "lucide-react";

const appointments = [
  { time: "09:00", pet: "Toby", owner: "Carla M.", type: "Consulta", color: "bg-primary" },
  { time: "10:30", pet: "Mía", owner: "Lucía R.", type: "Vacunación", color: "bg-accent" },
  { time: "12:00", pet: "Rocky", owner: "José P.", type: "Cirugía menor", color: "bg-chart-3" },
  { time: "14:30", pet: "Luna", owner: "Ana T.", type: "Control", color: "bg-primary-glow" },
  { time: "16:00", pet: "Coco", owner: "Sofía L.", type: "Desparasitación", color: "bg-chart-4" },
];

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ rotate: -1 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-[640px]"
    >
      {/* Glow behind */}
      <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl" />

      <div className="relative rounded-[1.75rem] border border-border bg-card shadow-elegant overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
          </div>
          <div className="flex items-center gap-2 rounded-md bg-background border border-border px-3 py-1.5 w-56">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Buscar paciente, dueño...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex h-7 w-7 items-center justify-center rounded-md hover:bg-muted text-muted-foreground">
              <Bell className="h-3.5 w-3.5" />
              <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <div className="h-7 w-7 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-[10px] font-semibold">DV</div>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 gap-4 p-5">
          {/* Sidebar */}
          <aside className="col-span-3 hidden md:flex flex-col gap-1">
            {[
              { i: <Calendar className="h-3.5 w-3.5" />, l: "Agenda", active: true },
              { i: <PawPrint className="h-3.5 w-3.5" />, l: "Pacientes" },
              { i: <Stethoscope className="h-3.5 w-3.5" />, l: "Consultas" },
              { i: <Syringe className="h-3.5 w-3.5" />, l: "Vacunas" },
              { i: <TrendingUp className="h-3.5 w-3.5" />, l: "Reportes" },
            ].map((it, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs ${
                  it.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {it.i}
                {it.l}
              </div>
            ))}
          </aside>

          {/* Main schedule */}
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">Agenda · Hoy</h3>
                <p className="text-xs text-muted-foreground">Martes, 18 de Marzo · 5 citas programadas</p>
              </div>
              <button className="inline-flex items-center gap-1 rounded-md bg-foreground text-background text-xs font-medium px-2.5 py-1.5">
                <Plus className="h-3 w-3" /> Nueva cita
              </button>
            </div>

            <div className="space-y-2">
              {appointments.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 hover:bg-background p-3 transition-colors"
                >
                  <div className="text-xs font-mono font-medium text-muted-foreground w-12">{a.time}</div>
                  <div className={`h-9 w-1 rounded-full ${a.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-foreground truncate">{a.pet}</p>
                      <span className="text-xs text-muted-foreground truncate">· {a.owner}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">{a.type}</p>
                  </div>
                  <span className="hidden sm:inline-flex text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-md bg-primary-soft text-primary">
                    Confirmada
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom stats strip */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { l: "Ingresos hoy", v: "$1.840" },
                { l: "Tasa asistencia", v: "96%" },
                { l: "Stock crítico", v: "3 ítems" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg bg-muted/50 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
                  <p className="font-display text-sm font-semibold text-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
