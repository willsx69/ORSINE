import type { Metadata } from "next";
import { Montserrat, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ORSINE | Recursos de Trânsito e Habilitação em Manaus",
  description:
    "Conheça os serviços da ORSINE em Manaus. Atendimento relacionado a recursos de infrações de trânsito e processos de habilitação.",
  openGraph: {
    title: "ORSINE | Recursos de Trânsito e Habilitação em Manaus",
    description:
      "Conheça os serviços da ORSINE em Manaus. Atendimento relacionado a recursos de infrações de trânsito e processos de habilitação.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn(montserrat.variable, inter.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}