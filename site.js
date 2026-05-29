/* ==========================================================================
   HappyNurse Doetinchem — gedeelde header, footer en helpers
   ========================================================================== */

const HN = {
  phone: "0314 - 76 02 10",
  phoneHref: "tel:+31314760210",
  email: "doetinchem@happynurse.nl",
};

/* ---- Iconen (inline SVG, stroke) ---- */
const ICON = {
  pin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  cap:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9 12 5 2 9l10 4 10-4Z"/><path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>',
  doc:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/></svg>',
  phone:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.6 2Z"/></svg>',
  arrow:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  heart:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2 4.8 5.3 4.2 7.4 3.8 9.3 4.8 12 7.4c2.7-2.6 4.6-3.6 6.7-3.2C22 4.8 23.6 8.3 22 11.7 19.5 16.4 12 21 12 21Z"/></svg>',
  menu:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
};

const BRAND_MARK = '<span class="brand__mark">' + ICON.heart + '</span>';

function brandBlock() {
  return '<a href="index.html" class="brand">' + BRAND_MARK +
    '<span class="brand__name">Happy<b>Nurse</b>' +
    '<span class="brand__loc">Doetinchem</span></span></a>';
}

function renderHeader(active) {
  const links = [
    ["Home", "index.html", "home"],
    ["Vacatures", "vacatures.html", "vacatures"],
    ["Werken in de Achterhoek", "werken-in-de-achterhoek.html", "info"],
    ["Open sollicitatie", "solliciteren.html", "solliciteren"],
  ];
  const nav = links.map(([label, href, key]) =>
    '<a href="' + href + '"' + (key === active ? ' class="is-active"' : '') + '>' + label + '</a>'
  ).join("");

  return '' +
  '<header class="site-header"><div class="wrap site-header__inner">' +
    brandBlock() +
    '<nav class="nav" id="mainnav">' + nav + '</nav>' +
    '<div class="header-cta">' +
      '<a class="header-phone" href="' + HN.phoneHref + '">' + ICON.phone + HN.phone + '</a>' +
      '<a class="btn btn--sm" href="solliciteren.html">Solliciteer direct</a>' +
    '</div>' +
    '<button class="nav-toggle" aria-label="Menu" id="navToggle">' + ICON.menu + '</button>' +
  '</div></header>';
}

function renderFooter() {
  return '' +
  '<footer class="site-footer"><div class="wrap">' +
    '<div class="footer-grid">' +
      '<div class="footer-brand">' +
        brandBlock() +
        '<p>Hét lokale zorgteam in de Achterhoek en Liemers. Persoonlijk contact, vrij kiezen wanneer je werkt en gratis ontwikkelen via HappyCampus.</p>' +
      '</div>' +
      '<div><h4>Werken bij</h4><ul class="footer-links">' +
        '<li><a href="vacatures.html">Alle vacatures</a></li>' +
        '<li><a href="vacatures.html?sector=VVT">VVT</a></li>' +
        '<li><a href="vacatures.html?sector=GGZ">GGZ</a></li>' +
        '<li><a href="vacatures.html?sector=GHZ">GHZ</a></li>' +
        '<li><a href="solliciteren.html">Open sollicitatie</a></li>' +
      '</ul></div>' +
      '<div><h4>Regio</h4><ul class="footer-links">' +
        '<li>Doetinchem</li><li>Arnhem</li><li>Zevenaar</li>' +
        '<li>Duiven &amp; Didam</li><li>Winterswijk</li>' +
      '</ul></div>' +
      '<div><h4>Contact</h4><ul class="footer-links">' +
        '<li><a href="' + HN.phoneHref + '">' + HN.phone + '</a></li>' +
        '<li><a href="mailto:' + HN.email + '">' + HN.email + '</a></li>' +
        '<li>Terborgseweg 1, Doetinchem</li>' +
        '<li class="mt-s"><a class="btn btn--white btn--sm" href="solliciteren.html">Neem contact op</a></li>' +
      '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<span>© 2026 HappyNurse Doetinchem — zelfstandige franchisevestiging</span>' +
      '<span>Liever HappyNurse · KvK 00000000 · <a href="admin/">Recruiter login</a></span>' +
    '</div>' +
  '</div></footer>';
}

/* ---- Mount header/footer into placeholders ---- */
function mountChrome() {
  const h = document.querySelector("[data-header]");
  if (h) h.outerHTML = renderHeader(h.getAttribute("data-header") || "");
  const f = document.querySelector("[data-footer]");
  if (f) f.outerHTML = renderFooter();

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainnav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
  }
}

/* ---- Render a vacancy card ---- */
function vacancyCardHTML(v) {
  return '' +
  '<a class="vac-card" href="vacature.html?id=' + v.id + '">' +
    '<div class="vac-card__top">' +
      '<span class="chip" data-sector="' + v.sector + '"><span class="dot"></span>' + v.sector + '</span>' +
      '<span class="chip" style="--chip-bg:var(--line-soft);--chip-fg:var(--ink-soft)">' + v.dienstverband.split(" / ")[0] + '</span>' +
    '</div>' +
    '<h3 class="vac-card__title">' + v.title + '</h3>' +
    '<div class="vac-card__meta">' +
      '<span>' + ICON.pin + v.locatie + '</span>' +
      '<span>' + ICON.clock + v.uren + '</span>' +
      '<span>' + ICON.cap + v.niveau + '</span>' +
    '</div>' +
    '<div class="vac-card__foot">' +
      '<span class="vac-card__salary">' + v.salaris + '<small>o.b.v. ervaring &amp; uren</small></span>' +
      '<span class="vac-card__arrow">' + ICON.arrow + '</span>' +
    '</div>' +
  '</a>';
}

document.addEventListener("DOMContentLoaded", mountChrome);
