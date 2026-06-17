import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — SEO-safe scroll-reveal wrapper.
 * Only animates opacity + transform (GPU). Content is always in the DOM,
 * so crawlers see it. Honors prefers-reduced-motion.
 *
 * variant:
 *  - "fade-up"     gentle slide up + fade
 *  - "zoom-in"     scales from 0.85 → 1 (Apple keynote feel)
 *  - "zoom-out"    scales from 1.15 → 1 (dramatic settle)
 *  - "blur-in"     blur 12px → 0 + fade
 *  - "slide-left"  from right
 *  - "slide-right" from left
 *  - "tilt"        rotate + scale + fade
 *  - "rise"        big y + scale
 */
const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1 },
  },
  "zoom-out": {
    hidden: { opacity: 0, scale: 1.18 },
    show: { opacity: 1, scale: 1 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(14px)", y: 14 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  },
  tilt: {
    hidden: { opacity: 0, rotate: -4, scale: 0.92, y: 24 },
    show: { opacity: 1, rotate: 0, scale: 1, y: 0 },
  },
  rise: {
    hidden: { opacity: 0, y: 80, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
};

export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  margin = "-80px",
  once = true,
  as: As = motion.div,
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const v = variants[variant] || variants["fade-up"];

  if (reduce) {
    // Render without motion so SEO/accessibility wins, no perf hit.
    return <div className={className}>{children}</div>;
  }

  return (
    <As
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={v}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </As>
  );
}
