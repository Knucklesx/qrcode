// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://gerarqr.com.br";
	return [
		{
			url: base,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		// adicione rotas estáticas se quiser:
		// { url: `${base}/whatsapp`, changeFrequency: "monthly", priority: 0.8 },
		// { url: `${base}/pix`, changeFrequency: "monthly", priority: 0.8 },
	];
}
