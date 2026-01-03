"use client";

type Props = { pix: string; setPix: (v: string) => void };
export default function PixForm({ pix, setPix }: Props) {
	return (
		<div className="bg-white rounded-2xl shadow p-4">
			<label className="text-sm font-medium">Pix (copia e cola)</label>
			<textarea
				value={pix}
				onChange={(e) => setPix(e.target.value)}
				rows={5}
				placeholder="Cole aqui o código PIX copia e cola"
				className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
			/>
			<p className="text-xs text-neutral-500 mt-2">
				Não geramos payload; apenas transformamos o seu código em QR.
			</p>
		</div>
	);
}
