// src/components/ui/StatusBadge.tsx
// Server Component — keine Client-Logik benötigt.
// Design-Dogma: 0px border-radius, AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000.

import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    status?: string;
    availability?: string;
    className?: string;
}

export default function StatusBadge({
    status = "STATUS",
    availability = "AVAILABLE Q2",
    className,
}: StatusBadgeProps) {
    return (
        <div
            className={cn("inline-flex flex-col items-start gap-1 select-none", className)}
            aria-label={`Status: ${availability}`}
        >
            {/* Meta Label */}
            <span className="text-[9px] font-mono font-bold tracking-[0.42em] text-[#001F3F]/40 uppercase">
                {status}
            </span>

            {/* Indicator Row */}
            <div className="flex items-center gap-2.5">
                {/* Pulsing square — 0px border-radius per Design-Dogma */}
                <div className="relative w-2 h-2 shrink-0" aria-hidden="true">
                    <span className="animate-ping absolute inset-0 bg-[#001F3F] opacity-50" />
                    <span className="relative block w-full h-full bg-[#001F3F]" />
                </div>

                <span className="text-[13px] font-black tracking-tight text-[#000000] uppercase leading-none">
                    {availability}
                </span>
            </div>
        </div>
    );
}
