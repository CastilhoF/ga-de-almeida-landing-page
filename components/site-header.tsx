"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type SiteHeaderProps = {
  whatsappLink: string;
};

const navLinks = [
  { label: "Nossa História", href: "#historia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" }
];

export function SiteHeader({ whatsappLink }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#161711]/10 bg-[#FEFEFE]/90 backdrop-blur-sm">
        <div className="container relative flex min-h-[11rem] items-center justify-center py-2 md:justify-between">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute left-2 h-11 w-11 border border-[#161711]/15 bg-white/90 text-[#161711] md:hidden"
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <a
            href="#home"
            className="rounded-md outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Ir para o início da página"
          >
            <Image
              src="/images/logo.png"
              alt="Logo da GA de Almeida"
              width={464}
              height={210}
              priority
              className="h-[10rem] w-auto md:h-[10rem]"
            />
          </a>

          <nav className="hidden items-center gap-8 text-base font-semibold text-[#161711] lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#E5442A]">
                {link.label}
              </a>
            ))}
          </nav>

          <Button asChild size="lg" className="hidden px-6 text-base md:inline-flex">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] transition ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-[#161711]/70 backdrop-blur-[2px] transition-opacity ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={`absolute left-0 top-0 h-full w-[82%] max-w-sm bg-[#161711]/92 p-6 text-[#FEFEFE] shadow-2xl backdrop-blur-md transition-transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#FEFEFE]/70">
              Navegação
            </p>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-10 w-10 border border-white/30 text-[#FEFEFE] hover:bg-white/10"
              aria-label="Fechar menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-[#FEFEFE] transition hover:bg-white/10 hover:text-[#E5442A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button asChild size="lg" className="mt-6 w-full text-base">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </aside>
      </div>
    </>
  );
}
