"use client";

type Props = {
	waPhone: string;
	setWaPhone: (v: string) => void;
	waMsg: string;
	setWaMsg: (v: string) => void;
};
export default function WhatsAppForm({
	waPhone,
	setWaPhone,
	waMsg,
	setWaMsg,
}: Props) {
	return (
		<div className="bg-white rounded-2xl shadow p-4 grid gap-4">
			<div>
				<label className="text-sm font-medium">Telefone (DDI+DDD+Número)</label>
				<input
					value={waPhone}
					onChange={(e) => setWaPhone(e.target.value)}
					placeholder="55 11 999999999"
					className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
				/>
			</div>
			<div>
				<label className="text-sm font-medium">Mensagem (opcional)</label>
				<textarea
					value={waMsg}
					onChange={(e) => setWaMsg(e.target.value)}
					rows={3}
					placeholder="Olá!"
					className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
				/>
			</div>
			<p className="text-xs text-neutral-500">
				Gera link wa.me com a mensagem pronta.
			</p>
		</div>
	);
}
