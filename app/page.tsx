import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const whatsappNumber = "5511953212902";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento de demolição e terraplenagem."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const emailAddress = "Rossi.davi.terraplenagem@gmail.com";
const emailLink = `mailto:${emailAddress}`;

const services = [
  {
    title: "Escavação",
    description:
      "Remoção de terra, rocha e materiais para abertura de valas, fundações, subsolos, nivelamento e cortes em terrenos."
  },
  {
    title: "Demolição",
    description:
      "Demolição planejada de construções e estruturas com foco em segurança, produtividade e controle técnico da execução."
  },
  {
    title: "Transporte de Terra e Resíduos",
    description:
      "Coleta e destinação de resíduos para aterros legalizados, com caminhões caçamba e rastreabilidade operacional."
  },
  {
    title: "Perfuração para Broca",
    description:
      "Perfuração de solo com método rotativo ou manual para abertura de furos cilíndricos precisos em diferentes condições de terreno."
  },
  {
    title: "Plaqueamento",
    description:
      "Fixação de placas cimentícias ou de fibrocimento sobre estruturas metálicas para vedação e revestimento, principalmente em subsolos."
  },
  {
    title: "Prancheamento",
    description:
      "Execução de cortina de estaca-prancha para contenção de solo e água, garantindo estabilidade e segurança em escavações."
  },
  {
    title: "Quebra de Pisos",
    description:
      "Remoção técnica de pisos e bases de concreto para adequação de áreas de obra com controle de impacto e limpeza."
  },
  {
    title: "Arrasamento de Estacas",
    description:
      "Corte e nivelamento do topo das estacas conforme cota de projeto, removendo concreto comprometido e expondo a armadura para coroamento."
  },
  {
    title: "Tubulões",
    description:
      "Execução de fundações profundas por escavação e concretagem em grandes diâmetros, recomendada para estruturas que exigem alta capacidade de carga."
  },
  {
    title: "Serviços de Subsolo",
    description:
      "Remoção, escavação e instalação de drenos com equipamentos de pequeno porte para áreas com acesso restrito."
  }
];

const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/terraplanagem_ga_de_almeida/",
    icon: Instagram
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063973753156",
    icon: Facebook
  },
  {
    label: "Google Empresa",
    href: "https://share.google/IzX1UDCH1fiM1FJSD",
    icon: Building2
  }
];

const galleryImages = [
  "Imagem1.jpg",
  "Imagem2.jpg",
  "Imagem3.jpg",
  "Imagem4.png",
  "Imagem5.png",
  "Imagem6.png",
  "Imagem7.png",
  "Imagem8.png",
  "Imagem9.png",
  "Imagem10.png",
  "Imagem11.png",
  "Imagem12.png",
  "Imagem13.png",
  "Imagem14.png",
  "Imagem15.png",
  "Imagem16.png",
  "Imagem17.png",
  "Imagem18.png",
  "Imagem19.png",
  "Imagem20.jpg",
  "Imagem21.jpg",
  "Imagem22.jpg",
  "Imagem23.jpg"
];

