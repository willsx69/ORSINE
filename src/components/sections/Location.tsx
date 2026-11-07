"use client";

import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Location() {
  return (
    <section className="bg-surface py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Localização"
              title="Onde estamos"
              description="Atendimento presencial e online, conforme a necessidade do cliente."
            />
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gold-deep" />
                <div>
                  <p className="font-medium text-navy-deep">
                    Avenida Cosme Ferreira, Zumbi dos Palmares
                  </p>
                  <p className="text-sm text-text-muted">Manaus — AM</p>
                </div>
              </div>
              <Button
                variant="secondary"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=ORSINE+CNH+do+Brasil+Manaus",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <Navigation className="h-4 w-4" />
                Abrir no Google Maps
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-navy-deep/10 bg-surface">
            <iframe
              title="Mapa da ORSINE em Manaus"
              src="https://www.google.com/maps?q=ORSINE+CNH+do+Brasil+Manaus&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur">
              <Image
                src="/images/logo-orsine.svg"
                alt="Logo ORSINE"
                width={32}
                height={32}
                unoptimized
                className="h-8 w-auto object-contain"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-navy-deep">ORSINE — CNH do Brasil</p>
                <p className="text-[10px] text-text-muted">Manaus, AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}