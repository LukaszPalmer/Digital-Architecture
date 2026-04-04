// src/app/impressum/page.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Impressum — Palmer Digital",
    description: "Impressum und Anbieterkennzeichnung von Palmer Digital gemäß § 5 TMG.",
    robots: { index: false, follow: false },
};

export default function ImpressumPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">

            {/* ── HERO ── */}
            <section className="border-b border-[#000000] pt-36 pb-16 md:pt-48 md:pb-24">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase mb-8">
                        [ Rechtliches ]
                    </span>
                    <h1 className="text-[clamp(3rem,7vw,6rem)] font-black text-[#000000] leading-[0.92] tracking-[-0.025em] uppercase">
                        Impressum
                    </h1>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="py-16 md:py-24 lg:py-32">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <div className="max-w-2xl">

                        {/* Angaben gemäß § 5 TMG */}
                        <div className="mb-14">
                            <span className="block text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#001F3F] uppercase mb-5">
                                Angaben gemäß § 5 TMG
                            </span>
                            <div className="border-l-2 border-[#001F3F] pl-6 space-y-1">
                                <p className="text-[15px] font-bold text-[#000000]">Lukasz Palmer</p>
                                <p className="text-[15px] text-[#000000]/70">Palmer Digital</p>
                                <p className="text-[15px] text-[#000000]/70">Lippestraße 1</p>
                                <p className="text-[15px] text-[#000000]/70">40221 Düsseldorf</p>
                                <p className="text-[15px] text-[#000000]/70">Deutschland</p>
                            </div>
                        </div>

                        {/* Kontakt */}
                        <div className="mb-14">
                            <span className="block text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#001F3F] uppercase mb-5">
                                Kontakt
                            </span>
                            <div className="border-l-2 border-[#001F3F] pl-6 space-y-2">
                                <p className="text-[15px] text-[#000000]/70">
                                    Tel.:{" "}
                                    <a
                                        href="tel:+4917673684429"
                                        className="text-[#001F3F] hover:text-[#000000] transition-colors duration-200"
                                    >
                                        017673684429
                                    </a>
                                </p>
                                <p className="text-[15px] text-[#000000]/70">
                                    E-Mail:{" "}
                                    <a
                                        href="mailto:kontakt@palmer-digital.de"
                                        className="text-[#001F3F] hover:text-[#000000] transition-colors duration-200"
                                    >
                                        kontakt@palmer-digital.de
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Streitbeilegung */}
                        <div className="mb-14">
                            <span className="block text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#001F3F] uppercase mb-5">
                                Streitbeilegung
                            </span>
                            <div className="border-l-2 border-[#001F3F] pl-6">
                                <p className="text-[14.5px] text-[#000000]/65 leading-relaxed">
                                    Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
                                    einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                                </p>
                            </div>
                        </div>

                        {/* Version */}
                        <div className="pt-10 border-t border-[#000000]/10">
                            <p className="text-[10px] font-mono text-[#000000]/30 tracking-[0.3em] uppercase">
                                Version: 04.04.2026, 20:41:17 CET
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BACK LINK ── */}
            <div className="border-t border-[#000000]/10 py-8">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[10.5px] font-mono font-bold tracking-[0.3em] uppercase text-[#000000]/40 hover:text-[#001F3F] transition-colors duration-200"
                    >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>

        </main>
    );
}
