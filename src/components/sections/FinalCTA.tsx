"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShineBorder } from "@/components/ui/shine-border";
import { openWhatsApp, messages } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(245,185,0,0.35) 0, transparent 45%), radial-gradient(circle at 80% 30%, rgba(11,47,105,0.6) 0, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl font-bold leading-tight text-white"
        >
          Está precisando de orientação?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-base sm:text-lg text-white/70"
        >
          Entre em contato com a ORSINE e descubra como podemos ajudar.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9"
        >
          <div className="relative inline-flex overflow-hidden rounded-full">
            <ShineBorder
              shineColor={["#F5B900", "#D99A00", "#F5B900"]}
              borderWidth={2}
              duration={10}
            />
            <Button
              variant="primary"
              onClick={() => openWhatsApp(messages.general)}
              className="relative px-8 py-4 text-base"
            >
              Fale conosco pelo WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}