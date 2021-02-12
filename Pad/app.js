const form = document.forms.form;
const btn = document.querySelector('#btn');
const box = document.querySelector('.form__box');
const check = document.querySelectorAll('.check');
const denger = document.querySelector('.denger');
const span = document.querySelector('.x');
const subTitle = document.querySelector('.subtitle');

btn.addEventListener('click', function goTo(params) {
   let task = form.text.value;

   if (!task) {
      denger.classList.remove('none');
      subTitle.innerHTML = 'Пусте поле не можна добавити';
      /*  check.classList.add('none'); */
   } else if (task) {
      box.insertAdjacentHTML('beforeend',
         `  <div class="form__item"><input class="check" type="checkbox" name="check" id=""><span class="html">${task}</span></div>`
      );
   }
   form.reset();
});

box.addEventListener('click', (evt) => {

   if (evt.target.checked && box.childElementCount > 1) {
      evt.target.closest('.form__item').remove();

   }
   if (box.childElementCount <= 1) {
      denger.classList.remove('none');
      subTitle.innerHTML = 'Останній таск зі списку Ви не можете видалити';
   }
  
});
span.addEventListener('click', () => {
   denger.classList.toggle('none');
});




// box.addEventListener('click', (evt) => {
 
//    if (evt.target.classList.contains('check') && box.childElementCount > 1) {
//       evt.target.closest('.form__item').remove();
//    }
//    if (box.childElementCount <= 1) {
//       denger.classList.remove('none');
//       subTitle.innerHTML = 'Останній таск зі списку Ви не можете видалити';
    
//    }
// });



 // box.prepend('Обережно!!!');
// for(i = 0;i < box.children.length;i++){
//    if(evt.children){
//       children[i].remove();
//    }
//     if(box.lastElementChild <= 1){
//       denger.classList.remove('none');
//    }
// }
// const addTask = document.querySelector('.form__item');
// const all = box.querySelectorAll('.form__item');
// const element = document.querySelectorAll('input[type = checkbox]');
// const subTitle = document.querySelector('.subtitle');
/* box.addEventListener('change', function name(e) {
console.log(box);
}); */

/* box.addEventListener('change', function name(e) {
   // for (const item of all) {
   //    if (form.check) {
   //       item.remove();
   //    }
   // }
   // all.forEach(element => {
   //    if (form.check.checked) {
   //           element.remove();
   //    }
   // });
   // for(i = 0 ; i < element.length;i++){
   //    if(element.checked){
   //       addTask.remove();
   //    }
   // }
}); */

//     <div class="form__item">
//    <label for="check"><input class="check" type="checkbox" name="check" ><span class="html">${task}
//       </span></label>
// </div>


/* console.dir(box.children); */