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


// Портфолио 3
const portfolioBtns = document.querySelector('.tabs');
const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-img');
const portfolioBtnAll = document.querySelectorAll('.portfolio-btn');


function changeImage(event) {
  if (event.target.classList.contains('portfolio-btn')) {
    let season = event.target.dataset.season
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    portfolioBtnAll.forEach((btn) => btn.classList.remove('active'))

    event.target.classList.add('active');
  }
}

portfolioBtns.addEventListener('click', changeImage)




// //  Кэширование изображение
// const seasons = ['winter', 'spring', 'summer', 'autumn'];
// function preloadSummerImages() {

//   for (let i = 1; i <= 6; i++) {
//     const img = new Image();
//     img.src = `./assets/img/${seasons[i]}/${i}.jpg`;
//     console / log(img)
//   }
// }
// preloadSummerImages();