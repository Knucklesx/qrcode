// app/privacy/page.tsx
export const metadata = { title: "Política de Privacidade" };

export default function PrivacyPage() {
	return (
		<article className="mx-auto max-w-3xl rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm text-neutral-900">
			<h1 className="text-2xl font-semibold mb-4">Política de Privacidade</h1>
			<p className="text-neutral-700">
				O GerarQR não coleta o conteúdo dos QR Codes gerados. Usamos métricas
				anônimas de acesso (Google Analytics/Ads, se habilitado) para melhorar o
				produto. Consulte os detalhes de cookies e consentimento aplicáveis à
				sua região.
			</p>
			<h2 className="text-xl font-semibold mt-6 mb-2">
				Dados processados localmente
			</h2>
			<ul className="list-disc ml-5 text-neutral-700 space-y-1">
				<li>
					Conteúdo digitado (URL, Wi-Fi, WhatsApp, Pix) é processado no seu
					navegador.
				</li>
				<li>Nada é enviado aos nossos servidores para gerar o QR.</li>
			</ul>
			<h2 className="text-xl font-semibold mt-6 mb-2">Contato</h2>
			<p className="text-neutral-700">contato@gerarqr.com.br</p>
		</article>
	);
}
