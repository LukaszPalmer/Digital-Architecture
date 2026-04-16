"use client";

// src/components/sections/VercelCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.
// Snippets: Edge-Middleware (Geo-Routing), Edge Runtime Route Handler, vercel.json Cache-Header.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "EX-01",
        title: "Edge Middleware — Geo-Routing & Locale-Detection",
        description:
            "Der Klassiker fuer internationale Auftritte: Anfragen aus den USA sollen zur /us-Route, aus Japan zur /ja-Route. Mit Next.js Edge Middleware entscheidet Vercel bereits am naechstgelegenen Edge-Node, bevor der Browser auch nur ein Byte empfaengt — flicker-frei, ohne Client-JavaScript und ohne Layout-Shift. Die Middleware laeuft in V8 Isolates mit unter 1ms Kaltstart.",
        language: "TypeScript — Next.js 15 Edge Middleware",
        code: `// middleware.ts — laeuft am Edge in V8 Isolates
import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|assets).*)"],
};

// Land-Locale-Mapping (erweitern nach Bedarf)
const LOCALE_MAP: Record<string, string> = {
  US: "en-us",
  CA: "en-us",
  GB: "en-gb",
  DE: "de",
  AT: "de",
  CH: "de",
  FR: "fr",
  JP: "ja",
};

export function middleware(request: NextRequest) {
  // Vercel injiziert geo-Header aus dem Edge-Node
  const country = request.geo?.country ?? "DE";
  const locale  = LOCALE_MAP[country] ?? "en-us";

  const { pathname, search } = request.nextUrl;

  // Bereits auf einer Locale-Route? Nichts tun.
  if (/^\\/(en-us|en-gb|de|fr|ja)(\\/|$)/.test(pathname)) {
    return NextResponse.next();
  }

  // Rewrite auf die richtige Locale — ohne Redirect
  const url = request.nextUrl.clone();
  url.pathname = \`/\${locale}\${pathname}\`;

  const response = NextResponse.rewrite(url);

  // Geo-Header fuer Analytics weitergeben
  response.headers.set("x-user-country", country);
  response.headers.set("x-user-locale",  locale);

  return response;
}`,
    },
    {
        id: "EX-02",
        title: "Edge Runtime Route Handler — Cold-Start-freie API",
        description:
            "Klassische Node.js-Lambdas bezahlen 200–800ms Cold Start bei jedem ersten Request. Die Vercel Edge Runtime eliminiert Cold Starts durch V8 Isolates auf Basis der Web Standards (fetch, Request, Response, Web Crypto). Ideal fuer Auth-Checks, personalisierte Hero-Inhalte oder blitzschnelle Geo-IP-APIs. Response in unter 50ms — weltweit, ohne Tuning.",
        language: "TypeScript — Next.js 15 App Router Route Handler",
        code: `// app/api/hello/route.ts
import { NextResponse, type NextRequest } from "next/server";

// >>> Edge Runtime aktivieren <<<
// Laeuft in V8 Isolates, 0ms Cold Start, ~1.5MB Memory-Limit
export const runtime = "edge";

// Optional: Regions einschraenken (default = alle 300+ Nodes)
export const preferredRegion = ["fra1", "cdg1", "iad1", "hnd1"];

export async function GET(request: NextRequest) {
  const country = request.geo?.country ?? "DE";
  const city    = request.geo?.city    ?? "Duesseldorf";
  const region  = request.geo?.region  ?? "NRW";

  // Edge Runtime unterstuetzt Web Crypto ohne Import
  const nonce = crypto.randomUUID();

  return NextResponse.json(
    {
      greeting: \`Hallo aus \${city}, \${region} (\${country})\`,
      nonce,
      servedBy: "vercel-edge",
      timestamp: Date.now(),
    },
    {
      headers: {
        // 60s CDN-Cache + stale-while-revalidate
        "Cache-Control":
          "public, s-maxage=60, stale-while-revalidate=3600",
        "x-edge-region": process.env.VERCEL_REGION ?? "unknown",
      },
    },
  );
}`,
    },
    {
        id: "EX-03",
        title: "vercel.json — Globale Cache-Header & Security",
        description:
            "Die vercel.json steuert globale Response-Header: aggressive Caching-Strategien fuer statische Assets, stale-while-revalidate fuer HTML, sowie Security-Header fuer A+-Rating bei Mozilla Observatory. Richtig konfiguriert liefert Vercel TTFB unter 10ms weltweit und erfuellt gleichzeitig strenge Compliance-Anforderungen (CSP, HSTS, Permissions-Policy).",
        language: "JSON — Vercel Project Configuration",
        code: `{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\\\.(jpg|jpeg|png|webp|avif|svg|woff2)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=2592000, stale-while-revalidate=86400"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options",        "value": "DENY" },
        { "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(self)" },
        { "key": "Cache-Control",
          "value": "public, s-maxage=60, stale-while-revalidate=604800" }
      ]
    }
  ],
  "regions": ["fra1", "cdg1", "iad1", "sfo1", "hnd1", "syd1"]
}`,
    },
];

