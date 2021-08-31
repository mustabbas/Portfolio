const humberger = document.getElementById('humberger');
const closeButton = document.getElementById('closeButton');
const portoflio = document.getElementById('portoflio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

const mobileNav = document.querySelector('.mobile-menu-wrap');
const container = document.querySelector('.container');
const container2 = document.querySelector('.footer-nav');
const container3 = document.querySelector('.recent-work ');
const container4 = document.querySelector('.card-container');

function displayMenu() {
  mobileNav.classList.add('display-none');
  container.classList.remove('display-none');
  container2.classList.remove('display-none');
  container3.classList.remove('display-none');
  container4.classList.remove('display-none');
}

function hideMenu() {
  mobileNav.classList.remove('display-none');
  container.classList.add('display-none');
  container2.classList.add('display-none');
  container3.classList.add('display-none');
  container4.classList.add('display-none');
}

humberger.addEventListener('click', hideMenu);

closeButton.addEventListener('click', displayMenu);

portoflio.addEventListener('click', displayMenu);
about.addEventListener('click', displayMenu);
contact.addEventListener('click', displayMenu);
