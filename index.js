console.log(`Смена изображений в секции portfolio +25
Перевод страницы на два языка +25
Переключение светлой и тёмной темы +25
Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5
Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5
`)


const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav-mobile--active');

})

menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-mobile-link')) {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav-mobile--active');
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

const block = ['body', '.container']

const toggleTheme = document.querySelector('.toggle-theme')

toggleTheme.addEventListener('click', function () {
  block.forEach(el => document.querySelector(el).classList.toggle('light-theme'))
  toggleTheme.classList.toggle('white-theme')
  const titleContainer = document.querySelectorAll('.title-container')
  const sectionTitle = document.querySelectorAll('.section-title')
  const tab = document.querySelectorAll('.tab-button')
  const btn = document.querySelectorAll('.btn')
  const linkMenu = document.querySelectorAll('.nav-link')
  const linkLang = document.querySelectorAll('.link-lang')

  sectionTitle.forEach(el => el.classList.toggle('light-theme'))
  titleContainer.forEach(el => el.classList.toggle('light-theme'))
  tab.forEach(el => el.classList.toggle('tab-ligth'))
  btn.forEach(el => el.classList.toggle('btn-ligth'))
  linkMenu.forEach(el => el.classList.toggle('link-ligth'))
  linkLang.forEach(el => el.classList.toggle('link-ligth'))
  const heroLigth = document.querySelector('.hero-inner')
  heroLigth.classList.toggle('link-ligth')

  const footer = document.querySelector('.footer')
  footer.classList.toggle('footer-theme')

  const navMobile = document.querySelector('.nav-mobile')
  navMobile.classList.toggle('nav-mobile-theme')
  const lineOne = document.querySelector('.line-one')
  const lineTree = document.querySelector('.line-three')
  lineOne.classList.toggle('black')
  lineTree.classList.toggle('black')
})


let lang = 'en'
let theme = 'light-theme'

function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('light-theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
  if (localStorage.getItem('light-theme')) {
    const theme = localStorage.getItem('light-theme');
    getTranslate(theme);
  }
}
window.addEventListener('load', getLocalStorage)

