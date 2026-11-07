"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
      className="relative isolate overflow-hidden bg-navy-deep min-h-[90vh] flex items-center"
    >
      {/* Background graphic: subtle road */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] max-w-none opacity-[0.18]"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="road" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#F5B900" stopOpacity="0" />
              <stop offset="100%" stopColor="#F5B900" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M520,0 L680,0 L900,400 L300,400 Z"
            fill="none"
            stroke="url(#road)"
            strokeWidth="1.5"
          />
          <line
            x1="600"
            y1="0"
            x2="600"
            y2="400"
            stroke="#F5B900"
            strokeWidth="2"
            strokeDasharray="14 18"
            opacity="0.5"
          />
        </svg>
        {/* soft gold glow */}
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
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
          className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-white max-w-4xl"
        >
          Seu <span className="text-gold">caminho</span> mais tranquilo no
          trânsito começa <span className="text-gold">aqui</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-white/70"
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