/* ── COPY BUTTON COMPONENT ── */
function CopyButton({ code, label }: { code: string; label: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = code;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }, [code]);

    return (
        <button
            onClick={handleCopy}
            aria-label={copied ? "Code kopiert" : `${label} — Code kopieren`}
            className="flex items-center gap-2 bg-[#001F3F] hover:bg-[#001F3F]/80 px-4 py-2 text-[11px] font-mono font-black tracking-[0.15em] text-[#FFFFFF] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001F3F]"
        >
            {copied ? (
                <>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Kopiert</span>
                </>
            ) : (
                <>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        <rect x="9" y="9" width="13" height="13" />
                        <path d="M5 15H4V4h11v1" />
                    </svg>
                    <span>Code kopieren</span>
                </>
            )}
            <span className="sr-only" aria-live="polite" role="status">
                {copied ? "Code wurde in die Zwischenablage kopiert" : ""}
            </span>
        </button>
    );
}

/* ── MAIN SECTION ── */
export default function VercelCodeExamples() {
    return (
        <section
            aria-labelledby="vercel-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Architektur-Showcase — Proof of Speed ]
                        </span>
                        <h2
                            id="vercel-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Middleware, Runtime,
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Cache-Header.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        Drei produktionsreife Code-Snippets zum Mitnehmen: Edge
                        Middleware fuer Geo-Routing, Edge Runtime Route Handler
                        fuer Cold-Start-freie APIs und vercel.json mit globalen
                        Cache- und Security-Headern.
                    </p>
                </div>

                {/* ── CODE EXAMPLES ── */}
                <div className="flex flex-col gap-12 md:gap-16">
                    {CODE_EXAMPLES.map((example) => (
                        <div
                            key={example.id}
                            className="border border-[#000000]"
                        >
                            {/* Header Bar */}
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        {example.id} — {example.title}
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    {example.language}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="px-6 md:px-8 py-5 bg-[#FFFFFF] border-b border-[#000000]/10">
                                <p className="text-[14px] leading-relaxed text-[#000000]/70 max-w-3xl">
                                    {example.description}
                                </p>
                            </div>

                            {/* Code Block */}
                            <div className="bg-[#001F3F] px-6 md:px-8 py-6 overflow-x-auto">
                                <pre className="text-[12px] md:text-[13px] leading-relaxed font-mono text-[#FFFFFF]/85 whitespace-pre">
                                    <code>{example.code}</code>
                                </pre>
                            </div>

                            {/* Footer with Copy Button */}
                            <div className="px-6 md:px-8 py-3 bg-[#FFFFFF] border-t border-[#000000] flex items-center justify-between">
                                <span className="text-[9px] font-mono text-[#000000]/40 tracking-widest uppercase">
                                    Produktionsreifer Code
                                </span>
                                <CopyButton code={example.code} label={example.title} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── A11Y / PERFORMANCE NOTE ── */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                    <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                        <strong className="text-[#000000]/80">Barrierefreiheit & Performance:</strong>{" "}
                        Edge-deployed Infrastruktur verbessert die Zugaenglichkeit
                        fuer Nutzer mit langsamen Mobilfunknetzen, aelteren Geraeten
                        und Regionen mit schwacher Anbindung. Eine Seite, die in
                        New York in 0.8s laedt, laedt in laendlichen Gebieten mit
                        schlechter 3G-Verbindung spuerbar schneller — fuer echte
                        Inklusion im Web.{" "}
                        <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">stale-while-revalidate</code>{" "}
                        sorgt dafuer, dass auch bei Flaky-Connections sofort eine
                        Antwort ausgeliefert wird.
                    </p>
                </div>

            </div>
        </section>
    );
}
