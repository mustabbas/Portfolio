const humberger = document.getElementById('humberger');
const closeButton = document.getElementById('closeButton');
const menuItem = document.querySelectorAll('#portoflio,#about,#contact');
const mobileNav = document.querySelector('.mobile-menu-wrap');
const seeProjectButton = document.querySelectorAll('.see-project-button');
const popUp = document.querySelector('.popup-wrap');
const popUpCloseButton = document.querySelector('#popup-close-button');
const bodyWrapper = document.querySelector('#body-wrapper');
const popupcardheader = document.querySelector('#popup-card-header');
const popupCardImg = document.querySelector('#popup-card-img');
const popupCardDescription = document.querySelector('#popup-card-description');

const form = document.querySelector('#aboutmeForm');
const email = document.querySelector('#email');
const errorSpan = document.querySelector('.errorSpan');

const objectcard1 = {
  name: 'Multi-post story1',
  image: './assets/img/WorkPopup.png',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
};
const objectcard2 = {
  name: 'Multi-post story2',
  image: './assets/img/WorkPopup.png',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
};
const objectcard3 = {
  name: 'Multi-post story3',
  image: './assets/img/WorkPopup.png',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
};
const objectcard4 = {
  name: 'Multi-post story4'
  image: './assets/img/WorkPopup.png',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
};
const objectcard5 = {
  name: 'Multi-post story5',
  image: './assets/img/WorkPopup.png',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
};

const objectCard = [
  objectcard1,
  objectcard2,
  objectcard3,
  objectcard4,
  objectcard5,
];

function toggleMenu() {
  mobileNav.classList.toggle('display-none');
  bodyWrapper.classList.toggle('display-none');
}

function togglePopup(i) {
  popUp.classList.toggle('display-none');
  bodyWrapper.classList.toggle('display-none');
  popupcardheader.textContent = objectCard[i].name;
  popupCardImg.src = objectCard[i].image;
  popupCardDescription.textContent = objectCard[i].description;
}

function checkEmailLowerCase(event) {
  const lowerCase = email.value.toLowerCase();
  if (lowerCase !== email.value) {
    event.preventDefault();
    errorSpan.classList.remove('display-none');
    errorSpan.textContent = 'email should not content upper case';
  } else {
    errorSpan.classList.add('display-none');
    errorSpan.textContent = '';
  }
}

humberger.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
menuItem.forEach((element) => {
  element.addEventListener('click', toggleMenu);
});

for (let i = 0; i < seeProjectButton.length; i += 1) {
  seeProjectButton[i].addEventListener('click', () => {
    togglePopup(i);
  });
}

popUpCloseButton.addEventListener('click', togglePopup);

form.addEventListener('submit', (event) = {
  checkEmailLowerCase(event);
});
