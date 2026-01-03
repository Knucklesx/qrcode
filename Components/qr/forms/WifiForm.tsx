"use client";
import { clsx } from "../utils";

type Props = {
	ssid: string;
	setSsid: (v: string) => void;
	pwd: string;
	setPwd: (v: string) => void;
	enc: "WPA" | "WEP" | "nopass";
	setEnc: (v: "WPA" | "WEP" | "nopass") => void;
	hidden: boolean;
	setHidden: (v: boolean) => void;
};
export default function WifiForm({
	ssid,
	setSsid,
	pwd,
	setPwd,
	enc,
	setEnc,
	hidden,
	setHidden,
}: Props) {
	return (
		<div className="bg-white rounded-2xl shadow p-4 grid sm:grid-cols-2 gap-4">
			<div className="sm:col-span-2">
				<label className="text-sm font-medium">Nome da rede (SSID)</label>
				<input
					value={ssid}
					onChange={(e) => setSsid(e.target.value)}
					className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
				/>
			</div>
			<div>
				<label className="text-sm font-medium">Criptografia</label>
				<select
					value={enc}
					onChange={(e) => setEnc(e.target.value as "WPA" | "WEP" | "nopass")}
					className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2"
				>
					<option value="WPA">WPA/WPA2</option>
					<option value="WEP">WEP</option>
					<option value="nopass">Sem senha</option>
				</select>
			</div>
			<div>
				<label className="text-sm font-medium">Senha</label>
				<input
					value={pwd}
					onChange={(e) => setPwd(e.target.value)}
					disabled={enc === "nopass"}
					className={clsx(
						"mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2",
						enc === "nopass" && "opacity-50 cursor-not-allowed"
					)}
				/>
			</div>
			<label className="flex items-center gap-2 text-sm sm:col-span-2">
				<input
					type="checkbox"
					checked={hidden}
					onChange={(e) => setHidden(e.target.checked)}
				/>{" "}
				Rede oculta
			</label>
			<p className="text-xs text-neutral-500 sm:col-span-2">
				Formato: WIFI:T:...;S:...;P:...;H:true;;
			</p>
		</div>
	);
}
