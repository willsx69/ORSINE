import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  SITE_URL,
  SITE_DESCRIPTION,
  INSTAGRAM_URL,
} from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: "ORSINE | Recursos de Trânsito e Habilitação em Manaus",
  description: SITE_DESCRIPTION,
  keywords: [
    "recursos de infrações de trânsito Manaus",
    "processos de habilitação Manaus",
    "intermediação de processos de trânsito",
    "ORSINE",
    "CNH do Brasil Manaus",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ORSINE | Recursos de Trânsito e Habilitação em Manaus",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "ORSINE — CNH do Brasil",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORSINE | Recursos de Trânsito e Habilitação em Manaus",
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#061A3A",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ORSINE — CNH do Brasil",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+55-92-99434-9708",
  image: `${SITE_URL}/opengraph-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Cosme Ferreira, Zumbi dos Palmares",
    addressLocality: "Manaus",
    addressRegion: "AM",
    postalCode: "69084-425",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Manaus",
    containedInProvince: "Amazonas",
  },
  sameAs: [INSTAGRAM_URL],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cn(montserrat.variable, inter.variable, "font-sans")}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
