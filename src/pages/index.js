'use strict';

//Параллакс
const profileSection = document.querySelector('.profile');
const bg = profileSection.querySelector('.profile__background');
const avatar = profileSection.querySelector('.profile__avatar');
function parallax(event) {
  bg.style.transform = `translate(${event.clientX / 60}px, ${
    event.clientY / 60
  }px`;
  avatar.style.transform = `translate(${event.clientX / 30}px, ${
    event.clientY / 30
  }px)`;
}
profileSection.addEventListener('mousemove', parallax);

//Подгрузка контента при скролле
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('animation-right_show');
    }
  });
}
let options = { threshold: [0.35] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation-right');
for (let elm of elements) {
  observer.observe(elm);
}

//Плавная прокрутка
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrap',
  content: '.content',
  smooth: 2,
  effects: true,
});

//якорные ссылки
const scrollAbout = document.querySelector('#about-link');
scrollAbout.addEventListener('click', () => {
  gsap.to(window, { duration: 0.5, scrollTo: '.profile', ease: 'elastic' });
});
const scrollSkills = document.querySelector('#skills-link');
scrollSkills.addEventListener('click', () => {
  gsap.to(window, { duration: 0.5, scrollTo: '.skills', ease: 'elastic' });
});
const scrollWorks = document.querySelector('#works-link');
scrollWorks.addEventListener('click', () => {
  gsap.to(window, { duration: 0.5, scrollTo: '.works', ease: 'elastic' });
});
const scrollContacts = document.querySelector('#contacts-link');
scrollContacts.addEventListener('click', () => {
  gsap.to(window, { duration: 0.5, scrollTo: '.footer', ease: 'elastic' });
});

//Опасити и сближение при скролле
let itemsL = gsap.utils.toArray('.gallery__left li');

itemsL.forEach((item) => {
  gsap.fromTo(
    item,
    { x: -100, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-700',
        end: '-150',
        scrub: true,
      },
    }
  );
});
let itemsR = gsap.utils.toArray('.gallery__right li');
itemsR.forEach((item) => {
  gsap.fromTo(
    item,
    { x: 100, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-700',
        end: '-150',
        scrub: true,
      },
    }
  );
});

//Слайдер
let slider1 = new Swiper('.slider1', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.5,
});
let slider2 = new Swiper('.slider2', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.5,
});
let slider3 = new Swiper('.slider3', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.5,
});
let slider4 = new Swiper('.slider4', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.5,
});
bindSwipers(slider1, slider2, slider3, slider4);
