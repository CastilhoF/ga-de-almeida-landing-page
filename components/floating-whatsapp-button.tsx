import { contactLinks } from "@/lib/company";

export function FloatingWhatsappButton() {
	return (
		<a
			href={contactLinks.whatsapp}
			target="_blank"
			rel="noreferrer"
			aria-label="Falar no WhatsApp"
			className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition hover:scale-105 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white animate-pulse-soft"
		>
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				className="h-9 w-9 fill-white"
				role="img"
			>
				<path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.42 0 .05 5.37.05 11.98c0 2.11.55 4.18 1.6 6L0 24l6.18-1.61a11.9 11.9 0 0 0 5.85 1.49h.01c6.61 0 11.98-5.37 11.99-11.99A11.9 11.9 0 0 0 20.52 3.48Zm-8.49 18.37h-.01a9.94 9.94 0 0 1-5.06-1.39l-.36-.22-3.67.96.98-3.58-.24-.37a9.96 9.96 0 0 1-1.53-5.27c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.18 1.04 7.06 2.92a9.9 9.9 0 0 1 2.92 7.06c0 5.51-4.48 9.99-9.98 9.99Zm5.47-7.49c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.64.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.5-1.77-1.68-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
			</svg>
		</a>
	);
}
