// src/middleware.ts
// Schützt alle /admin Routen — außer /admin/login.

import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const { pathname } = req.nextUrl;

    // Login-Seite immer zugänglich
    if (pathname === "/admin/login") return NextResponse.next();

    // Alle anderen /admin Routen: Auth prüfen
    if (pathname.startsWith("/admin")) {
        if (!req.auth) {
            const loginUrl = new URL("/admin/login", req.url);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/admin/:path*"],
};
