import { companyConfig } from "@/lib/company";

export function HistorySection() {
	return (
		<section id="historia" className="anchor-offset section-shell pt-8">
			<div className="surface-panel animate-fade-up p-8 md:p-12">
				<h2 className="text-3xl font-bold text-[#161711] md:text-4xl">
					Nossa História
				</h2>
				<div className="mt-6 space-y-4 text-base leading-relaxed text-[#161711]/85 md:text-lg">
					<p>
						Fundada em 2010, a{" "}
						<strong className="text-[#161711]">
							{companyConfig.legalName}
						</strong>{" "}
						é especializada em soluções completas para obras de infraestrutura,
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
	);
}
