# Admin instellen — recruiters laten inloggen met e-mail & wachtwoord

Deze gids zet de vacaturebeheer-omgeving (`/admin`) live. Recruiters loggen in
met **e-mail + wachtwoord** en hebben **geen GitHub-account** nodig.
We gebruiken Decap CMS + Netlify Identity + Git Gateway. De publieke site blijft
gewoon op **Vercel** draaien; Netlify dient alléén als gratis inlogsysteem.

> Eenmalige setup — daarna voeg je nieuwe recruiters toe met één klik (stap 5).

---

## Stap 1 — Bestanden in GitHub zetten
1. Download het project (knop in de chat) en pak het uit.
2. Upload de inhoud naar je repo **`sigridverwei/HappyNurseDoetinchem`**
   (branch `main`). Via github.com kan dit met **Add file → Upload files**,
   of met git:
   ```bash
   git clone https://github.com/sigridverwei/HappyNurseDoetinchem.git
   # kopieer alle projectbestanden in de map
   git add .
   git commit -m "HappyNurse Doetinchem site + admin"
   git push origin main
   ```

## Stap 2 — Vercel koppelen (publieke site + automatische build)
1. Ga naar vercel.com → **Add New → Project** → kies de GitHub-repo.
2. Framework preset: **Other**.
3. **Build Command:** `node build.js`  ·  **Output Directory:** `.` (een punt)
   (Deze staan ook al in `vercel.json`, dus meestal neemt Vercel ze automatisch over.)
4. Deploy. Vercel draait `npm install` + `node build.js`, zet de markdown uit
   `content/vacatures/` om naar `js/data.js` en publiceert de site.
5. Later: koppel `happynurse-doetinchem.nl` via TransIP aan Vercel.

> Vanaf nu geldt: recruiter klikt **Publish** in /admin → GitHub krijgt een nieuw
> markdown-bestand → Vercel deployt automatisch → vacature staat binnen ~1 min
> live, inclusief Google Jobs JSON-LD. Geen handwerk meer.

## Stap 3 — Netlify Identity aanzetten (de inlog)
> Netlify host hier níéts publieks — het levert alleen de login + git-gateway.
1. Maak een gratis account op netlify.com.
2. **Add new site → Import an existing project → GitHub** → kies dezelfde repo.
   Laat de build leeg (publish directory: root). Deploy.
3. In het Netlify-dashboard van die site: **Site configuration → Identity →
   Enable Identity**.
4. Onder **Identity → Registration** zet je voorkeur op **Invite only**
   (zo kan niet zomaar iedereen zich registreren).
5. Onder **Identity → Services → Git Gateway**: klik **Enable Git Gateway**.
   (Dit geeft de CMS toestemming om vacatures naar GitHub te schrijven.)

## Stap 4 — Admin naar je Netlify Identity wijzen
De inlogwidget moet weten waar Identity draait. Twee opties:

- **Makkelijkst:** open je site via de **Netlify-URL** wanneer je `/admin`
  gebruikt — dan werkt het automatisch.
- **Op je eigen Vercel-domein:** voeg in `admin/index.html` vlak ná de
  `<title>` deze regel toe en vervang de URL door je Netlify-site-URL:
  ```html
  <meta name="netlify-identity-url" content="https://JOUW-SITE.netlify.app">
  ```
  (Push daarna opnieuw naar GitHub.)

## Stap 5 — Recruiters uitnodigen
1. Netlify-dashboard → **Identity → Invite users** → vul hun e-mailadres in.
2. Ze krijgen een mail, kiezen een wachtwoord en kunnen meteen inloggen op
   `jouwsite.nl/admin`.
3. Klaar! Vacature plaatsen = formulier invullen → **Publish**. Vercel deployt
   automatisch en de vacature staat binnen ~1 min op de site.

---

---

## Hoe vacatures live komen (automatisch)
De CMS slaat elke vacature op als markdown in `content/vacatures/`. Bij elke
deploy draait `build.js` op Vercel en zet die markdown om naar `js/data.js` —
de databron voor de homepage, het overzicht én de detailpagina's (met Google
Jobs JSON-LD). Je hoeft hier niets handmatig voor te doen.

- **Vacature offline halen?** Zet in de CMS het veld **Status** op
  *gearchiveerd* en publiceer. De build laat hem dan weg van de site.
- **Velden kloppen 1-op-1** met `build.js` en `admin/config.yml`. Voeg je een
  veld toe in de config, breid dan ook `build.js` uit.

## Testen zonder live te gaan
In `admin/config.yml` staat `local_backend: true`. Draai lokaal:
```bash
npx decap-server      # in één terminal
# open de site lokaal en ga naar /admin — geen login nodig
```
