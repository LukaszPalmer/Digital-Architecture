// src/components/layout/Footer.tsx
// Server Component — RSC-First, 0 TBT, keine Client-Logik benötigt.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Architektur: Drei Zonen — Signature · Navigation · Copyright.

import Link from "next/link";

const FOOTER_NAV = [
    { label: "Infrastruktur", href: "/services/cloud-infrastructure" },
    { label: "Engineering", href: "/services/nextjs-elite-core" },
    { label: "Blog", href: "/blog" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Strategie", href: "/strategy" },
    { label: "Karriere", href: "/careers" },
];

const FOOTER_SERVICES = [
    { label: "Software-Entwicklung", href: "/services/nextjs-elite-core" },
    { label: "E-Commerce Systeme", href: "/services/fintech-pipelines" },
    { label: "Cloud-Infrastruktur", href: "/services/cloud-infrastructure" },
    { label: "PostgreSQL Core", href: "/services/postgresql" },
    { label: "UI/UX & Branding", href: "/services/ux-ui-design" },
    { label: "Chatbot KI-Assistent", href: "/services/chatbot-assistant" },
    { label: "Socket.IO Real-Time", href: "/services/socketio-realtime" },
    { label: "Google Analytics", href: "/services/google-analytics" },
    { label: "Google Indexierung", href: "/services/google-indexing" },
];

const FOOTER_LEGAL = [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
];


function ArrowRight() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
        >
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            aria-label="Seitenabschluss Palmer Digital Architecture"
            className="bg-[#FFFFFF] text-[#000000] overflow-hidden border-t border-[#000000]"
        >

            {/* ── ZONE 1: SIGNATURE STATEMENT ── */}
            <div className="relative border-b border-[#000000]/10">

                {/* Ghost Wordmark — typografisches Designelement */}
                <div
                    className="absolute bottom-0 right-0 text-[clamp(80px,18vw,220px)] font-black leading-none select-none pointer-events-none text-[#000000] opacity-[0.04] tracking-tighter uppercase translate-y-[20%] translate-x-[5%]"
                    aria-hidden="true"
                >
                    PALMER
                </div>

                <div className="relative max-w-360 mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-32 pb-16 md:pb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-16 lg:gap-24">

                        {/* Headline */}
                        <div>
                            <span className="block text-[9.5px] font-mono font-bold tracking-[0.5em] text-[#000000]/55 uppercase mb-10">
                                Palmer Digital Architecture — Est. 2024
                            </span>
                            <h2 className="text-[clamp(2.4rem,6vw,5.5rem)] font-black text-[#000000] leading-[0.96] tracking-[-0.025em] uppercase">
                                Wir konstruieren
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    digitale
                                </span>
                                <br />
                                Marktführer.
                            </h2>
                        </div>

                        {/* CTA Block */}
                        <div className="flex flex-col items-start lg:items-end gap-5 pb-1">
                            <p className="text-[13px] text-[#000000]/65 max-w-60 lg:text-right leading-relaxed">
                                Bereit für ein Projekt auf Elite-Niveau?
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 bg-[#001F3F] text-[#FFFFFF] px-8 py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] transition-colors duration-300 min-h-13"
                            >
                                Projekt starten
                                <ArrowRight />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── ZONE 2: NAVIGATION GRID ── */}
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24 border-b border-[#000000]/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 lg:gap-16">

                    {/* Navigation */}
                    <div>
                        <div className="bg-[#001F3F] inline-block px-2.5 py-1 mb-7">
                            <span className="text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                                Navigation
                            </span>
                        </div>
                        <ul className="space-y-3.5" role="list">
                            {FOOTER_NAV.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[12.5px] font-bold text-[#000000]/65 hover:text-[#001F3F] transition-colors duration-200 uppercase tracking-wide leading-none block py-0.5"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Leistungen */}
                    <div>
                        <div className="bg-[#001F3F] inline-block px-2.5 py-1 mb-7">
                            <span className="text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                                Leistungen
                            </span>
                        </div>
                        <ul className="space-y-3.5" role="list">
                            {FOOTER_SERVICES.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[12.5px] font-bold text-[#000000]/65 hover:text-[#001F3F] transition-colors duration-200 uppercase tracking-wide leading-none block py-0.5"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Rechtliches */}
                    <div>
                        <div className="bg-[#001F3F] inline-block px-2.5 py-1 mb-7">
                            <span className="text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                                Rechtliches
                            </span>
                        </div>
                        <ul className="space-y-3.5" role="list">
                            {FOOTER_LEGAL.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[12.5px] font-bold text-[#000000]/65 hover:text-[#001F3F] transition-colors duration-200 uppercase tracking-wide leading-none block py-0.5"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontakt */}
                    <div>
                        <div className="bg-[#001F3F] inline-block px-2.5 py-1 mb-7">
                            <span className="text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                                Kontakt
                            </span>
                        </div>
                        <div className="space-y-4">
                            <a
                                href="mailto:kontakt@palmer-digital.de"
                                className="block text-[12.5px] font-bold text-[#000000]/65 hover:text-[#001F3F] transition-colors duration-200 tracking-wide"
                                aria-label="E-Mail an Palmer Digital Architecture"
                            >
                                kontakt@palmer-digital.de
                            </a>
                            <p className="text-[11px] text-[#000000]/55 leading-relaxed font-mono tracking-wide uppercase">
                                Remote-First
                                <br />
                                Deutschland / EU
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── ZONE 3: COPYRIGHT BAR ── */}
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-7">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[10.5px] font-mono text-[#000000]/55 tracking-[0.35em] uppercase">
                        © {year} Palmer Digital Architecture
                    </span>
                    <div className="flex items-center gap-4 text-[10px] font-mono text-[#000000]/50 tracking-[0.25em] uppercase">
                        <Link href="/impressum" className="hover:text-[#001F3F] transition-colors duration-200">
                            Impressum
                        </Link>
                        <Link href="/datenschutz" className="hover:text-[#001F3F] transition-colors duration-200">
                            Datenschutz
                        </Link>
                        <div className="flex items-center gap-2">
                            <span>Built with</span>
                            <span className="text-[#FFFFFF] font-bold bg-[#001F3F] px-1.5 py-0.5">
                                Next.js
                            </span>
                            <span>&</span>
                            <span className="text-[#FFFFFF] font-bold bg-[#001F3F] px-1.5 py-0.5">
                                Vercel
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
