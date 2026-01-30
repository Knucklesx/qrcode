// components/SiteHeader.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
	const pathname = usePathname();
	const is = (href: string) =>
		pathname === href ? "bg-neutral-200" : "hover:bg-neutral-100";
	return (
		<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
			<nav className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center gap-4">
				<Link href="/" className="font-medium">
					GerarQR
				</Link>
				<div className="ml-auto flex items-center gap-2">
					<Link href="/" className={`rounded-md px-3 py-1.5 ${is("/")}`}>
						Home
					</Link>
					<Link
						href="/privacy"
						className={`rounded-md px-3 py-1.5 ${is("/privacy")}`}
					>
						Privacidade
					</Link>
				</div>
			</nav>
		</header>
	);
}
