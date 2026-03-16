const coverageAreas = [
	"Zona Leste",
	"Zona Oeste",
	"Zona Norte",
	"Zona Sul",
	"Centro de São Paulo",
	"Grande São Paulo",
];

export function CoverageSection() {
	return (
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
	);
}
