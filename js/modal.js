const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOpenBtn = document.querySelector(".mobile-menu-open-btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");

const backdrop = document.querySelector(".backdrop");
const openModalWindow = document.querySelector(".open-btn");
const closeModalWindow = document.querySelector(".close-btn");

// Mobile menu
mobileMenuOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

// Modal
openModalWindow.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

closeModalWindow.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});

// Close modal by clicking backdrop
backdrop.addEventListener("click", e => {
  if (e.target === backdrop) {
    backdrop.classList.remove("is-open");
  }
});

// Close modal by Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
    backdrop.classList.remove("is-open");
  }
});