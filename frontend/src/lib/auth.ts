// src/lib/auth.ts
// NextAuth.js v5 — Credentials Provider für Admin-Login.

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email:    { label: "E-Mail", type: "email" },
                password: { label: "Passwort", type: "password" },
            },
            async authorize(credentials) {
                const adminEmail    = process.env.ADMIN_EMAIL!;
                const adminPassword = process.env.ADMIN_PASSWORD!;

                if (
                    credentials?.email    === adminEmail &&
                    credentials?.password === adminPassword
                ) {
                    return {
                        id:    "admin",
                        name:  "Lukasz Palmer",
                        email: adminEmail,
                        role:  "admin",
                    };
                }
                return null;
            },
        }),
    ],
    session: { strategy: "jwt", maxAge: 8 * 60 * 60 }, // 8 Stunden
    pages: {
        signIn: "/admin/login",
        error:  "/admin/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = (user as { role?: string }).role;
            return token;
        },
        async session({ session, token }) {
            if (session.user) (session.user as { role?: string }).role = token.role as string;
            return session;
        },
    },
});
