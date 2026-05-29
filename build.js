/* ==========================================================================
   HappyNurse Doetinchem — build-script
   Leest alle vacatures uit content/vacatures/*.md (beheerd via Decap CMS)
   en genereert js/data.js, de databron voor de site.

   Vercel draait dit automatisch bij elke deploy (build command: `node build.js`).
   Recruiters hoeven dus alleen op "Publish" te klikken in /admin.
   ========================================================================== */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const CONTENT_DIR = path.join(__dirname, "content", "vacatures");
const OUT_FILE = path.join(__dirname, "js", "data.js");

/* € 2.573 – € 3.471 p/m */
function formatSalary(min, max) {
  const euro = (n) => "€ " + Number(n).toLocaleString("nl-NL");
  if (min && max) return euro(min) + " – " + euro(max) + " p/m";
  if (min) return "vanaf " + euro(min) + " p/m";
  return "Salaris in overleg";
}

/* Google Jobs employmentType (mag een array zijn) */
function employmentType(dienstverband) {
  const t = [];
  if (dienstverband.some((d) => /loondienst/i.test(d))) t.push("PART_TIME");
  if (dienstverband.some((d) => /zzp/i.test(d))) t.push("CONTRACTOR");
  return t.length ? t : ["PART_TIME"];
}

function toISODate(d) {
  if (!d) return "";
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? String(d) : dt.toISOString().slice(0, 10);
}

function asArray(v) {
  if (Array.isArray(v)) return v;
  if (v === undefined || v === null || v === "") return [];
  return [v];
}

function build() {
  let files = [];
  try {
    files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  } catch (e) {
    console.warn("⚠ Map content/vacatures niet gevonden — lege vacaturelijst. (" + e.message + ")");
  }

  const vacancies = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.md$/, "");
      const dienstverband = asArray(data.dienstverband);

      return {
        id: slug,
        title: data.functietitel || slug,
        sector: data.sector || "VVT",
        locatie: data.locatie || "",
        regio: data.regio || "",
        vestiging: data.vestiging || "Doetinchem",
        uren: data.uren || "",
        niveau: asArray(data.opleidingsniveau).join(" / "),
        dienstverband: dienstverband.join(" / "),
        salarisMin: data.salaris_min || 0,
        salarisMax: data.salaris_max || 0,
        salaris: formatSalary(data.salaris_min, data.salaris_max),
        datePosted: toISODate(data.datum_geplaatst),
        validThrough: toISODate(data.geldig_tot),
        employmentType: employmentType(dienstverband),
        addressRegion: data.addressRegion || "Gelderland",
        intro: data.intro || "",
        taken: asArray(data.taken),
        profiel: asArray(data.profiel),
        omschrijving: (content || "").trim(),
        status: data.status || "online",
      };
    })
    // Gearchiveerde vacatures verschijnen niet op de site
    .filter((v) => v.status === "online")
    // Nieuwste eerst
    .sort((a, b) => (b.datePosted || "").localeCompare(a.datePosted || ""));

  const banner =
    "/* ==========================================================================\n" +
    "   AUTOMATISCH GEGENEREERD door build.js — NIET handmatig bewerken.\n" +
    "   Bron: content/vacatures/*.md (beheerd via Decap CMS)\n" +
    "   Gegenereerd op: " + new Date().toISOString() + "\n" +
    "   ========================================================================== */\n\n";

  const js =
    banner +
    "window.VACANCIES = " + JSON.stringify(vacancies, null, 2) + ";\n\n" +
    "window.VACANCY_REGIONS = [...new Set(window.VACANCIES.map(v => v.regio).filter(Boolean))].sort();\n" +
    'window.VACANCY_SECTORS = ["VVT", "GGZ", "GHZ", "Ziekenhuis"];\n' +
    "window.getVacancyById = function (id) { return window.VACANCIES.find(v => v.id === id) || null; };\n";

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, js, "utf8");
  console.log("✓ " + vacancies.length + " vacature(s) gegenereerd → js/data.js");
}

build();
