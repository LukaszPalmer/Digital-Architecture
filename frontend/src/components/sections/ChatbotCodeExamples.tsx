"use client";

// src/components/sections/ChatbotCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "EX-01",
        title: "Edge API Route — KI-Streaming-Antwort",
        description:
            "So streamen Sie KI-Antworten in Echtzeit an den Nutzer: Die Edge Function empfaengt die Nachricht, sendet sie an das LLM und streamt die Antwort Token fuer Token zurueck — fuer eine gefuehlte Antwortzeit unter 200ms.",
        language: "TypeScript — Next.js Edge API Route",
        code: `// app/api/chat/route.ts
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${process.env.OPENAI_API_KEY}\`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        stream: true,
        messages: [
          {
            role: "system",
            content:
              "Du bist ein hilfreicher KI-Assistent fuer einen " +
              "Onlineshop. Beantworte Fragen zu Produkten, " +
              "Bestellungen und Lieferzeiten praezise und freundlich.",
          },
          ...messages,
        ],
        max_tokens: 1024,
      }),
    }
  );

  // Antwort direkt an den Client streamen
  return new Response(response.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}`,
    },
    {
        id: "EX-02",
        title: "Prompt Engineering — Onlineshop-Assistent",
        description:
            "Ein gut strukturierter System-Prompt ist der Schluessel zu praezisen KI-Antworten. Dieses Beispiel zeigt, wie Sie einen Chatbot fuer Ihren Onlineshop mit klaren Regeln, Produktwissen und Eskalationslogik konfigurieren.",
        language: "TypeScript — Prompt-Konfiguration",
        code: `// lib/prompts/shop-assistant.ts

export const SHOP_ASSISTANT_PROMPT = \`
Du bist der KI-Assistent fuer [Shopname].
Deine Aufgabe: Kunden bei Produktfragen, Bestellungen
und Retouren helfen.

REGELN:
- Antworte immer auf Deutsch, freundlich und praezise
- Nutze die bereitgestellten Produktdaten fuer Empfehlungen
- Bei Preisfragen: Nenne den aktuellen Preis aus dem Katalog
- Bei Beschwerden: Entschuldige dich und erstelle ein Ticket
- Bei Fragen ausserhalb deines Wissens: Leite an Support weiter

ESKALATION:
- Rechtliche Fragen → Sofort an menschlichen Agent uebergeben
- Stornierung ueber 500 EUR → Agent-Freigabe erforderlich
- Technische Probleme → Ticket mit Prioritaet "HOCH" erstellen

KONTEXT-NUTZUNG:
- Pruefe immer den bisherigen Gespraechsverlauf
- Wiederhole keine Informationen, die bereits gegeben wurden
- Frage bei unklaren Anfragen hoeflich nach
\`;

export function buildMessages(
  history: { role: string; content: string }[],
  productContext: string
) {
  return [
    { role: "system", content: SHOP_ASSISTANT_PROMPT },
    {
      role: "system",
      content: \`Aktuelle Produktdaten:\\n\${productContext}\`,
    },
    ...history,
  ];
}`,
    },
    {
        id: "EX-03",
        title: "Webhook — Automatische Ticket-Erstellung",
        description:
            "Wenn der KI-Assistent eine Eskalation ausloest, wird automatisch ein Support-Ticket erstellt. Dieser Webhook-Handler empfaengt das Event, erstellt das Ticket in Ihrem Helpdesk und benachrichtigt das Team.",
        language: "TypeScript — Webhook Endpoint",
        code: `// app/api/webhooks/chatbot/route.ts
import { NextRequest, NextResponse } from "next/server";

interface ChatbotEvent {
  type: "escalation" | "ticket" | "feedback";
  conversationId: string;
  summary: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  customerEmail?: string;
}

export async function POST(req: NextRequest) {
  const event: ChatbotEvent = await req.json();

  switch (event.type) {
    case "escalation":
      // Gespraechskontext an menschlichen Agent uebergeben
      await notifyAgent({
        conversationId: event.conversationId,
        summary: event.summary,
        priority: event.priority,
      });
      break;

    case "ticket":
      // Support-Ticket im Helpdesk erstellen
      await createTicket({
        title: event.summary,
        priority: event.priority,
        customer: event.customerEmail,
        context: event.conversationId,
      });
      break;

    case "feedback":
      // Kundenfeedback speichern fuer KI-Training
      await saveFeedback(event);
      break;
  }

  return NextResponse.json({ received: true });
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
export default function ChatbotCodeExamples() {
    return (
        <section
            aria-labelledby="chatbot-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Code-Beispiele — KI-Integration in der Praxis ]
                        </span>
                        <h2
                            id="chatbot-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            KI-Chatbot
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                unter der Haube.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        So sieht eine professionelle KI-Chatbot-Integration
                        aus. Edge Streaming, Prompt Engineering und
                        automatisierte Workflows — produktionsreifer Code
                        fuer Ihren Onlineshop oder Ihre Webseite.
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

                {/* ── BOTTOM NOTE ── */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                    <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                        <strong className="text-[#000000]/80">Hinweis:</strong> Diese
                        Beispiele zeigen den grundlegenden Aufbau einer KI-Chatbot-Integration.
                        Fuer Ihren Onlineshop oder Ihre Webseite passen wir die Konfiguration
                        individuell an — inklusive Prompt-Architektur, Backend-Anbindung und
                        Eskalationslogik. Alle Integrationen sind DSGVO-konform und werden
                        auf europaeischen Servern betrieben.
                    </p>
                </div>

            </div>
        </section>
    );
}
