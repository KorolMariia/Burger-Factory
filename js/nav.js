const navToggle = document.querySelector('.header_nav--toggle');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('.header_nav--link');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

navItems.forEach((item) => {
  item.addEventListener('click', function () {
    nav.classList.remove('show');
  });
});

// document.body.addEventListener('click', function (event) {
//   const isClickInsideMenu = nav.contains(event.target);
//   if (!isClickInsideMenu && nav.classList.contains('show')) {
//     nav.classList.remove('show');
//   }
// });
