/* Sapori d'Italia — Cala Millor
   Data verified from Google Maps (498 reviews, 4.7 ★).
   Menu items verified from Google Maps highlights & reviews. Default lang: ES. */

const RECS = [
  { es:{n:"Pizza Prosciutto e Funghi", d:"Una de las más pedidas — aparece en cada reseña."}, en:{n:"Pizza Prosciutto e Funghi", d:"One of the most ordered — mentioned in every review."}, de:{n:"Pizza Prosciutto e Funghi", d:"Eine der meistbestellten — in jeder Bewertung erwähnt."} },
  { es:{n:"Tiramisú", d:"Casero, clásico, simplemente perfecto. El favorito de los postres."}, en:{n:"Tiramisú", d:"Home-made, classic, simply perfect — the dessert favourite."}, de:{n:"Tiramisú", d:"Hausgemacht, klassisch, einfach perfekt — der Dessert-Liebling."} },
  { es:{n:"Pasta casera", d:"Hecha a mano cada día — la base de toda buena cocina italiana."}, en:{n:"Home-made pasta", d:"Made by hand every day — the foundation of good Italian cooking."}, de:{n:"Hausgemachte Pasta", d:"Täglich von Hand gemacht — die Basis guter italienischer Küche."} },
  { es:{n:"Spaghetti alle vongole", d:"Pasta, almejas, ajo, perejil — directo del recetario italiano."}, en:{n:"Spaghetti alle vongole", d:"Pasta, clams, garlic, parsley — straight from the Italian recipe book."}, de:{n:"Spaghetti alle vongole", d:"Pasta, Venusmuscheln, Knoblauch, Petersilie — direkt aus dem italienischen Kochbuch."} },
  { es:{n:"Arancino", d:"Bola de arroz frita y crujiente — el aperitivo siciliano de verdad."}, en:{n:"Arancino", d:"Crispy fried rice ball — the real Sicilian starter."}, de:{n:"Arancino", d:"Knuspriger frittierter Reisball — die echte sizilianische Vorspeise."} },
  { es:{n:"Bruschetta", d:"Pan tostado, tomate fresco, albahaca — comienzo perfecto."}, en:{n:"Bruschetta", d:"Toasted bread, fresh tomato, basil — the perfect start."}, de:{n:"Bruschetta", d:"Geröstetes Brot, frische Tomate, Basilikum — der perfekte Start."} }
];

