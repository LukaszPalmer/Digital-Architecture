"use client";

// src/app/admin/login/page.tsx
// Admin Login — minimalistisch, professional, kein Layout-Wrapper.

import { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") ?? "/admin/dashboard";

    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]       = useState("");
    const [isPending, startTransition] = useTransition();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        startTransition(async () => {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            if (result?.error) {
                setError("E-Mail oder Passwort falsch.");
            } else {
                router.push(callbackUrl);
            }
        });
    }

    return (
        <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center px-4">
            <div className="w-full max-w-sm">

                {/* Logo */}
                <div className="mb-12">
                    <span className="text-[#001F3F] font-black text-[22px] tracking-[-0.04em] leading-none uppercase block">
                        PALMER
                    </span>
                    <span className="text-[9px] tracking-[0.3em] font-medium text-[#001F3F]/50 uppercase mt-1 block">
                        Admin Dashboard
                    </span>
                </div>

                {/* Header */}
                <div className="mb-10 border-l-2 border-[#001F3F] pl-5">
                    <h1 className="text-[10px] font-mono font-black tracking-[0.5em] text-[#001F3F] uppercase mb-2">
                        [ Restricted Access ]
                    </h1>
                    <p className="text-[22px] font-black tracking-tighter uppercase text-[#000000] leading-tight">
                        Anmelden
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                    <div>
                        <label
                            htmlFor="admin-email"
                            className="block text-[9.5px] font-mono font-bold tracking-[0.4em] uppercase mb-3 text-[#000000]/70"
                        >
                            E-Mail
                        </label>
                        <input
                            id="admin-email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full bg-transparent py-3.5 text-[16px] font-medium text-[#000000] placeholder:text-[#000000]/30 outline-none border-b-2 border-[#001F3F] focus:border-[#000000] transition-colors"
                            placeholder="kontakt@palmer-digital.de"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="admin-password"
                            className="block text-[9.5px] font-mono font-bold tracking-[0.4em] uppercase mb-3 text-[#000000]/70"
                        >
                            Passwort
                        </label>
                        <input
                            id="admin-password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full bg-transparent py-3.5 text-[16px] font-medium text-[#000000] placeholder:text-[#000000]/30 outline-none border-b-2 border-[#001F3F] focus:border-[#000000] transition-colors"
                            placeholder="••••••••••••"
                        />
                    </div>

                    {error && (
                        <p className="text-[11px] font-mono text-red-600 tracking-wide border-l-2 border-red-500 pl-3">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-[#001F3F] text-[#FFFFFF] py-4 text-[11px] font-black tracking-[0.35em] uppercase hover:bg-[#000000] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                        {isPending ? "Wird geprüft …" : "Zugang anfordern"}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-[#000000]/10">
                    <p className="text-[9px] font-mono text-[#000000]/30 tracking-[0.25em] uppercase text-center">
                        Palmer Digital — Restricted Admin Area
                    </p>
                </div>

            </div>
        </div>
    );
}

export default function AdminLoginPage() {
    return (
        <Suspense fallback={null}>
            <LoginForm />
        </Suspense>
    );
}
