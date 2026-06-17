import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { target: 68, suffix: "%", l: "Menos ausencias a citas", icon: Clock },
  { target: 3.4, suffix: "x", decimals: 1, l: "Más reactivación de clientes", icon: HeartHandshake },
  { target: 24, prefix: "+", suffix: "%", l: "Aumento en ticket promedio", icon: TrendingUp },
  { target: 99.9, suffix: "%", decimals: 1, l: "Disponibilidad garantizada", icon: ShieldCheck },
];

function StatCard({ s, i }) {
  const [ref, value] = useCountUp(s.target, { duration: 1800, decimals: s.decimals || 0 });
  const display = (s.decimals ? value.toFixed(s.decimals) : value).toString();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15 p-5 hover:border-primary-foreground/35 transition-colors overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary-foreground/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <s.icon className="h-5 w-5 text-primary-foreground/80" />
      <p
        className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-primary-foreground tabular-nums"
        data-testid={`metric-${i}`}
      >
        {s.prefix || ""}
        {display}
        {s.suffix || ""}
      </p>
      <p className="mt-1 text-sm text-primary-foreground/75">{s.l}</p>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-wide">
        <div className="rounded-[2rem] bg-gradient-primary relative overflow-hidden p-10 lg:p-16">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, hsl(var(--primary-glow)) 0%, transparent 50%), radial-gradient(circle at 10% 90%, hsl(var(--accent)) 0%, transparent 50%)",
            }}
          />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-primary-foreground/80 mb-3">Impacto real</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary-foreground text-balance">
                Resultados que se notan desde el primer mes.
              </h2>
              <p className="mt-5 text-base text-primary-foreground/80 leading-relaxed">
                Promedio de clínicas que migraron a Veteris durante 2024.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <StatCard key={s.l} s={s} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
