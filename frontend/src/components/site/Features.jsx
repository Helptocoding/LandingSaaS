import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  CalendarDays,
  Package,
  CreditCard,
  MessageCircle,
  BarChart3,
  FileText,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Expediente clínico digital",
    desc: "Historial médico completo por paciente: consultas, diagnósticos, recetas, vacunas y archivos adjuntos.",
    tone: "primary",
    span: "lg:col-span-2",
  },
  {
    icon: CalendarDays,
    title: "Agenda inteligente",
    desc: "Citas online, recordatorios y vista por veterinario.",
    tone: "accent",
  },
  {
    icon: Package,
    title: "Inventario veterinario",
    desc: "Descuento automático con cada tratamiento. Alertas de stock crítico y vencimientos.",
    tone: "primary",
  },
  {
    icon: CreditCard,
    title: "POS y caja",
    desc: "Cobros rápidos, métodos de pago y cierre de caja al final del día.",
    tone: "accent",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp automatizado",
    desc: "Recordatorios de citas, vacunas y seguimientos sin levantar el teléfono.",
    tone: "primary",
    span: "lg:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Reportes en tiempo real",
    desc: "Ingresos, productos más vendidos, ocupación y retención de clientes.",
    tone: "accent",
  },
  {
    icon: FileText,
    title: "Recetas y certificados",
    desc: "Generación con un clic y firma digital lista para imprimir o enviar.",
    tone: "primary",
  },
  {
    icon: Users,
    title: "Equipo y roles",
    desc: "Permisos por veterinario, recepción y administración.",
    tone: "primary",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-muted/30">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-3">Funciones</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Una plataforma diseñada para cómo realmente funciona una veterinaria.
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-md">
            Conecta agenda, atención, inventario y administración. Cada acción alimenta al sistema completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition-shadow ${f.span || ""}`}
            >
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                  f.tone === "accent"
                    ? "bg-accent/15 text-accent"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mt-5">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-primary/0 to-primary/5 group-hover:to-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
