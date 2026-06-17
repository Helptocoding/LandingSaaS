import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pasamos de tres herramientas distintas a una. Mi equipo dejó de pelearse con el sistema y ahora atendemos más pacientes con menos estrés.",
    name: "Dra. Camila Vega",
    role: "Directora · Clínica San Bernardo",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&h=160&fit=crop&crop=faces",
    rating: 5,
    big: true,
  },
  {
    quote:
      "Las automatizaciones por WhatsApp reactivaron 180 clientes en el primer trimestre. Solo eso pagó la suscripción anual.",
    name: "Dr. Sebastián Ortiz",
    role: "Hospital Animalia",
    img: "https://images.unsplash.com/photo-1612531822060-2bc3a72d3d6f?w=160&h=160&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote:
      "El inventario solía ser un dolor de cabeza al cierre de mes. Ahora se cuadra solo con cada consulta.",
    name: "Lic. Marta Ruiz",
    role: "Administradora · VetCare",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote:
      "La curva de aprendizaje fue mínima. En 3 días todo mi equipo estaba operando al 100%.",
    name: "Dra. Lucía Méndez",
    role: "PetSalud",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=160&h=160&fit=crop&crop=faces",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">Testimonios</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Veterinarios que ya no vuelven al papel.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm ${
                t.big ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <blockquote
                className={`text-foreground leading-relaxed ${
                  t.big ? "font-display text-2xl lg:text-3xl tracking-tight text-balance" : "text-base"
                }`}
              >
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-6 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover border border-border"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
