"use client";

type Props = { url: string; setUrl: (v: string) => void };
export default function UrlForm({ url, setUrl }: Props) {
	return (
		<div className="bg-white rounded-2xl shadow p-4">
			<label className="text-sm font-medium">URL</label>
			<input
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				placeholder="https://exemplo.com"
				className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
			/>
			<p className="text-xs text-neutral-500 mt-2">
				Dica: prefira URLs curtas.
			</p>
		</div>
	);
}
