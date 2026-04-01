"use client";

import {
    createContext, useContext, useState, useEffect,
    type ReactNode,
} from "react";
import { Box } from "@mui/material";

export type Locale = "de" | "en" | "be";

const T = {
    de: {
        // ── Nav ──
        brand: "PALMER", brandSub: "Analytics",
        updatedAt: "Stand", refresh: "Aktualisieren", logout: "Abmelden",
        last7: "Letzte 7 Tage", last30: "Letzte 30 Tage", last90: "Letzte 90 Tage",
        loading: "Lade Daten…", noData: "Noch keine Daten vorhanden",
        // ── Sections ──
        secOverview: "Overview", secTraffic: "Traffic Verlauf",
        secDevices: "Geräte & Browser", secBehavior: "Nutzer-Verhalten",
        secAcquisition: "Traffic-Herkunft", secUTM: "UTM Kampagnen",
        secConversions: "Conversions & CTAs", secEvents: "Alle Events",
        // ── KPI Labels ──
        pageviews: "Pageviews", sessions: "Unique Sessions",
        avgDuration: "Ø Verweildauer", bounceRate: "Bounce Rate",
        pagesPerSession: "Seiten / Session", topEvent: "Top Event",
        // ── KPI Sub ──
        subPageviews: "Gesamt im Zeitraum", subSessions: "Individuelle Besucher",
        subDuration: "Durchschnitt pro Session", subBounce: "Sessions mit nur 1 Seite",
        subPages: "Ø Seitenaufrufe je Besuch", subEvent: "mal ausgelöst",
        // ── Charts ──
        chartPageviews: "Pageviews pro Tag",
        chartDevices: "Gerätetyp", chartBrowser: "Browser", chartOS: "Betriebssystem",
        chartNewReturn: "Neu vs. Wiederkehrend", chartScroll: "Scroll-Tiefe",
        chartFormFunnel: "Form Conversion",
        chartSources: "Traffic-Quellen", chartCountries: "Länder",
        chartCTA: "CTA Klicks", chartTopPages: "Top Seiten",
        // ── Form Funnel ──
        funnelOpened: "Formular geöffnet", funnelSent: "Anfrage abgesendet",
        funnelRate: "Conversion Rate",
        // ── UTM Table ──
        utmSource: "Source", utmMedium: "Medium", utmCampaign: "Kampagne",
        utmClicks: "Klicks",
        utmEmpty: "Noch keine UTM-Parameter. Füge utm_source, utm_medium und utm_campaign zu deinen Werbe-Links hinzu.",
        // ── Events / Pages ──
        eventLabel: "Event", countLabel: "Anzahl", pageLabel: "Seite", viewsLabel: "Aufrufe",
        noCtaData: "Noch keine Klicks erfasst",
        // ── Tooltips ──
        ttPageviews: "Gesamtanzahl der Seitenaufrufe im Zeitraum. Jeder Aufruf wird gezählt — auch mehrfache Besuche derselben Person.",
        ttSessions: "Anzahl einzigartiger Besuche. Jede Session = eine Person, die deine Seite besucht hat.",
        ttDuration: "Durchschnittliche Zeit, die ein Besucher auf der Seite verbringt. Wird aus 'pageleave'-Events berechnet.",
        ttBounce: "Prozentsatz der Besucher, die nach nur einer Seite die Website verlassen. Niedriger ist besser (< 60% ist gut).",
        ttPagesPerSession: "Wie viele Seiten ein Besucher durchschnittlich pro Besuch aufruft. Höher = mehr Interesse.",
        ttTopEvent: "Das am häufigsten ausgelöste Tracking-Event im gewählten Zeitraum.",
        ttLineChart: "Tägliche Pageview-Entwicklung. Zeigt Traffic-Trends und hilft Werbekampagnen zeitlich auszuwerten.",
        ttDevices: "Aufschlüsselung nach Endgerät: Desktop, Mobil oder Tablet. Wichtig für Design-Entscheidungen.",
        ttBrowser: "Welche Browser deine Besucher verwenden. Wichtig für Kompatibilitäts-Entscheidungen.",
        ttOS: "Welche Betriebssysteme deine Besucher nutzen.",
        ttNewReturn: "Erstbesucher (Neu) vs. Personen die die Seite schon kennen. Viele Neukunden = gute Reichweite.",
        ttScroll: "Wie weit Besucher nach unten scrollen. 100% = Seite vollständig gelesen. Zeigt wo Nutzer abspringen.",
        ttFormFunnel: "Verhältnis: Formular geöffnet → Anfrage abgesendet. Niedrige Conversion = Formular zu komplex.",
        ttSources: "Woher deine Besucher kommen: direkt eingegeben, Google, Social Media, andere Websites.",
        ttCountries: "Aus welchen Ländern die Besucher stammen (aus Spracheinstellung des Browsers).",
        ttUTM: "Traffic aus bezahlten Kampagnen. utm_source = Plattform, utm_medium = Kanal, utm_campaign = Kampagnenname.",
        ttCTA: "Klicks auf deine Preispaket-Buttons. Zeigt welche Pakete das meiste Interesse wecken.",
        ttTopPages: "Die meistbesuchten Seiten im Zeitraum. Zeigt welche Inhalte Besucher am meisten ansehen.",
    },
    en: {
        brand: "PALMER", brandSub: "Analytics",
        updatedAt: "Updated", refresh: "Refresh", logout: "Logout",
        last7: "Last 7 days", last30: "Last 30 days", last90: "Last 90 days",
        loading: "Loading data…", noData: "No data available yet",
        secOverview: "Overview", secTraffic: "Traffic Trend",
        secDevices: "Devices & Browsers", secBehavior: "User Behavior",
        secAcquisition: "Traffic Sources", secUTM: "UTM Campaigns",
        secConversions: "Conversions & CTAs", secEvents: "All Events",
        pageviews: "Pageviews", sessions: "Unique Sessions",
        avgDuration: "Avg. Duration", bounceRate: "Bounce Rate",
        pagesPerSession: "Pages / Session", topEvent: "Top Event",
        subPageviews: "Total in period", subSessions: "Individual visitors",
        subDuration: "Average per session", subBounce: "Sessions with 1 page only",
        subPages: "Avg. pages per visit", subEvent: "times triggered",
        chartPageviews: "Pageviews per day",
        chartDevices: "Device type", chartBrowser: "Browser", chartOS: "Operating System",
        chartNewReturn: "New vs. Returning", chartScroll: "Scroll Depth",
        chartFormFunnel: "Form Conversion",
        chartSources: "Traffic Sources", chartCountries: "Countries",
        chartCTA: "CTA Clicks", chartTopPages: "Top Pages",
        funnelOpened: "Form opened", funnelSent: "Request submitted",
        funnelRate: "Conversion Rate",
        utmSource: "Source", utmMedium: "Medium", utmCampaign: "Campaign",
        utmClicks: "Clicks",
        utmEmpty: "No UTM parameters received yet. Add utm_source, utm_medium and utm_campaign to your ad links.",
        eventLabel: "Event", countLabel: "Count", pageLabel: "Page", viewsLabel: "Views",
        noCtaData: "No clicks tracked yet",
        ttPageviews: "Total page views in the selected period. Every load is counted — including multiple visits by the same person.",
        ttSessions: "Number of unique visits. Each session = one person who visited your site.",
        ttDuration: "Average time a visitor spends on the site. Calculated from 'pageleave' events.",
        ttBounce: "Percentage of visitors who leave after viewing only one page. Lower is better (< 60% is good).",
        ttPagesPerSession: "How many pages a visitor views on average per visit. Higher = more interest.",
        ttTopEvent: "The most frequently triggered tracking event in the selected period.",
        ttLineChart: "Daily pageview development. Shows traffic trends and helps evaluate ad campaigns over time.",
        ttDevices: "Breakdown by device type: Desktop, Mobile, or Tablet. Important for design decisions.",
        ttBrowser: "Which browsers your visitors use. Important for compatibility decisions.",
        ttOS: "Which operating systems your visitors use.",
        ttNewReturn: "First-time visitors (New) vs. people who already know your site. Many new = good reach.",
        ttScroll: "How far visitors scroll down. 100% = page fully read. Shows where users drop off.",
        ttFormFunnel: "Ratio: form opened → request submitted. Low conversion = form too complex.",
        ttSources: "Where your visitors come from: direct, Google, social media, other websites.",
        ttCountries: "Which countries visitors come from (based on browser language setting).",
        ttUTM: "Traffic from paid campaigns. utm_source = platform, utm_medium = channel, utm_campaign = campaign name.",
        ttCTA: "Clicks on your pricing package buttons. Shows which packages generate the most interest.",
        ttTopPages: "Most visited pages in the period. Shows which content visitors engage with most.",
    },
    be: {
        brand: "ПАЛМЕР", brandSub: "Аналітыка",
        updatedAt: "Абноўлена", refresh: "Абнавіць", logout: "Выйсці",
        last7: "Апошнія 7 дзён", last30: "Апошнія 30 дзён", last90: "Апошнія 90 дзён",
        loading: "Загрузка дадзеных…", noData: "Даных пакуль няма",
        secOverview: "Агляд", secTraffic: "Дынаміка трафіку",
        secDevices: "Прылады і браўзеры", secBehavior: "Паводзіны карыстальнікаў",
        secAcquisition: "Крыніцы трафіку", secUTM: "UTM Кампаніі",
        secConversions: "Канверсіі і CTA", secEvents: "Усе падзеі",
        pageviews: "Прагляды", sessions: "Унікальныя сесіі",
        avgDuration: "Сяр. час", bounceRate: "Адмовы",
        pagesPerSession: "Старонак / сесія", topEvent: "Топ падзея",
        subPageviews: "Усяго за перыяд", subSessions: "Індывідуальныя наведвальнікі",
        subDuration: "Сярэдняе за сесію", subBounce: "Сесіі з 1 старонкай",
        subPages: "Сяр. старонак за наведванне", subEvent: "разоў выкліканы",
        chartPageviews: "Прагляды за дзень",
        chartDevices: "Тып прылады", chartBrowser: "Браўзер", chartOS: "Аперацыйная сістэма",
        chartNewReturn: "Новыя і вяртаючыяся", chartScroll: "Глыбіня пракруткі",
        chartFormFunnel: "Канверсія формы",
        chartSources: "Крыніцы трафіку", chartCountries: "Краіны",
        chartCTA: "Кліканні CTA", chartTopPages: "Топ старонкі",
        funnelOpened: "Форма адкрыта", funnelSent: "Запыт адпраўлены",
        funnelRate: "Канверсія",
        utmSource: "Крыніца", utmMedium: "Канал", utmCampaign: "Кампанія",
        utmClicks: "Кліканні",
        utmEmpty: "UTM-параметры яшчэ не атрыманы. Дадайце utm_source, utm_medium і utm_campaign да спасылак рэкламы.",
        eventLabel: "Падзея", countLabel: "Колькасць", pageLabel: "Старонка", viewsLabel: "Прагляды",
        noCtaData: "Кліканні яшчэ не зафіксаваны",
        ttPageviews: "Агульная колькасць прагляданняў за перыяд. Улічваецца кожны загрузка, у тым ліку паўторныя наведванні.",
        ttSessions: "Колькасць унікальных наведванняў. Кожная сесія = адна асоба, якая наведала сайт.",
        ttDuration: "Сярэдні час, які наведвальнік праводзіць на сайце. Вылічваецца з падзей 'pageleave'.",
        ttBounce: "Працэнт наведвальнікаў, якія пакідаюць сайт пасля адной старонкі. Менш — лепш (< 60% добра).",
        ttPagesPerSession: "Колькі старонак наведвальнік прагледжвае за адно наведванне. Больш = больш зацікаўленасці.",
        ttTopEvent: "Найчасцей выкліканая падзея адсочвання за абраны перыяд.",
        ttLineChart: "Штодзённае развіццё прагляданняў. Паказвае тэндэнцыі трафіку і дапамагае ацаніць рэкламныя кампаніі.",
        ttDevices: "Разбіўка па тыпу прылады: Настольны, Мабільны або Планшэт. Важна для рашэнняў па дызайне.",
        ttBrowser: "Якія браўзеры выкарыстоўваюць вашы наведвальнікі.",
        ttOS: "Якія аперацыйныя сістэмы выкарыстоўваюць вашы наведвальнікі.",
        ttNewReturn: "Першасныя наведвальнікі (Новыя) супраць вяртаючыхся. Шмат новых = добры ахоп.",
        ttScroll: "Як далёка наведвальнікі пракручваюць старонку. 100% = цалкам прачытана. Паказвае дзе адыходзяць.",
        ttFormFunnel: "Суадносіны: форма адкрыта → запыт адпраўлены. Нізкая канверсія = форма занадта складаная.",
        ttSources: "Адкуль прыходзяць наведвальнікі: напрамую, Google, сацыяльныя сеткі, іншыя сайты.",
        ttCountries: "З якіх краін прыходзяць наведвальнікі (з моўных налад браўзера).",
        ttUTM: "Трафік з платных кампаній. utm_source = платформа, utm_medium = канал, utm_campaign = назва.",
        ttCTA: "Кліканні па кнопках цэнавых пакетаў. Паказвае якія пакеты выклікаюць найбольшую цікавасць.",
        ttTopPages: "Найбольш наведваныя старонкі за перыяд. Паказвае які кантэнт цікавіць наведвальнікаў больш за ўсё.",
    },
} as const;

