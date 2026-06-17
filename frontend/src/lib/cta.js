import { toast } from "sonner";

/**
 * Mock CTA handler — shows a Sonner toast with localized Spanish messages.
 * Use across landing CTAs until backend lead capture is wired.
 */
export function ctaToast(kind = "trial") {
  switch (kind) {
    case "trial":
      toast.success("¡Genial! Te estamos preparando tu prueba.", {
        description: "En segundos recibirás un correo para crear tu cuenta de Veteris.",
        duration: 4500,
      });
      break;
    case "demo":
      toast("Reservemos una demo a tu medida", {
        description: "Un especialista te contactará en menos de 24 horas hábiles.",
        duration: 4500,
      });
      break;
    case "sales":
      toast("Hablemos de tu cadena de clínicas", {
        description: "Nuestro equipo de cuentas te escribirá hoy mismo.",
        duration: 4500,
      });
      break;
    case "login":
      toast("Inicio de sesión", {
        description: "El portal estará disponible al lanzar tu prueba.",
        duration: 3500,
      });
      break;
    default:
      toast("¡Listo!", { description: "Acción registrada.", duration: 3000 });
  }
}
