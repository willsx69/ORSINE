"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { openWhatsApp, messages } from "@/lib/whatsapp";

const trust = [
  { icon: MapPin, label: "Atendimento em Manaus" },
  { icon: ShieldCheck, label: "Atendimento personalizado" },
  { icon: MessageCircle, label: "Orientação especializada" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-navy-deep min-h-svh flex items-center scroll-mt-20"
    >
      {/* Background: foto da estrada ao pôr do sol + overlay navy */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="hero-photo" />
        <div className="hero-overlay" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-semibold tracking-[0.28em] text-gold"
        >
          ORSINE | SOLUÇÕES EM TRÂNSITO E HABILITAÇÃO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-white max-w-4xl [text-shadow:0_2px_18px_rgba(6,26,58,0.55)]"
        >
          Seu caminho mais tranquilo no trânsito
          <br />
          <TypingAnimation
            as="span"
            text="começa aqui."
            duration={90}
            delay={1.05}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-white/80"
        >
          Conte com orientação e atendimento especializado para questões
          relacionadas a infrações de trânsito e processos de habilitação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <Button
            variant="primary"
            onClick={() => openWhatsApp(messages.general)}
            className="px-7 py-3.5 text-base"
          >
            Consultar pelo WhatsApp
          </Button>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-gold hover:text-gold"
          >
            Conheça nossos serviços
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
        >
          {trust.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-sm text-white/60"
            >
              <Icon className="h-4 w-4 text-gold" />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>

      <a
        href="#servicos"
        aria-label="Rolar para serviços"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-gold transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}