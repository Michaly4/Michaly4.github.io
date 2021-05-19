const header = document.querySelector('.header').offsetHeight;
const mainTab = document.querySelector('.main__tab');
const main = document.querySelector('.main');
const body = document.querySelector('.main__body');
const info = document.querySelector('.main__info');
const logo = document.querySelector('.header__logo');
const scroll = document.querySelector('.wrapper--bottom');
const link = document.querySelectorAll('.header__bottom--link');
const stud = document.querySelectorAll('.stud');


setInterval(() => {
   mainTab.classList.add('_active');
   logo.style.transform = 'scale(1.2)';

}, 700);
setInterval(() => {
   info.classList.add('_active');
}, 1200);

function dellActive() {
   link.forEach(element => {
      element.classList.remove('_active');
   });
   stud.forEach(element => {
      element.classList.remove('_active');
   });
   /*  body.style.top = '0';*/
   body.style.padding = '0';
   body.style.transition = 'all 1s ease';

}

function addActive() {
   link.forEach(element => {
      element.classList.add('_active');
   });
   stud.forEach(element => {
      element.classList.add('_active');
   });

   /*   body.style.position = 'relative';
     body.style.top = '50px'; */
   body.style.padding = '80px 0 0';
}

function scrollMain() {
   info.style.position = 'relative';
   info.style.top = '70px';
   /*  info.style.transition = 'all 0.8s infinite'; */
}


window.addEventListener('scroll', () => {

   let scrollTop = window.scrollY;
   if (scrollTop >= header) {
      /*  scroll.style.display = 'flex'; */
      scroll.style.opacity = 1;
      scroll.style.transition = 'all .8s ease';
      addActive();
      scrollMain();

   } else {
      /*  scroll.style.display = 'none'; */
      scroll.style.opacity = 0;
      scroll.style.transition = 'all .1s ease';
      info.style.top = '0px';
      dellActive();
   }
});
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;


console.log(mainElementWidth);
console.log(mainElementHeight);
