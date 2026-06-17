import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto tarda la implementación en mi clínica?",
    a: "La mayoría de clínicas está operando al 100% en menos de 5 días. Incluimos onboarding guiado, migración de pacientes desde Excel u otros sistemas, y capacitación en vivo para tu equipo.",
  },
  {
    q: "¿Funciona si tengo varias sucursales?",
    a: "Sí. El plan Grupo está diseñado para cadenas y hospitales multi-sucursal, con permisos por rol, reportes consolidados, transferencias de inventario entre clínicas y un gestor de cuenta dedicado.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Tus datos viven en servidores con cifrado en tránsito y en reposo (AES-256), con backups automáticos diarios. Cumplimos con GDPR y la normativa local. Tú eres siempre el dueño de tu información.",
  },
  {
    q: "¿Cómo funcionan los recordatorios por WhatsApp?",
    a: "Veteris se integra con WhatsApp Business API oficial. Defines plantillas (recordatorios, vacunas, encuestas) y reglas de envío. Los mensajes salen automáticamente desde el número verificado de tu clínica.",
  },
  {
    q: "¿Puedo migrar mis pacientes y expedientes actuales?",
    a: "Sí, sin costo. Tenemos importadores listos para Excel, CSV y los sistemas más comunes del mercado (Vetter, IDEXX, etc.). Nuestro equipo te acompaña en cada paso.",
  },
  {
    q: "¿Hay permanencia o contrato anual obligatorio?",
    a: "No. Pagas mensual o anual y puedes cancelar cuando quieras. Si eliges anual obtienes un descuento del 17% y dos meses de regalo.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted/30">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary mb-3">Preguntas frecuentes</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Todo lo que necesitas saber antes de empezar.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 data-[state=open]:shadow-soft"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
