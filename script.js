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

const translations = {
  hr: {
    "hero-title": "VIŠE OD FRIZURE",
    "hero-subtitle": "FRIZERSKI SALON K",
    "book-btn": "Rezerviraj termin",
    "nav-about": "O NAMA",
    "nav-services": "USLUGE I CIJENE",
  },
  en: {
    "hero-title": "MORE THAN A HAIRCUT",
    "hero-subtitle": "HAIR SALON K",
    "book-btn": "Book an Appointment",
    "nav-about": "ABOUT US",
    "nav-services": "SERVICES & PRICES",
  },
  de: {
    "hero-title": "MEHR ALS EIN HAARSCHNITT",
    "hero-subtitle": "FRISEURSALON K",
    "book-btn": "Termin buchen",
    "nav-about": "ÜBER UNS",
    "nav-services": "PREISE & LEISTUNGEN",
  },
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
