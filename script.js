const burger = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

// A reusable function to toggle the menu's state
function toggleMenu() {
  nav.classList.toggle("open");
  burger.textContent = nav.classList.contains("open") ? "✖" : "☰";
}

// Mobile menu toggle on burger click
burger.addEventListener("click", toggleMenu);

// Hide nav on scroll up
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  // Check if user is scrolling down
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden");
    // If the menu is open, close it on scroll down
    if (nav.classList.contains("open")) {
      toggleMenu();
    }
  }
  // Check if user is scrolling up
  else {
    nav.classList.remove("nav-hidden");
  }

  // Update the last scroll position
  lastScrollY = window.scrollY;
});

// Get all the navigation list items
const navLinks = document.querySelectorAll(".nav-links");

// Loop through each list item and add a click event listener
navLinks.forEach(li => {
  li.addEventListener("click", () => {
    // Close the menu if it's open on link click
    if (nav.classList.contains("open")) {
      toggleMenu();
    }
    
    // Find the anchor tag and click it
    const link = li.querySelector("a");
    if (link) {
      link.click();
    }
  });
});