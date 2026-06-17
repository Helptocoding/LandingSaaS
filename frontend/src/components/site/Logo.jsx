import React from "react";
import { PawPrint } from "lucide-react";

export const Logo = ({ className = "" }) => {
  return (
    <a href="#" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Veteris inicio">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
        <PawPrint className="h-4.5 w-4.5" strokeWidth={2.4} />
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent ring-2 ring-background" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">Veteris</span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">vet OS</span>
      </span>
    </a>
  );
};

export default Logo;
