import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ga-de-almeida.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GA de Almeida | Demolição e Terraplenagem em São Paulo",
    template: "%s | GA de Almeida"
  },
  description:
    "GA de Almeida Demolição e Terraplenagem: escavação, demolição, transporte de terra e serviços de subsolo com segurança, agilidade e responsabilidade ambiental em São Paulo e Grande SP.",
  keywords: [
    "demolição em São Paulo",
    "terraplenagem em São Paulo",
    "escavação",
    "transporte de terra",
    "perfuração para broca",
    "plaqueamento",
    "prancheamento",
    "serviços de subsolo"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "GA de Almeida Demolição e Terraplenagem",
    title: "GA de Almeida | Demolição e Terraplenagem em São Paulo",
    description:
      "Mais de 15 anos de experiência em terraplenagem, demolição e obras de subsolo com equipe especializada e equipamentos modernos.",
    images: [
      {
        url: "/images/logo.png",
        alt: "Logo da GA de Almeida Demolição e Terraplenagem"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GA de Almeida | Demolição e Terraplenagem em São Paulo",
    description:
      "Soluções completas para infraestrutura, terraplenagem e demolição em São Paulo e Grande SP.",
    images: ["/images/logo.png"]
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
