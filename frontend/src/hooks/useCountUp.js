import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → target when the element enters the viewport.
 * Returns [ref, displayedValue].
 */
export function useCountUp(target, { duration = 1600, decimals = 0, enabled = true } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!enabled || !ref.current || startedRef.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const ease = (t) => 1 - Math.pow(1 - t, 3);
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const v = target * ease(p);
              setValue(decimals ? parseFloat(v.toFixed(decimals)) : Math.round(v));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, decimals, enabled]);

  return [ref, value];
}
