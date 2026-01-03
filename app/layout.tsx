import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "GerarQR — Gerador de QR Code grátis",
		template: "%s · GerarQR",
	},
	description:
		"Crie QR Codes em segundos: URL, Wi-Fi, WhatsApp e Pix. 100% grátis e sem login — tudo no seu navegador.",
	openGraph: {
		title: "GerarQR — Gerador de QR Code grátis",
		description:
			"Gere QR Codes (URL, Wi-Fi, WhatsApp e Pix) em segundos, sem enviar dados ao servidor.",
		url: "https://gerarqr.com.br/",
		siteName: "GerarQR",
		type: "website",
	},
	alternates: { canonical: "https://gerarqr.com.br/" },
	icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
	colorScheme: "light",
	themeColor: "#ffffff",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900`}
			>
				{children}
			</body>
		</html>
	);
}
