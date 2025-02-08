const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle the nav menu when the button is clicked
toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close the nav menu when any link inside it is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});