const I18N = {
  es: {
    "nav.menu":"Recomendaciones","nav.gallery":"Imágenes","nav.story":"Sobre nosotros","nav.visit":"Visita",
    "cta.reserve":"Reservar",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Pasta casera y pizza al horno.",
    "hero.sub":"Pizzería italiana auténtica en el corazón de Cala Millor — pasta hecha a mano cada día, pizza al horno, tiramisú de verdad.",
    "hero.reserve":"Reservar mesa",
    "hero.call":"Llamar",
    "hero.hours":"Mediodía hasta 15:00  ·  Noche desde 18:30",
    "hero.rating":"★ 4,7 · 498 reseñas en Google",
    "gallery.kicker":"Imágenes",
    "gallery.title":"Así es Sapori.",
    "gallery.note":"Imágenes de muestra — las cambiamos por fotos reales de vuestros platos y del local a petición.",
    "story.kicker":"Sobre nosotros",
    "story.title":"Italia en una calle de Cala Millor.",
    "story.p1":"Sapori d'Italia es una pizzería italiana auténtica — pizza recién salida del horno, pasta hecha en casa cada día y dulces clásicos como el tiramisú que tanto gusta a nuestros clientes.",
    "story.p2":"Servicio al mediodía y por la noche, en un local acogedor con clientes habituales que vuelven año tras año. Para llevar, para quedarse — y siempre con un buen vino.",
    "story.statRating":"498 reseñas Google",
    "story.statPrice":"por persona",
    "menu.kicker":"Recomendaciones",
    "menu.title":"Lo que más gusta a nuestros clientes.",
    "menu.note":"La carta completa y el vino del día están en el local.",
    "visit.kicker":"Visita",
    "visit.title":"Carrer Alosa, 5 — Cala Millor",
    "visit.hoursLabel":"Horario",
    "visit.hoursMain":"Mediodía · hasta las 15:00",
    "visit.hoursEvening":"Noche · desde las 18:30",
    "visit.hoursNote":"Horario actualizado en Google Maps",
    "visit.addressLabel":"Dirección",
    "visit.contactLabel":"Contacto",
    "visit.callCta":"Llamar para reservar",
    "footer.tag":"Pizzería · Pasta casera · Cala Millor",
    "footer.findUs":"Dónde estamos",
    "footer.hours":"Horario",
    "footer.hoursLine":"Mediodía hasta 15:00",
    "footer.hoursEvening":"Noche desde 18:30",
    "footer.contact":"Contacto"
  },
  en: {
    "nav.menu":"Recommendations","nav.gallery":"Impressions","nav.story":"About","nav.visit":"Visit",
    "cta.reserve":"Book",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Home-made pasta, oven-baked pizza.",
    "hero.sub":"Authentic Italian pizzeria in the heart of Cala Millor — pasta made by hand every day, oven-baked pizza, real tiramisú.",
    "hero.reserve":"Book a table",
    "hero.call":"Call",
    "hero.hours":"Lunch until 15:00  ·  Dinner from 18:30",
    "hero.rating":"★ 4.7 · 498 Google reviews",
    "gallery.kicker":"Impressions",
    "gallery.title":"This is Sapori.",
    "gallery.note":"Sample photos — happy to swap for real photos of your dishes and venue on request.",
    "story.kicker":"About",
    "story.title":"A taste of Italy in Cala Millor.",
    "story.p1":"Sapori d'Italia is an authentic Italian pizzeria — pizza straight from the oven, pasta made by hand every day, and classics like tiramisú that keep guests coming back.",
    "story.p2":"Lunch and dinner service in a cosy spot where regulars return year after year. Eat in or take away — always with a good glass of wine.",
    "story.statRating":"498 Google reviews",
    "story.statPrice":"per person",
    "menu.kicker":"Recommendations",
    "menu.title":"What our guests love.",
    "menu.note":"The full menu and wine of the day are available at the restaurant.",
    "visit.kicker":"Visit",
    "visit.title":"Carrer Alosa, 5 — Cala Millor",
    "visit.hoursLabel":"Hours",
    "visit.hoursMain":"Lunch · until 15:00",
    "visit.hoursEvening":"Dinner · from 18:30",
    "visit.hoursNote":"Up-to-date hours on Google Maps",
    "visit.addressLabel":"Address",
    "visit.contactLabel":"Contact",
    "visit.callCta":"Call to book",
    "footer.tag":"Pizzeria · Home-made pasta · Cala Millor",
    "footer.findUs":"Find us",
    "footer.hours":"Hours",
    "footer.hoursLine":"Lunch until 15:00",
    "footer.hoursEvening":"Dinner from 18:30",
    "footer.contact":"Contact"
  },
  de: {
    "nav.menu":"Empfehlungen","nav.gallery":"Eindrücke","nav.story":"Über uns","nav.visit":"Besuch",
    "cta.reserve":"Reservieren",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Hausgemachte Pasta und Pizza aus dem Ofen.",
    "hero.sub":"Authentische italienische Pizzeria im Herzen von Cala Millor — Pasta täglich von Hand gemacht, Pizza aus dem Ofen, echtes Tiramisú.",
    "hero.reserve":"Tisch reservieren",
    "hero.call":"Anrufen",
    "hero.hours":"Mittag bis 15:00  ·  Abend ab 18:30",
    "hero.rating":"★ 4,7 · 498 Google-Bewertungen",
    "gallery.kicker":"Eindrücke",
    "gallery.title":"So ist Sapori.",
    "gallery.note":"Symbolbilder – auf Anfrage tauschen wir gegen echte Fotos eurer Gerichte und des Lokals.",
    "story.kicker":"Über uns",
    "story.title":"Italien in einer Straße von Cala Millor.",
    "story.p1":"Sapori d'Italia ist eine authentische italienische Pizzeria — Pizza direkt aus dem Ofen, Pasta täglich von Hand gemacht, und Klassiker wie Tiramisú, für die unsere Gäste immer wiederkommen.",
    "story.p2":"Mittags und abends geöffnet, in einem gemütlichen Lokal mit Stammgästen, die Jahr für Jahr zurückkommen. Vor Ort oder zum Mitnehmen — immer mit einem guten Glas Wein.",
    "story.statRating":"498 Google-Bewertungen",
    "story.statPrice":"pro Person",
    "menu.kicker":"Empfehlungen",
    "menu.title":"Was unsere Gäste lieben.",
    "menu.note":"Die komplette Karte und der Wein des Tages stehen im Lokal bereit.",
    "visit.kicker":"Besuch",
    "visit.title":"Carrer Alosa, 5 — Cala Millor",
    "visit.hoursLabel":"Öffnungszeiten",
    "visit.hoursMain":"Mittag · bis 15:00",
    "visit.hoursEvening":"Abend · ab 18:30",
    "visit.hoursNote":"Aktuelle Öffnungszeiten auf Google Maps",
    "visit.addressLabel":"Adresse",
    "visit.contactLabel":"Kontakt",
    "visit.callCta":"Anrufen zum Reservieren",
    "footer.tag":"Pizzeria · Hausgemachte Pasta · Cala Millor",
    "footer.findUs":"Wo wir sind",
    "footer.hours":"Öffnungszeiten",
    "footer.hoursLine":"Mittag bis 15:00",
    "footer.hoursEvening":"Abend ab 18:30",
    "footer.contact":"Kontakt"
  }
};

let currentLang = 'es';

function applyI18n(lang){
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang] && I18N[lang][key];
    if (val) el.textContent = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });
  renderRecs();
}

function renderRecs(){
  const grid = document.getElementById('recGrid');
  if (!grid) return;
  grid.innerHTML = RECS.map(r => {
    const t = r[currentLang] || r.es;
    return `<article class="rec-card"><h3>${t.n}</h3><p>${t.d}</p></article>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => applyI18n(b.dataset.lang));
  });

  const nav = document.createElement('nav');
  nav.className = 'mobile-nav';
  nav.innerHTML = `
    <a href="#empfehlungen" data-i18n="nav.menu">Recomendaciones</a>
    <a href="#eindruecke" data-i18n="nav.gallery">Imágenes</a>
    <a href="#historia" data-i18n="nav.story">Sobre nosotros</a>
    <a href="#visitanos" data-i18n="nav.visit">Visita</a>
    <a href="tel:+34871712574" class="btn btn-primary" data-i18n="cta.reserve">Reservar</a>
  `;
  document.body.appendChild(nav);
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    document.body.style.overflow = '';
  }));

  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  document.getElementById('year').textContent = new Date().getFullYear();

  applyI18n('es');
});
