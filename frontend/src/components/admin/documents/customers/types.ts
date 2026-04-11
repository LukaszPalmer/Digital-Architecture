// Geteilte Typen, Konstanten und Helfer für alle Kunden-Komponenten.

import ReceiptIcon from "@mui/icons-material/Receipt";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentIcon from "@mui/icons-material/Assignment";

export interface Customer {
    _id: string;
    name: string;
    company: string;
    street: string;
    zip: string;
    city: string;
    email: string;
    phone: string;
    customerNumber: string;
    notes: string;
    createdAt?: string;
}

export type CustomerForm = Omit<Customer, "_id" | "customerNumber" | "createdAt">;

export const EMPTY_CUSTOMER: CustomerForm = {
    name: "", company: "", street: "", zip: "", city: "",
    email: "", phone: "", notes: "",
};

export const NAVY = "#001F3F";

export const TYPE_LABELS: Record<string, string> = {
    invoice: "Rechnung",
    quote: "Angebot",
    confirmation: "Auftragsbestätigung",
};

export const TYPE_ICONS: Record<string, typeof ReceiptIcon> = {
    invoice: ReceiptIcon,
    quote: DescriptionIcon,
    confirmation: AssignmentIcon,
};

export const STATUS_LABELS: Record<string, string> = {
    draft: "Entwurf", sent: "Versendet", paid: "Bezahlt",
    overdue: "Überfällig", cancelled: "Storniert",
};

export const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
    draft:     { bg: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.5)" },
    sent:      { bg: "rgba(0,100,200,0.1)", color: "#0064C8" },
    paid:      { bg: "rgba(0,150,0,0.1)", color: "#009600" },
    overdue:   { bg: "rgba(200,50,0,0.1)", color: "#C83200" },
    cancelled: { bg: "rgba(0,0,0,0.04)", color: "rgba(0,0,0,0.35)" },
};

export function formatCurrency(cents: number): string {
    return (cents / 100).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

export function formatDate(dateStr: string): string {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("de-DE");
}
