let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav_hidden");
menu.onclick = function () {
  nav.classList.toggle("nav");
  nav.classList.toggle("nav_hidden");
};
