import type { LucideIcon } from "lucide-react";
import {
	Building2,
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	companyConfig,
	companySocialLinks,
	contactLinks,
	type SocialNetworkId,
} from "@/lib/company";

const socialIconMap: Record<SocialNetworkId, LucideIcon> = {
	instagram: Instagram,
	facebook: Facebook,
	googleBusiness: Building2,
};

export function ContactSection() {
	return (
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
							href={contactLinks.whatsapp}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-3 rounded-lg border border-[#161711]/10 bg-white px-4 py-3 text-sm font-semibold text-[#161711] transition hover:border-[#E5442A]/40 hover:bg-[#E5442A]/5"
						>
							<Phone className="h-4 w-4 text-[#E5442A]" />
							WhatsApp: {companyConfig.phone.display}
						</a>
						<a
							href={contactLinks.email}
							className="flex items-center gap-3 rounded-lg border border-[#161711]/10 bg-white px-4 py-3 text-sm font-semibold text-[#161711] transition hover:border-[#E5442A]/40 hover:bg-[#E5442A]/5"
						>
							<Mail className="h-4 w-4 text-[#E5442A]" />
							{companyConfig.email}
						</a>
						<p className="flex items-center gap-3 rounded-lg border border-[#161711]/10 bg-white px-4 py-3 text-sm font-semibold text-[#161711]/85">
							<MapPin className="h-4 w-4 text-[#E5442A]" />
							{companyConfig.address.full}
						</p>
					</div>
				</div>

				<div>
					<h3 className="text-xl font-bold text-[#161711]">Redes sociais</h3>
					<p className="mt-2 text-sm text-[#161711]/75">
						Acompanhe nossos serviços e avaliações.
					</p>

					<div className="mt-5 grid gap-3">
						{companySocialLinks.map((social) => {
							const Icon = socialIconMap[social.id];

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
	);
}