const coverageAreas = [
  "Zona Leste",
  "Zona Oeste",
  "Zona Norte",
  "Zona Sul",
  "Centro de São Paulo",
  "Grande São Paulo"
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "GA de Almeida Demolição e Terraplenagem",
  legalName: "GA de Almeida",
  description:
    "Empresa especializada em terraplenagem, demolição, escavação, transporte de terra e serviços de subsolo em São Paulo e região metropolitana.",
  foundingDate: "2010",
  telephone: "+55 11 95321-2902",
  email: emailAddress,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Camberra 235, Vila Formosa",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR"
  },
  areaServed: "São Paulo e Região Metropolitana",
  sameAs: socialLinks.map((link) => link.href),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+55 11 95321-2902",
    email: emailAddress
  }
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Script
        id="ga-de-almeida-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SiteHeader whatsappLink={whatsappLink} />

      <section id="home" className="anchor-offset section-shell pb-10 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up space-y-7">
            <p className="inline-flex rounded-full border border-[#E5442A]/30 bg-[#E5442A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#161711]">
              Demolição e Terraplenagem em São Paulo
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-[#161711] md:text-5xl lg:text-6xl">
              Transforme seu projeto em realidade com rapidez, segurança e
              responsabilidade ambiental.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[#161711]/80">
              Na{" "}
              <strong className="text-[#161711]">
                GA de Almeida Demolição e Terraplenagem
              </strong>
              , cada obra é conduzida com excelência. O tempo da sua obra é
              precioso, e nossa equipe cuida de cada detalhe para entregar
              resultados acima da expectativa.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-brand">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={emailLink}>
                  Enviar E-mail
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="surface-panel p-4">
                <p className="text-2xl font-extrabold text-[#161711]">+15 anos</p>
                <p className="text-sm text-[#161711]/70">de experiência</p>
              </div>
              <div className="surface-panel p-4">
                <p className="text-2xl font-extrabold text-[#161711]">24h</p>
                <p className="text-sm text-[#161711]/70">agilidade no retorno</p>
              </div>
              <div className="surface-panel p-4">
                <p className="text-2xl font-extrabold text-[#161711]">SP e região</p>
                <p className="text-sm text-[#161711]/70">atendimento completo</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up lg:justify-self-end">
            <div className="surface-panel relative overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="/images/Imagem20.jpg"
                  alt="Obra executada pela GA de Almeida"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/30 bg-black/75 p-4 text-white">
                <p className="text-sm font-semibold tracking-wide">
                  Atendimento em todas as zonas da capital e Grande São Paulo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="anchor-offset section-shell pt-8">
        <div className="surface-panel animate-fade-up p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#161711] md:text-4xl">
            Nossa História
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#161711]/85 md:text-lg">
            <p>
              Fundada em 2010, a{" "}
              <strong className="text-[#161711]">G.A. DE ALMEIDA</strong> é
              especializada em soluções completas para obras de infraestrutura,
              terraplenagem e movimentação de solo. Atuamos com equipamentos
              modernos, incluindo escavadeiras, mini escavadeiras, Bobcat,
              rompedor, perfuração de solo e caminhões caçamba.
            </p>
            <p>
              Com mais de 15 anos de atuação no setor, nossa missão é entregar
              eficiência, segurança e qualidade em cada projeto, atendendo desde
              obras residenciais até grandes empreendimentos urbanos.
            </p>
            <p>
              Também oferecemos soluções especializadas em plaqueamento,
              prancheamento e instalação de drenos, ampliando estabilidade,
              durabilidade e segurança nas obras.
            </p>
          </div>
        </div>
      </section>

      <section id="servicos" className="anchor-offset section-shell pt-8">
        <div className="mb-8 flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-[#161711] md:text-4xl">
            Serviços Especializados
          </h2>
          <p className="max-w-3xl text-[#161711]/75">
            Soluções técnicas para todas as etapas da obra, com foco em
            segurança, prazo e responsabilidade ambiental.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="animate-fade-up">
              <CardHeader>
                <CardTitle className="flex items-start gap-2 text-[#161711]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E5442A]" />
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-[#161711]/75">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pt-2">
        <div className="surface-panel grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
          <div>
            <h2 className="text-3xl font-bold text-[#161711] md:text-4xl">
              Excelência que alcança toda São Paulo e Região Metropolitana
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#161711]/80">
              A GA de Almeida está estrategicamente localizada em São Paulo para
              atender com eficiência e rapidez em qualquer região. Onde quer que
              sua obra esteja, nossa equipe e equipamentos modernos chegam até
              você com compromisso total de prazo.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {coverageAreas.map((area) => (
              <li
                key={area}
                className="rounded-lg border border-[#E5442A]/20 bg-[#E5442A]/5 px-4 py-3 text-sm font-semibold text-[#161711]"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="galeria" className="anchor-offset section-shell pt-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#161711] md:text-4xl">
              Galeria de Obras
            </h2>
            <p className="mt-2 text-[#161711]/75">
              Equipamentos, operação e resultados em campo.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((imageName, index) => (
            <figure
              key={imageName}
              className={cn(
                "group overflow-hidden rounded-xl border border-[#161711]/10 bg-white p-2 shadow-sm",
                index % 7 === 0 && "sm:col-span-2 lg:col-span-1"
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={`/images/${imageName}`}
                  alt={`Serviço executado pela GA de Almeida - imagem ${index + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section id="contato" className="anchor-offset section-shell pt-8">
        <div className="surface-panel grid gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <h2 className="text-3xl font-bold text-[#161711] md:text-4xl">
              Fale com a nossa equipe
            </h2>
            <p className="mt-4 max-w-xl text-[#161711]/80">
              Solicite orçamento para demolição, terraplenagem, escavações e
              serviços especializados de subsolo.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-[#161711]/10 bg-white px-4 py-3 text-sm font-semibold text-[#161711] transition hover:border-[#E5442A]/40 hover:bg-[#E5442A]/5"
              >
                <Phone className="h-4 w-4 text-[#E5442A]" />
                WhatsApp: (11) 95321-2902
              </a>
              <a
                href={emailLink}
                className="flex items-center gap-3 rounded-lg border border-[#161711]/10 bg-white px-4 py-3 text-sm font-semibold text-[#161711] transition hover:border-[#E5442A]/40 hover:bg-[#E5442A]/5"
              >
                <Mail className="h-4 w-4 text-[#E5442A]" />
                {emailAddress}
              </a>
              <p className="flex items-center gap-3 rounded-lg border border-[#161711]/10 bg-white px-4 py-3 text-sm font-semibold text-[#161711]/85">
                <MapPin className="h-4 w-4 text-[#E5442A]" />
                Rua Camberra 235, Vila Formosa - São Paulo/SP
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#161711]">Redes sociais</h3>
            <p className="mt-2 text-sm text-[#161711]/75">
              Acompanhe nossos serviços e avaliações.
            </p>

            <div className="mt-5 grid gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Button
                    key={social.label}
                    asChild
                    variant="outline"
                    className="h-12 justify-start text-sm font-semibold"
                  >
                    <a href={social.href} target="_blank" rel="noreferrer">
                      <Icon className="h-4 w-4 text-[#E5442A]" />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#161711]/10 bg-[#161711] py-8 text-[#FEFEFE]">
        <div className="container flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">
            GA de Almeida Demolição e Terraplenagem
          </p>
          <p>Endereço: Rua Camberra 235, Vila Formosa - São Paulo/SP</p>
          <p>CNPJ: 13.050.110/0001-00</p>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition hover:scale-105 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white animate-pulse-soft"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-9 w-9 fill-white"
          role="img"
        >
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.42 0 .05 5.37.05 11.98c0 2.11.55 4.18 1.6 6L0 24l6.18-1.61a11.9 11.9 0 0 0 5.85 1.49h.01c6.61 0 11.98-5.37 11.99-11.99A11.9 11.9 0 0 0 20.52 3.48Zm-8.49 18.37h-.01a9.94 9.94 0 0 1-5.06-1.39l-.36-.22-3.67.96.98-3.58-.24-.37a9.96 9.96 0 0 1-1.53-5.27c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.18 1.04 7.06 2.92a9.9 9.9 0 0 1 2.92 7.06c0 5.51-4.48 9.99-9.98 9.99Zm5.47-7.49c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.64.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.5-1.77-1.68-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </main>
  );
}
