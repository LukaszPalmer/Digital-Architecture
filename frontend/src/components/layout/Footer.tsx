import Link from "next/link";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = {
    navigation: [
        { label: "Infrastruktur", href: "/infrastructure" },
        { label: "Engineering", href: "/engineering" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Strategie", href: "/strategy" },
    ],
    legal: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
    ],
    socials: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "GitHub", href: "https://github.com" },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#FFFFFF] border-t border-[#000000] pt-16 md:pt-24 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-24">
                    {/* BRAND COLUMN */}
                    <div className="space-y-6">
                        <Link
                            href="/"
                            className="text-[#001F3F] font-bold text-[22px] tracking-tighter leading-none block"
                        >
                            PALMER
                            <span className="block text-[10px] tracking-[0.2em] font-light">
                                DIGITAL ARCHITECTURE
                            </span>
                        </Link>
                        <p className="text-[13px] text-[#000000]/60 leading-relaxed max-w-[240px]">
                            Konstruktion hochperformanter digitaler Assets für
                            Marktführer. Engineering auf Ex-Google Niveau.
                        </p>
                    </div>

                    {/* SITEMAP */}
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-[#001F3F] uppercase block mb-6">
                            Sitemap
                        </span>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.navigation.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[14px] text-[#000000] hover:text-[#001F3F] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-[#001F3F] uppercase block mb-6">
                            Legal
                        </span>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[14px] text-[#000000] hover:text-[#001F3F] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SYSTEM STATUS & SOCIALS */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-bold tracking-[0.3em] text-[#001F3F] uppercase block mb-6">
                                Socials
                            </span>
                            <div className="flex gap-4">
                                {FOOTER_LINKS.socials.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-[14px] font-bold border border-[#000000] px-3 py-1 hover:bg-[#000000] hover:text-[#FFFFFF] transition-all"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 lg:mt-0 pt-8 border-t border-[#000000]/10">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-mono text-[#000000]/40 uppercase tracking-widest">
                                    Systems Operational: Vercel Edge
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-[#000000] flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[11px] font-mono text-[#000000]/40">
                        © {currentYear} PALMER DIGITAL ARCHITECTURE. ALL RIGHTS
                        RESERVED.
                    </span>
                    <span className="text-[11px] font-mono text-[#000000]/40 uppercase tracking-widest">
                        Build: v1.0.4 // Latency: 24ms
                    </span>
                </div>
            </div>
        </footer>
    );
}
