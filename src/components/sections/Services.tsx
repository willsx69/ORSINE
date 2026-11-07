"use client";

import { motion } from "framer-motion";
import { Scale, IdCard, Route, Headphones } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { openWhatsApp } from "@/lib/whatsapp";

const services = [
  {
    icon: Scale,
    title: "Recursos de infrações de trânsito",
    description:
      "Orientação sobre procedimentos relacionados a infrações de trânsito e recursos administrativos.",
    cta: "Consultar serviço",
    message: "Olá! Gostaria de informações sobre recursos de infrações de trânsito.",
  },
  {
    icon: IdCard,
    title: "Processos de habilitação",
    description:
      "Informações e orientação sobre processos relacionados à habilitação.",
    cta: "Saiba mais",
    message: "Olá! Gostaria de informações sobre processos de habilitação.",
  },
  {
    icon: Route,
    title: "Intermediação de processos",
    description:
      "Atendimento e suporte na compreensão dos procedimentos relacionados aos serviços de habilitação.",
    cta: "Falar com atendimento",
    message: "Olá! Gostaria de informações sobre intermediação de processos.",
  },
  {
    icon: Headphones,
    title: "Consultoria e atendimento",
    description:
      "Entre em contato para esclarecer dúvidas e entender quais serviços podem atender à sua necessidade.",
    cta: "Solicitar atendimento",
    message: "Olá! Gostaria de solicitar um atendimento.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Como podemos ajudar você?"
          description="Conheça as soluções oferecidas pela ORSINE."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ServiceCard
                icon={s.icon}
                title={s.title}
                description={s.description}
                cta={s.cta}
                onClick={() => openWhatsApp(s.message)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}