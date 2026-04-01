// src/app/admin/layout.tsx
// Admin Layout — kein Navbar/Footer der öffentlichen Seite.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Admin Dashboard — Palmer Digital",
    robots: "noindex, nofollow",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
        </div>
    );
}
