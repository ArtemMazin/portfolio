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
      change.target.classList.add('animation_show');
    }
  });
}
let options = { threshold: [0.35] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');
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
