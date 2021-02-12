const getS = selector => document.querySelector(selector);

//! start click function edit buttton

getS('.center__edit').addEventListener('click', function name(params) {
   getS('.bottom__edit').classList.toggle('active');
   getS('.bottom__wrapper').classList.add('hide');
   getS('.bottom__area').value = document.getElementById('top').innerHTML;
});
//*  ende click function edit butttons

//! start click function outline area

getS('.bottom__area').addEventListener('click', function name(event) {
   event.target.classList.add('area-active');
});
//*  ende click function outline area

//! start click function save buttton

getS('.bottom__save').addEventListener('click', function name(params) {
   getS('.bottom__edit').classList.remove('active');
   document.getElementById('top').innerHTML = getS('.bottom__area').value;
});
//*  ende click function save buttton

//! start click function style buttton

getS('.center__style').addEventListener('click', function name(params) {
   getS('.bottom__edit').classList.remove('active');
   getS('.bottom__wrapper').classList.remove('hide');
});

//*  ende click function save buttton

//! start click function add buttton

getS('.bottom__add').addEventListener('click', function name(params) {
   getS('.wrapper').classList.toggle('hide');
   getS('.what').classList.remove('hide');
});
//*  ende click function add buttton

//! start click function radio table

getS('.whatTable').addEventListener('click', function name(params) {
    getS('.what').classList.add('hide');
   getS('.wrapper-choose').classList.toggle('active');

});
//*  ende click function  radio table

//! start click function radio liste

getS('.whatListe').addEventListener('click', function name(params) {
    getS('.what').classList.add('hide');
   getS('.wrapper-liste').classList.remove('hide');

});
//*  ende click function  radio liste

//! start click function radio list in table

getS('.choose__list').onclick = function name(params) {
   getS('.wrapper-choose').classList.remove('active');
   getS('.wrapper-liste').classList.remove('hide');
   getS('.liste').classList.remove('hide');
};

getS('.liste__tb').addEventListener('click', function name(params) {
   getS('.liste').classList.add('hide');
   getS('.wrapper-choose').classList.toggle('active');
});
//*  ende click function  radio list in table

//! start click function fontSize

function fontSize() {
   getS('.top').style.fontSize = event.target.value;
}
//*  ende click function fontSize

//! start click function fontFamily

const fontFamily = document.getElementById('fontFamily');
fontFamily.addEventListener('change', function name(e) {
   getS('.top').style.fontFamily = this.value;
   e.target[0].disabled = true;
});
//*  ende click function fontSize

//! start click functions buttons colors

const color = document.querySelectorAll('.item');
let type = '';
let changedColor = '';

for (i = 0; i < color.length; i++) {
   color[i].addEventListener('click', function name(e) {
      changedColor = e.target.id;
      if (type === 'color') {
         changeColor(changedColor);
      }
      if (type === 'background') {
         changeBackground(changedColor);
      }
      getS('.bottom__cube').classList.add('hide');
   });
}

getS('.bottom__btn--color').addEventListener('click', function name(params) {
   getS('.bottom__cube').classList.remove('hide');
   type = 'color';
});

const bgs = document.querySelectorAll('.item');
getS('.bottom__btn--bg').addEventListener('click', function name(params) {
   getS('.bottom__cube').classList.remove('hide');
   type = 'background';
});

function changeColor(color) {
   getS('.top').style.color = color;
}

function changeBackground(color) {
   getS('.top').style.backgroundColor = color;
}
//*  ende click functions buttons colors

//! start click functions Font Style

function fontWeight() {
   if (event.target.checked) {
      getS('.top').classList.add('bold');
   } else {
      getS('.top').classList.remove('bold');
   }
}

function fontStyle() {
   if (event.target.checked) {
      getS('.top').classList.add('cursive');
   } else {
      getS('.top').classList.remove('cursive');
   }
}
//*  ende click functions Font Style

//! start click function list style

getS('.liste__btn').addEventListener('click', function name(params) {
   const countLi = document.querySelector('.choose__width').value;
   const typeLi = document.querySelector('.liste__select').value;
   getS('.bottom__area').value += `<ul style="list-style-type: ${typeLi};padding: 10px 0 0 10px">`;
   for (let i = 0; i < countLi; i++) {
      getS('.bottom__area').value += `<li>item ${i+1}</li>`;
   }
   getS('.top').style.textAlign = 'start';
   getS('.bottom__area').value += '</ul>';
   getS('.wrapper-liste').classList.toggle('hide');
    getS('.wrapper').classList.remove('hide');
});
//*  ende click functions list style

//! start click function table style

const choose = document.forms['choose__table'];
getS('.choose__btn').addEventListener('click', function name(params) {
   getS('.top').style.textAlign = 'start';
   const TR = choose.TR.value;
   const TD = choose.TD.value;
   const width = choose.width.value;
   const height = choose.height.value;
   const type = choose.type.value;
   const border = choose.border.value;
   const color = choose.color.value;
   getS('.bottom__area').value += `<table style ="border:${border}px ${type} ${color}; border-collapse: collapse;">`;
   for (let i = 0; i < TR; i++) {
      getS('.bottom__area').value += `<tr>`;
      for (let j = 0; j < TD; j++) {
         getS('.bottom__area').value += `<td style ="width: ${width}px;height: ${height}px; padding:10px;border:${border}px ${type} ${color};">TD</td>`;
      }
      getS('.bottom__area').value += `</tr>`;
   }
   getS('.bottom__area').value += `</table>`;
   getS('.wrapper-choose').classList.toggle('active');
   getS('.wrapper').classList.toggle('hide');
   getS('.bottom__edit').classList.toggle('hide');
});
//*  ende click function table style









