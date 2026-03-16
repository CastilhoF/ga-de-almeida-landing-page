import { companyConfig } from "@/lib/company";

export function SiteFooter() {
	return (
		<footer className="border-t border-[#161711]/10 bg-[#161711] py-8 text-[#FEFEFE]">
			<div className="container flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
				<p className="font-semibold">{companyConfig.brandName}</p>
				<p>Endereço: {companyConfig.address.full}</p>
				<p>CNPJ: {companyConfig.cnpj}</p>
			</div>
		</footer>
	);
}
