"use client";
import { useMemo, useState } from "react";
import PixForm from "./qr/forms/PixForm";
import UrlForm from "./qr/forms/UrlForm";
import WhatsAppForm from "./qr/forms/WhatsAppForm";
import WifiForm from "./qr/forms/WifiForm";
import ModeTabs from "./qr/ModeTabs";
import OptionsPanel from "./qr/OptionsPanel";
import PreviewPanel from "./qr/PreviewPanel";
import { Ecc, Mode } from "./qr/types";
import { whatsappLink, wifiPayload } from "./qr/utils";

export default function QRPro() {
	const [mode, setMode] = useState<Mode>("url");
	const [url, setUrl] = useState("https://");
	const [ssid, setSsid] = useState("");
	const [pwd, setPwd] = useState("");
	const [enc, setEnc] = useState<"WPA" | "WEP" | "nopass">("WPA");
	const [hidden, setHidden] = useState(false);
	const [waPhone, setWaPhone] = useState("");
	const [waMsg, setWaMsg] = useState("");
	const [pix, setPix] = useState("");

	const [size, setSize] = useState(320);
	const [margin, setMargin] = useState(4);
	const [ecc, setEcc] = useState<Ecc>("M");

	function handleSelect(m: Mode) {
		setMode(m);
		if (m === "url") setUrl("https://");
		if (m === "wifi") {
			setSsid("");
			setPwd("");
			setEnc("WPA");
			setHidden(false);
		}
		if (m === "whatsapp") {
			setWaPhone("");
			setWaMsg("");
		}
		if (m === "pix") setPix("");
	}

	const payload = useMemo(() => {
		switch (mode) {
			case "url":
				return url.trim();
			case "wifi":
				return wifiPayload({ ssid, password: pwd, encryption: enc, hidden });
			case "whatsapp":
				return whatsappLink({ phone: waPhone, message: waMsg });
			case "pix":
				return pix.trim();
			default:
				return "";
		}
	}, [mode, url, ssid, pwd, enc, hidden, waPhone, waMsg, pix]);

	return (
		<div
			className="min-h-screen bg-neutral-50 text-neutral-900"
			suppressHydrationWarning
		>
			<div className="max-w-4xl mx-auto px-4 py-8">
				<header className="flex items-center justify-between mb-6">
					<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
						QR Pro (URL • Wi-Fi • WhatsApp • Pix)
					</h1>
					<ModeTabs mode={mode} onSelect={handleSelect} />
				</header>

				<div className="grid md:grid-cols-2 gap-6">
					<div className="grid gap-4">
						{mode === "url" && <UrlForm url={url} setUrl={setUrl} />}
						{mode === "wifi" && (
							<WifiForm
								ssid={ssid}
								setSsid={setSsid}
								pwd={pwd}
								setPwd={setPwd}
								enc={enc}
								setEnc={setEnc}
								hidden={hidden}
								setHidden={setHidden}
							/>
						)}
						{mode === "whatsapp" && (
							<WhatsAppForm
								waPhone={waPhone}
								setWaPhone={setWaPhone}
								waMsg={waMsg}
								setWaMsg={setWaMsg}
							/>
						)}
						{mode === "pix" && <PixForm pix={pix} setPix={setPix} />}
						<OptionsPanel
							size={size}
							setSize={setSize}
							margin={margin}
							setMargin={setMargin}
							ecc={ecc}
							setEcc={setEcc}
						/>
					</div>

					<PreviewPanel
						payload={payload}
						size={size}
						margin={margin}
						ecc={ecc}
					/>
				</div>
			</div>
		</div>
	);
}
