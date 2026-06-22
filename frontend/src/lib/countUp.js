export function initCountUp(el, target, { duration = 1600, decimals = 0 } = {}) {
  let started = false;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const ease = (t) => 1 - Math.pow(1 - t, 3);

          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const v = target * ease(p);
            const display = decimals ? v.toFixed(decimals) : Math.round(v).toString();
            el.textContent = display;
            if (p < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  io.observe(el);
}
