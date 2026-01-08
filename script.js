const navBtns = document.querySelectorAll(".nav-btn");
const mobileBtn = document.querySelector('.mobile-nav-toggle');
const navList = document.querySelector('.nav-btns-list');
const overlay = document.querySelector('.nav-overlay');






const closeMenu = () => {
  mobileBtn.classList.remove('active');
  navList.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = ''; // Re-enable scrolling
};

// --- 2. Toggle and Click Events ---
mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  navList.classList.toggle('active');
  overlay.classList.toggle('active');

  // Disable background scroll when menu is open
  if (navList.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

overlay.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

// --- 3. Swipe to Close Logic ---
let touchStartX = 0;
let touchEndX = 0;

navList.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

navList.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  // If the swipe moves more than 50px to the right, close it
  if (touchEndX > touchStartX + 50) {
    closeMenu();
  }
}













// Toggle Menu Open/Close
mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  navList.classList.toggle('active');
});

// Close Menu when a link is clicked
navBtns.forEach(link => {
  link.addEventListener('click', () => {
    mobileBtn.classList.remove('active');
    navList.classList.remove('active');
  });
});


navBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = button.dataset.target;
    const section = document.querySelector(`.${targetId}`);
    if (!section) return;
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#image-carousel', {
    type   : 'loop',
    perPage: 3,
    gap    : '2rem',
    arrows : false,
    pagination: true,
    breakpoints: {
      992: { perPage: 2 },
      640: { perPage: 1 },
    },
  }).mount();

  const btnNext = document.querySelector('.button-right');
  const btnPrev = document.querySelector('.button-left');

  btnNext.addEventListener('click', () => splide.go('>'));
  btnPrev.addEventListener('click', () => splide.go('<'));
});
