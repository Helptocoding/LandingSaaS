import React from "react";

const clinics = [
  "Clínica San Bernardo",
  "VetCare Pets",
  "Hospital Animalia",
  "PetSalud",
  "AnimaVet",
  "Casa Animal",
  "Mascolife",
  "VidaPet",
];

export default function LogosStrip() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container-wide">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Confían en Veteris más de 1.200 clínicas en América Latina y España
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...clinics, ...clinics].map((c, i) => (
              <div
                key={i}
                className="font-display text-lg font-medium text-muted-foreground/80 hover:text-foreground transition-colors"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
