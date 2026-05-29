# HappyNurse Doetinchem — werkenbij-site

Zelfstandige werkenbij-website voor HappyNurse Doetinchem (Achterhoek & Liemers).
Statische HTML/CSS/JS — klaar voor GitHub + Vercel.

## Structuur
```
index.html                     Homepage (hero, sectoren, vacatures, USP's, HappyCampus, CTA)
vacatures.html                 Vacature-overzicht met filters (sector/regio/dienstverband) + zoeken
vacature.html                  Vacaturedetail (?id=...) incl. Google Jobs JSON-LD
solliciteren.html              Open sollicitatie + contact (formulier met validatie)
werken-in-de-achterhoek.html   Informatiepagina voor latent werkzoekenden (SEO)
css/styles.css                 Gedeeld design system (HappyNurse-huisstijl)
js/data.js                     Vacaturedata (in productie door Decap beheerd)
js/site.js                     Gedeelde header/footer + helpers
admin/                         Decap CMS — recruiterbeheer (config.yml + index.html)
```

## Vacatures koppelen aan Decap CMS (automatisch)
Recruiters beheren vacatures via `/admin`. Decap slaat ze op als markdown in
`content/vacatures/`. Bij elke Vercel-deploy draait `build.js` en genereert
`js/data.js` — de databron voor het overzicht, de homepage en de detailpagina's
(incl. Google Jobs JSON-LD). De velden in `admin/config.yml`, `build.js` en de
gegenereerde `js/data.js` sluiten 1-op-1 op elkaar aan.

> `js/data.js` is gegenereerd — bewerk het niet handmatig; pas in plaats daarvan
> de markdown (via /admin) of `build.js` aan.

## Deploy (zie projectplan)
1. Push naar GitHub
2. Koppel de repo in Vercel (auto-deploy bij elke push)
3. Wijs `happynurse-doetinchem.nl` via TransIP naar Vercel
4. Recruiters beheren vacatures via `jouwsite.nl/admin`

## SEO / Google Jobs
Elke vacaturepagina injecteert `JobPosting`-schema (JSON-LD). Controleer na
livegang via **Google Search Console → URL-inspectie** en de Rich Results Test.

## Aanpassen
- Kleuren/typografie: bovenaan `css/styles.css` (CSS-variabelen).
- Telefoon, e-mail, adres, recruiternaam: bovenaan `js/site.js` (`HN`-object) en in
  `solliciteren.html` / `vacature.html`.
- Foto's: vervang de `.ph`-placeholders door echte `<img>`.
