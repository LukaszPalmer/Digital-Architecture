"use client";

// src/components/sections/Hero.tsx
// Client-Insel — isoliert für Rotating-Word-Animation.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { useState, useEffect } from "react";
import Link from "next/link";

const WORDS = ["Software", "E-Commerce", "Cloud", "Design"];

const SERVICE_ITEMS = [
    {
        id: "01",
        label: "SOFTWARE",
        sub: "Entwicklung & Architektur",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        id: "02",
        label: "E-COMMERCE",
        sub: "Produkte & Handel",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
    },
    {
        id: "03",
        label: "CLOUD",
        sub: "Infrastruktur & Hosting",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        ),
    },
    {
        id: "04",
        label: "DESIGN",
        sub: "Strategie & Branding",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
    },
];

const STATS = [
    { value: "50+",  label: "Projekte geliefert" },
    { value: "4",    label: "Leistungsbereiche" },
    { value: "<1s",  label: "Ø Ladezeit (LCP)" },
    { value: "100%", label: "Remote-first" },
];

function ArrowRight() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

export default function Hero() {
    const [idx, setIdx]         = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const t = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIdx(i => (i + 1) % WORDS.length);
                setVisible(true);
            }, 380);
        }, 2800);
        return () => clearInterval(t);
    }, []);

    return (
        <section
            aria-label="Palmer Digital Architecture — Startseite"
            className="relative flex flex-col min-h-[calc(100dvh-70px)] md:min-h-[calc(100dvh-90px)] bg-[#FFFFFF] overflow-hidden border-b border-[#000000]"
        >
            {/* ── MAIN CONTENT ── */}
            <div className="flex-1 flex items-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] items-center">

                        {/* ── LEFT: Copy ── */}
                        <div className="flex flex-col py-16 lg:py-0 lg:pr-20 xl:pr-32 border-r-0 lg:border-r border-[#000000]/8">

                            {/* Eyebrow */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-px w-10 bg-[#001F3F]" />
                                <span className="text-[10.5px] font-bold tracking-[0.45em] text-[#001F3F]/60 uppercase font-mono">
                                    Palmer Digital Architecture
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-[clamp(2.8rem,5.5vw,5.2rem)] font-black text-[#000000] leading-[1.04] tracking-[-0.02em] mb-8">
                                Wir bauen
                                <br />
                                <span
                                    key={idx}
                                    className={`inline-block italic text-[#001F3F] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
                                >
                                    {WORDS[idx]}
                                </span>
                                <br />
                                für Marktführer.
                            </h1>

                            {/* Subtext */}
                            <p className="text-[15.5px] md:text-[17px] text-[#000000]/55 leading-[1.72] max-w-[430px] mb-12 border-l-2 border-[#001F3F] pl-6">
                                Von der Strategie bis zur skalierbaren Infrastruktur —
                                präzise entwickelt für Unternehmen, die Exzellenz kennen.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2.5 bg-[#001F3F] text-[#FFFFFF] px-8 py-3.5 text-[11.5px] font-bold tracking-[0.2em] uppercase hover:bg-[#000000] transition-colors duration-200"
                                >
                                    Projekt starten
                                    <ArrowRight />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2.5 border border-[#000000]/20 text-[#000000] px-8 py-3.5 text-[11.5px] font-bold tracking-[0.2em] uppercase hover:border-[#001F3F] hover:text-[#001F3F] transition-colors duration-200"
                                >
                                    Leistungen
                                </Link>
                            </div>
                        </div>

                        {/* ── RIGHT: Service List ── */}
                        <div className="hidden lg:flex flex-col justify-center pl-0 lg:pl-16 xl:pl-20 py-16">
                            <span className="block text-[9px] font-mono font-bold tracking-[0.45em] text-[#001F3F]/35 uppercase mb-6">
                                [ Core_Capabilities ]
                            </span>

                            <div className="border-t border-[#000000]">
                                {SERVICE_ITEMS.map((item, i) => (
                                    <div
                                        key={item.id}
                                        className="group flex items-center gap-5 py-5 border-b border-[#000000]/10 hover:border-[#001F3F] cursor-default transition-colors duration-200"
                                    >
                                        {/* Icon */}
                                        <div className="w-9 h-9 border border-[#000000]/15 group-hover:border-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-[#FFFFFF] flex items-center justify-center text-[#001F3F]/50 shrink-0 transition-all duration-200">
                                            {item.icon}
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[11px] font-black tracking-[0.18em] text-[#000000] uppercase leading-none">
                                                {item.label}
                                            </p>
                                            <p className="text-[10.5px] text-[#000000]/40 mt-1 tracking-wide font-mono">
                                                {item.sub}
                                            </p>
                                        </div>

                                        {/* Number */}
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="text-[11px] font-mono text-[#000000]/20 group-hover:text-[#001F3F]/50 transition-colors">
                                                {item.id}
                                            </span>
                                            <span className="text-[#000000]/20 group-hover:text-[#001F3F] group-hover:translate-x-0.5 transition-all duration-200">
                                                <ArrowRight />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── STATS BAR ── */}
            <div className="border-t border-[#000000]/10">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#000000]/10">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="py-5 px-6 first:pl-0">
                                <p className="text-[20px] md:text-[22px] font-black text-[#000000] tracking-tight leading-none mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-[10px] text-[#000000]/40 font-bold tracking-[0.15em] uppercase">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
