# UTM Kampagnen — Tracking Guide

Wenn du eine Anzeige schaltest, hänge einfach den passenden UTM-Link ans Ende deiner URL.
Die Daten tauchen dann automatisch im Dashboard unter **UTM Kampagnen** auf.

---

## Basis-URL

```
https://palmer-digital.de
```

---

## UTM-Parameter

| Parameter       | Bedeutung                        | Beispiel              |
|-----------------|----------------------------------|-----------------------|
| `utm_source`    | Wo kommt der Klick her?          | google, instagram, linkedin |
| `utm_medium`    | Welcher Kanal?                   | cpc, social, email, banner |
| `utm_campaign`  | Name der Kampagne                | brand, retargeting, launch |

---

## Fertige Links zum Kopieren

### Google Ads
```
https://palmer-digital.de?utm_source=google&utm_medium=cpc&utm_campaign=brand
```

### Google Ads → direkt auf Kontakt
```
https://palmer-digital.de/?utm_source=google&utm_medium=cpc&utm_campaign=brand#contact
```

### Instagram Anzeige
```
https://palmer-digital.de?utm_source=instagram&utm_medium=social&utm_campaign=brand
```

### LinkedIn Anzeige
```
https://palmer-digital.de?utm_source=linkedin&utm_medium=social&utm_campaign=brand
```

### Facebook Anzeige
```
https://palmer-digital.de?utm_source=facebook&utm_medium=social&utm_campaign=brand
```

### E-Mail Newsletter
```
https://palmer-digital.de?utm_source=newsletter&utm_medium=email&utm_campaign=newsletter_april
```

### Retargeting Kampagne
```
https://palmer-digital.de?utm_source=google&utm_medium=cpc&utm_campaign=retargeting
```

---

## Spezifische Seiten verlinken

Füge einfach den Pfad vor dem `?` ein:

```
# Blog-Artikel
https://palmer-digital.de/blog?utm_source=linkedin&utm_medium=social&utm_campaign=content

# Direkt zur Preisseite
https://palmer-digital.de/?utm_source=google&utm_medium=cpc&utm_campaign=pricing#investment

# Direkt zum Kontaktformular mit vorausgewähltem Paket
https://palmer-digital.de/?paket=performance&utm_source=google&utm_medium=cpc&utm_campaign=brand#contact
```

---

## Kampagnen-Namen Konvention

Nutze immer **lowercase** und **keine Leerzeichen** (Unterstrich statt Leerzeichen):

| Kampagnentyp    | utm_campaign Wert           |
|-----------------|-----------------------------|
| Markenbekanntheit | `brand`                   |
| Retargeting     | `retargeting`               |
| Spezifisches Paket | `paket_performance`      |
| Saisonale Aktion | `aktion_april_2025`        |
| Content/Blog    | `content`                   |

---

## Im Dashboard sehen

Nach dem ersten Klick auf einen UTM-Link erscheint die Kampagne im Dashboard:

**palmer-digital.de/admin/dashboard** → Sektion **UTM Kampagnen**

Dort siehst du: Source · Medium · Kampagnenname · Anzahl Klicks
