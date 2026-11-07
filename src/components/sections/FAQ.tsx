"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quais serviços a ORSINE oferece?",
    a: "A ORSINE oferece orientação sobre recursos de infrações de trânsito, processos de habilitação, intermediação de processos e consultoria/atendimento.",
  },
  {
    q: "Como posso solicitar atendimento?",
    a: "Você pode solicitar atendimento pelo WhatsApp ou preenchendo o formulário de contato nesta página.",
  },
  {
    q: "Como funciona a consulta sobre recursos de infrações?",
    a: "A equipe orienta sobre os procedimentos relacionados a infrações de trânsito e recursos administrativos, de acordo com cada caso.",
  },
  {
    q: "Posso agendar um atendimento?",
    a: "Sim. Solicite um agendamento pelo WhatsApp e a equipe confirma os horários disponíveis manualmente.",
  },
  {
    q: "Onde fica a ORSINE?",
    a: "Avenida Cosme Ferreira, Zumbi dos Palmares, Manaus — AM.",
  },
  {
    q: "O atendimento é realizado pelo WhatsApp?",
    a: "Sim. O WhatsApp é o principal canal de contato e atendimento da ORSINE.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          align="center"
        />

        <Accordion
          defaultValue={["item-0"]}
          className="mt-12 rounded-2xl border border-navy-deep/10 bg-surface/40 px-2"
        >
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="px-4 text-left font-display text-base font-semibold text-navy-deep hover:text-gold-deep hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-sm leading-relaxed text-text-muted">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}