import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
// Option C: Core styles only (if you want to write all your own CSS)
// import '@splidejs/splide/css/core';
import { translations } from "../translations";

document.addEventListener("DOMContentLoaded", function () {
  // --- 1. SELECTORS ---
  const navBtns = document.querySelectorAll(".nav-btn");
  const mobileBtn = document.querySelector(".mobile-nav-toggle");
  const navList = document.querySelector(".nav-btns-list");
  const overlay = document.querySelector(".nav-overlay");

  const trigger = document.getElementById("lang-trigger");
  const optionsList = document.getElementById("lang-options");
  const currentFlagBox = document.querySelector(".current-flag");
  const currentTextBox = document.querySelector(".current-text");

  // --- 2. TRANSLATION LOGIC ---
  function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem("salonLang", lang);
  }

  // Initial setup: Load saved language or default to HR
  const savedLang = localStorage.getItem("salonLang") || "de";
  const initialOption = optionsList.querySelector(
    `li[data-value="${savedLang}"]`
  );

  if (initialOption) {
    currentFlagBox.innerHTML =
      initialOption.querySelector(".flag-svg").outerHTML;
    currentTextBox.innerText = initialOption.querySelector("span").innerText;
    changeLanguage(savedLang);
  }

  // --- 3. CUSTOM DROPDOWN LOGIC ---
  trigger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents window click from firing immediately
    optionsList.classList.toggle("show");
  });

  optionsList.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.getAttribute("data-value");
      console.log(lang, "lang");

      // Update Dropdown UI
      currentFlagBox.innerHTML = option.querySelector(".flag-svg").outerHTML;
      currentTextBox.innerText = option.querySelector("span").innerText;

      // Execute translation
      changeLanguage(lang);
      optionsList.classList.remove("show");
    });
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", () => optionsList.classList.remove("show"));

  // --- 4. MOBILE MENU LOGIC ---
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
    document.body.style.overflow = navList.classList.contains("active")
      ? "hidden"
      : "";
  };

  if (mobileBtn) mobileBtn.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  navBtns.forEach((button) => {
    button.addEventListener("click", () => {
      closeMenu();
      const targetId = button.dataset.target;
      const section = document.querySelector(`.${targetId}`);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // --- 5. SWIPE TO CLOSE ---
  let touchStartX = 0;
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
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX > touchStartX + 50) closeMenu();
      },
      { passive: true }
    );
  }

  // --- 6. SPLIDE INITIALIZATION ---
  if (document.querySelector("#image-carousel")) {
    const splide = new Splide("#image-carousel", {
      type: "loop",
      perPage: 3,
      lazyLoad: "nearby",
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      gap: "2rem",
      arrows: false,
      pagination: true,
      breakpoints: {
        992: { perPage: 2 },
        640: { perPage: 1 },
      },
    }).mount();

    const btnNext = document.querySelector(".button-right");
    const btnPrev = document.querySelector(".button-left");
    if (btnNext) btnNext.addEventListener("click", () => splide.go(">"));
    if (btnPrev) btnPrev.addEventListener("click", () => splide.go("<"));
  }
});
