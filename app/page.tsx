import Script from "next/script";
import { FloatingWhatsappButton } from "@/components/floating-whatsapp-button";
import { ContactSection } from "@/components/sections/contact-section";
import { CoverageSection } from "@/components/sections/coverage-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HistorySection } from "@/components/sections/history-section";
import { HomeSection } from "@/components/sections/home-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { localBusinessSchema } from "@/lib/company";

export default function HomePage() {
	return (
		<main className="relative overflow-hidden">
			<Script id="ga-de-almeida-schema" type="application/ld+json">
				{JSON.stringify(localBusinessSchema)}
			</Script>

			<SiteHeader />

			<HomeSection />

			<HistorySection />

			<ServicesSection />

			<CoverageSection />

			<GallerySection />

			<ContactSection />

			<SiteFooter />
			<FloatingWhatsappButton />
		</main>
	);
}
