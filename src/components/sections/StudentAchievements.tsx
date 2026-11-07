"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const conquistas = [
  { src: "/alunos/SaveClip.App_871000215_1161744146420745_7523897041610496734_n.jpg", alt: "Aluno aprovado na habilitação pela ORSINE", legenda: "Mais um aluno habilitado com a ORSINE", href: "https://www.instagram.com/p/DfPMPjaDnDJ/" },
  { src: "/alunos/SaveClip.App_811405821_1117375154190978_4173117215950697232_n.jpg", alt: "Aluno aprovado na habilitação pela ORSINE", legenda: "Mais um aluno habilitado com a ORSINE", href: "https://www.instagram.com/p/DdU3v6wjuII/" },
  { src: "/alunos/SaveClip.App_797744369_1111022821492878_3380710709939025760_n.jpg", alt: "Aluno aprovado na habilitação pela ORSINE", legenda: "Mais um aluno habilitado com a ORSINE", href: "https://www.instagram.com/p/DdBt4iRoBqz/" },
  { src: "/alunos/SaveClip.App_787089540_1105944435334050_6155299735287227243_n.jpg", alt: "Aluno aprovado na habilitação pela ORSINE", legenda: "Mais um aluno habilitado com a ORSINE", href: "https://www.instagram.com/p/DcyWKxMoNs_/" },
  { src: "/alunos/SaveClip.App_748330897_1065332999395194_5142734528192604374_n.jpg", alt: "Aluno aprovado na habilitação pela ORSINE", legenda: "Mais um aluno habilitado com a ORSINE", href: "https://www.instagram.com/p/Da2xSjgDcBK/" },
  { src: "/alunos/SaveClip.App_742480481_1059622939966200_598914219602580502_n.jpg", alt: "Aluno aprovado na habilitação pela ORSINE", legenda: "Mais um aluno habilitado com a ORSINE", href: "https://www.instagram.com/p/Dako1vflLa5/" },
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
          description="Alunos que conquistaram a habilitação com a ORSINE."
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
              <Card className="h-full border-[#C9A24B]/30 bg-white shadow-[0_12px_28px_-16px_rgba(6,26,58,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(6,26,58,0.45)] hover:border-[#C9A24B]/60">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/images/logo-orsine.svg" alt="Logo ORSINE" />
                    <AvatarFallback className="bg-navy-deep text-gold text-xs font-bold">
                      OR
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-navy-deep">ORSINE</span>
                    <span className="text-xs text-text-muted">Autoescola · Manaus</span>
                  </div>
                </CardHeader>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver post no Instagram"
                  className="relative block aspect-[4/5] w-full overflow-hidden"
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

                <CardFooter className="flex items-center justify-between border-t-0 bg-transparent px-4 py-3">
                  <div className="flex items-center gap-4 text-navy-deep/70">
                    <Heart className="h-5 w-5" aria-hidden="true" />
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <Bookmark className="h-5 w-5 text-navy-deep/70" aria-hidden="true" />
                </CardFooter>

                <CardContent className="px-4 pb-4 pt-0">
                  <p className="text-sm leading-relaxed text-navy-deep">
                    <span className="font-semibold">ORSINE</span> {item.legenda}
                  </p>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}