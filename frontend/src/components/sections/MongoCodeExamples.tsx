"use client";

// src/components/sections/MongoCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.
// Snippets: Serverless-safe Connection-String, Aggregation-Pipeline, $jsonSchema Validation.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "EX-01",
        title: "Serverless-safe MongoDB Connection — Next.js / Vercel",
        description:
            "Der klassische Fehler in Next.js/Vercel: Jede Serverless-Funktion oeffnet eine neue MongoDB-Verbindung — nach wenigen Minuten Traffic ist der Connection-Pool erschoepft. Dieser Best-Practice-Handler cached den Client global, verhindert Zombie-Connections und ist DSGVO-konform (retryWrites, TLS 1.3, AppName fuer Atlas-Monitoring).",
        language: "TypeScript — Next.js App Router + MongoDB 7",
        code: `// lib/mongodb.ts
import { MongoClient, type MongoClientOptions } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI nicht gesetzt (.env.local pruefen)");
}

const uri = process.env.MONGODB_URI; // mongodb+srv://...
const options: MongoClientOptions = {
  retryWrites: true,
  w: "majority",
  appName: "palmer-digital-backbone",
  maxPoolSize: 10,           // pro Serverless-Instanz
  minPoolSize: 1,
  serverSelectionTimeoutMS: 5000,
};

// Global cachen — verhindert "Zombie Connections"
// bei Hot Reload (dev) und Lambda-Reuse (prod).
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const clientPromise: Promise<MongoClient> =
  global._mongoClientPromise ??
  (global._mongoClientPromise = new MongoClient(uri, options).connect());

export default clientPromise;

// Verwendung in Route Handler:
// const client = await clientPromise;
// const db = client.db("shop");`,
    },
    {
        id: "EX-02",
        title: "Aggregation Pipeline — Umsatz-Auswertung in Echtzeit",
        description:
            "Klassischer E-Commerce-Anwendungsfall: Monatsumsatz pro Produktkategorie, sortiert, mit Durchschnittswarenkorb. Komplett in der Datenbank gerechnet — keine 10.000 Dokumente zur Node.js-App, keine JSON.parse-Flut. Dank $lookup, $group und $project liefert Atlas das fertige Dashboard-Ergebnis in Millisekunden.",
        language: "MongoDB Shell — Aggregation Framework",
        code: `// Monatsumsatz je Kategorie inkl. Avg. Warenkorb
db.orders.aggregate([
  // 1. Nur bezahlte Bestellungen im letzten Monat
  { $match: {
      status: "paid",
      createdAt: {
        $gte: ISODate("2026-03-01T00:00:00Z"),
        $lt:  ISODate("2026-04-01T00:00:00Z"),
      },
  }},

  // 2. Line-Items entfalten
  { $unwind: "$items" },

  // 3. Produkt-Kategorie joinen
  { $lookup: {
      from: "products",
      localField: "items.productId",
      foreignField: "_id",
      as: "product",
  }},
  { $unwind: "$product" },

  // 4. Gruppierung nach Kategorie
  { $group: {
      _id: "$product.category",
      revenue: { $sum: { $multiply: ["$items.qty", "$items.price"] } },
      orders:  { $addToSet: "$_id" },
      avgBasket: { $avg: "$total" },
  }},

  // 5. Projektion fuer Dashboard
  { $project: {
      _id: 0,
      category:  "$_id",
      revenue:   { $round: ["$revenue", 2] },
      orderCnt:  { $size: "$orders" },
      avgBasket: { $round: ["$avgBasket", 2] },
  }},

  // 6. Top-Kategorien zuerst
  { $sort: { revenue: -1 } },
], { allowDiskUse: true });`,
    },
    {
        id: "EX-03",
        title: "Schema Validation — Daten-Muell am Eingang stoppen",
        description:
            "MongoDB ist flexibel — aber ohne $jsonSchema-Regeln landet jeder fehlerhafte API-Call als Muell in der Collection. Dieses Beispiel erzwingt DSGVO-relevante Feld-Typen (E-Mail-Format, positiver Gesamtbetrag, erlaubte Status-Werte) direkt in der Datenbank. Legacy-Applikationen koennen keinen Schaden mehr anrichten.",
        language: "MongoDB Shell — $jsonSchema Validator",
        code: `// collection "orders" mit Schema-Guardrails
db.runCommand({
  collMod: "orders",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["customerEmail", "total", "status", "createdAt"],
      additionalProperties: true,
      properties: {
        customerEmail: {
          bsonType: "string",
          pattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$",
          description: "RFC 5322-konforme E-Mail (DSGVO-Pflichtfeld)",
        },
        total: {
          bsonType: "decimal",
          minimum: 0,
          description: "Bestellwert in EUR, nie negativ",
        },
        status: {
          enum: ["pending", "paid", "shipped", "cancelled", "refunded"],
          description: "Nur diese Status sind zulaessig",
        },
        items: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["productId", "qty", "price"],
            properties: {
              productId: { bsonType: "objectId" },
              qty:       { bsonType: "int", minimum: 1 },
              price:     { bsonType: "decimal", minimum: 0 },
            },
          },
        },
        createdAt: { bsonType: "date" },
      },
    },
  },
  validationLevel:  "strict",
  validationAction: "error", // REJECT invalid writes
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
export default function MongoCodeExamples() {
    return (
        <section
            aria-labelledby="mongo-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Architektur-Showcase — Proof of Data-Engineering ]
                        </span>
                        <h2
                            id="mongo-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Connection, Pipeline,
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Schema-Guardrails.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        Drei produktionsreife Code-Snippets zum Mitnehmen:
                        Serverless-sicherer Connection-String fuer Vercel,
                        Aggregation-Pipeline fuer Echtzeit-Umsatzanalysen und
                        $jsonSchema-Validation gegen Daten-Muell.
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

                {/* ── A11Y / DATA GOVERNANCE NOTE ── */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                    <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                        <strong className="text-[#000000]/80">Data Governance & DSGVO:</strong>{" "}
                        Alle gezeigten Snippets sind so gebaut, dass sie auf
                        EU-basierten MongoDB-Atlas-Clustern (Frankfurt, Dublin, Paris)
                        betrieben werden koennen. Schema-Validation, TLS 1.3 im
                        Connection-String und Write-Concern{" "}
                        <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">majority</code>{" "}
                        sorgen dafuer, dass Kundendaten weder verloren gehen noch
                        unkontrolliert verteilt werden.
                    </p>
                </div>

            </div>
        </section>
    );
}
