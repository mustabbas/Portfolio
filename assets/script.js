let humberger = document.getElementById("humberger");
let closeButton = document.getElementById("closeButton");

let mobileNav = document.querySelector(".mobile-menu-wrap");
let container = document.querySelector(".container");
let container2 = document.querySelector(".footer-nav");
let container3 = document.querySelector(".recent-work ");
let container4 = document.querySelector(".card-container");

humberger.addEventListener("click", function () {
  mobileNav.classList.remove("display-none");
  container.classList.add("display-none");
  container2.classList.add("display-none");
  container3.classList.add("display-none");
  container4.classList.add("display-none");
});

closeButton.addEventListener("click", function () {
  mobileNav.classList.add("display-none");
  container.classList.remove("display-none");
  container2.classList.remove("display-none");
  container3.classList.remove("display-none");
  container4.classList.remove("display-none");
});
