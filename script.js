const burger = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  // Check if user is scrolling down
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav-hidden");
        if (nav.classList.contains("open")) {
            burger.click();
        } 
    }

  // Check if user is scrolling up
  else {
    nav.classList.remove("nav-hidden");
  }
  
  // Update the last scroll position
  lastScrollY = window.scrollY;
});