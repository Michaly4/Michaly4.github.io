const f1 = document.forms.f1;
f1.style.justifyContent = 'center';
f1.style.alignItems = 'center';
f1.style.display = 'flex';
f1.style.gap = '30px';
f1.style.margin = '50px 0';
f1.btn.style.width = '250px';
f1.btn.style.height = '30px';
f1.btn.style.border = 'none';
f1.btn.style.color = 'white';
f1.btn.style.borderRadius = '3px';
f1.btn.style.background = '#55b845';
f1.left.style.width = '300px';
f1.left.style.height = '30px';
f1.left.style.borderRadius = '3px';
f1.right.style.borderRadius = '3px';
f1.right.style.width = '300px';
f1.right.style.height = '30px';

f1.btn.addEventListener('click', () => {
   f1.right.value = f1.left.value;
   f1.left.value = '';
   // f1.left.value.reset();
});

const f2 = document.forms.f2;
console.dir(f2.place);
f2.style.justifyContent = 'center';
f2.style.display = 'flex';
f2.style.height = '30px';
f2.place.style.width = '90%';
f2.place.addEventListener('change', function (params) {
   if (f2.place) {
      f2.place.placeholder = f2.place.value;
      f2.place.value = '';
   }
});
const f3 = document.forms.f3;
const h2 = document.querySelector('h2');
h2.style.backgroundColor = '#4fb072';
h2.style.color = '#fff';
h2.style.width = '100%';
h2.style.margin = '0 0 10px';
h2.style.padding = '15px';
h2.style.textAlign = 'center';
h2.style.borderRadius = '8px 8px 0 0';
f3.style.border = '1px solid gray';
f3.style.borderRadius = '10px';
f3.style.margin = '0 auto 50px';
f3.style.width = '400px';
f3.style.paddingBottom = '20px';
f3.position.style.width = '90%';
f3.mail.style.width = '90%';
f3.name.style.width = '90%';
f3.second.style.width = '90%';
f3.btn.style.width = '90%';
f3.btn.style.backgroundColor = '#4fb072';
f3.btn.style.border = 'none';
f3.btn.style.color = 'white';
f3.btn.style.border = '1px solid transparent';
f3.btn.style.borderRadius = '4px';
console.dir(f3);

const card1 = document.getElementById('card');
const header = document.querySelector('.card-header');
const footer = document.querySelector('.card-footer');
const title = document.querySelector('.card-title');
const mail = document.querySelector('.card-mail');
const prof = document.querySelector('.card-prof');
const man = document.getElementById('man');
const genM = document.getElementById('lb');
const genW = document.getElementById('lbw');
const caption = document.querySelector('.caption');
card1.style.width = '400px';
card1.style.display = 'flex';
card1.style.flexDirection = 'column';
card1.style.height = '500px';
card1.style.display = 'none';
card1.style.textAlign = 'center';
card1.style.border = '1px solid gray';
card1.style.borderRadius = '5px';
card1.style.margin = '0 auto 50px';
header.style.height = '21%';
header.style.background = 'rgba(79, 176, 114, 1)';
footer.style.height = '20%';
footer.style.backgroundColor = '#4fb072';
footer.style.marginTop = 'auto';

let bt = f3.btn.addEventListener('click', () => {
   if (f3.btn) {
      title.textContent = f3.name.value;
      caption.innerHTML = f3.second.value;
      mail.textContent = f3.mail.value;
      prof.innerHTML = f3.position.value;
      if (genM.checked) {
         man.src = "./image/man2.jpg";
      } else if (genW.checked) {
         man.src = "./image/women.png";
      }
      f3.style.display = 'none';
      card1.style.display = 'block';
   }
});
const signOut = document.querySelector('.sign').addEventListener('click', 
()=> {
   f3.style.display = 'block';
   card1.style.display = 'none';
});


//???
// let signOut = document.getElementsByClassName('sign').addEventListener('click', () => {
//    f3.style.display = 'block';
//    card1.style.display = 'none';
// });
