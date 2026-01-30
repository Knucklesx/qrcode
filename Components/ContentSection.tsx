"use client";
import Link from "next/link";

export default function ContentSections() {
	return (
		<div className="mt-10 space-y-12">
			{/* COMO USAR */}
			<section>
				<h3 className="text-xl font-semibold">Como usar</h3>
				<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
					<Step
						n={1}
						title="Escolha o tipo"
						text="URL, Wi-Fi, WhatsApp ou Pix. Cada tipo tem campos específicos."
						img="/images/step1.png"
						alt="Selecionando o tipo de QR Code"
					/>
					<Step
						n={2}
						title="Preencha os dados"
						text="Cole o link, informe SSID/senha ou número e mensagem do WhatsApp."
						img="/images/step2.png"
						alt="Preenchendo dados do QR Code"
					/>
					<Step
						n={3}
						title="Ajuste e baixe"
						text="Defina tamanho, margem (quiet zone) e nível de correção. Baixe PNG/SVG."
						img="/images/step3.png"
						alt="Ajustando tamanho e baixando o QR Code"
					/>
				</div>
				<p className="mt-3 text-sm text-gray-500">
					Para impressão, use <b>SVG</b> ou PNG com <b>300 DPI</b> (ou mais).
				</p>
			</section>

			{/* BOAS PRÁTICAS */}
			<section>
				<h3 className="text-xl font-semibold">Boas práticas de QR Code</h3>
				<ul className="mt-3 space-y-2 text-gray-700">
					<li>
						<b>Tamanho mínimo:</b> regra 1/10 — leitura a 1 m ⇒ ~10 cm.
					</li>
					<li>
						<b>Contraste:</b> módulos escuros em fundo claro; evite inverter.
					</li>
					<li>
						<b>Margem (quiet zone):</b> pelo menos 4 módulos ao redor.
					</li>
					<li>
						<b>Correção de erro:</b> L(7%), M(15%), Q(25%), H(30%). Para
						logotipo, use Q/H.
					</li>
					<li>
						<b>Não distorça:</b> mantenha proporção 1:1; evite brilho/excesso de
						textura.
					</li>
				</ul>
			</section>

			{/* FAQ */}
			<section>
				<h3 className="text-xl font-semibold">Perguntas frequentes</h3>
				<div className="mt-3 space-y-4">
					<Faq
						q="Qual a diferença entre QR estático e dinâmico?"
						a="Estático codifica o destino e não muda depois. Dinâmico aponta para uma URL que você pode alterar e rastrear."
					/>
					<Faq
						q="Posso usar logotipo dentro do QR?"
						a="Sim, mas aumente a correção para Q/H e teste o scan em diferentes aparelhos."
					/>
					<Faq
						q="Vocês rastreiam os scans?"
						a="Não. QRs estáticos não coletam dados. Para rastrear, use uma URL sua com parâmetros UTM."
					/>
				</div>
				<p className="mt-4 text-sm text-gray-500">
					Políticas e contato:{" "}
					<Link href="/privacy" className="text-blue-600 underline">
						Privacidade
					</Link>
				</p>
			</section>
		</div>
	);
}

function Step({
	n,
	title,
	text,
	img,
	alt,
}: {
	n: number;
	title: string;
	text: string;
	img: string;
	alt: string;
}) {
	return (
		<div className="rounded-2xl border bg-white p-4 shadow-sm">
			<div className="text-xs text-gray-500">Passo {n}</div>
			<div className="mt-1 font-medium">{title}</div>
			<p className="mt-1 text-sm text-gray-600">{text}</p>
			<div className="mt-3 aspect-[4/3] overflow-hidden rounded-xl border bg-gray-50">
				{/* troque pelas suas imagens reais */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={img} alt={alt} className="h-full w-full object-cover" />
			</div>
		</div>
	);
}

function Faq({ q, a }: { q: string; a: string }) {
	return (
		<details className="rounded-2xl border bg-white p-4 shadow-sm">
			<summary className="cursor-pointer select-none font-medium">{q}</summary>
			<p className="mt-2 text-sm text-gray-600">{a}</p>
		</details>
	);
}
