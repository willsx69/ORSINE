"use client";

import { motion } from "framer-motion";
import { UserCheck, MessageSquare, Lightbulb, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: UserCheck, title: "Atendimento personalizado", text: "Cada caso recebe atenção individual e clara." },
  { icon: MessageSquare, title: "Comunicação direta", text: "Contato objetivo, sem intermediários confusos." },
  { icon: Lightbulb, title: "Orientação clara", text: "Explicações simples sobre cada procedimento." },
  { icon: Rocket, title: "Facilidade para iniciar", text: "Primeiro contato rápido pelo WhatsApp." },
];

export function Differentials() {
  return (
    <section className="bg-navy-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Atendimento pensado para você."
          light
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-navy-deep">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}