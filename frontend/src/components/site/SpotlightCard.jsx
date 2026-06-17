import React, { useRef } from "react";

/**
 * Card wrapper that renders a soft, mouse-following spotlight on hover.
 * Renders any `as` element (default: div). Pass any className/props.
 */
export default function SpotlightCard({ as: As = "div", className = "", children, ...rest }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <As
      ref={ref}
      onMouseMove={handleMove}
      className={`group/spot relative isolate ${className}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover/spot:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.12), transparent 60%)",
        }}
      />
      <span className="relative z-10 block h-full w-full">{children}</span>
    </As>
  );
}
