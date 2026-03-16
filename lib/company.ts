export type SocialNetworkId = "instagram" | "facebook" | "googleBusiness";

export const companyConfig = {
	brandName: "GA de Almeida Demolição e Terraplenagem",
	legalName: "GA de Almeida",
	cnpj: "13.050.110/0001-00",
	foundedYear: "2010",
	email: "rossi.davi.terraplenagem@gmail.com",
	phone: {
		digits: "5511953212902",
		display: "(11) 95321-2902",
		international: "+55 11 95321-2902",
	},
	whatsappMessage:
		"Olá! Gostaria de solicitar um orçamento de demolição e terraplenagem.",
	address: {
		streetAddress: "Rua Camberra 235, Vila Formosa",
		city: "São Paulo",
		region: "SP",
		country: "BR",
		full: "Rua Camberra 235, Vila Formosa - São Paulo/SP",
	},
	areaServed: "São Paulo e Região Metropolitana",
	logoImage: "/images/logo.webp",
	faviconImage: "/images/favicon-v3.png?v=20260316b",
} as const;

export const companySocialLinks = [
	{
		id: "instagram" as const,
		label: "Instagram",
		href: "https://www.instagram.com/terraplanagem_ga_de_almeida/",
	},
	{
		id: "facebook" as const,
		label: "Facebook",
		href: "https://www.facebook.com/profile.php?id=100063973753156",
	},
	{
		id: "googleBusiness" as const,
		label: "Google Empresa",
		href: "https://share.google/IzX1UDCH1fiM1FJSD",
	},
];

const whatsappMessage = encodeURIComponent(companyConfig.whatsappMessage);

export const contactLinks = {
	whatsapp: `https://wa.me/${companyConfig.phone.digits}?text=${whatsappMessage}`,
	email: `mailto:${companyConfig.email}`,
} as const;

export const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "HomeAndConstructionBusiness",
	name: companyConfig.brandName,
	legalName: companyConfig.legalName,
	description:
		"Empresa especializada em terraplenagem, demolição, escavação, transporte de terra e serviços de subsolo em São Paulo e região metropolitana.",
	foundingDate: companyConfig.foundedYear,
	telephone: companyConfig.phone.international,
	email: companyConfig.email,
	address: {
		"@type": "PostalAddress",
		streetAddress: companyConfig.address.streetAddress,
		addressLocality: companyConfig.address.city,
		addressRegion: companyConfig.address.region,
		addressCountry: companyConfig.address.country,
	},
	areaServed: companyConfig.areaServed,
	sameAs: companySocialLinks.map((link) => link.href),
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "customer service",
		telephone: companyConfig.phone.international,
		email: companyConfig.email,
	},
} as const;
