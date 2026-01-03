"use client";
import { Mode } from "./types";
import { clsx } from "./utils";

type Props = { mode: Mode; onSelect: (m: Mode) => void };

function Tab({
	label,
	active,
	onClick,
}: {
	label: string;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={clsx(
				"px-3 py-2 rounded-2xl text-sm border",
				active ? "bg-neutral-900 text-white" : "bg-white"
			)}
		>
			{label}
		</button>
	);
}

export default function ModeTabs({ mode, onSelect }: Props) {
	return (
		<div className="flex gap-2">
			<Tab
				label="🔗 URL"
				active={mode === "url"}
				onClick={() => onSelect("url")}
			/>
			<Tab
				label="📶 Wi-Fi"
				active={mode === "wifi"}
				onClick={() => onSelect("wifi")}
			/>
			<Tab
				label="🟢 WhatsApp"
				active={mode === "whatsapp"}
				onClick={() => onSelect("whatsapp")}
			/>
			<Tab
				label="💸 Pix"
				active={mode === "pix"}
				onClick={() => onSelect("pix")}
			/>
		</div>
	);
}
