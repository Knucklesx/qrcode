// app/sitemap.ts
export const dynamic = "force-static"; // <- obrigatório no static export
export const revalidate = 86400; // <- opcional (regera 1x/dia)

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
	];
}
