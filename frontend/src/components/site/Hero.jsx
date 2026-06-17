import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check, Calendar, Stethoscope, MessageCircle } from "lucide-react";
import HeroDashboard from "./HeroDashboard";
import { ctaToast } from "@/lib/cta";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Parallax: dashboard slides up & scales slightly as user scrolls
  const dashY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const dashScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const dashRotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [0.18, 0]);

  return (
    <section ref={sectionRef} className="relative pt-28 lg:pt-32 pb-20 lg:pb-28 overflow-hidden">
      {/* Background gradient + grid */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          opacity: gridOpacity,
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(60% 60% at 50% 35%, black 40%, transparent 100%)",
        }}
      />
      {/* Floating decorative blobs */}
      <motion.div style={{ y: blobY }} className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl -z-10" />
      <motion.div style={{ y: blobY }} className="absolute top-32 right-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl -z-10" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Nuevo · Recordatorios automáticos por WhatsApp
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance"
            >
              Toda tu clínica veterinaria,
              <span className="block">
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">conectada</span>
                  <svg viewBox="0 0 220 12" className="absolute -bottom-1 left-0 w-full h-2 text-accent" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 8 C 60 2, 160 2, 218 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                en una sola plataforma.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Expediente clínico digital, agenda online, inventario, punto de venta y automatizaciones inteligentes.
              Menos desorden administrativo, más tiempo atendiendo pacientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button
                data-testid="hero-trial-btn"
                size="lg"
                onClick={() => ctaToast("trial")}
                className="bg-foreground text-background hover:bg-foreground/90 h-12 px-6 group shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Empezar prueba gratuita
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                data-testid="hero-demo-btn"
                size="lg"
                variant="outline"
                onClick={() => ctaToast("demo")}
                className="h-12 px-6 border-border bg-card hover:bg-muted transition-transform hover:-translate-y-0.5"
              >
                Ver demo de 2 min
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              {["14 días gratis", "Sin tarjeta de crédito", "Soporte en español"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { v: "+1.200", l: "Veterinarios" },
                { v: "68%", l: "Menos ausencias" },
                { v: "4.9★", l: "En reseñas" },
              ].map((s) => (
                <div key={s.l} className="border-l border-border pl-4">
                  <div className="font-display text-2xl font-semibold text-foreground">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ y: dashY, scale: dashScale, rotate: dashRotate }}
            className="lg:col-span-6 relative will-change-transform"
          >
            <HeroDashboard />
            {/* Floating mini cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-4 lg:-left-10 top-10 lg:top-16 hidden md:flex items-center gap-3 rounded-2xl bg-card border border-border shadow-elegant px-4 py-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Próxima cita</p>
                <p className="text-sm font-semibold text-foreground">Luna · 14:30</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -right-4 lg:-right-8 bottom-12 hidden md:flex items-center gap-3 rounded-2xl bg-card border border-border shadow-elegant px-4 py-3"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-success ring-2 ring-card" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp enviado</p>
                <p className="text-sm font-semibold text-foreground">Recordatorio vacuna</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
