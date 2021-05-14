const header = document.getElementById('header');
const wrapper = document.querySelector('.wrapper');
const about = document.querySelectorAll('.uber');
const main = document.querySelector('.main__tab');
const info = document.querySelector('.main__info');
const logo = document.querySelector('.header__logo');

/* /* setInterval(() => {
   wrapper.style.background = 'rgba(0, 0, 0, 0)';
},5000); */
setInterval(() => {
  /*  wrapper.style.background = 'rgba(0, 0, 0, 0.4)'; */
main.classList.add('_active');
logo.style.transform = 'scale(1.2)';
}, 700); 
setInterval(() => {
   info.classList.add('_active');
}, 1200);
