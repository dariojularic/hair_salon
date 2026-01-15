// import Splide from "@splidejs/splide";
// import "@splidejs/splide/css";
// import { translations } from "../translations";
// import { inject, track } from "@vercel/analytics";
// import { injectSpeedInsights } from "@vercel/speed-insights";

// inject();
// injectSpeedInsights();

// document.addEventListener("DOMContentLoaded", () => {
//   const bookBtn = document.querySelector(".white-cta-btn");

//   if (bookBtn) {
//     bookBtn.addEventListener("click", () => {
//       track("Appointment_Click", { location: "Hero Section" });
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // --- 1. SELECTORS ---
//   const navBtns = document.querySelectorAll(".nav-btn");
//   const mobileBtn = document.querySelector(".mobile-nav-toggle");
//   const navList = document.querySelector(".nav-btns-list");
//   const overlay = document.querySelector(".nav-overlay");

//   const trigger = document.getElementById("lang-trigger");
//   const optionsList = document.getElementById("lang-options");
//   const currentFlagBox = document.querySelector(".current-flag");
//   const currentTextBox = document.querySelector(".current-text");

//   // --- 2. TRANSLATION LOGIC ---
//   function changeLanguage(lang) {
//     document.documentElement.lang = lang;
//     const elements = document.querySelectorAll("[data-i18n]");
//     elements.forEach((el) => {
//       const key = el.getAttribute("data-i18n");
//       if (translations[lang] && translations[lang][key]) {
//         el.textContent = translations[lang][key];
//       }
//     });
//     localStorage.setItem("salonLang", lang);
//   }

//   // Initial setup: Load saved language or default to HR
//   const savedLang = localStorage.getItem("salonLang") || "de";
//   const initialOption = optionsList.querySelector(
//     `li[data-value="${savedLang}"]`
//   );

//   if (initialOption) {
//     currentFlagBox.innerHTML =
//       initialOption.querySelector(".flag-svg").outerHTML;
//     currentTextBox.innerText = initialOption.querySelector("span").innerText;
//     changeLanguage(savedLang);
//   }

//   // --- 3. CUSTOM DROPDOWN LOGIC ---
//   trigger.addEventListener("click", (e) => {
//     e.stopPropagation(); // Prevents window click from firing immediately
//     optionsList.classList.toggle("show");
//   });

//   optionsList.querySelectorAll("li").forEach((option) => {
//     option.addEventListener("click", () => {
//       const lang = option.getAttribute("data-value");
//       console.log(lang, "lang");

//       // Update Dropdown UI
//       currentFlagBox.innerHTML = option.querySelector(".flag-svg").outerHTML;
//       currentTextBox.innerText = option.querySelector("span").innerText;

//       // Execute translation
//       changeLanguage(lang);
//       optionsList.classList.remove("show");
//     });
//   });

//   // Close dropdown when clicking outside
//   window.addEventListener("click", () => optionsList.classList.remove("show"));

//   // --- 4. MOBILE MENU LOGIC ---
//   const closeMenu = () => {
//     if (!mobileBtn || !navList) return;
//     mobileBtn.classList.remove("active");
//     navList.classList.remove("active");
//     if (overlay) overlay.classList.remove("active");
//     document.body.style.overflow = "";
//   };

//   const toggleMenu = () => {
//     mobileBtn.classList.toggle("active");
//     navList.classList.toggle("active");
//     if (overlay) overlay.classList.toggle("active");
//     document.body.style.overflow = navList.classList.contains("active")
//       ? "hidden"
//       : "";
//   };

//   if (mobileBtn) mobileBtn.addEventListener("click", toggleMenu);
//   if (overlay) overlay.addEventListener("click", closeMenu);

//   navBtns.forEach((button) => {
//     button.addEventListener("click", () => {
//       closeMenu();
//       const targetId = button.dataset.target;
//       const section = document.querySelector(`.${targetId}`);
//       if (section) section.scrollIntoView({ behavior: "smooth" });
//     });
//   });

//   // --- 5. SWIPE TO CLOSE ---
//   let touchStartX = 0;
//   if (navList) {
//     navList.addEventListener(
//       "touchstart",
//       (e) => {
//         touchStartX = e.changedTouches[0].screenX;
//       },
//       { passive: true }
//     );

//     navList.addEventListener(
//       "touchend",
//       (e) => {
//         const touchEndX = e.changedTouches[0].screenX;
//         if (touchEndX > touchStartX + 50) closeMenu();
//       },
//       { passive: true }
//     );
//   }

