"use client";
import type * as QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";
import type { Ecc } from "./types";

type CanvasOpts = QRCode.QRCodeRenderersOptions & {
	errorCorrectionLevel: QRCode.QRCodeErrorCorrectionLevel;
	width: number;
};

type StringOpts = QRCode.QRCodeRenderersOptions & {
	errorCorrectionLevel: QRCode.QRCodeErrorCorrectionLevel;
	type: "svg";
};

export default function PreviewPanel({
	payload,
	size,
	margin,
	ecc,
}: {
	payload: string;
	size: number;
	margin: number;
	ecc: Ecc;
}) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [svgMarkup, setSvgMarkup] = useState("");

	useEffect(() => {
		let mounted = true;
		(async () => {
			const QR = (await import("qrcode")) as typeof QRCode;

			const canvasOpts: CanvasOpts = {
				errorCorrectionLevel: ecc,
				margin,
				width: size,
			};
			if (canvasRef.current) {
				try {
					await QR.toCanvas(canvasRef.current, payload || " ", canvasOpts);
				} catch {
					const ctx = canvasRef.current.getContext("2d");
					if (ctx) ctx.clearRect(0, 0, size, size);
				}
			}

			const strOpts: StringOpts = {
				errorCorrectionLevel: ecc,
				margin,
				type: "svg",
			};
			try {
				const svg = await QR.toString(payload || " ", strOpts);
				if (mounted) setSvgMarkup(svg);
			} catch {
				if (mounted) setSvgMarkup("");
			}
		})();
		return () => {
			mounted = false;
		};
	}, [payload, size, margin, ecc]);

	function downloadPNG() {
		const c = canvasRef.current;
		if (!c) return;
		const a = document.createElement("a");
		a.href = c.toDataURL("image/png");
		a.download = "qr.png";
		a.click();
	}
	function downloadSVG() {
		if (!svgMarkup) return;
		const blob = new Blob([svgMarkup], { type: "image/svg+xml" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "qr.svg";
		a.click();
		URL.revokeObjectURL(url);
	}

	return (
		<div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
			<canvas
				ref={canvasRef}
				width={size}
				height={size}
				className="rounded-xl border"
			/>
			<div className="mt-4 flex gap-3">
				<button
					onClick={downloadPNG}
					className="px-4 py-3 rounded-2xl shadow bg-neutral-900 text-white hover:opacity-90"
				>
					Baixar PNG
				</button>
				<button
					onClick={downloadSVG}
					className="px-4 py-3 rounded-2xl shadow bg-white hover:shadow-md"
				>
					Baixar SVG
				</button>
			</div>
			<p className="text-xs text-neutral-500 mt-4 text-center">
				Privacidade: tudo acontece no seu navegador.
			</p>
		</div>
	);
}
