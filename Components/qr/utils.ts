export function clsx(...xs: Array<string | false>) {
	return xs.filter(Boolean).join(" ");
}
export function onlyDigits(s: string) {
	return s.replace(/\D+/g, "");
}
export function wifiPayload({
	ssid,
	password,
	encryption,
	hidden,
}: {
	ssid: string;
	password: string;
	encryption: "WPA" | "WEP" | "nopass";
	hidden: boolean;
}) {
	const esc = (v: string) => v.replace(/([\\;,:\"])|\n/g, (m) => `\\${m}`);
	return `WIFI:T:${encryption};S:${esc(ssid)};${
		encryption !== "nopass" ? `P:${esc(password)};` : ""
	}${hidden ? "H:true;" : ""};`;
}
export function whatsappLink({
	phone,
	message,
}: {
	phone: string;
	message: string;
}) {
	const digits = onlyDigits(phone);
	const url = new URL(`https://wa.me/${digits}`);
	if (message) url.searchParams.set("text", message);
	return url.toString();
}
