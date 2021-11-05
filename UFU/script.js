document.addEventListener('DOMContentLoaded', () => {

   const header = document.querySelector('.header').offsetHeight;
   const mainTab = document.querySelector('.main__tab');
   const main = document.querySelector('.main');
   const body = document.querySelector('.main__body');
   const info = document.querySelector('.main__info');
   const logo = document.querySelector('.header__logo');
   const scroll = document.querySelector('.wrapper--bottom');
   const link = document.querySelectorAll('.header__bottom--link');
   const stud = document.querySelectorAll('.stud');
   const tabRight = document.querySelector('.tab-right');
   const tabLeft = document.querySelector('.tab-left');
   const arrow = document.querySelector('.wrapper-arrow');
   // const items = document.querySelectorAll('.news__item');
   // const welcome = document.querySelector('.tab__body');
   // const welcomeTop = document.querySelector('.welcome__top');
   const welcomeItem = document.querySelectorAll('.welcome__item');
   const news = document.querySelector('.news');
   const infoItem = document.querySelectorAll('.info__item');
   const infoNummer = document.querySelectorAll('.info__nummer');
   const welcomeBottom = document.querySelector('.welcome__bottom');
   const welcomeAbout = document.querySelector('.welcome__about');
   const welcomeVideo = document.querySelector('.welcome__video');
   const faq__li = document.querySelectorAll('.faq__li');
   const teamText = document.querySelectorAll('.team-text');


   function counterWork() {
      let speed = 200;

      infoNummer.forEach(counter => {
         const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
               counter.innerText = Math.ceil(count + inc);
               setTimeout(updateCount, 1200);
            } else {
               count.innerText = target;
            }
         };
         updateCount();
      });
   }

   //****************************************** 
   setInterval(() => {
      mainTab.classList.add('_active');
      logo.style.transform = 'scale(1.2)';

   }, 700);
   setInterval(() => {
      info.classList.add('_active');
   }, 1200);

   //!!!!!!!!!!!!
   function dellActive() {
      link.forEach(element => {
         element.classList.remove('_active');
      });
      stud.forEach(element => {
         element.classList.remove('_active');
      });
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
      body.style.padding = '80px 0 0';
   }

   function scrollMain() {
      info.style.position = 'relative';
   }

   function scrollHeader() {
      let scrollTop = window.scrollY;
      if (scrollTop >= header) {
         scroll.style.opacity = '1';
         scroll.style.transition = 'all .8s ease';
         addActive();
         scrollMain();
      } else {
         scroll.style.opacity = '0';
         scroll.style.transition = 'all .1s ease';
         info.style.top = '0px';
         dellActive();
      }
   }

   function arrowLeft() {
      tabLeft.style.opacity = '0';
      tabRight.style.left = '0';
   }

   function arrowRight() {
      tabLeft.style.opacity = '1';
      tabRight.style.left = '100%';
   }
   const arrowL = document.querySelector('.arrow-prew');
   const arrowR = document.querySelector('.arrow-next');

   arrowL.addEventListener('click', arrowLeft);
   arrowR.addEventListener('click', arrowRight);

   function newsItems() {
      setInterval(() => {
         document.getElementById('item-1').classList.add('active');
      }, 500);
      setInterval(() => {
         document.getElementById('item-2').classList.add('active');
      }, 800);
      setInterval(() => {
         document.getElementById('item-3').classList.add('active');
      }, 1100);
   }

   const mainScroll = () => {
      let mainCenter = main.offsetHeight / 2;
      let scrollTop = window.scrollY;

      if (scrollTop >= mainCenter) {
         newsItems();
      }
   }

   const scrollAnimation = () => {
      let windowCenter = window.innerHeight + window.scrollY;

      welcomeItem.forEach(el => {
         let scrollOffSet = el.offsetTop + (el.offsetHeight / 2);

         if (windowCenter >= scrollOffSet) {
            el.classList.add('active');
         } else {
            el.classList.remove('active');
         }
      });
      faq__li.forEach(element => {
         
         let scrollOffset = element.offsetTop + (element.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				element.classList.add('animation-class');
			} else {
				element.classList.remove('animation-class');
			}
      });
      teamText.forEach(element => {
         let scrollOffset = element.offsetTop + (element.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				element.classList.add('animation-team');
			} else {
				element.classList.remove('animation-team');
			}
      });
   };
  

   const scrollWelcome = () => {

      let windowCenterWelcome = window.innerHeight + window.scrollY;
      let newsCenter = news.offsetTop + (news.offsetHeight + 200);

      if (windowCenterWelcome >= newsCenter) {
         welcomeAbout.classList.add('active');
         welcomeVideo.classList.add('active');

      } else {
         document.querySelector('.welcome__about').classList.remove('active');
      }
   };

   const scrollWelcomeItem = () => {
      let windowCenterItem = window.innerHeight + window.scrollY;
      let welcomeBottomCenter = ((welcomeBottom.offsetHeight) * 2) + welcomeBottom.offsetTop;
     /*  console.log(welcomeBottomCenter, '===', windowCenterItem); */

      if (windowCenterItem >= welcomeBottomCenter) {
         counterWork();
         document.querySelector('.info__title').classList.add('active');

         infoItem.forEach(el => {
            el.classList.add('active');

         });
      } else {
         document.querySelector('.info__title').classList.remove('active');
         infoItem.forEach(el => {
            el.classList.remove('active');
         });
      }
   };


   arrow.addEventListener('click', () => {
      document.getElementById('news').scrollIntoView({
         behavior: "smooth",
      });
      newsItems();

   });



   window.addEventListener('scroll', function name() {
      scrollHeader();
      mainScroll();
      scrollAnimation();
      scrollWelcome();
      scrollWelcomeItem();
   });

});