// const navBtns = document.querySelectorAll(".nav-btn");
// const mobileBtn = document.querySelector('.mobile-nav-toggle');
// const navList = document.querySelector('.nav-btns-list');
// const overlay = document.querySelector('.nav-overlay');

// const closeMenu = () => {
//   mobileBtn.classList.remove('active');
//   navList.classList.remove('active');
//   overlay.classList.remove('active');
//   document.body.style.overflow = '';
// };

// mobileBtn.addEventListener('click', () => {
//   mobileBtn.classList.toggle('active');
//   navList.classList.toggle('active');
//   overlay.classList.toggle('active');

//   if (navList.classList.contains('active')) {
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = '';
//   }
// });

// overlay.addEventListener('click', closeMenu);
// navBtns.forEach(link => link.addEventListener('click', closeMenu));

// let touchStartX = 0;
// let touchEndX = 0;

// navList.addEventListener('touchstart', (e) => {
//   touchStartX = e.changedTouches[0].screenX;
// }, { passive: true });

// navList.addEventListener('touchend', (e) => {
//   touchEndX = e.changedTouches[0].screenX;
//   handleSwipe();
// }, { passive: true });

// function handleSwipe() {
//   if (touchEndX > touchStartX + 50) {
//     closeMenu();
//   }
// }

// mobileBtn.addEventListener('click', () => {
//   mobileBtn.classList.toggle('active');
//   navList.classList.toggle('active');
// });

// navBtns.forEach(link => {
//   link.addEventListener('click', () => {
//     mobileBtn.classList.remove('active');
//     navList.classList.remove('active');
//   });
// });

// navBtns.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.preventDefault();
//     const targetId = button.dataset.target;
//     const section = document.querySelector(`.${targetId}`);
//     if (!section) return;
//     section.scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const splide = new Splide('#image-carousel', {
//     type   : 'loop',
//     perPage: 3,
//     gap    : '2rem',
//     arrows : false,
//     pagination: true,
//     breakpoints: {
//       992: { perPage: 2 },
//       640: { perPage: 1 },
//     },
//   }).mount();

//   const btnNext = document.querySelector('.button-right');
//   const btnPrev = document.querySelector('.button-left');

//   btnNext.addEventListener('click', () => splide.go('>'));
//   btnPrev.addEventListener('click', () => splide.go('<'));
// });

// const translations = {
//   hr: {
//     "hero-title": "VIŠE OD FRIZURE",
//     "hero-subtitle": "FRIZERSKI SALON K",
//     "book-btn": "Rezerviraj termin",
//     "nav-about": "O NAMA",
//     "nav-services": "USLUGE I CIJENE",
//   },
//   en: {
//     "hero-title": "MORE THAN A HAIRCUT",
//     "hero-subtitle": "HAIR SALON K",
//     "book-btn": "Book an Appointment",
//     "nav-about": "ABOUT US",
//     "nav-services": "SERVICES & PRICES",
//   },
//   de: {
//     "hero-title": "MEHR ALS EIN HAARSCHNITT",
//     "hero-subtitle": "FRISEURSALON K",
//     "book-btn": "Termin buchen",
//     "nav-about": "ÜBER UNS",
//     "nav-services": "PREISE & LEISTUNGEN",
//   },
// };




