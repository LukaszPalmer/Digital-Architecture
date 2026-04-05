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
        users: "Users", newUsers: "New Users", returningUsers: "Returning Users",
        sessions: "Sessions", pageviews: "Pageviews",
        avgDuration: "Ø Session-Dauer", bounceRate: "Bounce Rate",
        pagesPerSession: "Seiten / Session", topEvent: "Top Event",
        // ── KPI Sub ──
        subUsers: "Eindeutige Personen im Zeitraum",
        subNewUsers: "Erstmalige Besucher",
        subReturningUsers: "Bekannte Besucher (wiedergekehrt)",
        subSessions: "Gesamte Sitzungen im Zeitraum",
        subPageviews: "Gesamte Seitenaufrufe", subDuration: "Ø pro Sitzung",
        subBounce: "Sitzungen mit nur 1 Seite",
        subPages: "Ø Seiten je Sitzung", subEvent: "mal ausgelöst",
        // ── Charts ──
        chartPageviews: "Pageviews pro Tag",
        chartDevices: "Gerätetyp", chartBrowser: "Browser", chartOS: "Betriebssystem",
        chartNewReturn: "New vs. Returning Users", chartScroll: "Scroll-Tiefe",
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
        ttUsers: "Eindeutige Personen im Zeitraum — gemessen per anonymer User-ID (persistenter Cookie). Kehrt dieselbe Person 20x zurück, zählt sie als 1 User.",
        ttNewUsers: "Personen, die die Website im Zeitraum zum ersten Mal besucht haben.",
        ttReturningUsers: "Personen, die die Website bereits früher besucht haben und wiedergekehrt sind.",
        ttSessions: "Gesamtanzahl der Sitzungen im Zeitraum. Eine Person kann mehrere Sitzungen erzeugen.",
        ttPageviews: "Gesamtanzahl der Seitenaufrufe im Zeitraum. Mehrere Aufrufe derselben Person werden mitgezählt.",
        ttDuration: "Durchschnittliche Dauer einer Sitzung. Berechnet aus 'pageleave'-Events mit gemessener Verweildauer.",
        ttBounce: "Anteil der Sitzungen, bei denen nur eine Seite aufgerufen wurde. Niedriger ist besser (< 60% ist gut).",
        ttPagesPerSession: "Wie viele Seiten pro Sitzung durchschnittlich aufgerufen werden. Höher = mehr Engagement.",
        ttTopEvent: "Das am häufigsten ausgelöste Tracking-Event im gewählten Zeitraum.",
        ttLineChart: "Tägliche Pageview-Entwicklung. Zeigt Traffic-Trends und hilft Werbekampagnen zeitlich auszuwerten.",
        ttDevices: "Aufschlüsselung nach Endgerät — pro eindeutigem User, nicht pro Seitenaufruf.",
        ttBrowser: "Welche Browser deine Nutzer verwenden — pro eindeutigem User.",
        ttOS: "Welche Betriebssysteme deine Nutzer nutzen — pro eindeutigem User.",
        ttNewReturn: "Erstbesucher (New Users) vs. Wiederkehrende (Returning Users) — dedupliziert per User-ID.",
        ttScroll: "Wie weit Besucher nach unten scrollen. 100% = Seite vollständig gelesen. Zeigt wo Nutzer abspringen.",
        ttFormFunnel: "Verhältnis: Formular geöffnet → Anfrage abgesendet. Niedrige Conversion = Formular zu komplex.",
        ttSources: "Woher deine Nutzer kommen — dedupliziert per User-ID: direkt, Google, Social Media, andere Websites.",
        ttCountries: "Aus welchen Ländern die Nutzer stammen (aus Spracheinstellung des Browsers) — pro eindeutigem User.",
        ttUTM: "Traffic aus bezahlten Kampagnen. utm_source = Plattform, utm_medium = Kanal, utm_campaign = Kampagnenname.",
        ttCTA: "Klicks auf deine Preispaket-Buttons. Zeigt welche Pakete das meiste Interesse wecken.",
        ttTopPages: "Die meistbesuchten Seiten im Zeitraum — nach Seitenaufrufen sortiert.",
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
        users: "Users", newUsers: "New Users", returningUsers: "Returning Users",
        sessions: "Sessions", pageviews: "Pageviews",
        avgDuration: "Avg. Session Duration", bounceRate: "Bounce Rate",
        pagesPerSession: "Pages / Session", topEvent: "Top Event",
        subUsers: "Unique people in period",
        subNewUsers: "First-time visitors",
        subReturningUsers: "Known visitors who came back",
        subSessions: "Total sessions in period",
        subPageviews: "Total page loads", subDuration: "Avg. per session",
        subBounce: "Sessions with 1 page only",
        subPages: "Avg. pages per session", subEvent: "times triggered",
        chartPageviews: "Pageviews per day",
        chartDevices: "Device type", chartBrowser: "Browser", chartOS: "Operating System",
        chartNewReturn: "New vs. Returning Users", chartScroll: "Scroll Depth",
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
        ttUsers: "Unique people in the period — identified by a persistent anonymous user ID (cookie). If the same person returns 20 times, they count as 1 user.",
        ttNewUsers: "People visiting the site for the first time in the selected period.",
        ttReturningUsers: "People who had visited before and came back during this period.",
        ttSessions: "Total number of sessions in the period. One person can generate multiple sessions.",
        ttPageviews: "Total page loads in the period. Includes repeated views by the same person.",
        ttDuration: "Average length of a session. Calculated from 'pageleave' events with measured time on page.",
        ttBounce: "Share of sessions where only one page was viewed. Lower is better (< 60% is good).",
        ttPagesPerSession: "Average pages viewed per session. Higher = more engagement.",
        ttTopEvent: "The most frequently triggered tracking event in the selected period.",
        ttLineChart: "Daily pageview trend. Shows traffic patterns and helps evaluate campaigns over time.",
        ttDevices: "Device breakdown — counted per unique user, not per pageview.",
        ttBrowser: "Browser usage — counted per unique user.",
        ttOS: "Operating system usage — counted per unique user.",
        ttNewReturn: "New Users (first visit) vs. Returning Users — deduplicated by persistent user ID.",
        ttScroll: "How far visitors scroll. 100% = fully read. Shows where users drop off.",
        ttFormFunnel: "Ratio: form opened → request submitted. Low conversion = form too complex.",
        ttSources: "Where your users come from — deduplicated per user ID: direct, Google, social media, other sites.",
        ttCountries: "Countries users come from (based on browser language) — per unique user.",
        ttUTM: "Traffic from paid campaigns. utm_source = platform, utm_medium = channel, utm_campaign = campaign name.",
        ttCTA: "Clicks on your pricing/CTA buttons. Shows which offers generate the most interest.",
        ttTopPages: "Most visited pages in the period — ranked by total pageviews.",
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
        users: "Карыстальнікі", newUsers: "Новыя карыстальнікі", returningUsers: "Вяртаючыяся",
        sessions: "Сесіі", pageviews: "Прагляды",
        avgDuration: "Сяр. час сесіі", bounceRate: "Адмовы",
        pagesPerSession: "Старонак / сесія", topEvent: "Топ падзея",
        subUsers: "Унікальныя асобы за перыяд",
        subNewUsers: "Першасныя наведвальнікі",
        subReturningUsers: "Вядомыя наведвальнікі, якія вярнуліся",
        subSessions: "Усяго сесій за перыяд",
        subPageviews: "Усяго загрузак старонак", subDuration: "Сяр. за сесію",
        subBounce: "Сесіі з 1 старонкай",
        subPages: "Сяр. старонак за сесію", subEvent: "разоў выкліканы",
        chartPageviews: "Прагляды за дзень",
        chartDevices: "Тып прылады", chartBrowser: "Браўзер", chartOS: "Аперацыйная сістэма",
        chartNewReturn: "Новыя і вяртаючыяся карыстальнікі", chartScroll: "Глыбіня пракруткі",
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
        ttUsers: "Унікальныя асобы за перыяд — вызначаюцца па ананімным ID (захоўваецца ў браўзеры). Калі адна асоба вяртаецца 20 разоў — гэта 1 карыстальнік.",
        ttNewUsers: "Асобы, якія наведалі сайт упершыню за абраны перыяд.",
        ttReturningUsers: "Асобы, якія ўжо наведвалі сайт раней і вярнуліся.",
        ttSessions: "Агульная колькасць сесій за перыяд. Адна асоба можа стварыць некалькі сесій.",
        ttPageviews: "Агульная колькасць загрузак старонак. Уключае паўторныя прагляды адной асобы.",
        ttDuration: "Сярэдняя працягласць сесіі. Вылічваецца з падзей 'pageleave'.",
        ttBounce: "Доля сесій, дзе была прагледжана толькі адна старонка. Менш — лепш (< 60% добра).",
        ttPagesPerSession: "Сярэдняя колькасць старонак за сесію. Больш = больш залучанасці.",
        ttTopEvent: "Найчасцей выкліканая падзея адсочвання за абраны перыяд.",
        ttLineChart: "Штодзённая дынаміка прагляданняў. Паказвае тэндэнцыі і дапамагае ацаніць кампаніі.",
        ttDevices: "Разбіўка па прыладзе — на аснове унікальных карыстальнікаў, не прагляданняў.",
        ttBrowser: "Браўзеры карыстальнікаў — на аснове унікальных карыстальнікаў.",
        ttOS: "Аперацыйныя сістэмы карыстальнікаў — на аснове унікальных карыстальнікаў.",
        ttNewReturn: "Новыя карыстальнікі (першы візіт) супраць вяртаючыхся — дэдублікацыя па ID.",
        ttScroll: "Як далёка наведвальнікі пракручваюць старонку. 100% = цалкам прачытана.",
        ttFormFunnel: "Суадносіны: форма адкрыта → запыт адпраўлены. Нізкая канверсія = форма занадта складаная.",
        ttSources: "Адкуль прыходзяць карыстальнікі — дэдублікацыя па ID: напрамую, Google, сацсеткі.",
        ttCountries: "З якіх краін прыходзяць карыстальнікі (з моўных налад браўзера) — на аснове унікальных карыстальнікаў.",
        ttUTM: "Трафік з платных кампаній. utm_source = платформа, utm_medium = канал, utm_campaign = назва.",
        ttCTA: "Кліканні па кнопках CTA. Паказвае якія прапановы выклікаюць найбольшую цікавасць.",
        ttTopPages: "Найбольш наведваныя старонкі за перыяд — па агульнай колькасці прагляданняў.",
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
