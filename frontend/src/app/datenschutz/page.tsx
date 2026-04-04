// src/app/datenschutz/page.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Inhalt: IT-Recht Kanzlei Generator — Stand 04.04.2026

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Datenschutz — Palmer Digital",
    description: "Datenschutzerklärung von Palmer Digital gemäß DSGVO.",
    robots: { index: false, follow: false },
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="mb-14">
            <span className="block text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#001F3F] uppercase mb-5">
                {label}
            </span>
            <div className="border-l-2 border-[#001F3F] pl-6 space-y-4 text-[14.5px] text-[#000000]/65 leading-relaxed">
                {children}
            </div>
        </div>
    );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <p className="text-[13px] font-black tracking-[0.15em] uppercase text-[#000000] mb-4">{title}</p>
            <div className="space-y-3 text-[14.5px] text-[#000000]/65 leading-relaxed">
                {children}
            </div>
        </div>
    );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001F3F] hover:text-[#000000] transition-colors duration-200 underline underline-offset-2 break-all"
        >
            {children}
        </a>
    );
}

export default function DatenschutzPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">

            {/* ── HERO ── */}
            <section className="border-b border-[#000000] pt-36 pb-16 md:pt-48 md:pb-24">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase mb-8">
                        [ Rechtliches ]
                    </span>
                    <h1 className="text-[clamp(3rem,7vw,6rem)] font-black text-[#000000] leading-[0.92] tracking-[-0.025em] uppercase">
                        Datenschutz&shy;erklärung
                    </h1>
                </div>
            </section>

            {/* ── CONTENT ── */}
            <section className="py-16 md:py-24 lg:py-32">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <div className="max-w-2xl">

                        {/* 1 */}
                        <Section label="1) Einleitung und Kontaktdaten des Verantwortlichen">
                            <p>
                                <strong className="text-[#000000]">1.1</strong>{" "}
                                Wir freuen uns, dass Sie unsere Website besuchen, und bedanken uns für Ihr Interesse.
                                Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten
                                bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten,
                                mit denen Sie persönlich identifiziert werden können.
                            </p>
                            <p>
                                <strong className="text-[#000000]">1.2</strong>{" "}
                                Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
                                Datenschutz-Grundverordnung (DSGVO) ist Lukasz Palmer, Palmer Digital,
                                Lippestraße 1, 40221 Düsseldorf, Deutschland, Tel.: 017673684429,
                                E-Mail: kontakt@palmer-digital.de. Der für die Verarbeitung von
                                personenbezogenen Daten Verantwortliche ist diejenige natürliche oder
                                juristische Person, die allein oder gemeinsam mit anderen über die Zwecke
                                und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                            </p>
                        </Section>

                        {/* 2 */}
                        <Section label="2) Datenerfassung beim Besuch unserer Website">
                            <p>
                                <strong className="text-[#000000]">2.1</strong>{" "}
                                Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht
                                registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur
                                solche Daten, die Ihr Browser an den Seitenserver übermittelt (sog. „Server-Logfiles").
                                Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns
                                technisch erforderlich sind, um Ihnen die Website anzuzeigen:
                            </p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                <li>Unsere besuchte Website</li>
                                <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                                <li>Menge der gesendeten Daten in Byte</li>
                                <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                                <li>Verwendeter Browser</li>
                                <li>Verwendetes Betriebssystem</li>
                                <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                            </ul>
                            <p>
                                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
                                berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität
                                unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet
                                nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich
                                zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                            </p>
                            <p>
                                <strong className="text-[#000000]">2.2</strong>{" "}
                                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                                personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen
                                oder Anfragen an den Verantwortlichen) eine SSL- bzw. TLS-Verschlüsselung.
                                Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://" und
                                dem Schloss-Symbol in Ihrer Browserzeile erkennen.
                            </p>
                        </Section>

                        {/* 3 */}
                        <Section label="3) Hosting & Content-Delivery-Network">
                            <SubSection title="3.1 Vercel (Hosting)">
                                <p>
                                    Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen
                                    wir das System des folgenden Anbieters: Vercel Inc., 340 S Lemon Ave #4133,
                                    Walnut, CA 91789, USA
                                </p>
                                <p>
                                    Sämtliche auf unserer Website erhobenen Daten werden auf den Servern des
                                    Anbieters verarbeitet. Wir haben mit dem Anbieter einen
                                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer
                                    Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
                                </p>
                                <p>
                                    Für Datenübermittlungen in die USA hat sich der Anbieter dem
                                    EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das
                                    auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die
                                    Einhaltung des europäischen Datenschutzniveaus sicherstellt.
                                </p>
                            </SubSection>
                            <SubSection title="3.2 Vercel (CDN)">
                                <p>
                                    Wir nutzen ein Content Delivery Network des folgenden Anbieters: Vercel Inc.,
                                    440 N Barranca Avenue #4133, Covina, CA 91723, USA
                                </p>
                                <p>
                                    Dieser Dienst ermöglicht uns, große Mediendateien wie Grafiken, Seiteninhalte
                                    oder Skripte über ein Netz regional verteilter Server schneller auszuliefern.
                                    Die Verarbeitung erfolgt zur Wahrung unseres berechtigten Interesses an der
                                    Verbesserung der Stabilität und Funktionalität unserer Website gem.
                                    Art. 6 Abs. 1 lit. f DSGVO. Wir haben mit dem Anbieter einen
                                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer
                                    Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
                                </p>
                                <p>
                                    Für Datenübermittlungen in die USA hat sich der Anbieter dem
                                    EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das
                                    auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die
                                    Einhaltung des europäischen Datenschutzniveaus sicherstellt.
                                </p>
                            </SubSection>
                        </Section>

                        {/* 4 */}
                        <Section label="4) Cookies">
                            <p>
                                Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung
                                bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also kleine
                                Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise werden diese
                                Cookies nach Schließen des Browsers automatisch wieder gelöscht
                                (sog. „Session-Cookies"), teilweise verbleiben diese Cookies länger auf Ihrem
                                Endgerät und ermöglichen das Speichern von Seiteneinstellungen
                                (sog. „persistente Cookies"). Im letzteren Fall können Sie die Speicherdauer
                                der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.
                            </p>
                            <p>
                                Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten
                                verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO
                                entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im
                                Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur
                                Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität
                                der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des
                                Seitenbesuchs.
                            </p>
                            <p>
                                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
                                informiert werden und einzeln über deren Annahme entscheiden oder die Annahme
                                von Cookies für bestimmte Fälle oder generell ausschließen können.
                            </p>
                            <p>
                                Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität
                                unserer Website eingeschränkt sein kann.
                            </p>
                        </Section>

                        {/* 5 */}
                        <Section label="5) Kontaktaufnahme">
                            <p>
                                Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail)
                                werden personenbezogene Daten erhoben. Welche Daten im Falle der Nutzung eines
                                Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular
                                ersichtlich. Diese Daten werden ausschließlich zum Zweck der Beantwortung
                                Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene
                                technische Administration gespeichert und verwendet.
                            </p>
                            <p>
                                Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes
                                Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO.
                                Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist
                                zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
                                Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht.
                                Dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der
                                betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen
                                Aufbewahrungspflichten entgegenstehen.
                            </p>
                        </Section>

                        {/* 6 */}
                        <Section label="6) Webanalysedienste">
                            <SubSection title="Google Analytics 4">
                                <p>
                                    Diese Website benutzt Google Analytics 4, einen Webanalysedienst der
                                    Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5,
                                    Irland („Google"), der eine Analyse Ihrer Benutzung unserer Website ermöglicht.
                                </p>
                                <p>
                                    Standardmäßig werden beim Besuch der Website durch Google Analytics 4
                                    keine Cookies verwendet, es sei denn, Sie stimmen Cookies ausdrücklich zu.
                                    Stattdessen werden Informationen über Ihr Nutzungsverhalten durch sog. Pings
                                    (kleine Datenpakete, die an den Host eines Endgerätes versendet werden)
                                    erhoben und verarbeitet. Zum Umfang dieser Informationen gehört auch Ihre
                                    IP-Adresse, die allerdings von Google um die letzten Ziffern gekürzt wird,
                                    um eine direkte Personenbeziehbarkeit auszuschließen.
                                </p>
                                <p>
                                    Die Informationen werden an Server von Google übertragen und dort
                                    weiterverarbeitet. Dabei sind auch Übermittlungen an Google LLC mit Sitz
                                    in den USA möglich. Google nutzt die erhobenen Informationen in unserem
                                    Auftrag, um Ihre Nutzung der Website auszuwerten, Reports über die
                                    Websiteaktivitäten für uns zusammenzustellen und um weitere mit der
                                    Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu
                                    erbringen. Die im Rahmen von Google Analytics von Ihrem Browser
                                    übermittelte und gekürzte IP-Adresse wird nicht mit anderen Daten von
                                    Google zusammengeführt. Die im Rahmen der Nutzung von Google Analytics 4
                                    erhobenen Daten werden für die Dauer von zwei Monaten gespeichert und
                                    anschließend gelöscht.
                                </p>
                                <p>
                                    Alle vorstehend beschriebenen Verarbeitungen, einschließlich der
                                    Datenübermittlung durch „Pings" und das mögliche Setzen von
                                    Google Analytics-Cookies, erfolgen nur, wenn Sie uns hierfür Ihre
                                    ausdrückliche Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO erteilt haben.
                                </p>
                                <p>
                                    Ohne Ihre Einwilligung unterbleibt der Einsatz von Google Analytics 4
                                    während Ihres Seitenbesuchs. Sie können Ihre erteilte Einwilligung mit
                                    Wirkung für die Zukunft jederzeit widerrufen. Um Ihr Widerrufsrecht
                                    auszuüben, deaktivieren Sie bitte diesen Dienst über das auf der Website
                                    bereitgestellte „Cookie-Consent-Tool".
                                </p>
                                <p>
                                    Wir haben mit Google einen Auftragsverarbeitungsvertrag geschlossen, der
                                    den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
                                    unberechtigte Weitergabe an Dritte untersagt.
                                </p>
                                <p>
                                    Weitere rechtliche Hinweise zu Google Analytics 4 finden Sie unter{" "}
                                    <ExternalLink href="https://business.safety.google/intl/de/privacy/">
                                        https://business.safety.google/intl/de/privacy/
                                    </ExternalLink>
                                    ,{" "}
                                    <ExternalLink href="https://policies.google.com/privacy?hl=de&gl=de">
                                        https://policies.google.com/privacy?hl=de&gl=de
                                    </ExternalLink>
                                    {" "}und unter{" "}
                                    <ExternalLink href="https://policies.google.com/technologies/partner-sites">
                                        https://policies.google.com/technologies/partner-sites
                                    </ExternalLink>
                                </p>
                                <p>
                                    <strong className="text-[#000000]">Demografische Merkmale</strong>
                                    <br />
                                    Google Analytics 4 nutzt die spezielle Funktion „demografische Merkmale"
                                    und kann darüber Statistiken erstellen, die Aussagen über das Alter,
                                    Geschlecht und Interessen von Seitenbesuchern treffen. Dies geschieht
                                    durch die Analyse von Werbung und Informationen von Drittanbietern.
                                    Dadurch können Zielgruppen für Marketingaktivitäten identifiziert werden.
                                    Die gesammelten Daten können jedoch keiner bestimmten Person zugeordnet
                                    werden und werden nach einer Speicherung für die Dauer von zwei Monaten gelöscht.
                                </p>
                                <p>
                                    <strong className="text-[#000000]">Google Signals</strong>
                                    <br />
                                    Als Erweiterung zu Google Analytics 4 kann auf dieser Website Google Signals
                                    verwendet werden, um geräteübergreifende Berichte erstellen zu lassen. Wenn
                                    Sie personalisierte Anzeigen aktiviert haben und Ihre Geräte mit Ihrem
                                    Google-Konto verknüpft haben, kann Google vorbehaltlich Ihrer Einwilligung
                                    zur Nutzung von Google Analytics gem. Art. 6 Abs. 1 lit. a DSGVO Ihr
                                    Nutzungsverhalten geräteübergreifend analysieren und Datenbankmodelle,
                                    unter anderem zu geräteübergreifenden Conversions, erstellen. Wir erhalten
                                    keine personenbezogenen Daten von Google, sondern nur Statistiken. Wenn Sie
                                    die geräteübergreifende Analyse stoppen möchten, können Sie die Funktion
                                    „Personalisierte Werbung" in den Einstellungen Ihres Google-Kontos
                                    deaktivieren. Folgen Sie dazu den Anweisungen auf dieser Seite:{" "}
                                    <ExternalLink href="https://support.google.com/My-Ad-Center-Help/answer/12155764?hl=de">
                                        https://support.google.com/My-Ad-Center-Help/answer/12155764?hl=de
                                    </ExternalLink>
                                    <br />
                                    Weitere Informationen zu Google Signals finden Sie unter:{" "}
                                    <ExternalLink href="https://support.google.com/analytics/answer/7532985?hl=de">
                                        https://support.google.com/analytics/answer/7532985?hl=de
                                    </ExternalLink>
                                </p>
                                <p>
                                    <strong className="text-[#000000]">UserIDs</strong>
                                    <br />
                                    Als Erweiterung zu Google Analytics 4 kann auf dieser Website die Funktion
                                    „UserIDs" verwendet werden. Wenn Sie in die Nutzung von Google Analytics 4
                                    gem. Art. 6 Abs. 1 lit. a DSGVO eingewilligt, ein Konto auf dieser Website
                                    eingerichtet haben und sich auf verschiedenen Geräten mit diesem Konto
                                    anmelden, können Ihre Aktivitäten, darunter auch Conversions,
                                    geräteübergreifend analysiert werden.
                                </p>
                                <p>
                                    Für Datenübermittlungen in die USA hat sich der Anbieter dem
                                    EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das
                                    auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die
                                    Einhaltung des europäischen Datenschutzniveaus sicherstellt.
                                </p>
                            </SubSection>
                        </Section>

                        {/* 7 */}
                        <Section label="7) Seitenfunktionalitäten">
                            <SubSection title="7.1 Google Meet">
                                <p>
                                    Für die Durchführung von Online-Meetings, Videokonferenzen und/oder
                                    Webinaren nutzen wir diesen Anbieter: Google Ireland Limited, Gordon House,
                                    4 Barrow St, Dublin, D04 E5W5, Irland
                                </p>
                                <p>
                                    Hierbei kann es auch zu einer Übermittlung an die Server der Google LLC.
                                    in den USA kommen. Der Anbieter verarbeitet unterschiedliche Daten, wobei
                                    der Umfang der verarbeiteten Daten davon abhängt, welche Daten Sie vor oder
                                    während der Teilnahme an einem Online-Meeting, einer Videokonferenz oder
                                    einem Webinar mitteilen. Es werden Ihre Daten als Kommunikationsteilnehmer
                                    verarbeitet und auf Servern des Anbieters gespeichert. Dies können
                                    insbesondere Ihre Anmeldedaten (Name, E-Mail-Adresse, Telefonnummer
                                    (optional) und Passwort) und Sitzungsdaten (Thema, Teilnehmer-IP-Adresse,
                                    Geräteinformationen, Beschreibung (optional)) sein.
                                </p>
                                <p>
                                    Darüber hinaus können Bild- und Tonbeiträge der Teilnehmer sowie
                                    Spracheingaben in Chats verarbeitet werden. Für die Verarbeitung von
                                    personenbezogenen Daten, die für die Erfüllung eines Vertrages mit Ihnen
                                    erforderlich sind (dies gilt auch für Verarbeitungsvorgänge, die zur
                                    Durchführung vorvertraglicher Maßnahmen erforderlich sind), dient
                                    Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Soweit Sie uns eine
                                    Einwilligung zur Verarbeitung Ihrer Daten erteilt haben, erfolgt die
                                    Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Eine erteilte
                                    Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                                    Im Übrigen ist Rechtsgrundlage für die Datenverarbeitung bei der
                                    Durchführung von Online-Meetings, Videokonferenzen oder Webinaren unser
                                    berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f DSGVO an der effektiven
                                    Durchführung des Online-Meetings, Webinars oder der Videokonferenz.
                                </p>
                                <p>
                                    Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen,
                                    der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
                                    unbefugte Weitergabe an Dritte untersagt.
                                </p>
                                <p>
                                    Für Datenübermittlungen in die USA hat sich der Anbieter dem
                                    EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das
                                    auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die
                                    Einhaltung des europäischen Datenschutzniveaus sicherstellt.
                                </p>
                                <p>
                                    Weitere Hinweise zu den Datenschutzbestimmungen von Google finden sich
                                    hier:{" "}
                                    <ExternalLink href="https://business.safety.google/intl/de/privacy/">
                                        https://business.safety.google/intl/de/privacy/
                                    </ExternalLink>
                                </p>
                            </SubSection>

                            <SubSection title="7.2 Bewerbungen per E-Mail">
                                <p>
                                    Auf unserer Website schreiben wir in einer gesonderten Rubrik aktuell
                                    vakante Stellen aus, auf die sich Interessenten per E-Mail an die
                                    bereitgestellte Kontaktadresse bewerben können.
                                </p>
                                <p>
                                    Die Bewerber müssen alle personenbezogenen Daten angeben, die für eine
                                    fundierte Beurteilung erforderlich sind, einschließlich allgemeiner
                                    Informationen wie Name, Anschrift und Kontaktmöglichkeiten, sowie
                                    leistungsbezogene Nachweise und gegebenenfalls gesundheitsbezogene Angaben.
                                    Einzelheiten zur Bewerbung sind der Stellenausschreibung zu entnehmen.
                                </p>
                                <p>
                                    Nach Eingang der Bewerbung per E-Mail werden die Daten ausschließlich zum
                                    Zwecke der Bewerbungsbearbeitung gespeichert und ausgewertet. Bei
                                    Rückfragen nutzen wir entweder die E-Mail-Adresse oder Telefonnummer des
                                    Bewerbers. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                                    lit. b DSGVO (bzw. § 26 Abs. 1 BDSG), in deren Sinne das Durchlaufen des
                                    Bewerbungsverfahrens als Arbeitsvertragsanbahnung gilt.
                                </p>
                                <p>
                                    Kommt es nicht zu einer Auswahl des Bewerbers oder zieht ein Bewerber
                                    seine Bewerbung vorzeitig zurück, werden dessen übermittelte Daten sowie
                                    sämtlicher elektronischer Schriftverkehr einschließlich der Bewerbungsmail
                                    nach einer entsprechenden Benachrichtigung spätestens nach 6 Monaten
                                    gelöscht.
                                </p>
                                <p>
                                    Im Falle einer erfolgreichen Bewerbung werden die zur Verfügung gestellten
                                    Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (bei Verarbeitung in
                                    Deutschland i.V.m. § 26 Abs. 1 BDSG) zum Zwecke der Durchführung des
                                    Beschäftigungsverhältnisses verarbeitet.
                                </p>
                            </SubSection>
                        </Section>

                        {/* 8 */}
                        <Section label="8) Tools und Sonstiges">
                            <SubSection title="Cookie-Consent-Tool">
                                <p>
                                    Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen für
                                    einwilligungspflichtige Cookies und cookie-basierte Anwendungen ein sog.
                                    „Cookie-Consent-Tool". Das „Cookie-Consent-Tool" wird Nutzern bei
                                    Seitenaufruf in Form einer interaktiven Benutzeroberfläche angezeigt, auf
                                    welcher sich per Häkchensetzung Einwilligungen für bestimmte Cookies
                                    und/oder cookie-basierte Anwendungen erteilen lassen. Hierbei werden durch
                                    den Einsatz des Tools alle einwilligungspflichtigen Cookies/Dienste nur dann
                                    geladen, wenn der jeweilige Nutzer entsprechende Einwilligungen per
                                    Häkchensetzung erteilt. So wird sichergestellt, dass nur im Falle einer
                                    erteilten Einwilligung derartige Cookies auf dem jeweiligen Endgerät des
                                    Nutzers gesetzt werden.
                                </p>
                                <p>
                                    Das Tool setzt technisch notwendige Cookies, um Ihre Cookie-Präferenzen zu
                                    speichern. Personenbezogene Nutzerdaten werden hierbei grundsätzlich nicht
                                    verarbeitet.
                                </p>
                                <p>
                                    Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung oder
                                    Protokollierung von Cookie-Einstellungen doch zur Verarbeitung
                                    personenbezogener Daten (wie etwa der IP-Adresse), erfolgt diese gemäß
                                    Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an
                                    einem rechtskonformen, nutzerspezifischen und nutzerfreundlichen
                                    Einwilligungsmanagement für Cookies und mithin an einer rechtskonformen
                                    Ausgestaltung unseres Internetauftritts.
                                </p>
                                <p>
                                    Weitere Rechtsgrundlage für die Verarbeitung ist ferner Art. 6 Abs. 1
                                    lit. c DSGVO. Wir unterliegen als Verantwortliche der rechtlichen
                                    Verpflichtung, den Einsatz technisch nicht notwendiger Cookies von der
                                    jeweiligen Nutzereinwilligung abhängig zu machen.
                                </p>
                            </SubSection>
                        </Section>

                        {/* 9 */}
                        <Section label="9) Rechte des Betroffenen">
                            <p>
                                <strong className="text-[#000000]">9.1</strong>{" "}
                                Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen
                                hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden
                                Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei für die
                                jeweiligen Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage
                                verwiesen wird:
                            </p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                <li>Auskunftsrecht gemäß Art. 15 DSGVO</li>
                                <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
                                <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
                                <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
                                <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO</li>
                                <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
                                <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO</li>
                                <li>Recht auf Beschwerde gemäß Art. 77 DSGVO</li>
                            </ul>
                            <p className="font-bold text-[#000000]">
                                <strong className="text-[#000000]">9.2</strong>{" "}
                                WIDERSPRUCHSRECHT
                            </p>
                            <p className="uppercase text-[13px] leading-relaxed">
                                Wenn wir im Rahmen einer Interessenabwägung Ihre personenbezogenen Daten
                                aufgrund unseres überwiegenden berechtigten Interesses verarbeiten, haben Sie
                                das jederzeitige Recht, aus Gründen, die sich aus Ihrer besonderen Situation
                                ergeben, gegen diese Verarbeitung Widerspruch mit Wirkung für die Zukunft
                                einzulegen.
                            </p>
                            <p className="uppercase text-[13px] leading-relaxed">
                                Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung
                                der betroffenen Daten. Eine Weiterverarbeitung bleibt aber vorbehalten, wenn
                                wir zwingende schutzwürdige Gründe für die Verarbeitung nachweisen können,
                                die Ihre Interessen, Grundrechte und Grundfreiheiten überwiegen, oder wenn
                                die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von
                                Rechtsansprüchen dient.
                            </p>
                            <p className="uppercase text-[13px] leading-relaxed">
                                Werden Ihre personenbezogenen Daten von uns verarbeitet, um Direktwerbung zu
                                betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung
                                Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung
                                einzulegen. Sie können den Widerspruch wie oben beschrieben ausüben.
                            </p>
                            <p className="uppercase text-[13px] leading-relaxed">
                                Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung
                                der betroffenen Daten zu Direktwerbezwecken.
                            </p>
                        </Section>

                        {/* 10 */}
                        <Section label="10) Dauer der Speicherung personenbezogener Daten">
                            <p>
                                Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der
                                jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig –
                                zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B.
                                handels- und steuerrechtliche Aufbewahrungsfristen).
                            </p>
                            <p>
                                Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer
                                ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die
                                betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.
                            </p>
                            <p>
                                Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen
                                rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der
                                Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese
                                Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie
                                nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind
                                und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung
                                fortbesteht.
                            </p>
                            <p>
                                Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6
                                Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr
                                Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn, wir können
                                zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
                                Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der
                                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                            </p>
                            <p>
                                Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische
                                Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte
                                personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für
                                die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr
                                notwendig sind.
                            </p>
                        </Section>

                        {/* Version */}
                        <div className="pt-10 border-t border-[#000000]/10">
                            <p className="text-[10px] font-mono text-[#000000]/30 tracking-[0.3em] uppercase">
                                Stand: 04.04.2026, 21:04:06 CET — IT-Recht Kanzlei
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BACK LINK ── */}
            <div className="border-t border-[#000000]/10 py-8">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[10.5px] font-mono font-bold tracking-[0.3em] uppercase text-[#000000]/40 hover:text-[#001F3F] transition-colors duration-200"
                    >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>

        </main>
    );
}
