"use client";

// src/components/sections/UXCodeExamples.tsx
// Client Component — Copy-to-Clipboard Interaktivitaet.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: Tastaturzugaenglich, aria-live fuer Screenreader, focus-visible.
// Snippets: Tailwind Design System Config, Aria-Labels, Framer Motion Variants.

import { useState, useCallback } from "react";

/* ── CODE SNIPPETS ── */
const CODE_EXAMPLES = [
    {
        id: "DS-01",
        title: "Tailwind Design System Config",
        description:
            "Ein konsistentes Design System beginnt mit einem Token-basierten Tailwind-Config. Farben, Spacing und Typografie werden als Design-Tokens definiert — Figma Variables spiegeln sich 1:1 in der Tailwind-Konfiguration. Keine Magic Numbers, keine Ad-hoc-Werte. Jede Aenderung im Design propagiert automatisch in den Code.",
        language: "TypeScript — tailwind.config.ts",
        code: `// tailwind.config.ts — Design System Tokens
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 1:1 Figma Variable Mapping
        primary: {
          DEFAULT: "#001F3F", // Navy — Brand
          50: "#E6EBF2",
          100: "#B3C2D9",
          900: "#001029",
        },
        surface: "#FFFFFF",
        foreground: "#000000",
      },
      spacing: {
        // 4px Base Grid System
        "grid-1": "4px",
        "grid-2": "8px",
        "grid-3": "12px",
        "grid-4": "16px",
        "grid-6": "24px",
        "grid-8": "32px",
        "grid-12": "48px",
        "grid-16": "64px",
      },
      fontSize: {
        // Typographic Scale (1.25 Ratio)
        "display-xl": ["clamp(3rem,8vw,7rem)", {
          lineHeight: "0.92",
          letterSpacing: "-0.03em",
          fontWeight: "900",
        }],
        "display-lg": ["clamp(2.4rem,6vw,5rem)", {
          lineHeight: "0.92",
          letterSpacing: "-0.025em",
          fontWeight: "900",
        }],
        "body": ["16px", {
          lineHeight: "1.625",
          letterSpacing: "0",
        }],
        "mono-xs": ["10px", {
          lineHeight: "1.4",
          letterSpacing: "0.4em",
          fontWeight: "700",
        }],
      },
      borderRadius: {
        // Design-Dogma: 0px border-radius
        none: "0px",
      },
    },
  },
};

export default config;`,
    },
    {
        id: "DS-02",
        title: "Accessible Custom Select — Aria-Labels",
        description:
            "Barrierefreie UI-Komponenten erfordern mehr als ein aria-label. Dieses Custom Select implementiert vollstaendiges Fokus-Management, Tastaturnavigation (Arrow Keys, Escape, Enter) und aria-expanded/aria-activedescendant fuer Screenreader. WCAG 2.1 AAA konform — Design ist nur gut, wenn es jeder nutzen kann.",
        language: "TypeScript — React A11y Component",
        code: `// components/ui/AccessibleSelect.tsx
"use client";
import { useState, useRef, useCallback } from "react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  label: string;
  onChange: (value: string) => void;
}

export default function AccessibleSelect({
  options, label, onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selected, setSelected] = useState<Option | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) =>
            Math.min(prev + 1, options.length - 1)
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (isOpen && activeIndex >= 0) {
            setSelected(options[activeIndex]);
            onChange(options[activeIndex].value);
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
      }
    },
    [isOpen, activeIndex, options, onChange]
  );

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      <label
        id="select-label"
        className="text-mono-xs uppercase text-foreground/60"
      >
        {label}
      </label>
      <button
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        aria-activedescendant={
          activeIndex >= 0
            ? \`option-\${activeIndex}\`
            : undefined
        }
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left border border-foreground
          px-grid-4 py-grid-3 focus-visible:outline-2
          focus-visible:outline-primary"
      >
        {selected?.label ?? "Bitte waehlen"}
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          aria-labelledby="select-label"
          className="absolute w-full border border-foreground
            bg-surface z-50 mt-grid-1"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={\`option-\${index}\`}
              role="option"
              aria-selected={selected?.value === option.value}
              className={\`px-grid-4 py-grid-3 cursor-pointer
                \${index === activeIndex
                  ? "bg-primary text-surface"
                  : "hover:bg-primary/10"
                }\`}
              onClick={() => {
                setSelected(option);
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
    },
    {
        id: "DS-03",
        title: "Framer Motion — Smooth State Transitions",
        description:
            "Animation-Variants fuer konsistente Smooth State Transitions im gesamten Interface. Das Variant-System definiert enter/exit-Animationen zentral — jede Komponente nutzt dieselben Timing-Kurven. prefers-reduced-motion wird respektiert: Bei aktivierter Einstellung werden alle Animationen durch sofortige Zustandswechsel ersetzt.",
        language: "TypeScript — Framer Motion Variants",
        code: `// lib/motion-variants.ts
// Zentrale Animation-Variants fuer das gesamte Interface.
// prefers-reduced-motion wird auf Komponenten-Ebene respektiert.

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Reduced Motion: Sofortige Zustandswechsel
export const reducedMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.01 },
  },
};

// Usage in Component:
// const prefersReduced =
//   window.matchMedia(
//     "(prefers-reduced-motion: reduce)"
//   ).matches;
//
// <motion.div
//   variants={prefersReduced ? reducedMotion : fadeInUp}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
// />`,
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
export default function UXCodeExamples() {
    return (
        <section
            aria-labelledby="ux-code-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Design-Prinzipien als Code — Proof of Design ]
                        </span>
                        <h2
                            id="ux-code-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Design Systems
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                in Produktion.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                        So sieht die Design-to-Code Pipeline aus.
                        Tailwind Design-Tokens, barrierefreie UI-Components
                        und Framer Motion Animation-Variants —
                        produktionsreifer Code zum Kopieren.
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
                        <strong className="text-[#000000]/80">Minimalist Construction:</strong> Diese
                        Beispiele zeigen den Aufbau eines produktionsreifen Design Systems.
                        Tailwind statt CSS-in-JS eliminiert Runtime-Overhead — Zero-Runtime
                        Styling fuer maximale Time to Interactive. Jede Figma-Variable wird
                        auf einen Tailwind-Token gemappt. Das Ergebnis: konsistentes Design
                        ohne Performance-Einbussen.
                    </p>
                </div>

            </div>
        </section>
    );
}
