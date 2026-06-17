import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { ctaToast } from "@/lib/cta";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-foreground p-10 lg:p-16 text-center">
          {/* decorative paws */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 15% 25%, hsl(var(--primary-glow)) 0%, transparent 25%), radial-gradient(circle at 85% 75%, hsl(var(--accent)) 0%, transparent 25%)",
          }} />
          <div className="relative max-w-2xl mx-auto">
            <p className="text-sm font-medium text-background/70 mb-3">Empieza hoy</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-background text-balance">
              Tu clínica merece una operación a la altura de tu cuidado.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-background/75 leading-relaxed">
              Prueba Veteris gratis 14 días. Sin tarjeta. Sin permanencia.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                data-testid="final-cta-trial-btn"
                size="lg"
                onClick={() => ctaToast("trial")}
                className="bg-background text-foreground hover:bg-background/90 h-12 px-6 group transition-transform hover:-translate-y-0.5"
              >
                Empezar prueba gratuita
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                data-testid="final-cta-demo-btn"
                size="lg"
                variant="outline"
                onClick={() => ctaToast("demo")}
                className="h-12 px-6 bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background transition-transform hover:-translate-y-0.5"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agendar demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