/* const list = document.forms['formList'];
getS('.liste__btn').onclick = function(){
   // console.log(list)
   const countLi = list.count.value;
   const typeLi = list.type.value;
   getS('.bottom__area').value += `<ul style="list-style-type: ${typeLi}">`;
   for(let i=0; i<countLi; i++){
       getS('.bottom__area').value += `<li>item ${i+1}</li>`;
   }
   getS('.bottom__area').value += '</ul>';
   getS('.wrapper-liste').classList.toggle('hide');
   getS('.wrapper').classList.toggle('active');
} */












// getS('.bottom__add').addEventListener('click', function name(params) {
//    getS('.wrapper').classList.add('hide');
//    getS('.wrapper-choose').classList.toggle('active');
// });


// function bold(params) {
//    getS('.top').style.fontWeight  = 'bold';
// }
// function lighter(params) {
//    getS('.top').style.fontStyle = 'lighter';
// }







// const colors = document.querySelectorAll('.bottom__btn');
// colors.forEach(btn => {
//    btn.addEventListener('click',function name(params) {
//       console.log(colors);
//       if(btn[0]){

//       }
//       getS('.bottom__cube').classList.remove('hide');
//    });
// });






// const bgs = document.querySelectorAll('.item');
// getS('.bottom__btn--bg').addEventListener('click',function name(params) {
//    getS('.bottom__cube').classList.remove('hide');
//    for(i=0;i<bgs.length;i++){
//       bgs[i].addEventListener('click',function name(e) {
//         console.log(e.target.id);
//         getS('.top').style.backgroundColor = e.target.id;
//         getS('.bottom__cube').classList.add('hide');
//       });
//    }

// });

// const color = document.querySelectorAll('.item');
// getS('.bottom__btn--color').addEventListener('click',function name(params) {
//    getS('.bottom__cube').classList.remove('hide');
//    for(i=0;i<color.length;i++){
//       color[i].addEventListener('click',function name(e) {
//         console.log(e.target.id);
//         getS('.top').style.color = e.target.id;
//         getS('.bottom__cube').classList.add('hide');
//       });
//    }
// });


// getS('.bottom__btn--color').addEventListener('click', function () {
//    getS('.bottom__cube').classList.remove('hide');
//    const textColor = document.querySelectorAll('.item');
//    textColor.forEach(color => {
//       color.addEventListener('click', function () {
//          getS('.top__text').style.color = color.id;
//          getS('.bottom__cube').classList.add('hide');
//          // console.dir(element.id);
//       });
//    });
// });
// getS('.bottom__btn--bg').addEventListener('click', function name() {
//    getS('.bottom__cube').classList.remove('hide');
//    const bgs = document.querySelectorAll('.item');
//    bgs.forEach(bg => {
//       bg.addEventListener('click', function () {
//          getS('.top').style.backgroundColor = bg.id;
//          getS('.bottom__cube').classList.add('hide');
//          // console.dir(element.id);
//       });
//    });
// });






/* function cdf(params) {
   const bgs = document.querySelectorAll('.item');
bgs.forEach(element => {
   element.addEventListener('click', function bg() {
      getS('.top').style.backgroundColor = element.id;
      getS('.bottom__cube').classList.add('hide');
      // console.dir(element.id);
   })
});
} */




//*  ende click function fontSize

// const bgs = document.querySelectorAll('.item');
// bgs.forEach(element => {
//    element.addEventListener('click', function name() {
//       getS('.top').style.backgroundColor = element.id;
//       getS('.bottom__cube').classList.add('hide');
//       // console.dir(element.id);
//    })
// });

























// getS('.center__edit').onclick = function name(e) {
//    getS('.bottom__edit').classList.toggle('active');
//    getS('.bottom__wrapper').classList.add('hide');
//    getS('.bottom__area').value = document.getElementById('top').innerHTML;
// };

// getS('.bottom__area').onclick = function name(e) {
//    e.target.classList.add('area-active');
// };

// getS('.bottom__save').onclick = function name(params) {
//    getS('.bottom__edit').classList.remove('active');
//    document.getElementById('top').innerHTML = getS('.bottom__area').value;
// };

// getS('.center__style').onclick = function name(e) {
//    getS('.bottom__edit').classList.remove('active');
//    getS('.bottom__wrapper').classList.remove('hide');
// };

// getS('.bottom__add').onclick = function name(params) {
//    getS('.wrapper').classList.add('hide');
//    getS('.wrapper-choose').classList.toggle('active');
// };

// const fontFamily = document.getElementById('fontFamily');
// fontFamily.onchange = function () {
//    getS('.top').style.fontFamily = this.value;
// };

/* const fontFamily = document.getElementById('fontFamily');
fontFamily.onchange = function (e) {
   // getS('.top').style.fontFamily = e.target.value;
   getS('.top').style.fontFamily = this.value;
}; */