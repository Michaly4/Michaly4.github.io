// const key = document.querySelectorAll('p');
//  console.log(key); 
const capslock = document.querySelector('.capslock');
/* console.log(capslock); */
const area = document.querySelector('#textarea');
/* console.dir(area); */
const shift = document.querySelector('.shift');
/* console.log(space); */
/* const after = window.getComputedStyle(document.querySelector('.capslock'),'::after').getPropertyValue('content'); */
console.log('after');
const mas = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 32,192];
window.addEventListener('keydown', (event) => {
        console.log(event);
         // mas.push(event.keyCode);
         //  console.log(mas); 
   if (event.code === "Backspace") {
         //   area.value = area.value.substring(1,-1); 
      area.value = area.value.slice(0, -1);
      buttonStyle(event.key, 'down');
   }
   if (event.code === "CapsLock") {
      area.value.toUpperCase(); 
         //  capslock.classList.add('active');  
      buttonStyle(event.key, 'down');
   }
   if (event.code === "Space") {
      event.preventDefault();
         //  area.value += ' ';
      area.value += '\x00';
      buttonStyle(event.key, 'down');
   }
   if (event.code == "Tab") {
      event.preventDefault();
      area.value += '\t';
      buttonStyle(event.key, 'down');

   }
   if (event.code == "Enter") {
      event.preventDefault();
      area.value += "\n";
      buttonStyle(event.key, 'down');
   }
   if (event.key === "Shift" || event.key === "ShiftRight") {
      event.preventDefault();
      shift.classList.add('active');
   } 
   for (i = 0; i < mas.length; i++) {
      if (mas[i] === event.keyCode) { //!gotovo
         area.value += event.key;
         buttonStyle(event.key, 'down');
      }
   }
});
window.addEventListener('keyup', (event) => {
   if (!event.shift) {
      buttonStyle(event.key, 'up');
      shift.classList.remove('active');
   }
});

function buttonStyle(key, status) {
   let btn = document.querySelectorAll('p');
         /*   console.log(btn); */
   for (i = 0; i < btn.length; i++) {
      if (btn[i].textContent === key) {
         if (status === 'down') {
            btn[i].classList.add('active')
         } else if (status === 'up') {
            btn[i].classList.remove('active')
         }
      }
   }
}




// mas.forEach(element => {
//    if (element === event.keyCode) {
//       area.value += event.key; //!2gotovo
//    }
// });
// if (event.keyCode == 192) {
//    area.value += '^';
// }

// for (const item of mas) {
//    if (item === event.keyCode) { //!3gotovo
//       area.value += event.key;
//    }

// }

// const area = document.querySelector('#textarea');
// window.addEventListener('keypress', function keypress(e) {
//    console.dir(e);
//    if (e.keyCode == 113) {
//       area.value += 'pizdec';
//       e.style.backgroundColor = 'red';
//    }
// });