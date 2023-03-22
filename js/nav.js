const navToggle = document.querySelector('.header_nav--toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', (event) => {
  nav.classList.toggle('show');
});

nav.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('header_nav--link')) {
    nav.classList.remove('show');
  }
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!nav.contains(target) && target.parentNode !== navToggle) {
    nav.classList.remove('show');
  }
});
