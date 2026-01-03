"use client";
import { Ecc } from "./types";

type Props = {
	size: number;
	setSize: (n: number) => void;
	margin: number;
	setMargin: (n: number) => void;
	ecc: Ecc;
	setEcc: (e: Ecc) => void;
};
export default function OptionsPanel({
	size,
	setSize,
	margin,
	setMargin,
	ecc,
	setEcc,
}: Props) {
	return (
		<div className="bg-white rounded-2xl shadow p-4 grid sm:grid-cols-3 gap-4">
			<div>
				<label className="text-sm font-medium">Tamanho</label>
				<input
					type="number"
					min={128}
					max={1024}
					value={size}
					onChange={(e) => setSize(Number(e.target.value) || 320)}
					className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
				/>
			</div>
			<div>
				<label className="text-sm font-medium">Margem</label>
				<input
					type="number"
					min={0}
					max={16}
					value={margin}
					onChange={(e) => setMargin(Number(e.target.value) || 4)}
					className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
				/>
			</div>
			<div>
				<label className="text-sm font-medium">Correção de erro</label>
				<select
					value={ecc}
					onChange={(e) => setEcc(e.target.value as Ecc)}
					className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
				>
					<option value="L">L (menor)</option>
					<option value="M">M</option>
					<option value="Q">Q</option>
					<option value="H">H (maior)</option>
				</select>
			</div>
		</div>
	);
}
