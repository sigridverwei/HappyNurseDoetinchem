/* ==========================================================================
   AUTOMATISCH GEGENEREERD door build.js — NIET handmatig bewerken.
   Bron: content/vacatures/*.md (beheerd via Decap CMS)
   Gegenereerd op: 2026-05-29T19:52:43.102Z
   ========================================================================== */

window.VACANCIES = [
  {
    "id": "begeleider-ghz-winterswijk",
    "title": "Begeleider Gehandicaptenzorg",
    "sector": "GHZ",
    "locatie": "Winterswijk",
    "regio": "Achterhoek",
    "vestiging": "Doetinchem",
    "uren": "20–32 uur",
    "niveau": "MBO 3 / MBO 4",
    "dienstverband": "ZZP",
    "salarisMin": 2700,
    "salarisMax": 3600,
    "salaris": "€ 2.700 – € 3.600 p/m",
    "datePosted": "2026-05-22",
    "validThrough": "2026-07-22",
    "employmentType": [
      "CONTRACTOR"
    ],
    "addressRegion": "Gelderland",
    "intro": "Draag jij graag bij aan de ontwikkeling van mensen met een verstandelijke beperking? Bij een fijne woonlocatie in Winterswijk help je cliënten op een liefdevolle manier richting meer zelfstandigheid. Dankbaar werk, dichtbij huis.",
    "taken": [
      "Individuele begeleiding en ondersteuning van cliënten",
      "Ondersteunen bij wonen, vrije tijd, persoonlijke verzorging en dagbesteding",
      "Werken volgens het persoonlijk ondersteuningsplan",
      "Een veilige, prettige en stimulerende woonomgeving creëren"
    ],
    "profiel": [
      "Afgeronde opleiding niveau 3 of 4 (bijv. MMZ of vergelijkbaar)",
      "Geduld, humor en een groot inlevingsvermogen",
      "Zelfstandig kunnen werken én een echte teamspeler",
      "Als zzp'er ingeschreven bij de KvK (of bereid dat te worden)"
    ],
    "omschrijving": "",
    "status": "online"
  },
  {
    "id": "verzorgende-ig-doetinchem",
    "title": "Verzorgende IG",
    "sector": "VVT",
    "locatie": "Doetinchem",
    "regio": "Achterhoek",
    "vestiging": "Doetinchem",
    "uren": "16–32 uur",
    "niveau": "MBO 3",
    "dienstverband": "Flexibel loondienst",
    "salarisMin": 2573,
    "salarisMax": 3471,
    "salaris": "€ 2.573 – € 3.471 p/m",
    "datePosted": "2026-05-20",
    "validThrough": "2026-07-15",
    "employmentType": [
      "PART_TIME"
    ],
    "addressRegion": "Gelderland",
    "intro": "Werk jij graag met ouderen en wil je écht het verschil maken in de dagelijkse zorg? Als Verzorgende IG in een warme VVT-instelling in Doetinchem geef je liefdevolle, persoonlijke zorg — en kies je via de HappyOne app zelf wanneer je werkt.",
    "taken": [
      "Persoonlijke verzorging en ondersteuning bij dagelijkse handelingen",
      "Medicatie aanreiken en eenvoudige verpleegtechnische handelingen",
      "Signaleren van veranderingen in de gezondheid van bewoners",
      "Rapporteren in het zorgdossier en korte lijntjes met het team"
    ],
    "profiel": [
      "Een afgeronde opleiding Verzorgende IG (niveau 3)",
      "BIG-registratie of bereid die op peil te houden",
      "Een groot zorghart en oog voor de mens achter de zorgvraag",
      "Flexibel inzetbaar in dag-, avond- of weekenddiensten"
    ],
    "omschrijving": "Dit veld (de uitgebreide omschrijving) is optioneel. Recruiters kunnen hier\nextra context kwijt, bijvoorbeeld over de specifieke opdrachtgever of het team.",
    "status": "online"
  },
  {
    "id": "ggz-verpleegkundige-arnhem",
    "title": "GGZ Verpleegkundige",
    "sector": "GGZ",
    "locatie": "Arnhem",
    "regio": "Arnhem e.o.",
    "vestiging": "Doetinchem",
    "uren": "24–36 uur",
    "niveau": "MBO 4 / HBO",
    "dienstverband": "Flexibel loondienst / ZZP",
    "salarisMin": 2900,
    "salarisMax": 4050,
    "salaris": "€ 2.900 – € 4.050 p/m",
    "datePosted": "2026-05-18",
    "validThrough": "2026-07-20",
    "employmentType": [
      "PART_TIME",
      "CONTRACTOR"
    ],
    "addressRegion": "Gelderland",
    "intro": "Wil je jouw zorgtalent inzetten voor mensen met een psychische kwetsbaarheid? Voor een GGZ-instelling in Arnhem zoeken we een betrokken verpleegkundige die rust en structuur biedt. Werken als zzp'er of in loondienst — jij kiest.",
    "taken": [
      "Begeleiden en behandelen van cliënten met psychiatrische problematiek",
      "Opstellen en bewaken van behandel- en signaleringsplannen",
      "Crisissituaties professioneel en kalm de-escaleren",
      "Samenwerken met behandelaars en het multidisciplinaire team"
    ],
    "profiel": [
      "Afgeronde opleiding tot verpleegkundige (MBO 4 of HBO)",
      "Geldige BIG-registratie",
      "Ervaring in of affiniteit met de GGZ",
      "Stevig, inlevend en helder in je communicatie"
    ],
    "omschrijving": "",
    "status": "online"
  }
];

window.VACANCY_REGIONS = [...new Set(window.VACANCIES.map(v => v.regio).filter(Boolean))].sort();
window.VACANCY_SECTORS = ["VVT", "GGZ", "GHZ", "Ziekenhuis"];
window.getVacancyById = function (id) { return window.VACANCIES.find(v => v.id === id) || null; };
