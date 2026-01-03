// app/robots.ts
export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const base = "https://gerarqr.com.br";
	return {
		rules: [{ userAgent: "*", allow: "/" }],
		sitemap: `${base}/sitemap.xml`,
	};
}
