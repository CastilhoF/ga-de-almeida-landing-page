import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = Array.from({ length: 23 }, (_, index) => {
	const imageNumber = index + 1;
	return `/images/Imagem${imageNumber}.webp`;
});

export function GallerySection() {
	return (
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
				{galleryImages.map((imagePath, index) => (
					<figure
						key={imagePath}
						className={cn(
							"group overflow-hidden rounded-xl border border-[#161711]/10 bg-white p-2 shadow-sm",
							index % 7 === 0 && "sm:col-span-2 lg:col-span-1",
						)}
					>
						<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
							<Image
								src={imagePath}
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
	);
}
