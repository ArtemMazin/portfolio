'use strict';

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

// function parallaxByScroll(event) {
//   console.log(bg.style);
//   bg.style.transform = `translateY(${event.clientX / 60}px)`;
//   avatar.style.transform = `translateY(${event.clientX / 30}px)`;
// }
// document.addEventListener('scroll', parallaxByScroll);