const translations = {
  hr: {
    "nav-about": "O NAMA",
    "nav-services": "USLUGE I CIJENE",
    "nav-gallery": "GALERIJA",
    "nav-contact": "KONTAKT",
    "hero-h1": "VIŠE OD FRIZURE",
    "hero-p": "FRIZERSKI SALON K",
    "btn-book": "Rezerviraj termin",
    "btn-services": "Pogledaj usluge",
    "about-header": "O NAMA",
    "about-h3": "FRIZERSKI SALON K - TVOJ STIL, NAŠA STRAST",
    "about-p": "Od 20XX. godine kreiramo frizure koje pričaju tvoju priču. Moderan prostor u srcu grada, tim iskusnih stilista i samo premium proizvodi. Nije samo šišanje – to je ritual ljepote.",
    "work-hours-h5": "RADNO VRIJEME",
    "mon-fri": "Ponedjeljak - Petak: 09:00 - 19:00",
    "sat": "Subota: 08:00 - 16:00",
    "sun": "Nedjelja: Zatvoreno",
    "service-header": "USLUGE & CJENIK",
    "service-h3": "IZABERI USLUGU I REZERVIRAJ ODMAH",
    "price-service": "Usluga",
    "price-cost": "Cijena",
    "s1": "Žensko šišanje + fen",
    "s2": "Muško šišanje",
    "s3": "Dječje šišanje (do 12 g.)",
    "s4": "Pramenovi (balayage/ombre)",
    "s5": "Bojanje korijena",
    "s6": "Feniranje + stilizacija",
    "s7": "Keratinski tretman",
    "s8": "Vjenčani stilovi",
    "gallery-header": "GALERIJA",
    "gallery-h3": "POGLEDAJ SALON I NAŠE RADOVE",
    "gallery-p": "Pronađi inspiraciju, donesi ideju, a mi ćemo je pretvoriti u tvoju frizuru.",
    "contact-header": "KONTAKT",
    "contact-h3": "FRIZERSKI SALON K"
  },
  en: {
    "nav-about": "ABOUT US",
    "nav-services": "SERVICES & PRICES",
    "nav-gallery": "GALLERY",
    "nav-contact": "CONTACT",
    "hero-h1": "MORE THAN A HAIRCUT",
    "hero-p": "HAIR SALON K",
    "btn-book": "Book Appointment",
    "btn-services": "View Services",
    "about-header": "ABOUT US",
    "about-h3": "HAIR SALON K - YOUR STYLE, OUR PASSION",
    "about-p": "Since 20XX, we have been creating hairstyles that tell your story. A modern space in the heart of the city, an experienced team of stylists, and only premium products. It's not just a haircut – it's a beauty ritual.",
    "work-hours-h5": "OPENING HOURS",
    "mon-fri": "Monday - Friday: 09:00 - 19:00",
    "sat": "Saturday: 08:00 - 16:00",
    "sun": "Sunday: Closed",
    "service-header": "SERVICES & PRICELIST",
    "service-h3": "CHOOSE A SERVICE AND BOOK NOW",
    "price-service": "Service",
    "price-cost": "Price",
    "s1": "Women's cut + blow-dry",
    "s2": "Men's cut",
    "s3": "Children's cut (up to 12y)",
    "s4": "Highlights (balayage/ombre)",
    "s5": "Root coloring",
    "s6": "Blow-dry + styling",
    "s7": "Keratin treatment",
    "s8": "Wedding styles",
    "gallery-header": "GALLERY",
    "gallery-h3": "VIEW THE SALON AND OUR WORK",
    "gallery-p": "Find inspiration, bring an idea, and we will turn it into your hairstyle.",
    "contact-header": "CONTACT",
    "contact-h3": "HAIR SALON K"
  },
  de: {
    "nav-about": "ÜBER UNS",
    "nav-services": "PREISE & LEISTUNGEN",
    "nav-gallery": "GALERIE",
    "nav-contact": "KONTAKT",
    "hero-h1": "MEHR ALS EIN HAARSCHNITT",
    "hero-p": "FRISEURSALON K",
    "btn-book": "Termin buchen",
    "btn-services": "Leistungen sehen",
    "about-header": "ÜBER UNS",
    "about-h3": "FRISEURSALON K - IHR STIL, UNSERE LEIDENSCHAFT",
    "about-p": "Seit 20XX kreieren wir Frisuren, die Ihre Geschichte erzählen. Ein moderner Raum im Herzen der Stadt, ein erfahrenes Team von Stylisten und nur Premium-Produkte. Es ist nicht nur ein Haarschnitt – es ist ein Schönheitsritual.",
    "work-hours-h5": "ÖFFNUNGSZEITEN",
    "mon-fri": "Montag - Freitag: 09:00 - 19:00",
    "sat": "Samstag: 08:00 - 16:00",
    "sun": "Sonntag: Geschlossen",
    "service-header": "PREISE & LEISTUNGEN",
    "service-h3": "WÄHLEN SIE EINE LEISTUNG UND BUCHEN SIE JETZT",
    "price-service": "Leistung",
    "price-cost": "Preis",
    "s1": "Damenschnitt + Föhnen",
    "s2": "Herrenschnitt",
    "s3": "Kinderschnitt (bis 12 J.)",
    "s4": "Strähnchen (Balayage/Ombre)",
    "s5": "Ansatz färben",
    "s6": "Föhnen + Styling",
    "s7": "Keratin-Behandlung",
    "s8": "Hochzeitsfrisuren",
    "gallery-header": "GALERIE",
    "gallery-h3": "SALON UND UNSERE ARBEITEN",
    "gallery-p": "Lassen Sie sich inspirieren, bringen Sie eine Idee mit, und wir machen daraus Ihre Frisur.",
    "contact-header": "KONTAKTIEREN",
    "contact-h3": "FRISEURSALON K"
  }
};









document.addEventListener("DOMContentLoaded", function () {
  // 1. SELECTORS
  const navBtns = document.querySelectorAll(".nav-btn");
  const mobileBtn = document.querySelector(".mobile-nav-toggle");
  const navList = document.querySelector(".nav-btns-list");
  const overlay = document.querySelector(".nav-overlay");
  const btnNext = document.querySelector(".button-right");
  const btnPrev = document.querySelector(".button-left");

  const langSelect = document.querySelector("#language-select");

  langSelect.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    changeLanguage(selectedLang);
  });

  function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // 2. HELPER FUNCTIONS
  const closeMenu = () => {
    if (!mobileBtn || !navList) return;
    mobileBtn.classList.remove("active");
    navList.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    mobileBtn.classList.toggle("active");
    navList.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");

    if (navList.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // 3. NAVIGATION LOGIC
  if (mobileBtn) {
    mobileBtn.addEventListener("click", toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  navBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Close mobile menu first
      closeMenu();

      // Smooth Scroll Logic
      const targetId = button.dataset.target;
      const section = document.querySelector(`.${targetId}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 4. SWIPE LOGIC
  let touchStartX = 0;
  let touchEndX = 0;

  if (navList) {
    navList.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    navList.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX > touchStartX + 50) closeMenu();
      },
      { passive: true }
    );
  }

  // 5. SPLIDE INITIALIZATION
  if (document.querySelector("#image-carousel")) {
    const splide = new Splide("#image-carousel", {
      type: "loop",
      perPage: 3,
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      gap: "2rem",
      arrows: false,
      pagination: true,
      breakpoints: {
        992: { perPage: 2 },
        640: { perPage: 1 },
      },
    }).mount();

    if (btnNext) btnNext.addEventListener("click", () => splide.go(">"));
    if (btnPrev) btnPrev.addEventListener("click", () => splide.go("<"));
  }
});
