// src/components/sections/FeaturedProjects.tsx
// Server Component — RSC-First, 0 TBT, 0 KB JS.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
//
// Architektur:
//   Zwei kontra-rotierende Marquee-Lanes — Services laufen nach LINKS,
//   Infrastruktur läuft nach RECHTS. Die Animation ist 100% CSS
//   (keyframes in globals.css), GPU-beschleunigt via translate3d.
//
//   Jede Kachel ist ein <Link> auf die jeweilige Service-Seite — der
//   Marquee ist dadurch funktional, nicht nur dekorativ.
//
// A11y:
//   • Eine sichtbare Liste pro Lane wird semantisch ausgezeichnet (<ul>),
//     die Duplikat-Liste für den nahtlosen Loop trägt aria-hidden.
//   • Hover/Focus pausiert die Animation (siehe globals.css).
//   • Reduced-motion-Schutz in globals.css → keine Bewegung, statisches Layout.

import Image from "next/image";
import Link from "next/link";

interface StackItem {
    name: string;
    /** Untertitel — System-ID oder Funktion, max. ~14 Zeichen */
    tag: string;
    /** Pfad in /public/media/ */
    icon: string;
    /** Ziel-Route (Service-Detail oder Landing) */
    href: string;
    /** SVG-Aspect-Ratio-Hint, damit Image schmal/breit korrekt rendert */
    width: number;
    height: number;
}

/* ── LANE 01 · SERVICES (läuft nach LINKS) ─────────────────────────── */
const SERVICES: StackItem[] = [
    { name: "Next.js",          tag: "SYS_01 · CORE",       icon: "/media/Next.js.svg",         href: "/services/nextjs-elite-core",  width: 56, height: 56 },
    { name: "Tailwind CSS",     tag: "SYS_04 · UI",         icon: "/media/Tailwind CSS.svg",    href: "/services/design-ops-system",  width: 56, height: 56 },
    { name: "Figma",            tag: "SYS_06 · DESIGN",     icon: "/media/Figma.svg",           href: "/services/ux-ui-design",       width: 38, height: 56 },
    { name: "Material UI",      tag: "SYS_05 · LOGIC",      icon: "/media/MaterialUI.svg",      href: "/services/material-ui",        width: 56, height: 56 },
    { name: "Stripe",           tag: "SYS_03 · PAYMENTS",   icon: "/media/Stripe-Blurple.svg",  href: "/services/fintech-pipelines",  width: 96, height: 40 },
    { name: "AI Chatbot",       tag: "SYS_09 · ASSIST",     icon: "/media/Chatbot.svg",         href: "/services/chatbot-assistant",  width: 56, height: 56 },
    { name: "Google Analytics", tag: "SYS_10 · DATA",       icon: "/media/GoogleAnalytics.svg", href: "/services/google-analytics",   width: 56, height: 56 },
    { name: "Search Console",   tag: "SYS_11 · SEO",        icon: "/media/GoogleSearch.svg",    href: "/services/google-indexing",    width: 56, height: 56 },
    { name: "Lighthouse",       tag: "PERF · AUDIT",        icon: "/media/GoogleLighthouse.svg",href: "/services/google-indexing",    width: 56, height: 56 },
    { name: "Semrush",          tag: "SEO · INTEL",         icon: "/media/Semrush.svg",         href: "/services/google-indexing",    width: 56, height: 56 },
];

/* ── LANE 02 · INFRASTRUKTUR (läuft nach RECHTS) ───────────────────── */
const INFRASTRUCTURE: StackItem[] = [
    { name: "MongoDB Atlas",    tag: "SYS_02 · CLUSTER",    icon: "/media/MongoDB.svg",         href: "/services/cloud-infrastructure", width: 56, height: 56 },
    { name: "PostgreSQL",       tag: "DB · RELATIONAL",     icon: "/media/postgresql.svg",      href: "/services/postgresql",           width: 56, height: 56 },
    { name: "Vercel",           tag: "EDGE · DELIVERY",     icon: "/media/Vercel.svg",          href: "/vercel",                        width: 56, height: 56 },
    { name: "Railway",          tag: "ORCHESTRATION",       icon: "/media/Railway.svg",         href: "/railway",                       width: 56, height: 56 },
    { name: "Node.js",          tag: "SYS_07 · RUNTIME",    icon: "/media/Node.js.svg",         href: "/services/nodejs-core",          width: 56, height: 56 },
    { name: "Socket.IO",        tag: "SYS_08 · REALTIME",   icon: "/media/Socket.IO.svg",       href: "/services/socketio-realtime",    width: 56, height: 56 },
];

