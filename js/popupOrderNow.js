const buttonsOrderNow = document.querySelectorAll('.button_order');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');

buttonsOrderNow.forEach((button) =>
  button.addEventListener('click', () => {
    popup.classList.toggle('popup_open');
    nav.classList.remove('show');
  }),
);

popupClose.addEventListener('click', () => {
  popup.classList.remove('popup_open');
});
