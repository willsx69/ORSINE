"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, ClipboardCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Escolha seu serviço",
    text: "O primeiro passo é identificar o tipo de atendimento que você precisa.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Entre em contato",
    text: "Envie sua solicitação diretamente pelo WhatsApp.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Receba orientação",
    text: "A equipe da ORSINE entrará em contato para explicar os próximos passos.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Processo"
          title="Como funciona"
          description="Três passos simples para iniciar seu atendimento."
        />

        <div className="relative mt-16">
          {/* connecting line desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute top-7 left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, text }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center md:text-left"
              >
                <div className="mx-auto md:mx-0 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-gold text-navy-deep font-display font-bold">
                  {number}
                </div>
                <div className="mt-6 flex items-center gap-2 md:justify-start justify-center">
                  <Icon className="h-4 w-4 text-gold-deep" />
                  <h3 className="font-display text-xl font-bold text-navy-deep">
                    {title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted max-w-xs mx-auto md:mx-0">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}