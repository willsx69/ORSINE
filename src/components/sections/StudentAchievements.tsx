"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/**
 * Legendas recuperadas das publicações originais no Instagram
 * @autoescolaorsine.manaus_ (nov/2026). Correspondência confirmada pelo
 * ID de mídia da CDN (og:image) idêntico ao ID dos arquivos locais.
 * Texto original preservado — sem edição, sem adaptações.
 */
const LEGENDA_A = `🚗💙💛 Parabéns por essa grande conquista! 🎉

Hoje é dia de comemorar a realização de um sonho: a tão sonhada habilitação! 🪪✨

Que essa nova etapa seja repleta de liberdade, independência, novas oportunidades e muitos caminhos incríveis. Dirija sempre com responsabilidade, atenção e segurança. 🚘💨

A Autoescola ORSINE tem orgulho de ter feito parte dessa conquista. 💙

Parabéns pela sua CNH! Agora é só aproveitar essa nova jornada! 🥳🏆

#AutoescolaOrsine #Habilitação #CNHNaMão #Conquista #SonhoRealizado #NovoMotorista #Manaus`;

const LEGENDA_B = `🚗✨ PARABÉNS, MANAUS! ✨🚗

Hoje é dia de celebrar mais uma conquista!
Parabéns ao novo motorista habilitado da cidade de Manaus! 🛣️👏

Que essa nova etapa seja marcada por liberdade, responsabilidade e muitas conquistas no caminho.
Agora é seguir acelerando rumo aos seus sonhos! 🚘💨

A equipe da ORSINE HABILITAÇÃO deseja muito sucesso nessa nova jornada! 💙💛💚

#CNH #Habilitação #Manaus #NovoMotorista #Conquista #CNHDoBrasil #ORSINE #AutoEscola #Amazonas`;

const conquistas = [
  {
    src: "/alunos/SaveClip.App_871000215_1161744146420745_7523897041610496734_n.jpg",
    alt: "Aluna habilitada com a CNH em mãos — publicação da Autoescola ORSINE no Instagram",
    legenda: LEGENDA_A,
    data: "2 de novembro de 2026",
    href: "https://www.instagram.com/p/DfPMPjaDnDJ/",
  },
  {
    src: "/alunos/SaveClip.App_811405821_1117375154190978_4173117215950697232_n.jpg",
    alt: "Aluno habilitado com a CNH em mãos — publicação da Autoescola ORSINE no Instagram",
    legenda: LEGENDA_A,
    data: "15 de setembro de 2026",
    href: "https://www.instagram.com/p/DdU3v6wjuII/",
  },
  {
    src: "/alunos/SaveClip.App_797744369_1111022821492878_3380710709939025760_n.jpg",
    alt: "Aluna habilitada com a CNH em mãos — publicação da Autoescola ORSINE no Instagram",
    legenda: LEGENDA_A,
    data: "8 de setembro de 2026",
    href: "https://www.instagram.com/p/DdBt4iRoBqz/",
  },
  {
    src: "/alunos/SaveClip.App_787089540_1105944435334050_6155299735287227243_n.jpg",
    alt: "Aluna habilitada com a CNH em mãos — publicação da Autoescola ORSINE no Instagram",
    legenda: LEGENDA_B,
    data: "2 de setembro de 2026",
    href: "https://www.instagram.com/p/DcyWKxMoNs_/",
  },
  {
    src: "/alunos/SaveClip.App_748330897_1065332999395194_5142734528192604374_n.jpg",
    alt: "Aluno habilitado com a CNH em mãos — publicação da Autoescola ORSINE no Instagram",
    legenda: LEGENDA_B,
    data: "16 de julho de 2026",
    href: "https://www.instagram.com/p/Da2xSjgDcBK/",
  },
  {
    src: "/alunos/SaveClip.App_742480481_1059622939966200_598914219602580502_n.jpg",
    alt: "Aluno habilitado com a CNH em mãos — publicação da Autoescola ORSINE no Instagram",
    legenda: LEGENDA_B,
    data: "9 de julho de 2026",
    href: "https://www.instagram.com/p/Dako1vflLa5/",
  },
];

export function StudentAchievements() {
  const reduce = useReducedMotion();

  return (
    <section
      id="conquistas"
      aria-labelledby="conquistas-titulo"
      className="bg-navy-deep py-20 sm:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="conquistas-titulo"
          eyebrow="Conquistas"
          title="Conquistas dos Alunos"
          description="Publicações reais do Instagram da ORSINE com alunos habilitados."
          light
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {conquistas.map((item, idx) => (
            <motion.article
              key={item.src}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="h-full"
            >
              <Card className="group/card flex h-full flex-col border-[#C9A24B]/30 bg-white shadow-[0_12px_28px_-16px_rgba(6,26,58,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(6,26,58,0.45)] hover:border-[#C9A24B]/60">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/images/logo-orsine.svg" alt="" />
                    <AvatarFallback className="bg-navy-deep text-gold text-xs font-bold">
                      OR
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-navy-deep">
                      autoescolaorsine.manaus_
                    </span>
                    <span className="text-xs text-text-muted">
                      Autoescola ORSINE — CNH do Brasil
                    </span>
                  </div>
                </CardHeader>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver publicação original de ${item.data} no Instagram`}
                  className="relative block aspect-square w-full overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-contain transition-transform duration-300 group-hover/card:scale-[1.02]"
                  />
                </a>

                <CardContent className="px-4 pb-1 pt-3">
                  <p className="line-clamp-4 text-sm leading-relaxed text-navy-deep [white-space:pre-line]">
                    {item.legenda}
                  </p>
                  <p className="mt-2 text-xs text-text-muted">{item.data}</p>
                </CardContent>

                <CardFooter className="mt-auto flex items-center justify-between border-t-0 bg-transparent px-4 py-3">
                  <div className="flex items-center gap-4 text-navy-deep/70">
                    <Heart className="h-5 w-5" aria-hidden="true" />
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <Bookmark className="h-5 w-5 text-navy-deep/70" aria-hidden="true" />
                </CardFooter>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