//   // --- 6. SPLIDE INITIALIZATION ---
//   if (document.querySelector("#image-carousel")) {
//     const splide = new Splide("#image-carousel", {
//       type: "loop",
//       perPage: 3,
//       lazyLoad: "nearby",
//       autoplay: true,
//       interval: 5000,
//       pauseOnHover: true,
//       gap: "2rem",
//       arrows: false,
//       pagination: true,
//       breakpoints: {
//         992: { perPage: 2 },
//         640: { perPage: 1 },
//       },
//     }).mount();

//     const btnNext = document.querySelector(".button-right");
//     const btnPrev = document.querySelector(".button-left");
//     if (btnNext) btnNext.addEventListener("click", () => splide.go(">"));
//     if (btnPrev) btnPrev.addEventListener("click", () => splide.go("<"));
//   }
// });

// // druga verzija

import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { translations } from "../translations";
import { inject, track } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

// 1. IMMEDIATE EXECUTION (Don't wait for DOM for analytics)
inject();
injectSpeedInsights();

document.addEventListener("DOMContentLoaded", () => {
  // --- 2. SELECTORS ---
  const selectors = {
    navBtns: document.querySelectorAll(".nav-btn"),
    mobileBtn: document.querySelector(".mobile-nav-toggle"),
    navList: document.querySelector(".nav-btns-list"),
    overlay: document.querySelector(".nav-overlay"),
    langTrigger: document.getElementById("lang-trigger"),
    langOptions: document.getElementById("lang-options"),
    currentFlag: document.querySelector(".current-flag"),
    currentText: document.querySelector(".current-text"),
    bookBtn: document.querySelector('.white-cta-btn'),
    carousel: document.querySelector("#image-carousel")
  };

  // --- 3. ANALYTICS TRACKING ---
  if (selectors.bookBtn) {
    selectors.bookBtn.addEventListener('click', () => {
      track('Appointment_Click', { location: 'Hero Section' });
    });
  }

  // --- 4. TRANSLATION & LANGUAGE LOGIC ---
  const updateUIStrings = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang]?.[key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem("salonLang", lang);
  };

  const setDropdownUI = (liElement) => {
    if (!liElement) return;
    selectors.currentFlag.innerHTML = liElement.querySelector(".flag-svg").outerHTML;
    selectors.currentText.innerText = liElement.querySelector("span").innerText;
  };

  // Init Language
  const savedLang = localStorage.getItem("salonLang") || "de";
  const initialOption = selectors.langOptions?.querySelector(`li[data-value="${savedLang}"]`);
  if (initialOption) {
    setDropdownUI(initialOption);
    updateUIStrings(savedLang);
  }

  // Dropdown Toggle
  selectors.langTrigger?.addEventListener("click", (e) => {
    e.stopPropagation();
    selectors.langOptions.classList.toggle("show");
  });

  selectors.langOptions?.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.getAttribute("data-value");
      setDropdownUI(option);
      updateUIStrings(lang);
      selectors.langOptions.classList.remove("show");
    });
  });

  window.addEventListener("click", () => selectors.langOptions?.classList.remove("show"));

  // --- 5. NAVIGATION LOGIC ---
  const toggleMenu = (forceClose = false) => {
    const shouldOpen = forceClose ? false : !selectors.navList.classList.contains("active");

    [selectors.mobileBtn, selectors.navList, selectors.overlay].forEach(el => {
      el?.classList.toggle("active", shouldOpen);
    });

    document.body.style.overflow = shouldOpen ? "hidden" : "";
  };

  selectors.mobileBtn?.addEventListener("click", () => toggleMenu());
  selectors.overlay?.addEventListener("click", () => toggleMenu(true));

  selectors.navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleMenu(true);
      const section = document.querySelector(`.${btn.dataset.target}`);
      section?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // --- 6. SPLIDE INITIALIZATION ---
  if (selectors.carousel) {
    const splide = new Splide(selectors.carousel, {
      type: "loop",
      perPage: 3,
      lazyLoad: "nearby", // Critical for LCP/Performance
      autoplay: true,
      interval: 5000,
      gap: "2rem",
      arrows: false,
      pagination: true,
      breakpoints: {
        992: { perPage: 2 },
        640: { perPage: 1 },
      },
    }).mount();

    document.querySelector(".button-right")?.addEventListener("click", () => splide.go(">"));
    document.querySelector(".button-left")?.addEventListener("click", () => splide.go("<"));
  }
});
