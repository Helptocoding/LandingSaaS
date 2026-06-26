export function ctaToast(kind = "trial") {
  // La demo abre un modal con credenciales + enlace al login (lo maneja DemoModal.astro).
  if (kind === "demo") {
    document.dispatchEvent(new CustomEvent("saaslyvet:demo"));
    return;
  }

  // trial/sales abren el formulario de acceso anticipado (lo maneja RegisterModal.astro).
  if (kind === "trial" || kind === "sales") {
    document.dispatchEvent(new CustomEvent("saaslyvet:register"));
    return;
  }

  const messages = {
    trial: ["¡Genial! Te estamos preparando tu prueba.", "En segundos recibirás un correo para crear tu cuenta de SaaslyVet."],
    demo: ["Reservemos una demo a tu medida", "Un especialista te contactará en menos de 24 horas hábiles."],
    sales: ["Hablemos de tu cadena de clínicas", "Nuestro equipo de cuentas te escribirá hoy mismo."],
    login: ["Inicio de sesión", "El portal estará disponible al lanzar tu prueba."],
  };

  const [title, desc] = messages[kind] || ["¡Listo!", "Acción registrada."];

  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 z-[100] flex items-start gap-3 rounded-xl bg-ink text-surface shadow-lift px-5 py-4 max-w-sm animate-fade-up pointer-events-auto';
  toast.innerHTML = `
    <div>
      <p class="text-sm font-semibold">${title}</p>
      <p class="mt-0.5 text-xs text-surface/70">${desc}</p>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
