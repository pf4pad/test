console.log(`Вёрстка валидная +10
Вёрстка семантическая + 20
Вёрстка соответствует макету + 48
Требования к css + 12
Интерактивность, реализуемая через css + 20
Итого 100`)

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');

  if (burger.classList.contains('burger--active')) {
    header.body.style.opacity = '0.7';
    nav.body.style.opacity = '0.7';

  } else {
    document.body.style.opacity = '1';
  }
})

menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-link')) {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    document.body.style.opacity = '1';
  }
})
