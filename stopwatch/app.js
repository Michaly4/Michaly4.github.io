const getS = selector => document.querySelector(selector);
const data = document.querySelector('.data');
const hours = document.querySelector('.hours');


setTimeout(() => {
   const date = new Date();
   let dd = date.getDate();
   if (dd < 10) dd = '0' + dd;
   let mm = date.getMonth() + 1;
   if (mm < 10) mm = '0' + mm;
   let yy = date.getFullYear();
   if (yy < 10) yy = '0' + yy;
   data.textContent = `${dd} . ${mm} . ${yy}`;
});

setInterval(() => {
   const now = new Date();
   let hour = now.getHours(),
      minute = now.getMinutes(),
      second = now.getSeconds();
   hour = (hour < 10) ? '0' + hour : hour;
   minute = (minute < 10) ? '0' + minute : minute;
   second = (second < 10) ? '0' + second : second;
   hours.innerHTML = `${hour} : ${minute} : ${second}`;
});


const watch = document.querySelector('#watch');
/* let area = document.querySelector('.area').innerHTML; */
let milliseconds = 0;
let timer;

const startWatch = () => {
   // watch.classList.remove('paused');
   clearInterval(timer);
   timer = setInterval(() => {
      milliseconds += 10;
      let dateTimer = new Date(milliseconds);
      watch.innerHTML =
         ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
         ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
         ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
         ('0' + dateTimer.getUTCMilliseconds()).slice(-3);
   }, 10);
};

const stopWatch = () => {
   // watch.classList.add('paused');
   /*   area = watch.innerHTML; */
   clearInterval(timer);
   document.getElementById('loop').disabled = false;
};
const resetWatch = () => {
   // watch.classList.remove('paused');
   clearInterval(timer);
   milliseconds = 0;
   watch.innerHTML = '00:00:00:000';
  /*  while(area.firstChild){
      area.removeChild(area.firstChild);
   } */
   area.innerHTML = '';
};
/* const clearArea = () =>{
   area.innerHTML = '';
}; */

let area = getS('.area');
document.addEventListener('click', function name(e) {
   const element = e.target;
   if (element.id === 'start') startWatch();
   if (element.id === 'stop') stopWatch();
   if (element.id === 'reset') resetWatch(); //clearArea();
   if (element.id === 'loop') {
      let h2 = document.createElement('h5');
      h2.innerHTML = watch.innerHTML;
      area.append(h2);
      document.getElementById('loop').disabled = true;
   }
});

let count = getS('.counter').innerHTML;
getS('#plus').addEventListener('click',function name(params) {
   let count = +getS('.counter').innerHTML;
   if(count < 0 && count >=0 ){
      count = '0' + count + 1;
   }
   else {
      getS('.counter').innerHTML = count+1;
   }
});
getS('#minus').addEventListener('click',function name(params) {
   if(count>10){
      let min = +getS('.counter').innerHTML-1;
      if(min <= -1 && count > 0){
         min = '0' + min ;
      }
     
      else {
         getS('.counter').innerHTML = min;
      }
   }
});

let countMin = count;
let countInterval;
let countSec = 0;
let check = true;
document.querySelector('.start').addEventListener('click',function name(params) {
   if(check){
      if(+getS('.counter').innerHTML < 10){
         getS('.countMin').innerHTML = '0' +(+getS('.counter').innerHTML);
      }
      else {
         getS('.countMin').innerHTML = +getS('.counter').innerHTML ;
      }
   }
   startTimer();
   getS('.start').disabled = true;
   getS('.stop').disabled = false;
   getS('.reset').disabled = true;
});
document.querySelector('.stop').addEventListener('click',function name(params) {
   clearTimeout(countInterval);
   getS('.start').disabled = false;
   getS('.stop').disabled = true;
   getS('.reset').disabled = false;
   check = false;
});
document.querySelector('.reset').addEventListener('click',function name(params) {
   countMin = 0;
   countSec = 0;
   getS('.countMin').innerHTML = '00';
   getS('.countSec').innerHTML = '00';
   check = true;
});

function startTimer(params) {
   countMin = +getS('.countMin').innerHTML;
   countSec = +getS('.countSec').innerHTML;
   countInterval = setTimeout(() => {
      countSec--;
      if (countSec === 0 && countMin === 0){
         getS('.countSec').innerHTML = '00';
         check = true;
         return;
      }
      if (countSec < 0){
         countSec = 59;
         if(countMin > 0){
            countMin--;
         }
      }
      if (countMin < 10){
         countMin = '0' + countMin;
      }
      if(countSec < 10) {
         countSec = '0' + countSec;
      }
      getS('.countSec').innerHTML = countSec;
      getS('.countMin').innerHTML = countMin;
      startTimer();
   }, 1000);
}








/* let countInterval;
const buttonItems = document.querySelectorAll('.item');
buttonItems.forEach(element => {
   element.addEventListener('click',function name(params) {
   if(element.value === 'start'){
      getS('.countMin').innerHTML = getS('.counter').innerHTML;
      if(getS('.countSec').innerHTML = '00'){
         setInterval(() => {
         let sec = +getS('.countSec').innerHTML-1;
         if(sec >= 59 && count > 0){
            sec = '0' + sec ;
         }
         else {
            getS('.countSec').innerHTML = sec;
         }
      },1000);
      }
  
      // countInterval = setInterval(() => {
      //    let dataMin = new Date();
      //    getS('.countSec').innerHTML =
      //    ('0' + dataMin.getUTCSeconds()).slice(-2);
      // },1000);
     
   }
   if(element.value === 'reset'){
      getS('.countMin').innerHTML = '00';
      getS('.countSec').innerHTML = '00';
      clearInterval(countInterval);
   }
   if(element.value === 'stop'){
      clearInterval(countInterval);
   }

   });
}); */