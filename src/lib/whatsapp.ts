export const WHATSAPP_NUMBER = "5592994349708";

export const WHATSAPP_URL_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_URL_BASE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  if (typeof window === "undefined") return;
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

export const messages = {
  general: "Olá! Gostaria de conhecer os serviços da ORSINE.",
  resources: "Olá! Gostaria de informações sobre recursos de infrações de trânsito.",
  habilitation: "Olá! Gostaria de informações sobre processos de habilitação.",
  scheduling: "Olá! Gostaria de solicitar um agendamento de atendimento. Quais horários estão disponíveis?",
} as const;