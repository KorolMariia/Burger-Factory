const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

window.addEventListener('scroll', () => {
  window.pageYOffset > 100
    ? scrollToTopBtn.classList.add('show')
    : scrollToTopBtn.classList.remove('show');
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
