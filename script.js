// const toggleButton = document.querySelector('.nav-toggle');
// const navMenu = document.querySelector('.nav-menu');
// const navLinks = document.querySelectorAll('.nav-menu a');

// const englishPage = document.getElementById("english");
// const arabicPage = document.getElementById("arabic");
// const englishBtn = document.getElementById("en");
// const arabicBtn = document.getElementById("ar");

// arabicBtn.addEventListener("click",function(){
//   arabicPage.classList.add("active");
//   englishPage.classList.remove("active");
// })
// englishBtn.addEventListener("click",function(){
//   englishPage.classList.add("active");
//   arabicPage.classList.remove("active");
// })
// toggleButton.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
// });
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     navMenu.classList.remove('active');
//   });
// });

// Language toggle buttons
const englishBtn = document.getElementById("en");
const arabicBtn = document.getElementById("ar");

// Sections for English and Arabic
const englishPage = document.getElementById("english");
const arabicPage = document.getElementById("arabic");

// Function to switch to Arabic
arabicBtn.addEventListener("click", function () {
  arabicPage.classList.add("active");
  englishPage.classList.remove("active");
  setupNavToggle(arabicPage); // Set up toggle for Arabic nav
});

// Function to switch to English
englishBtn.addEventListener("click", function () {
  englishPage.classList.add("active");
  arabicPage.classList.remove("active");
  setupNavToggle(englishPage); // Set up toggle for English nav
});

// Function to set up nav toggle for the active section
function setupNavToggle(activeSection) {
  const toggleButton = activeSection.querySelector(".nav-toggle");
  const navMenu = activeSection.querySelector(".nav-menu");
  const navLinks = activeSection.querySelectorAll(".nav-menu a");

  // Remove existing event listeners (if any)
  if (toggleButton._clickListener) {
    toggleButton.removeEventListener("click", toggleButton._clickListener);
  }
  navLinks.forEach((link) => {
    if (link._clickListener) {
      link.removeEventListener("click", link._clickListener);
    }
  });

  // Toggle the nav menu when the button is clicked
  if (toggleButton) {
    const toggleClickListener = () => {
      navMenu.classList.toggle("active");
    };
    toggleButton.addEventListener("click", toggleClickListener);
    toggleButton._clickListener = toggleClickListener; // Store the listener for removal later
  }

  // Close the nav menu when any link inside it is clicked
  if (navLinks) {
    navLinks.forEach((link) => {
      const linkClickListener = () => {
        navMenu.classList.remove("active");
      };
      link.addEventListener("click", linkClickListener);
      link._clickListener = linkClickListener; // Store the listener for removal later
    });
  }
}

// Set default language on page load
window.addEventListener("load", function () {
  englishPage.classList.add("active"); // Show English by default
  setupNavToggle(englishPage); // Set up toggle for English nav
});