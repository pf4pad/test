console.log(`Вёрстка соответствует макету. Ширина экрана 768px +48
нет полосы прокрутки при ширине страницы 
При ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2
при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4
высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4
при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4
бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2
при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4
Критер
Итого 100`)


const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');
})

menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-link')) {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
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
  }
})



// Перевод


import i18Obj from './translate.js';


<<<<<<< HEAD
const toggleLang = document.querySelector('.toggle-lang');
const linkLang = document.querySelectorAll('.link-lang');

=======
const languages = document.querySelector('toggle-lang')
const languagRu = document.dataset('en')
const languagEn = document.dataset('ru')
>>>>>>> 4e5c1bfbfe94607af5c1f871f8069bd7f941ec02

function changeLang(event) {

  if (event.target.classList.contains('link-lang')) {
<<<<<<< HEAD
=======
    // let lang = event.target.dataset.lang
>>>>>>> 4e5c1bfbfe94607af5c1f871f8069bd7f941ec02

    linkLang.forEach(e => e.classList.remove('active'));

<<<<<<< HEAD
    event.target.classList.add('active')
    if (event.target.classList.contains('ru')) {
      getTranslate('ru')
    } else getTranslate('en')
=======
    languages.forEach((a) => a.classList.remove('lang-active'))
    event.target.classList.add('lang-active');
    console.log('true')
>>>>>>> 4e5c1bfbfe94607af5c1f871f8069bd7f941ec02
  }

};

toggleLang.addEventListener('click', changeLang)

function getTranslate(lang) {
  const dataI18 = document.querySelectorAll('[data-i18]')
  dataI18.forEach(item => item.textContent = i18Obj[lang][item.dataset.i18])
  console.log(dataI18)
}

<<<<<<< HEAD
=======
// getTranslate(i18Obj)


languages.addEventListener('click', getTranslate())

// const body = document.getElementById('body');
// const toggle = document.getElementById('toggle');
// const moon = document.getElementById('moon');
// const sunBody = document.getElementById('sun');
>>>>>>> 4e5c1bfbfe94607af5c1f871f8069bd7f941ec02

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

<<<<<<< HEAD
  // if (window.matchMedia("(max-width: 768px)").matches) {
  //   navList.style.backgroundColor = 'white';
  // navList.style.color = 'black';

  // } 

})
=======
>>>>>>> 4e5c1bfbfe94607af5c1f871f8069bd7f941ec02
