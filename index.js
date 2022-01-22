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


import i18Obj from './translate.js';


const languages = document.querySelectorAll('toggle-lang')
const languagRu = document.querySelectorAll('toggle-lang')
const languagEn = document.querySelectorAll('toggle-lang')

function getTranslate(event) {

  if (event.target.classList.contains('link-lang')) {
    let leng = event.target.dataset.leng


    portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    languages.forEach((a) => a.classList.remove('active'))
    event.target.classList.add('active');
  }

}

getTranslate(i18Obj)


languages.addEventListener('click', changeImage)
