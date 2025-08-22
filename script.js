const burger = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("open");
  burger.textContent = nav.classList.contains("open") ? "✖" : "☰";
}

burger.addEventListener("click", toggleMenu);

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && screen.width < 768) {
    nav.classList.add("nav-hidden");
    if (nav.classList.contains("open")) {
      toggleMenu();
    }
  }
  else {
    nav.classList.remove("nav-hidden");
  }

  lastScrollY = window.scrollY;
});

const navLinks = document.querySelectorAll(".nav-links");
navLinks.forEach(li => {
  li.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      toggleMenu();
    }
    const link = li.querySelector("a");
    if (link) {
      link.click();
    }
  });
});