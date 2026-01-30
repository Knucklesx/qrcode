// app/layout.tsx
import SiteHeader from "@/Components/SiteHeader";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
	const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

	return (
		<html lang="pt-BR">
			<head>
				{/* Google tag (gtag.js) */}
				{GA_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
							strategy="afterInteractive"
						/>
						<Script id="gtag-init" strategy="afterInteractive">
							{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
						</Script>
					</>
				)}
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-900`}
			>
				<SiteHeader />
				{children}
			</body>
		</html>
	);
}
