import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Menu, X, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ctaToast } from "@/lib/cta";

const links = [
  { href: "#features", label: "Funciones" },
  { href: "#tour", label: "Producto" },
  { href: "#how", label: "Cómo funciona" },
  { href: "#pricing", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between">
        <Logo />
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-2">
          <Button
            data-testid="nav-login-btn"
            variant="ghost"
            size="sm"
            onClick={() => ctaToast("login")}
            className="text-foreground hover:bg-muted"
          >
            Iniciar sesión
          </Button>
          <Button
            data-testid="nav-trial-btn"
            size="sm"
            onClick={() => ctaToast("trial")}
            className="bg-foreground text-background hover:bg-foreground/90 group"
          >
            Probar gratis
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground" aria-label="Abrir menú">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <div className="mt-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" className="w-full" onClick={() => { setOpen(false); ctaToast("login"); }}>Iniciar sesión</Button>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90" onClick={() => { setOpen(false); ctaToast("trial"); }}>Probar gratis</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
