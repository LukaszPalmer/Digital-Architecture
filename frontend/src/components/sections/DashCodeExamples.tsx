"use client";

// src/components/sections/DashCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "MUI-EX-01",
        title: "Performantes DataGrid Setup",
        description:
            "Ein hochperformantes Datentabellen-Setup mit Server-Side Pagination, Virtual Scrolling und typisierten Spalten-Definitionen. Diese Konfiguration zielt auf die Darstellung von 100.000+ Zeilen bei stabilen 60fps ab.",
        language: "TypeScript — MUI DataGrid Pro",
        code: `// components/dashboard/DataGrid.tsx
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";
import { useQuery } from "@tanstack/react-query";

interface RowData {
  id: string;
  customer: string;
  revenue: number;
  status: "active" | "pending" | "closed";
  lastActivity: string;
}

const columns: GridColDef<RowData>[] = [
  { field: "customer", headerName: "Kunde", flex: 1, minWidth: 180 },
  {
    field: "revenue",
    headerName: "Umsatz",
    type: "number",
    width: 140,
    valueFormatter: (value: number) =>
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(value),
  },
  { field: "status", headerName: "Status", width: 120 },
  { field: "lastActivity", headerName: "Letzte Aktivitaet", width: 180 },
];

export default function EnterpriseDataGrid() {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 50,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["customers", paginationModel],
    queryFn: () =>
      fetch(\`/api/customers?\${new URLSearchParams({
        page: String(paginationModel.page),
        limit: String(paginationModel.pageSize),
      })}\`).then((res) => res.json()),
  });

  return (
    <DataGridPro
      rows={data?.rows ?? []}
      columns={columns}
      rowCount={data?.total ?? 0}
      loading={isLoading}
      paginationMode="server"
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      pagination
      disableRowSelectionOnClick
      rowHeight={48}
      sx={{ border: 0 }}
    />
  );
}`,
    },
    {
        id: "MUI-EX-02",
        title: "Custom Theme Provider Logik",
        description:
            "Ein typisiertes MUI Theme mit Brand-Token-System, das alle Material-Defaults ueberschreibt. Component-Overrides garantieren konsistentes Styling ohne CSS-Hacks — das Material-Look wird vollstaendig durch die Unternehmensidentitaet ersetzt.",
        language: "TypeScript — MUI Theme Engine",
        code: `// theme/enterprise-theme.ts
import { createTheme } from "@mui/material/styles";

// Brand-Token-System — Single Source of Truth
const tokens = {
  navy: "#001F3F",
  white: "#FFFFFF",
  black: "#000000",
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  radius: 0, // Enterprise-Standard: keine Border-Radius
} as const;

export const enterpriseTheme = createTheme({
  palette: {
    primary: { main: tokens.navy, contrastText: tokens.white },
    background: { default: tokens.white, paper: tokens.white },
    text: { primary: tokens.black, secondary: "rgba(0,0,0,0.65)" },
  },
  typography: {
    fontFamily: "'Geist', -apple-system, sans-serif",
    h1: { fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase" },
    h2: { fontWeight: 900, letterSpacing: "-0.025em", textTransform: "uppercase" },
    body1: { fontSize: "0.9375rem", lineHeight: 1.7 },
  },
  shape: { borderRadius: tokens.radius },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          fontWeight: 900,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "12px 24px",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: { border: \`1px solid \${tokens.black}\`, borderRadius: 0 },
        columnHeader: {
          backgroundColor: tokens.navy,
          color: tokens.white,
          fontWeight: 900,
          fontSize: "0.6875rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 0, border: \`1px solid \${tokens.black}\` },
      },
    },
  },
});`,
    },
    {
        id: "MUI-EX-03",
        title: "Dashboard Layout Struktur",
        description:
            "Eine Enterprise-Dashboard-Shell mit persistenter Sidebar-Navigation, kontextbewusstem Header und verschachteltem Layout-System. Konzipiert fuer RBAC-Integration — Navigations-Elemente werden rollenbasiert ein- und ausgeblendet.",
        language: "TypeScript — Next.js Layout",
        code: `// app/dashboard/layout.tsx
import { ReactNode } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: string;
  roles: ("admin" | "manager" | "analyst")[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: "grid", roles: ["admin", "manager", "analyst"] },
  { label: "Analytics", href: "/dashboard/analytics", icon: "chart", roles: ["admin", "analyst"] },
  { label: "Kunden", href: "/dashboard/customers", icon: "users", roles: ["admin", "manager"] },
  { label: "Settings", href: "/dashboard/settings", icon: "gear", roles: ["admin"] },
];

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar — persistiert ueber alle Dashboard-Seiten */}
      <nav
        aria-label="Dashboard Navigation"
        className="w-64 border-r border-black bg-white flex flex-col"
      >
        <div className="p-6 border-b border-black">
          <span className="text-xs font-black tracking-[0.3em] uppercase">
            Enterprise Dashboard
          </span>
        </div>
        <ul role="list" className="flex-1 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-6 py-3 text-sm
                           font-bold hover:bg-[#001F3F] hover:text-white
                           transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 bg-white border-b border-black px-8 py-4">
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-black/45 uppercase">
            Dashboard // Live
          </span>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
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
export default function DashCodeExamples() {
    return (
        <section
            aria-labelledby="dash-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Code-Beispiele — Enterprise Dashboard Patterns ]
                        </span>
                        <h2
                            id="dash-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Material UI
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                in der Praxis.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        Drei produktionsreife Code-Beispiele, die zeigen,
                        wie ein architektonisch sauberes Enterprise-Dashboard
                        mit Material UI aufgebaut wird. Jedes Beispiel
                        kann direkt in Ihr Projekt übernommen werden.
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
                        Beispiele zeigen den grundlegenden Aufbau eines Enterprise-Dashboard-Systems
                        mit Material UI. Für Ihr Unternehmen passen wir die Konfiguration
                        individuell an — inklusive Ihres Brand-Token-Systems, RBAC-Logik und
                        Datenbank-Integration. Alle Implementierungen sind für eine langfristige
                        Skalierbarkeit der Benutzeroberfläche konzipiert.
                    </p>
                </div>

            </div>
        </section>
    );
}
