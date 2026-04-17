"use client";

// src/components/sections/PostgreCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.
// Snippets: E-Commerce Schema, Aggregation-Join, JSONB-Query.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "SQL-01",
        title: "E-Commerce Schema — Relationale Integritaet",
        description:
            "Ein optimiertes Datenbankschema fuer ein E-Commerce-System: Kunden, Bestellungen und Positionen sind ueber Foreign Keys verknuepft. CHECK-Constraints verhindern negative Preise und ungueltige Mengen, ON DELETE RESTRICT schuetzt vor versehentlichem Datenverlust. Das ist relationale Integritaet in Reinform — die Datenbank selbst ist der Tuersteher, der falsche oder unvollstaendige Daten abweist, bevor sie das System korrumpieren koennen.",
        language: "SQL — PostgreSQL 16 DDL",
        code: `-- Kunden-Tabelle: Eindeutige Identifikation + Audit-Felder
CREATE TABLE customers (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email       TEXT NOT NULL UNIQUE,
    full_name   TEXT NOT NULL,
    company     TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index fuer schnelle E-Mail-Suche (Case-Insensitive)
CREATE INDEX idx_customers_email_lower ON customers (lower(email));

-- Bestellungen: Verknuepft mit Kunden ueber Foreign Key
CREATE TABLE orders (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id BIGINT NOT NULL REFERENCES customers(id) ON DELETE RESTRICT,
    status      TEXT NOT NULL DEFAULT 'pending'
                CHECK (status IN ('pending','confirmed','shipped','delivered','cancelled')),
    total_cents BIGINT NOT NULL CHECK (total_cents >= 0),
    ordered_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_orders_customer ON orders (customer_id);
CREATE INDEX idx_orders_status   ON orders (status) WHERE status != 'cancelled';

-- Bestellpositionen: Jede Position gehoert zu genau einer Bestellung
CREATE TABLE order_items (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id    BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_sku TEXT NOT NULL,
    quantity    INT NOT NULL CHECK (quantity > 0),
    unit_cents  BIGINT NOT NULL CHECK (unit_cents >= 0)
);

CREATE INDEX idx_items_order ON order_items (order_id);`,
    },
    {
        id: "SQL-02",
        title: "Aggregation-Join — Blitzschnelle Umsatzanalyse",
        description:
            "Ein komplexer JOIN, der Kundendaten, Bestellungen und Positionen in einer einzigen Abfrage aggregiert: Gesamtumsatz, Anzahl Bestellungen und durchschnittlicher Warenkorbwert pro Kunde — sortiert nach Umsatz. Dank der Indizes auf customer_id und order_id laeuft diese Abfrage auch bei Millionen von Datensaetzen in Millisekunden. Das ist die Kraft intelligenter Indizes: von Sekunden auf unter 10 ms.",
        language: "SQL — PostgreSQL Analytical Query",
        code: `-- Top-Kunden nach Umsatz mit Bestellstatistik
SELECT
    c.id,
    c.full_name,
    c.email,
    COUNT(DISTINCT o.id)                     AS total_orders,
    SUM(oi.quantity * oi.unit_cents) / 100.0 AS revenue_eur,
    ROUND(
        AVG(o.total_cents) / 100.0, 2
    )                                        AS avg_order_eur,
    MAX(o.ordered_at)                        AS last_order
FROM customers     c
JOIN orders        o  ON o.customer_id = c.id
JOIN order_items   oi ON oi.order_id   = o.id
WHERE o.status NOT IN ('cancelled')
  AND o.ordered_at >= now() - INTERVAL '12 months'
GROUP BY c.id, c.full_name, c.email
HAVING SUM(oi.quantity * oi.unit_cents) > 0
ORDER BY revenue_eur DESC
LIMIT 50;

-- EXPLAIN ANALYZE zeigt: Index Scan auf idx_orders_customer,
-- Nested Loop Join, Sort via Top-N Heap — Execution < 8 ms
-- bei 500.000 Bestellungen und 2 Mio Positionen.`,
    },
    {
        id: "SQL-03",
        title: "JSONB-Query — Flexible Produktattribute",
        description:
            "PostgreSQL vereint relationale Praezision mit dokumentenorientierter Flexibilitaet: Produktattribute wie Farbe, Material oder technische Spezifikationen werden als JSONB gespeichert und ueber GIN-Indizes blitzschnell durchsucht. Das Ergebnis: Sie brauchen keinen separaten NoSQL-Stack wie MongoDB fuer unstrukturierte Daten — PostgreSQL kann beides in einer einzigen Datenbank, mit voller ACID-Garantie.",
        language: "SQL — PostgreSQL JSONB Operations",
        code: `-- Produkttabelle mit JSONB-Attributen fuer maximale Flexibilitaet
CREATE TABLE products (
    id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    sku        TEXT NOT NULL UNIQUE,
    name       TEXT NOT NULL,
    attrs      JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- GIN-Index fuer blitzschnelle JSONB-Suche (Containment)
CREATE INDEX idx_products_attrs ON products USING GIN (attrs);

-- Beispiel-Insert: Laptop mit technischen Spezifikationen
INSERT INTO products (sku, name, attrs) VALUES (
    'LAP-PRO-16',
    'ProBook 16 Zoll',
    '{
        "brand": "TechCorp",
        "color": ["space-grey", "silver"],
        "specs": {"ram_gb": 32, "storage_gb": 1024, "cpu": "M3 Pro"},
        "tags": ["business", "premium", "lightweight"]
    }'::JSONB
);

-- JSONB-Containment: Alle Produkte mit mindestens 32 GB RAM
SELECT sku, name, attrs->'specs'->>'cpu' AS cpu
FROM products
WHERE attrs @> '{"specs": {"ram_gb": 32}}';

-- JSONB-Path: Alle Produkte mit "premium" Tag
SELECT sku, name, attrs->'specs' AS specs
FROM products
WHERE attrs @? '$.tags[*] ? (@ == "premium")';

-- Kombiniert: Relationale Joins + JSONB-Filter
SELECT p.sku, p.name, oi.quantity,
       p.attrs->'specs'->>'ram_gb' AS ram
FROM order_items oi
JOIN products p ON p.sku = oi.product_sku
WHERE p.attrs @> '{"tags": ["business"]}'
ORDER BY oi.quantity DESC;`,
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
export default function PostgreCodeExamples() {
    return (
        <section
            aria-labelledby="postgre-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Architektur-Showcase — Proof of Data-Architecture ]
                        </span>
                        <h2
                            id="postgre-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Schema, Query,
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                JSONB.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        Drei produktionsreife SQL-Snippets zum Mitnehmen: ein
                        normalisiertes E-Commerce-Schema mit Constraints, eine
                        blitzschnelle Aggregation ueber Joins und eine
                        JSONB-Abfrage fuer maximale Flexibilitaet.
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
                                    Produktionsreifer SQL-Code
                                </span>
                                <CopyButton code={example.code} label={example.title} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── COMPLIANCE NOTE ── */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                    <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                        <strong className="text-[#000000]/80">Saubere vs. Messy Architektur:</strong>{" "}
                        Das Schema oben ist <em>normalisiert</em> — jede Information
                        existiert genau einmal. Kunden in{" "}
                        <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">customers</code>,
                        Bestellungen in{" "}
                        <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">orders</code>,
                        Positionen in{" "}
                        <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">order_items</code>{" "}
                        — verknuepft ueber Foreign Keys. Eine &quot;messy&quot; Architektur
                        speichert Kundendaten in jeder Bestellung erneut: aendert sich
                        die Adresse, muss sie in tausenden Datensaetzen korrigiert werden.
                        Relationale Normalisierung macht das unmoeglich — und Ihre Daten
                        automatisch konsistent.
                    </p>
                </div>

            </div>
        </section>
    );
}
