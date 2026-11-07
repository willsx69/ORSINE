"use client";

import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { messages } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <button
      type="button"
      onClick={() => openWhatsApp(messages.general)}
      aria-label="Falar com a ORSINE pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-navy-deep px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        Fale conosco
      </span>
    </button>
  );
}