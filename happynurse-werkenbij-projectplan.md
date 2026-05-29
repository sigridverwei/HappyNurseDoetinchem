# HappyNurse werkenbij-site — projectplan

## Doel
Een zelfstandige werkenbij-website voor twee HappyNurse-franchisevestigingen (Doetinchem en Utrecht), onafhankelijk van het landelijke HappyNurse-platform en Indeed. Primaire doelen: lokale vindbaarheid via Google en Google Jobs, en een lage drempel voor latent werkzoekenden.

## Aanleiding
Sinds juli 2024 hanteert Indeed nieuwe spelregels waardoor meerdere HappyNurse-vestigingen in hetzelfde werkgebied tegen elkaar opbieden bij gesponsorde vacatures. Eigen kanalen zijn daardoor essentieel geworden.

---

## Domeinen
- `happynurse-doetinchem.nl`
- `happynurse-utrecht.nl`
- Geregistreerd bij: **TransIP**
- Hosting: TransIP Core (één pakket per domein) — voorlopig geparkeerd, want we kiezen voor Vercel

---

## Gekozen technische stack

| Onderdeel | Keuze |
|---|---|
| Paginabouwer | Claude (statische HTML) |
| Hosting | Vercel (gratis) |
| Versiebeheer | GitHub |
| CMS voor recruiters | Decap CMS (voorheen Netlify CMS) |
| Domeinbeheer | TransIP |

### Workflow
1. HTML/CSS gebouwd in Claude
2. Geüpload naar GitHub-repository
3. Vercel koppelt aan GitHub en deployt automatisch bij elke push
4. Recruiters beheren vacatures via `jouwsite.nl/admin` (Decap CMS)
5. Decap slaat vacatures op als bestanden in GitHub → Vercel deployt automatisch

---

## Werkgebieden per vestiging

**Doetinchem**
- Doetinchem, Arnhem, Zevenaar, Duiven, Didam en omgeving (Achterhoek / Liemers)

**Utrecht**
- Utrecht, Den Bosch, Vught, Eindhoven en omgeving

---

## Gewenste functies op de site

### Voor werkzoekenden
- Overzichtspagina met alle vacatures, filterbaar op vestiging / regio / sector
- Vacaturedetailpagina per functie
- Open sollicitatie mogelijkheid
- USP-blok (persoonlijk contact, lokaal netwerk, gratis opleidingen, HappyOne app)
- Contactgegevens per vestiging (naam recruiter, telefoonnummer)

### Voor recruiters (via Decap CMS)
- Nieuwe vacature plaatsen via formulier (geen code)
- Velden: functietitel, sector, locatie, uren, opleidingsniveau, salarisrange, omschrijving, dienstverbandtype
- Vacature archiveren / offline halen

---

## SEO & Google Jobs

Elke vacaturepagina moet voorzien zijn van **JobPosting schema markup** (JSON-LD). Dit zorgt voor gratis weergave in Google Jobs. Verplichte velden:

```json
{
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Verzorgende IG VVT",
  "description": "...",
  "datePosted": "2026-05-29",
  "validThrough": "2026-07-01",
  "employmentType": "PART_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "HappyNurse Doetinchem",
    "sameAs": "https://happynurse-doetinchem.nl"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Doetinchem",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "EUR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 2573,
      "maxValue": 3471,
      "unitText": "MONTH"
    }
  }
}
```

Controleer na livegang via: **Google Search Console → URL-inspectie**

---

## Huisstijl richting

- Primaire kleur: HappyNurse groen (`#1D9E75`)
- Lichte achtergrond: `#E1F5EE`
- Donker groen voor koppen: `#085041`
- Accentkleur: `#0F6E56`
- Sectorkleuren:
  - VVT: groen
  - GGZ: blauw
  - GHZ: amber
  - Ziekenhuis: roze

---

## Vacaturevelden (per vacature)

| Veld | Voorbeeld |
|---|---|
| Functietitel | Verzorgende IG |
| Sector | VVT / GGZ / GHZ / Ziekenhuis |
| Locatie | Doetinchem |
| Vestiging | Doetinchem / Utrecht |
| Uren | 16–36 uur |
| Opleidingsniveau | MBO 3 / MBO 4 / HBO |
| Dienstverband | Flexibel loondienst / ZZP |
| Salarisrange | € 2.573 – € 3.471 p/m |
| Omschrijving | Vrije tekst |
| Datum geplaatst | Automatisch |
| Geldig tot | Datum |

---

## USP's per vestiging (te gebruiken in copy)

1. **Persoonlijk contact** — je belt direct met je eigen recruiter, geen callcenter
2. **Lokaal netwerk** — we kennen de opdrachtgevers in jouw regio persoonlijk
3. **Gratis opleidingen** — via HappyCampus ontwikkel je je zonder extra kosten
4. **Jij kiest je diensten** — via de HappyOne app zie en kies je zelf wanneer je werkt

---

## Strategie latent werkzoekenden

Naast actieve vacatures ook informatieve pagina's toevoegen voor mensen die oriënteren:
- *"Flexibel werken als verpleegkundige in Utrecht — hoe werkt dat?"*
- *"Zorgwerk in de Achterhoek: wat verdien je bij HappyNurse Doetinchem?"*

Aanvullende kanalen:
- LinkedIn organisch (verhalen van medewerkers, geen vacatures pushen)
- Instagram/Facebook lokaal (authentieke content, teamfoto's)
- Referralprogramma via huidige medewerkers
- Samenwerking MBO/HBO-zorginstellingen in de regio

---

## Volgende stappen in Claude Design

1. Bouw homepage met hero, vacature-overzicht, USP-blok en CTA
2. Bouw vacaturedetailpagina met Google Jobs JSON-LD markup
3. Koppel Decap CMS voor recruiterbeheer
4. Upload naar GitHub
5. Koppel Vercel aan GitHub-repository
6. Wijs `happynurse-doetinchem.nl` en `happynurse-utrecht.nl` via TransIP naar Vercel
