// src/components/sections/NextArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme + "Technologische Überlegenheit" Code-Snippet.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const REQUEST_LAYERS = [
    {
        label: "CLIENT",
        sublabel: "Browser / Device",
        desc: "Initial Request",
        bg: "bg-[#FFFFFF]",
        border: "border-[#000000]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        label: "CDN EDGE",
        sublabel: "Vercel Global Network",
        desc: "Static Cache Hit",
        bg: "bg-[#001F3F]",
        border: "border-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        label: "EDGE MIDDLEWARE",
        sublabel: "Auth / I18n / Rate Limit",
        desc: "< 10ms Execution",
        bg: "bg-[#FFFFFF]",
        border: "border-[#000000]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        label: "RSC LAYER",
        sublabel: "React Server Components",
        desc: "Server-Side Render",
        bg: "bg-[#000000]",
        border: "border-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        label: "DATA LAYER",
        sublabel: "Datenbank / Cache",
        desc: "Parallel Fetching",
        bg: "bg-[#FFFFFF]",
        border: "border-[#000000]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        label: "STREAM",
        sublabel: "Suspense + PPR",
        desc: "Progressive Delivery",
        bg: "bg-[#001F3F]",
        border: "border-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
];

const RENDERING_MODES = [
    {
        mode: "RSC",
        label: "Server Components",
        desc: "Daten auf dem Server gefetcht, HTML gestreamt. Kein Client-JS-Bundle — das ist der Grund, warum Ihre Website nicht mehr zu langsam sein wird.",
        tag: "0 KB CLIENT",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        tagBg: "bg-[#FFFFFF]",
        tagText: "text-[#001F3F]",
    },
    {
        mode: "PPR",
        label: "Partial Pre-Rendering",
        desc: "Statische Shell sofort vom CDN + dynamische Islands gestreamt. Das Beste aus Static Site Generation und Server-Side Rendering — für maximale Ladezeit-Optimierung.",
        tag: "< 0.8s LCP",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        tagBg: "bg-[#001F3F]",
        tagText: "text-[#FFFFFF]",
    },
    {
        mode: "SSG",
        label: "Static Site Generation",
        desc: "Build-Time Rendering, globale CDN-Auslieferung. Zero Server-Overhead für Marketing-Seiten. Perfekt, wenn Sie eine professionelle Website erstellen lassen möchten, die keine dynamischen Daten benötigt.",
        tag: "EDGE CDN",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        tagBg: "bg-[#FFFFFF]",
        tagText: "text-[#000000]",
    },
];

const INTEGRATION_SPECS = [
    {
        id: "NXT-INT-01",
        title: "Data Fetching & Caching",
        description:
            "Fetch-API mit erweiterten Cache-Direktiven: force-cache, no-store, revalidate. Granulare ISR-Revalidierung per Tag oder Zeitintervall — kein Full-Rebuild nötig. Incremental Static Regeneration hält Ihre Seiten aktuell, ohne die Performance zu opfern.",
        spec: "AUTO ISR",
    },
    {
        id: "NXT-INT-02",
        title: "Server Actions & Mutations",
        description:
            "Formular-Submissions als direkte Server-Funktionen — kein separater API-Layer, keine Round-Trips. Typsicher durch TypeScript, progressiv enhanced und mit Error-Handling. Das reduziert die Kosten für Ihre professionelle Website erheblich.",
        spec: "ZERO API LAYER",
    },
    {
        id: "NXT-INT-03",
        title: "Metadata & SEO Engine",
        description:
            "Dynamische generateMetadata pro Route, OpenGraph-Images on-demand, JSON-LD Structured Data — vollständige SEO-Kontrolle ohne externe Libraries. Damit Ihre Website nicht nur schnell ist, sondern auch von Google gefunden wird.",
        spec: "BUILT-IN SEO",
    },
];

