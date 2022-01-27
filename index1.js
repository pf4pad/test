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




//  Кэширование изображение
const seasons = ['winter', 'spring', 'summer', 'autumn'];


seasons.forEach((season) => {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${season}/${i}.jpg`;
    console.log(img.src)
  }
})



// Перевод


import i18Obj from './translate.js';


const toggleLang = document.querySelector('.toggle-lang');
const linkLang = document.querySelectorAll('.link-lang');


function changeLang(event) {

  if (event.target.classList.contains('link-lang')) {

    linkLang.forEach(e => e.classList.remove('active'));

    event.target.classList.add('active')
    if (event.target.classList.contains('ru')) {
      getTranslate('ru')
    } else getTranslate('en')
  }

};

toggleLang.addEventListener('click', changeLang)

function getTranslate(lang) {
  const dataI18 = document.querySelectorAll('[data-i18]')
  dataI18.forEach(item => item.textContent = i18Obj[lang][item.dataset.i18])
  console.log(dataI18)
}


// Черная -светлая тема

const block = ['body', '.container', '.skills-container', '.portfolio-container', '.video-container', '.price-container']

const theme = document.querySelector('.theme')

theme.addEventListener('click', function () {
  block.forEach(el => document.querySelector(el).classList.toggle('light-theme'))
  theme.classList.toggle('chang-theme')
  const titleContainer = document.querySelectorAll('.title-container')
  const sectionTitle = document.querySelectorAll('.section-title')
  // const transparentBtn = document.querySelectorAll('.transparent-btn')
  // transparentBtn.forEach(el => el.classList.add('light-theme'))
  sectionTitle.forEach(el => el.classList.toggle('light-theme'))
  titleContainer.forEach(el => el.classList.toggle('titleContainer-light'))

  // if (window.matchMedia("(max-width: 768px)").matches) {
  //   navList.style.backgroundColor = 'white';
  // navList.style.color = 'black';

  // } 

})
