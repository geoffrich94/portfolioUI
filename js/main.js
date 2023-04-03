// Select and store UI elements that are interacted with or manipulated
const burgerBar = document.getElementById('burger-bar');
const navbar = document.querySelector('.navbar');
const navbarContent = document.querySelector('.navbar__content');

burgerBar.addEventListener('click', () => {
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
})