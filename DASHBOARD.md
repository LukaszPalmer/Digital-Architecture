# Dashboard — Palmer Digital

Dies ist die Kurz-Dokumentation zu Deinem Admin-Dashboard. Hier findest Du,
was wo gespeichert wird, welche Nummern fortlaufend sind und wie Du zurück-
setzen kannst, falls die Testdaten raus sollen.

## Aufbau

### Tabs unter `/admin/documents`

1. **Kunden** — Kundenstamm (Firma, Name, Adresse, Kontakt, Notizen)
2. **Rechnungen** — Ausgestellte Rechnungen inkl. Status (Entwurf/Versendet/Bezahlt/Überfällig/Storniert)
3. **Angebote** — Angebote mit Gültigkeitsdatum
4. **Auftragsbestätigungen** — Auftragsbestätigungen

Der Tab „Vorlagen" wurde entfernt, da er nicht benötigt wird.

### Weitere Admin-Seiten

- `/admin/dashboard` — Statistiken / KPIs
- `/admin/documents` — Rechnungswesen (siehe oben)
- `/admin/login` — Login-Seite

## Fortlaufende Nummern

Alle Nummern laufen pro Jahr automatisch hoch und bleiben dauerhaft an dem
erstellten Datensatz hängen (sie ändern sich also nie mehr, nachdem ein
Kunde/Dokument angelegt wurde).

| Bereich               | Präfix | Beispiel        |
| --------------------- | ------ | --------------- |
| Kunden                | `KD-`  | `KD-2026-0001`  |
| Rechnungen            | `RE-`  | `RE-2026-0001`  |
| Angebote              | `AN-`  | `AN-2026-0001`  |
| Auftragsbestätigungen | `AB-`  | `AB-2026-0001`  |

Die Zähler werden jedes Jahr automatisch auf `0001` zurückgesetzt (üblicher
deutscher Geschäftsstandard).

## Wo werden die Daten gespeichert?

MongoDB (die Verbindung steckt in `MONGODB_URI` in der `.env` des Frontends).

| Collection      | Inhalt                                                 |
| --------------- | ------------------------------------------------------ |
| `customers`     | Kunden (Name, Firma, Adresse, E-Mail, Telefon, Notizen) |
| `documents`     | Rechnungen, Angebote, Auftragsbestätigungen             |
| `counters`      | Die fortlaufenden Zähler (pro Typ und Jahr)             |
| `pageviews`     | Analytics Page-Views                                    |
| `dailysummaries`| Tagesaggregation für das Dashboard                      |
| `deletionlogs`  | DSGVO-konformes Löschprotokoll                          |

## Code-Struktur im Frontend

```
frontend/src/
├── app/
│   ├── admin/
│   │   ├── dashboard/        ← KPI-Dashboard
│   │   ├── documents/        ← Rechnungswesen
│   │   └── login/            ← Admin-Login
│   └── api/
│       └── documents/
│           ├── customers/    ← CRUD für Kunden
│           ├── docs/         ← CRUD für Dokumente
│           └── reset/        ← Reset-Endpoint (siehe unten)
├── components/admin/documents/
│   ├── CustomersTab.tsx      ← Orchestrierung, deutlich kleiner als früher
│   ├── DocumentsTab.tsx
│   ├── DocumentFormDialog.tsx
│   ├── ComposeEmailDialog.tsx
│   ├── SendEmailDialog.tsx
│   ├── EmailPreview.tsx
│   └── customers/            ← Aufgeteilte Kunden-Komponenten
│       ├── types.ts          ← Typen, Konstanten, Helfer
│       ├── StatCard.tsx
│       ├── CustomerProfile.tsx
│       ├── CustomerTable.tsx
│       ├── CustomerFormDialog.tsx
│       └── InvoiceStatusDialog.tsx
└── lib/
    ├── db/models/
    │   ├── Customer.ts
    │   ├── Document.ts
    │   └── Counter.ts        ← Hier kommen die fortlaufenden Nummern her
    ├── email/template.ts     ← HTML-Template der E-Mails (heller Header/Footer)
    └── pdf/generator.ts      ← PDF-Erzeugung
```

## Nummern zurücksetzen

Falls Du die ganzen Testdaten rausnehmen möchtest und die Nummern wieder
bei 0001 starten sollen, gibt es einen Reset-Endpoint (nur eingeloggt nutzbar):

```bash
# Alles zurücksetzen (Kunden + Dokumente + Zähler)
curl -X POST https://palmer-digital.de/api/documents/reset \
     -H "Cookie: <dein-auth-cookie>"

# Nur die Zähler zurücksetzen
curl -X POST "https://palmer-digital.de/api/documents/reset?scope=counters"

# Nur die Dokumente löschen (Kunden bleiben, Zähler starten neu)
curl -X POST "https://palmer-digital.de/api/documents/reset?scope=docs"

# Nur die Kunden löschen
curl -X POST "https://palmer-digital.de/api/documents/reset?scope=customers"
```

Am einfachsten ist es, den Aufruf im Browser zu machen, wenn Du bereits im
Admin eingeloggt bist — z. B. über die DevTools-Konsole:

```js
await fetch("/api/documents/reset", { method: "POST" }).then(r => r.json())
```

## E-Mails

Versand läuft über **Resend** (`RESEND_API_KEY` in `.env`). Das Template
befindet sich in `frontend/src/lib/email/template.ts`.

Header und Footer der E-Mail sind jetzt **hell** (statt dunkel-navy), damit
das Logo gut sichtbar ist und der Kontrast stimmt.

## Allgemeines

- Kleinunternehmerregelung nach § 19 UStG ist aktiv — keine USt wird
  berechnet / ausgewiesen.
- Firma: **Palmer Digital** (nicht mehr "Palmer Digital Architecture").
- Die Navigations-Labels im Rechnungswesen-Header lauten **Palmer Digital /
  Rechnungswesen**.
