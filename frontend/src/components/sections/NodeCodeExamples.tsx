"use client";

// src/components/sections/NodeCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.
// Snippets: Express Server, Redis-Caching Middleware, Docker Compose.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "EX-01",
        title: "Express Server — Production-Ready Setup",
        description:
            "Ein produktionsreifes Node.js/Express-Setup in unter 60 Zeilen: Helmet fuer HTTP-Security-Headers, CORS-Whitelist, Rate-Limiting, strukturiertes Logging via Pino und Graceful-Shutdown-Hooks. Genau der Stack, mit dem wir Backends fuer Marktplaetze und SaaS-Plattformen launchen.",
        language: "TypeScript — Node.js 20 LTS",
        code: `// server/index.ts
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import pino from "pino-http";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Security: HTTP-Headers, XSS-Protection, HSTS
app.use(helmet());

// CORS: nur erlaubte Origins
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(","),
  credentials: true,
}));

// Rate-Limit: 100 Requests / 15 Minuten / IP
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
}));

// Structured Logging fuer Observability
app.use(pino({ level: process.env.LOG_LEVEL ?? "info" }));

// JSON-Body-Parser mit Limit gegen DoS
app.use(express.json({ limit: "1mb" }));

// Health-Check fuer Load Balancer / Railway
app.get("/healthz", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Domain Routes
app.use("/api/v1", require("./routes/v1").default);

// Server starten
const server = app.listen(PORT, () => {
  console.log(\`API listening on :\${PORT}\`);
});

// Graceful Shutdown — keine verlorenen Requests bei Deploys
process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});`,
    },
    {
        id: "EX-02",
        title: "Redis-Caching Middleware — Sub-5ms API",
        description:
            "Eine generische Cache-Middleware, die teure Datenbank-Queries vor der Verarbeitung abfaengt. Cache-Hits liefern in unter 5ms aus, ohne MongoDB/Postgres zu beruehren. Mit konfigurierbarer TTL pro Route und transparentem Cache-Status-Header fuer Debugging.",
        language: "TypeScript — Express Middleware",
        code: `// server/middleware/cache.ts
import { createClient, RedisClientType } from "redis";
import type { Request, Response, NextFunction } from "express";

const redis: RedisClientType = createClient({
  url: process.env.REDIS_URL,
});
await redis.connect();

export function cache(ttlSeconds = 60) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    // Nur GET-Requests cachen
    if (req.method !== "GET") return next();

    const key = \`cache:\${req.originalUrl}\`;
    const hit = await redis.get(key);

    if (hit) {
      res.setHeader("X-Cache", "HIT");
      return res.json(JSON.parse(hit));
    }

    // Original res.json patchen, um Antwort zu cachen
    const original = res.json.bind(res);
    res.json = (body: unknown) => {
      redis.setEx(key, ttlSeconds, JSON.stringify(body));
      res.setHeader("X-Cache", "MISS");
      return original(body);
    };

    next();
  };
}

// Verwendung in Route:
// router.get("/products", cache(300), listProducts);`,
    },
    {
        id: "EX-03",
        title: "docker-compose.yml — Skalierbare Umgebung",
        description:
            "Lokale Entwicklungsumgebung und Staging-Setup in einer Datei: Node.js-API, MongoDB mit Replica-Set, Redis-Cache und Nginx als Load Balancer. Identisch zum Production-Stack auf Railway/Kubernetes — keine 'works on my machine'-Ueberraschungen mehr.",
        language: "YAML — Docker Compose v3.9",
        code: `# docker-compose.yml
version: "3.9"

services:
  api:
    build: ./server
    deploy:
      replicas: 3              # 3 Node.js-Instanzen
    environment:
      MONGODB_URI: mongodb://mongo:27017/app
      REDIS_URL: redis://redis:6379
      NODE_ENV: production
    depends_on:
      - mongo
      - redis

  mongo:
    image: mongo:7
    command: ["--replSet", "rs0", "--bind_ip_all"]
    volumes:
      - mongo-data:/data/db
    ports:
      - "27017:27017"

  redis:
    image: redis:7-alpine
    command: redis-server --maxmemory 256mb
    volumes:
      - redis-data:/data

  nginx:
    image: nginx:1.25-alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - api                    # Round-Robin zu API-Replikas

volumes:
  mongo-data:
  redis-data:`,
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
export default function NodeCodeExamples() {
    return (
        <section
            aria-labelledby="node-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Architektur-Showcase — Proof of Engineering ]
                        </span>
                        <h2
                            id="node-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Node.js, Redis, Docker
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                in Produktion.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        Drei produktionsreife Code-Snippets zum Mitnehmen:
                        Express-Setup mit Security-Stack, Redis-Caching
                        Middleware fuer Sub-5ms-APIs und Docker Compose
                        fuer skalierbare Deployments.
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

                {/* ── A11Y NOTE ── */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                    <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                        <strong className="text-[#000000]/80">Schnittstellen-Klarheit:</strong> Auch
                        Backends muessen barrierefrei sein — wir liefern OpenAPI/Swagger-
                        Dokumentation, standardisierte HTTP-Status-Codes und
                        einheitliche Error-Payloads (RFC 7807 — Problem Details for HTTP APIs).
                        So koennen Frontend-Teams, Mobile-Apps und externe Integratoren
                        Ihre API ohne Reverse-Engineering verstehen.
                    </p>
                </div>

            </div>
        </section>
    );
}