/* ── CODE SNIPPET (Sicherheit: nur Platzhalter, keine echten Secrets) ── */
const CODE_SNIPPET = `// Next.js Edge Middleware — Globale Performance-Optimierung
// Authentifizierung & Rate-Limiting am Edge, < 10ms Latenz

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const RATE_LIMIT_WINDOW = 60_000; // 1 Minute
const MAX_REQUESTS = 100;

// In-Memory Store (Produktion: Redis/Upstash)
const requestCounts = new Map<string, { count: number; resetAt: number }>();

export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();

  // ── Rate Limiting ──
  const record = requestCounts.get(ip);
  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
  } else if (record.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Rate limit exceeded" },
      { status: 429 }
    );
  } else {
    record.count++;
  }

  // ── Auth Check ──
  const token = request.cookies.get("session_token")?.value;
  if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ── Security Headers ──
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};`;

export default function NextArchitecture() {
    return (
        <section
            aria-labelledby="next-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Request &amp; Rendering Blueprint ]
                            </span>
                            <h2
                                id="next-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Architektur
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    im Detail.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Der Request-Lifecycle von Next.js — und die
                            Rendering-Strategie-Matrix, die für jeden
                            Use-Case die optimale Lösung bestimmt. So
                            funktioniert <strong>moderne Webanwendung programmieren</strong> auf
                            dem höchsten technischen Niveau.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── ARCHITECTURE INTRO ── */}
                <ScrollReveal delay={40}>
                    <div className="mb-16 md:mb-20 max-w-4xl">
                        <p className="text-[17px] leading-relaxed text-[#000000]/70 mb-6">
                            Wenn wir Ihre <strong>Ladezeit optimieren</strong>, beginnen wir nicht bei der
                            Oberfläche — wir beginnen bei der Architektur. Der Next.js Request-Lifecycle
                            besteht aus sechs präzise orchestrierten Layern, die zusammen dafür sorgen,
                            dass jeder Seitenaufruf in unter einer Sekunde beim Nutzer ankommt. Vom
                            ersten DNS-Lookup bis zum letzten gestreamten Pixel ist jeder Schritt
                            auf Performance optimiert.
                        </p>
                        <p className="text-[16px] leading-relaxed text-[#000000]/55">
                            Das ist der technologische Vorsprung, den Sie erhalten, wenn Sie bei uns eine
                            <strong> professionelle Website erstellen lassen</strong>: Keine Black-Box, sondern
                            eine transparente, nachvollziehbare Architektur, die jede Millisekunde
                            rechtfertigt.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── REQUEST LIFECYCLE DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Request Lifecycle — 6 Layer Stack ]
                        </span>
                        <div className="border border-[#000000]">
                            {/* Header */}
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        Next.js — App Router Request Pipeline
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    LCP &lt; 0.8s Target
                                </span>
                            </div>

                            {/* Layers */}
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                                {REQUEST_LAYERS.map((layer, i) => (
                                    <div key={layer.label} className={`${layer.bg} p-6 flex flex-col gap-3`}>
                                        <div className="flex items-center justify-between">
                                            <span className={`text-[9px] font-mono font-black tracking-[0.3em] uppercase ${layer.subColor}`}>
                                                LAYER {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <p className={`text-[clamp(0.75rem,1.5vw,1rem)] font-black tracking-tighter uppercase leading-tight ${layer.textColor}`}>
                                            {layer.label}
                                        </p>
                                        <p className={`text-[10px] font-mono tracking-wide uppercase ${layer.subColor}`}>
                                            {layer.sublabel}
                                        </p>
                                        <div className={`inline-flex self-start border ${layer.border} px-2 py-1`}>
                                            <span className={`text-[9px] font-mono font-black tracking-widest uppercase ${layer.subColor}`}>
                                                {layer.desc}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Streaming — kein Blocking
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Parallel Data Fetching
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── RENDERING STRATEGY MATRIX ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Rendering Strategy — Mode Selection ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Rendering Mode Selection Matrix
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Per-Route-Granularität
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                                {RENDERING_MODES.map((mode) => (
                                    <div key={mode.mode} className={`${mode.bg} p-8 md:p-10 flex flex-col gap-4`}>
                                        <div className="flex items-center justify-between">
                                            <span className={`text-[clamp(1.6rem,3vw,2.2rem)] font-black tracking-tighter ${mode.textColor}`}>
                                                {mode.mode}
                                            </span>
                                            <span className={`${mode.tagBg} ${mode.tagText} px-3 py-1.5 text-[9px] font-mono font-black tracking-widest uppercase`}>
                                                {mode.tag}
                                            </span>
                                        </div>
                                        <p className={`text-[12px] font-black tracking-wide uppercase ${mode.textColor} opacity-80`}>
                                            {mode.label}
                                        </p>
                                        <p className={`text-[13px] leading-relaxed ${mode.textColor} opacity-70`}>
                                            {mode.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Per-Route konfigurierbar
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Kombinierbar in einem Projekt
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── INTEGRATION SPECS ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]">
                    {INTEGRATION_SPECS.map((spec) => (
                        <div
                            key={spec.id}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] flex flex-col min-h-72 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-6 transition-colors">
                                {spec.id}
                            </span>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {spec.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-6">
                                {spec.description}
                            </p>
                            <div className="mt-auto">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {spec.spec}
                                </span>
                            </div>
                        </div>
                    ))}
                </RevealGrid>

                {/* ── TECHNOLOGISCHE ÜBERLEGENHEIT — CODE SNIPPET ── */}
                <ScrollReveal delay={140}>
                    <div className="mt-20 md:mt-28">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-4">
                            [ Technologische Überlegenheit — Expert Insight ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#000000] tracking-[-0.02em] uppercase leading-[0.92] mb-6">
                            Professioneller Code
                            <span className="italic font-normal text-[#001F3F]"> in Aktion.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#000000]/65 max-w-3xl mb-10">
                            Wenn wir eine <strong>moderne Webanwendung programmieren</strong>, sieht das
                            unter der Haube so aus: Eine Edge Middleware, die Authentifizierung,
                            Rate-Limiting und Security Headers in unter 10 Millisekunden verarbeitet —
                            global verteilt, bevor der Request überhaupt den Server erreicht. Das ist
                            der Standard, den Sie von einer spezialisierten <strong>Webagentur für
                            Next.js Webentwicklung</strong> erwarten können.
                        </p>

                        <div className="border border-[#000000]">
                            {/* Code Header */}
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        middleware.ts — Edge Runtime
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    TypeScript // Next.js
                                </span>
                            </div>

                            {/* Code Block */}
                            <div className="bg-[#000000] p-6 md:p-8 overflow-x-auto">
                                <pre className="text-[12px] md:text-[13px] leading-relaxed font-mono text-[#FFFFFF]/80">
                                    <code>{CODE_SNIPPET}</code>
                                </pre>
                            </div>

                            {/* Code Footer */}
                            <div className="border-t border-[#FFFFFF]/10 px-6 py-3 bg-[#000000] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#FFFFFF]/50 font-bold tracking-widest uppercase">
                                        Keine echten API-Tokens — nur Platzhalter
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#FFFFFF]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#FFFFFF]/35 tracking-widest uppercase">
                                        Production-Grade Pattern
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-[14px] leading-relaxed text-[#000000]/55 mt-6 max-w-3xl">
                            Dieser Code zeigt, wie die Edge-Runtime von Next.js genutzt wird, um
                            Rate-Limiting, Authentifizierung und Security Headers auf globaler
                            Ebene zu implementieren — mit einer Ausführungszeit von unter 10
                            Millisekunden. Das ist kein theoretisches Konzept, sondern
                            Production-Code, wie wir ihn in jeder modernen Webanwendung einsetzen.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
