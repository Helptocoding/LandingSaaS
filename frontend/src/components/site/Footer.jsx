import React from "react";
import Logo from "./Logo";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const columns = [
  {
    title: "Producto",
    links: ["Funciones", "Precios", "Integraciones", "Novedades", "Roadmap"],
  },
  {
    title: "Recursos",
    links: ["Centro de ayuda", "Blog veterinario", "Guías de implementación", "Webinars", "API"],
  },
  {
    title: "Empresa",
    links: ["Sobre nosotros", "Clientes", "Carreras", "Prensa", "Contacto"],
  },
  {
    title: "Legal",
    links: ["Términos", "Privacidad", "Cookies", "Seguridad", "GDPR"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container-wide py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              El sistema operativo para clínicas veterinarias modernas. Hecho con cariño en América Latina.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                  aria-label="Red social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="font-display text-sm font-semibold text-foreground mb-4">{c.title}</p>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Veteris. Todos los derechos reservados.</p>
          <p className="text-xs text-muted-foreground">Hecho con cuidado por veterinarios, para veterinarios.</p>
        </div>
      </div>
    </footer>
  );
}
