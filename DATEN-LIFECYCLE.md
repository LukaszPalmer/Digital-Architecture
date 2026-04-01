# Daten-Lifecycle & DSGVO Nachweis

---

## Was wird wie lange gespeichert?

| Collection        | Inhalt                              | Aufbewahrung   |
|-------------------|-------------------------------------|----------------|
| `pageviews`       | Rohe Analytics-Events (detailliert) | **30 Tage** → dann automatisch gelöscht |
| `daily_summaries` | Tägliche Zusammenfassung (~2 KB)    | **2 Jahre**    |
| `deletion_log`    | Nachweis jeder Löschung             | **Dauerhaft**  |

---

## Was passiert täglich um 03:00 Uhr?

Der Cron Job läuft automatisch:

1. Aggregiert die Daten von gestern → speichert als `DailySummary`
2. Schreibt einen Eintrag in `deletion_log` — dokumentiert die bevorstehende TTL-Löschung

---

## Wenn jemand fragt "Hast du meine Daten gelöscht?"

MongoDB Atlas öffnen → Collection `deletion_log`

Dort steht für jede Löschung:
- **Wann** wurde gelöscht (`deletedAt`)
- **Wie viele** Datensätze (`deletedCount`)
- **Warum** (`reason`):
  - `consent_withdrawn` — Nutzer hat Cookies abgelehnt/widerrufen
  - `ttl_auto` — Automatische Löschung nach 30 Tagen

Das ist der rechtliche Nachweis nach **Art. 17 DSGVO** (Recht auf Löschung).

---

## Vercel Cron — einmalige Einrichtung

In Vercel → Settings → Environment Variables eintragen:

```
CRON_SECRET = 8eRKbwf4GpXOaZaLzaf88D9lQoAWyLN11cGObXRTN7o=
```

Der Cron-Endpunkt: `palmer-digital.de/api/cron/aggregate`

---

## Speicherkosten MongoDB Atlas (Schätzung)

| Szenario         | Rohdaten (30 Tage) | Daily Summaries (2 Jahre) | Gesamt     |
|------------------|--------------------|---------------------------|------------|
| 100 Besucher/Tag | ~15 MB             | ~1.5 MB                   | ~17 MB     |
| 500 Besucher/Tag | ~75 MB             | ~1.5 MB                   | ~77 MB     |
| 1.000 Besucher/Tag | ~150 MB          | ~1.5 MB                   | ~152 MB    |

MongoDB Atlas Free Tier (M0) hat **512 MB** — reicht für bis zu ~3.000 Besucher/Tag.
