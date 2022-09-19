const header = document.querySelector(".header--nav");
const ham = document.querySelector(".ham");
const navMenu = document.querySelector(".header--nav-menu");
const rows = document.querySelectorAll(".ham span")

ham.addEventListener('click', () => {
  header.classList.toggle("bgBlack")
  navMenu.classList.toggle("active")
  rows.forEach( c => c.classList.toggle("animation"))
})