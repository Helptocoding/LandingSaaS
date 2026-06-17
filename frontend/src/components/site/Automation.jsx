import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Syringe, HeartHandshake, ArrowRight } from "lucide-react";

const messages = [
  {
    when: "10:24",
    title: "Recordatorio de cita",
    body: "Hola Ana 👋 Te recordamos la cita de Luna mañana a las 14:30. Responde 1 para confirmar o 2 para reagendar.",
    icon: Calendar,
  },
  {
    when: "10:25",
    title: "Vacuna próxima",
    body: "Toby tiene su vacuna anual programada en 7 días. ¿Quieres agendarla ahora?",
    icon: Syringe,
  },
  {
    when: "10:26",
    title: "Reactivación",
    body: "Hace 6 meses que no vemos a Rocky 🐾 ¡Te extrañamos! Reserva un control con 10% off.",
    icon: HeartHandshake,
  },
];

export default function Automation() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-medium text-accent mb-5">
              <MessageCircle className="h-3.5 w-3.5" />
              Automatizaciones
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Tus clientes regresan, sin que tú levantes el teléfono.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Veteris envía recordatorios de citas, vacunas y revisiones por WhatsApp. Detecta clientes inactivos y los reactiva
              con mensajes personalizados, basados en el historial real de cada mascota.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Confirmación automática 24h antes",
                "Recuperación de clientes inactivos",
                "Encuestas de satisfacción post-consulta",
                "Plantillas configurables y bilingües",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Ver planes con automatizaciones
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)", rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />
              {/* Phone mock */}
              <div className="rounded-[2.2rem] border-[10px] border-foreground/95 bg-foreground/95 p-2 shadow-elegant">
                <div className="rounded-[1.6rem] bg-background overflow-hidden">
                  {/* WA header */}
                  <div className="flex items-center gap-3 bg-[#075E54] text-white px-4 py-3">
                    <div className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Clínica San Bernardo</p>
                      <p className="text-[10px] opacity-80">en línea</p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-5 space-y-3 min-h-[420px]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 10% 10%, hsl(150 30% 92%) 0%, transparent 50%), radial-gradient(circle at 90% 90%, hsl(22 90% 95%) 0%, transparent 50%)",
                      backgroundColor: "hsl(40 33% 98%)",
                    }}
                  >
                    {messages.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        className="max-w-[85%] rounded-2xl rounded-tl-sm bg-card border border-border shadow-sm px-3.5 py-3"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <m.icon className="h-3 w-3" />
                          </span>
                          <p className="text-xs font-semibold text-foreground">{m.title}</p>
                        </div>
                        <p className="text-xs text-foreground/85 leading-relaxed">{m.body}</p>
                        <p className="text-[10px] text-muted-foreground mt-1.5 text-right">{m.when} ✓✓</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