export default function FeaturedProjects() {
    return (
        <section
            id="solutions"
            aria-labelledby="stack-heading"
            className="relative bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-40 border-t border-[#000000] overflow-hidden"
        >
            {/* Blueprint-Grid Hintergrund (extrem dezent) */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #001F3F 1px, transparent 1px), linear-gradient(to bottom, #001F3F 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative max-w-360 mx-auto">

                {/* ── HEADER ── */}
                <div className="px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6 md:gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Technology Matrix ]
                        </span>
                        <h2
                            id="stack-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Live-Stack.
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Architektur in Bewegung.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/55 leading-[1.75] max-w-xs border-l-2 border-[#001F3F] pl-6">
                        Zwei Lanes, eine Doktrin. Oben die Services, mit denen wir Marken bauen. Unten die Infrastruktur, die sie trägt.
                    </p>
                </div>

                {/* ── LANE 01 · SERVICES → LINKS ── */}
                <Lane
                    label="Lane 01"
                    title="Services"
                    direction="left"
                    items={SERVICES}
                    durationSec={48}
                />

                {/* Trenn-Hairline + Achsen-Indikatoren */}
                <div className="my-6 md:my-8 px-4 md:px-8 lg:px-12 flex items-center justify-between gap-6 text-[10px] font-mono font-bold tracking-[0.4em] text-[#001F3F]/60 uppercase">
                    <span aria-hidden="true">← FLOW</span>
                    <span className="flex-1 h-px bg-[#000000]/10" />
                    <span aria-hidden="true">FLOW →</span>
                </div>

                {/* ── LANE 02 · INFRASTRUKTUR → RECHTS ── */}
                <Lane
                    label="Lane 02"
                    title="Infrastruktur"
                    direction="right"
                    items={INFRASTRUCTURE}
                    durationSec={56}
                />

            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────────────
 * Lane — eine Marquee-Reihe.
 *   • Items werden zweimal gerendert für nahtlosen Loop (-50% Animation).
 *   • Erste Liste ist semantisch (<ul role="list">), zweite ist
 *     aria-hidden Dekoration für den Loop.
 *   • Animation pausiert auf hover/focus-within (CSS in globals.css).
 * ─────────────────────────────────────────────────────────────────── */
function Lane({
    label,
    title,
    direction,
    items,
    durationSec,
}: {
    label: string;
    title: string;
    direction: "left" | "right";
    items: StackItem[];
    durationSec: number;
}) {
    return (
        <div
            className="marquee-lane group relative border-y border-[#000000]/10 bg-[#FFFFFF]"
            aria-roledescription="Endlos-Slider"
            aria-label={`${title} — Stack-Übersicht`}
        >
            {/* Lane-Label, links eingehängt */}
            <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-1 pointer-events-none select-none">
                <span className="text-[9px] font-mono font-bold tracking-[0.45em] text-[#001F3F] uppercase">
                    {label}
                </span>
                <span className="text-[9px] font-mono tracking-[0.35em] text-[#000000]/40 uppercase">
                    {title}
                </span>
            </div>

            {/* Direktions-Pfeil, rechts eingehängt */}
            <div
                aria-hidden="true"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center gap-2 pointer-events-none select-none"
            >
                <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-[#001F3F] uppercase">
                    {direction === "left" ? "← Westbound" : "Eastbound →"}
                </span>
            </div>

            {/* Marquee-Viewport — overflow + edge mask */}
            <div className="marquee-mask overflow-hidden md:px-32">
                <div
                    className={[
                        "flex w-max",
                        direction === "left"
                            ? "animate-marquee-left"
                            : "animate-marquee-right",
                    ].join(" ")}
                    style={
                        // CSS-Custom-Property steuert die Animations-Dauer
                        { ["--marquee-duration" as string]: `${durationSec}s` } as React.CSSProperties
                    }
                >
                    {/* Set 1 — semantisch */}
                    <ul role="list" className="flex shrink-0">
                        {items.map((item) => (
                            <LaneTile key={`a-${item.name}`} item={item} />
                        ))}
                    </ul>
                    {/* Set 2 — Dekoration für nahtlosen Loop */}
                    <ul role="list" aria-hidden="true" className="flex shrink-0">
                        {items.map((item) => (
                            <LaneTile key={`b-${item.name}`} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

/* ────────────────────────────────────────────────────────────────────
 * LaneTile — eine einzelne Stack-Kachel.
 *   • Logo + Name + Tag, vertikal gestackt.
 *   • Logo wird stets in Originalfarbe und voller Deckkraft gerendert.
 *   • Klick führt auf die zugehörige Service-Detail-Seite.
 * ─────────────────────────────────────────────────────────────────── */
function LaneTile({ item }: { item: StackItem }) {
    return (
        <li className="shrink-0">
            <Link
                href={item.href}
                className="
                    relative flex flex-col items-center justify-center
                    h-[140px] md:h-[160px] w-[180px] md:w-[220px]
                    border-r border-[#000000]/10
                    px-6 py-5
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F3F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF]
                "
            >
                {/* Logo — Originalfarbe, volle Deckkraft, keine Hover-States */}
                <div className="relative h-12 md:h-14 flex items-center justify-center mb-4">
                    <Image
                        src={item.icon}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        className="object-contain max-h-full w-auto"
                    />
                </div>

                {/* Name + Tag */}
                <span className="text-[12px] font-black uppercase tracking-[0.05em] text-[#000000]">
                    {item.name}
                </span>
                <span className="mt-1 text-[9px] font-mono font-bold tracking-[0.3em] uppercase text-[#001F3F]/70">
                    {item.tag}
                </span>
            </Link>
        </li>
    );
}
