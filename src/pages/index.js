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
let options = { threshold: [0.4] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');
for (let elm of elements) {
  observer.observe(elm);
}
