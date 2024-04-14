function toggleMenu(e) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", toggleMenu);

const hamburgerMenu = document.querySelector(".menu-links");
const hamburgerLinks = hamburgerMenu.querySelectorAll("li");

for (const link of hamburgerLinks) {
  link.addEventListener("click", toggleMenu);
}




