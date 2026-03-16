import { CheckCircle2 } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const services = [
	{
		title: "Escavação",
		description:
			"Remoção de terra, rocha e materiais para abertura de valas, fundações, subsolos, nivelamento e cortes em terrenos.",
	},
	{
		title: "Demolição",
		description:
			"Demolição planejada de construções e estruturas com foco em segurança, produtividade e controle técnico da execução.",
	},
	{
		title: "Transporte de Terra e Resíduos",
		description:
			"Coleta e destinação de resíduos para aterros legalizados, com caminhões caçamba e rastreabilidade operacional.",
	},
	{
		title: "Perfuração para Broca",
		description:
			"Perfuração de solo com método rotativo ou manual para abertura de furos cilíndricos precisos em diferentes condições de terreno.",
	},
	{
		title: "Plaqueamento",
		description:
			"Fixação de placas cimentícias ou de fibrocimento sobre estruturas metálicas para vedação e revestimento, principalmente em subsolos.",
	},
	{
		title: "Prancheamento",
		description:
			"Execução de cortina de estaca-prancha para contenção de solo e água, garantindo estabilidade e segurança em escavações.",
	},
	{
		title: "Quebra de Pisos",
		description:
			"Remoção técnica de pisos e bases de concreto para adequação de áreas de obra com controle de impacto e limpeza.",
	},
	{
		title: "Arrasamento de Estacas",
		description:
			"Corte e nivelamento do topo das estacas conforme cota de projeto, removendo concreto comprometido e expondo a armadura para coroamento.",
	},
	{
		title: "Tubulões",
		description:
			"Execução de fundações profundas por escavação e concretagem em grandes diâmetros, recomendada para estruturas que exigem alta capacidade de carga.",
	},
	{
		title: "Serviços de Subsolo",
		description:
			"Remoção, escavação e instalação de drenos com equipamentos de pequeno porte para áreas com acesso restrito.",
	},
];

export function ServicesSection() {
	return (
		<section id="servicos" className="anchor-offset section-shell pt-8">
			<div className="mb-8 flex flex-col gap-3">
				<h2 className="text-3xl font-bold text-[#161711] md:text-4xl">
					Serviços Especializados
				</h2>
				<p className="max-w-3xl text-[#161711]/75">
					Soluções técnicas para todas as etapas da obra, com foco em segurança,
					prazo e responsabilidade ambiental.
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
	);
}
