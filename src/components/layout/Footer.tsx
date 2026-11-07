"use client";


import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { openWhatsApp, messages } from "@/lib/whatsapp";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-orsine.svg"
                alt="Logo ORSINE"
                width={40}
                height={40}
                unoptimized
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-lg font-bold">ORSINE</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Soluções e orientação relacionadas a infrações de trânsito e
              processos de habilitação em Manaus.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-gold">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                ["Início", "#inicio"],
                ["Serviços", "#servicos"],
                ["Sobre nós", "#sobre"],
                ["Como funciona", "#como-funciona"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-gold transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-gold">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Recursos de infrações</li>
              <li>Processos de habilitação</li>
              <li>Intermediação de processos</li>
              <li>Consultoria e atendimento</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-gold">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Avenida Cosme Ferreira, Zumbi dos Palmares, Manaus — AM, CEP 69084-425
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openWhatsApp(messages.general)}
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  +55 92 99434-9708
                </button>
              </li>
              <li>
                <a
                  href="https://instagram.com/cnhdobrasil.manaus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <svg
                    className="h-4 w-4 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  @cnhdobrasil.manaus
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          <p className="max-w-3xl leading-relaxed">
            A ORSINE é uma empresa privada de orientação e intermediação, sem
            vínculo com órgãos públicos. Não comercializamos resultados e não
            emitimos decisões de órgãos de trânsito.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 pt-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ORSINE — CNH do Brasil. Todos os direitos reservados.</p>
          <p>Manaus, Amazonas — Brasil</p>
        </div>
      </div>
    </footer>
  );
}