import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { companyConfig, contactLinks } from "@/lib/company";

export function HomeSection() {
	return (
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
							{companyConfig.brandName}
						</strong>
						, cada obra é conduzida com excelência. O tempo da sua obra é
						precioso, e nossa equipe cuida de cada detalhe para entregar
						resultados acima da expectativa.
					</p>

					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg" className="shadow-brand">
							<a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
								Falar no WhatsApp
								<ArrowRight className="h-4 w-4" />
							</a>
						</Button>
						<Button asChild variant="outline" size="lg">
							<a href={contactLinks.email}>
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
							<p className="text-2xl font-extrabold text-[#161711]">
								SP e região
							</p>
							<p className="text-sm text-[#161711]/70">atendimento completo</p>
						</div>
					</div>
				</div>

				<div className="animate-fade-up lg:justify-self-end">
					<div className="surface-panel relative overflow-hidden p-3">
						<div className="relative aspect-[4/5] overflow-hidden rounded-lg">
							<Image
								src="/images/Imagem20.webp"
								alt={`Obra executada pela ${companyConfig.legalName}`}
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
	);
}
