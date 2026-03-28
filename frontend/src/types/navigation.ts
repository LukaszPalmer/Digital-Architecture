import { ReactNode } from "react";

export interface NavSubLink {
    label: string;
    href: string;
    description: string;
    // ARCHITECTURAL FIX: Wir binden das Icon direkt an die Daten
    iconPath?: string; 
}

export interface NavLink {
    label: string;
    href?: string;
    subLinks?: NavSubLink[];
}