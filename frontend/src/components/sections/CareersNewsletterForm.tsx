"use client";

// src/components/sections/CareersNewsletterForm.tsx
// Client-Insel — Career Newsletter Subscription.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { useState, useTransition } from "react";
import { subscribeCareerNewsletter } from "@/lib/actions/subscribeCareerNewsletter";

export function CareersNewsletterForm() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [isPending, startTransition] = useTransition();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        startTransition(async () => {
            const result = await subscribeCareerNewsletter(formData);
            if (result.success) {
                form.reset();
                setStatus("success");
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setErrorMsg(result.error ?? "Fehler beim Abonnieren.");
                setStatus("error");
            }
        });
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

            {status === "success" ? (
                <div className="bg-[#001F3F] px-6 py-6 flex items-center gap-5">
                    <div className="w-10 h-10 border border-[#FFFFFF]/25 flex items-center justify-center shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[11.5px] font-black tracking-[0.3em] uppercase text-[#001F3F]">
                            Erfolgreich eingetragen
                        </span>
                        <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#001F3F]/55">
                            Du wirst bei neuen Stellen als Erstes informiert
                        </span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex flex-col sm:flex-row gap-0 border border-[#000000]/20">
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="deine@email.de"
                            disabled={isPending}
                            className="flex-1 bg-transparent px-5 py-4 text-[14px] font-medium text-[#000000] placeholder:text-[#000000]/35 outline-none border-b sm:border-b-0 sm:border-r border-[#000000]/20 disabled:opacity-50"
                            aria-label="E-Mail-Adresse für Career Newsletter"
                        />
                        <button
                            type="submit"
                            disabled={isPending}
                            className="bg-[#001F3F] text-[#FFFFFF] px-8 py-4 text-[10.5px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shrink-0 flex items-center justify-center gap-3"
                        >
                            {isPending ? "…" : (
                                <>
                                    Abonnieren
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>

                    {status === "error" && (
                        <p className="text-[10.5px] font-mono text-red-600 tracking-wide">
                            {errorMsg}
                        </p>
                    )}
                </>
            )}

            <p className="text-[9.5px] font-mono text-[#000000]/35 tracking-[0.2em] uppercase">
                Kein Spam · Jederzeit abbestellbar · DSGVO-konform
            </p>
        </form>
    );
}
