import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const tiers = [
  {
    name: "Esencial",
    desc: "Para clínicas pequeñas que empiezan a digitalizarse.",
    monthly: 29,
    yearly: 24,
    features: [
      "Hasta 2 veterinarios",
      "Agenda y expediente clínico",
      "Inventario básico",
      "Soporte por email",
    ],
    cta: "Empezar gratis",
  },
  {
    name: "Profesional",
    desc: "Para clínicas en crecimiento que necesitan automatizar.",
    monthly: 59,
    yearly: 49,
    features: [
      "Veterinarios ilimitados",
      "Todas las funciones de Esencial",
      "WhatsApp automatizado",
      "POS y cierre de caja",
      "Reportes avanzados",
      "Soporte prioritario",
    ],
    cta: "Probar 14 días",
    popular: true,
  },
  {
    name: "Grupo",
    desc: "Para cadenas y hospitales multi-sucursal.",
    monthly: 119,
    yearly: 99,
    features: [
      "Multi-sucursal",
      "Roles y auditoría avanzada",
      "API e integraciones",
      "Gestor de cuenta dedicado",
      "Onboarding personalizado",
    ],
    cta: "Hablar con ventas",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary mb-3">Precios</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Planes simples. Sin cargos por paciente.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Comienza gratis 14 días. Cancela cuando quieras.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <span className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>Mensual</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Anual
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary">
              -17%
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                t.popular
                  ? "border-primary bg-gradient-card shadow-elegant"
                  : "border-border bg-card"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-foreground text-background px-3 py-1 text-[10px] uppercase tracking-wider font-semibold">
                  <Sparkles className="h-3 w-3" /> Más elegido
                </div>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold text-foreground">
                  ${yearly ? t.yearly : t.monthly}
                </span>
                <span className="text-sm text-muted-foreground">/ mes</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {yearly ? "facturación anual" : "facturación mensual"} · por clínica
              </p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-auto pt-0 ${
                  t.popular
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-card text-foreground border border-border hover:bg-muted"
                } h-11 w-full mt-8`}
                variant={t.popular ? "default" : "outline"}
              >
                {t.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Todos los precios en USD. Incluye actualizaciones, soporte en español y backups diarios.
        </p>
      </div>
    </section>
  );
}