export type TKeys = keyof typeof T.de;

// ── Context ──────────────────────────────────────────────────────────────────

interface I18nCtx {
    locale:    Locale;
    setLocale: (l: Locale) => void;
    t:         Record<TKeys, string>;
}

const DashboardI18nContext = createContext<I18nCtx>({
    locale: "de", setLocale: () => {}, t: T.de,
});

export function DashboardI18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("de");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("pda_locale") as Locale | null;
            if (saved && (saved === "de" || saved === "en" || saved === "be")) {
                setLocaleState(saved);
            }
        } catch { /* SSR / private browsing */ }
    }, []);

    function setLocale(l: Locale) {
        setLocaleState(l);
        try { localStorage.setItem("pda_locale", l); } catch { /* silent */ }
    }

    return (
        <DashboardI18nContext.Provider value={{ locale, setLocale, t: T[locale] }}>
            {children}
        </DashboardI18nContext.Provider>
    );
}

export function useT() {
    return useContext(DashboardI18nContext);
}

// ── Language Switcher ────────────────────────────────────────────────────────

const LOCALES: { code: Locale; label: string }[] = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
    { code: "be", label: "BE" },
];

export function LanguageSwitcher() {
    const { locale, setLocale } = useContext(DashboardI18nContext);

    return (
        <Box display="flex" alignItems="center" gap={0.5}>
            {LOCALES.map(({ code, label }) => (
                <button
                    key={code}
                    onClick={() => setLocale(code)}
                    style={{
                        background:   locale === code ? "rgba(255,255,255,0.15)" : "transparent",
                        border:       locale === code ? "1px solid rgba(255,255,255,0.45)" : "1px solid transparent",
                        color:        locale === code ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                        fontFamily:   "monospace",
                        fontSize:     "10px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                        padding:      "3px 9px",
                        cursor:       "pointer",
                        transition:   "all 0.2s",
                        borderRadius: 0,
                    }}
                    onMouseEnter={e => {
                        if (locale !== code)
                            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
                    }}
                    onMouseLeave={e => {
                        if (locale !== code)
                            (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)";
                    }}
                >
                    {label}
                </button>
            ))}
        </Box>
    );
}
