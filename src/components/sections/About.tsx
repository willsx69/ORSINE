"use client";

import { motion } from "framer-motion";
import { Shield, Award } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-deep">
              {/* decorative grid */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(245,185,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,185,0,0.4) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/logo-orsine.svg"
                  alt="Logo ORSINE"
                  width={260}
                  height={260}
                  unoptimized
                  className="h-44 w-auto object-contain drop-shadow-2xl"
                />
              </div>
              {/* gold corner accent */}
              <div className="absolute bottom-0 left-0 h-24 w-24 border-b-4 border-l-4 border-gold" />
              <div className="absolute top-0 right-0 h-24 w-24 border-t-4 border-r-4 border-gold" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Sobre a empresa"
              title="Conheça a ORSINE"
            />
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-muted">
              A ORSINE atua oferecendo soluções e orientação relacionadas a
              infrações de trânsito e processos de habilitação, buscando
              proporcionar aos clientes um atendimento acessível, claro e
              personalizado.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Shield, label: "Atendimento responsável" },
                { icon: Award, label: "Orientação especializada" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-navy-deep/10 bg-surface px-4 py-3"
                >
                  <Icon className="h-5 w-5 text-gold-deep" />
                  <span className="text-sm font-medium text-navy-deep">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}