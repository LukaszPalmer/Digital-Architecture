"use client";

// src/components/sections/RealtimeCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.
// Snippets: Auth Middleware, Presence Detection, Redis Horizontal Scaling.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "EX-01",
        title: "Server-Side Auth Middleware",
        description:
            "Sicherheit beginnt beim Handshake: Diese Middleware validiert JWT-Tokens bevor eine Socket.IO-Verbindung ueberhaupt zugelassen wird. Unautorisierte Zugriffe werden sofort abgelehnt — kein Event erreicht den Server ohne gueltige Authentifizierung.",
        language: "TypeScript — Node.js Socket.IO Server",
        code: `// server/middleware/socket-auth.ts
import { Server } from "socket.io";
import jwt from "jsonwebtoken";

interface AuthPayload {
  userId: string;
  role: "buyer" | "seller" | "admin";
}

export function registerAuthMiddleware(io: Server) {
  io.use((socket, next) => {
    const token = socket.handshake.auth?.token;

    if (!token) {
      return next(new Error("AUTH_REQUIRED"));
    }

    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_SECRET!
      ) as AuthPayload;

      // Nutzerdaten am Socket-Objekt speichern
      socket.data.userId = payload.userId;
      socket.data.role = payload.role;

      next();
    } catch {
      next(new Error("TOKEN_INVALID"));
    }
  });
}`,
    },
    {
        id: "EX-02",
        title: "Presence-Detection — Online-Status",
        description:
            "Zeigt den 'Nutzer online'-Status in Echtzeit an. Beim Verbinden wird der Status gebroadcastet, bei Disconnect automatisch entfernt. Typisch fuer Marktplaetze, auf denen Kaeufer sehen wollen, ob ein Verkaeufer gerade erreichbar ist.",
        language: "TypeScript — Presence System",
        code: `// server/handlers/presence.ts
import { Server, Socket } from "socket.io";

const onlineUsers = new Map<string, {
  socketId: string;
  lastSeen: Date;
}>();

export function registerPresence(
  io: Server,
  socket: Socket
) {
  const userId = socket.data.userId;

  // Nutzer als online markieren
  onlineUsers.set(userId, {
    socketId: socket.id,
    lastSeen: new Date(),
  });

  // Allen Kontakten mitteilen: Nutzer ist online
  socket.broadcast.emit("presence:update", {
    userId,
    status: "online",
  });

  // Bei Verbindungsabbruch: Offline-Status senden
  socket.on("disconnect", () => {
    onlineUsers.delete(userId);
    io.emit("presence:update", {
      userId,
      status: "offline",
      lastSeen: new Date(),
    });
  });

  // Aktuelle Online-Liste an neuen Nutzer senden
  socket.emit(
    "presence:list",
    Array.from(onlineUsers.keys())
  );
}`,
    },
    {
        id: "EX-03",
        title: "Horizontal Scaling mit Redis-Adapter",
        description:
            "Fuer CTOs: So skalieren Sie Socket.IO horizontal ueber mehrere Node.js-Instanzen. Der Redis-Adapter synchronisiert Events via Pub/Sub — egal auf welcher Instanz ein Nutzer verbunden ist, Nachrichten erreichen den richtigen Empfaenger.",
        language: "TypeScript — Multi-Instance Setup",
        code: `// server/index.ts
import { Server } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";
import { registerAuthMiddleware } from "./middleware/socket-auth";

const pubClient = createClient({
  url: process.env.REDIS_URL,
});
const subClient = pubClient.duplicate();

async function bootstrap() {
  await Promise.all([
    pubClient.connect(),
    subClient.connect(),
  ]);

  const io = new Server(3001, {
    cors: { origin: process.env.CLIENT_URL },
    // MessagePack fuer 60% weniger Bandbreite
    parser: require("socket.io-msgpack-parser"),
  });

  // Redis Adapter fuer Cross-Instance Events
  io.adapter(createAdapter(pubClient, subClient));

  // Auth Middleware registrieren
  registerAuthMiddleware(io);

  io.on("connection", (socket) => {
    // Room beitreten (z.B. Konversation)
    socket.on("room:join", (roomId: string) => {
      socket.join(roomId);
    });

    // Nachricht an Room senden
    socket.on("message:send", (data) => {
      // Nur an andere Nutzer im Room
      socket.to(data.roomId).emit("message:new", {
        from: socket.data.userId,
        text: data.text,
        timestamp: Date.now(),
      });
    });
  });
}

bootstrap();`,
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
export default function RealtimeCodeExamples() {
    return (
        <section
            aria-labelledby="realtime-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Code-Beispiele — Socket.IO in der Praxis ]
                        </span>
                        <h2
                            id="realtime-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Echtzeit-Systeme
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                unter der Haube.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        So sieht eine professionelle Socket.IO-Implementierung
                        aus. Auth Middleware, Presence Detection und
                        Horizontal Scaling mit Redis — produktionsreifer
                        Code zum Kopieren.
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
                        Beispiele zeigen den Aufbau einer produktionsreifen Socket.IO-Architektur.
                        Fuer Ihre Plattform passen wir Auth-Logik, Room-Struktur, Redis-Konfiguration
                        und Event-Taxonomie individuell an. Der socket.io-client wird per Dynamic
                        Import lazy geladen — kein Impact auf Ihre Core Web Vitals.
                    </p>
                </div>

            </div>
        </section>
    );
}
