"use client";

// src/components/sections/RailwayCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.
// Snippets: Multi-Stage Dockerfile, railway.json (Deploy + Autoscale), Health-Check Route.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "EX-01",
        title: "Multi-Stage Dockerfile — Node.js Production Image",
        description:
            "Das Prinzip 'Einmal gebaut, laeuft es ueberall' in Reinform: Ein Multi-Stage-Dockerfile trennt Build- und Runtime-Umgebung, reduziert die Image-Groesse auf unter 150 MB und fuehrt den Prozess als non-root User aus. Railway erkennt dieses Dockerfile automatisch, baut reproduzierbar und deployt in unter 30 Sekunden. Identisch in Development, Staging und Production — keine 'works on my machine'-Diskussionen mehr.",
        language: "Dockerfile — Node.js 20 Alpine Multi-Stage",
        code: `# syntax=docker/dockerfile:1.7
# ── STAGE 1: Dependencies ──
FROM node:20-alpine AS deps
WORKDIR /app

# Package-Files separat kopieren fuer Docker Layer Cache
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts

# ── STAGE 2: Build ──
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build

# ── STAGE 3: Runtime ──
FROM node:20-alpine AS runtime
WORKDIR /app

# Security: non-root User
RUN addgroup -g 1001 app && adduser -u 1001 -G app -S app
USER app

ENV NODE_ENV=production
ENV PORT=3000

# Nur Production-Deps + Build-Artefakte
COPY --from=deps  --chown=app:app /app/node_modules ./node_modules
COPY --from=build --chown=app:app /app/dist          ./dist
COPY --from=build --chown=app:app /app/package.json  ./

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \\
  CMD wget -qO- http://localhost:3000/healthz || exit 1

CMD ["node", "dist/server.js"]`,
    },
    {
        id: "EX-02",
        title: "railway.json — Deployment, Health-Check & Auto-Scale",
        description:
            "Infrastructure as Code fuer Railway: Die railway.json definiert Builder, Health-Check-Endpoint, Restart-Policy und horizontale Skalierungs-Grenzen. Checked in den Git-Repository, wird jede Aenderung an der Infrastruktur zur Code-Review unterzogen — kein manuelles Klicken im Dashboard mehr. Bei CPU-Spitzen skaliert der Service automatisch von 1 auf 5 Replicas und wieder zurueck, um Kosten zu sparen.",
        language: "JSON — Railway Service Configuration",
        code: `{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  },
  "deploy": {
    "startCommand": "node dist/server.js",
    "healthcheckPath": "/healthz",
    "healthcheckTimeout": 30,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10,
    "numReplicas": 2
  },
  "autoscale": {
    "minReplicas": 1,
    "maxReplicas": 5,
    "targetCPUPercent": 70,
    "targetMemoryPercent": 80
  },
  "environments": {
    "production": {
      "deploy": {
        "numReplicas": 3,
        "region": "eu-west1"
      }
    },
    "staging": {
      "deploy": {
        "numReplicas": 1,
        "region": "eu-west1"
      }
    }
  }
}`,
    },
    {
        id: "EX-03",
        title: "Health-Check Route — Liveness & Readiness",
        description:
            "Ein robuster Health-Check ist die Grundlage jedes Zero-Downtime-Deployments. Liveness prueft, ob der Prozess ueberhaupt antwortet; Readiness prueft zusaetzlich kritische Abhaengigkeiten wie Datenbank und Message-Broker. Railway nutzt diesen Endpoint, um neue Container erst live zu schalten, wenn sie gesund sind — und um ungesunde Container automatisch neu zu starten. Ohne Health-Check ist Zero-Downtime nicht erreichbar.",
        language: "TypeScript — Express Health-Check Handler",
        code: `// src/routes/health.ts
import { Router, type Request, type Response } from "express";
import { MongoClient } from "mongodb";
import { createClient } from "redis";

export const healthRouter = Router();

// ── Liveness: prozess lebt, einfachste Antwort ──
healthRouter.get("/healthz", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

// ── Readiness: alle Abhaengigkeiten antworten ──
healthRouter.get("/readyz", async (_req: Request, res: Response) => {
  const checks: Record<string, "ok" | "fail"> = {};

  // MongoDB Ping
  try {
    const client: MongoClient = res.app.locals.mongo;
    await client.db("admin").command({ ping: 1 });
    checks.mongo = "ok";
  } catch {
    checks.mongo = "fail";
  }

  // Redis Ping
  try {
    const redis: ReturnType<typeof createClient> = res.app.locals.redis;
    await redis.ping();
    checks.redis = "ok";
  } catch {
    checks.redis = "fail";
  }

  const healthy = Object.values(checks).every((s) => s === "ok");
  res.status(healthy ? 200 : 503).json({
    status: healthy ? "ready" : "degraded",
    checks,
    region: process.env.RAILWAY_REGION ?? "unknown",
    service: process.env.RAILWAY_SERVICE_NAME ?? "unknown",
    revision: process.env.RAILWAY_GIT_COMMIT_SHA?.slice(0, 7) ?? "dev",
  });
});`,
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
export default function RailwayCodeExamples() {
    return (
        <section
            aria-labelledby="railway-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Architektur-Showcase — Proof of Infrastructure ]
                        </span>
                        <h2
                            id="railway-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Dockerfile, Config,
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Health-Check.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        Drei produktionsreife Code-Snippets zum Mitnehmen: ein
                        Multi-Stage Dockerfile, die railway.json mit
                        Auto-Scaling-Regeln und ein Health-Check-Handler mit
                        Liveness- und Readiness-Probe.
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
                        <strong className="text-[#000000]/80">Compliance & EU-Region:</strong>{" "}
                        Railway bietet die Region{" "}
                        <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">eu-west1</code>{" "}
                        fuer DSGVO-konforme Datenhaltung — gesetzt ueber das Feld{" "}
                        <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">region</code>{" "}
                        in der railway.json. Container laufen als non-root User,
                        Secrets sind at-rest verschluesselt und erscheinen nie im
                        Build-Log. Infrastructure as Code macht jede Aenderung
                        reviewbar, reproduzierbar und rollback-faehig.
                    </p>
                </div>

            </div>
        </section>
    );
}
