const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const mail = document.getElementById('mail');
const pass = document.getElementById('password');
const btn = document.getElementById('btn');
const great = document.querySelector('.great__inp');
const forms = document.querySelectorAll('.form__control');
const check = document.getElementById('check');


//! Event checked change..

check.onchange = function checkCheck(event) {
   event.preventDefault();
   /*  checkBtn(); */
};

//! Event click button submit Sign Up

btn.addEventListener('click', function name(params) {
   document.querySelector('.wrapper__great').style.display = 'block';
});


//!Event click input Start Exploring..

great.addEventListener('click', function name(params) {
   document.querySelector('.wrapper__great').style.display = 'none';
   document.querySelector('.container').style.display = 'flex';
   form.reset();
   forms.forEach(input => {
      if (input.className == 'form__control succes') {
         input.className = 'form__control';
      } else {
         input.className = 'form__control';
         input.lastElementChild.className = 'pop';
         check.checked = false;
         /*  btn.setAttribute('editable',true); */
         /*   btn.prop('disabled',true); */
         /* btn.toggleAttribute('disabled'); */
      }
      location.reload();
   });

});

//!Variables RegExp

let firstNameRegExp = /^\w{3,20}$/;
let lastNameRegExp = /^\w{5,15}$/;
let passRegExp = /^[a-zA-Z0-9_@#&]{8,15}$/;
let mailRexExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//! Start Error and Succes inputs..

function setErrorFor(input, message) {
   const formControl = input.parentElement;
   formControl.className = 'form__control error';
   console.dir(formControl);
   formControl.lastElementChild.className = 'pop active';
   formControl.lastElementChild.innerText = message;

}

function setSuccesFor(input) {
   const formControl = input.parentElement;
   formControl.className = 'form__control succes';
   formControl.lastElementChild.className = 'pop';
}

function checkBtn() {
   /*  if(btnCheck.value){
       btn.removeAttribute('disabled');
    } */
   if (firstName.value && lastName.value && mail.value && pass.value) {
      btn.removeAttribute('disabled');
   }
}

//! start inputs functions...

firstName.oninput = function firstNameCheck() {
   let testFirstName = firstNameRegExp.test(this.value);
   if (testFirstName) {
      setSuccesFor(firstName);
      checkBtn(firstName);

   } else {
      setErrorFor(firstName, 'Please provide a valid First name');
   }

};
lastName.oninput = function () {
   let testLastName = lastNameRegExp.test(this.value);
   if (testLastName) {
      setSuccesFor(lastName);
      checkBtn(lastName);

   } else {
      setErrorFor(lastName, 'Please provide a valid Last name');
   }
};
mail.oninput = function () {
   let testMail = mailRexExp.test(this.value);
   if (testMail) {
      setSuccesFor(mail);
      checkBtn(mail);
   } else {
      setErrorFor(mail, 'Please provide a valid Email address');
   }
};
pass.oninput = function () {
   let testMail = passRegExp.test(this.value);
   if (testMail) {
      setSuccesFor(pass);
      checkBtn(pass);
   } else {
      setErrorFor(pass, 'Please provide a valid Password');
   }
};
//? Ende Inputs functions













/* form.addEventListener('input', (e) => {
   e.preventDefault();
}); */

/* function checkInputs(params) {
   const usernameValue = firstName.value.trim();
   const lastControl = lastName.value.trim();
   const mailValue = mail.value.trim();
   const passValue = pass.value.trim();

   let testPass = loginRegExp.test(this.value);
   if (lastControl === testPass) {
      // this.style.border = '1px solid green';
      setSuccesFor(firstName);
   } else {
      setErrorFor(firstName);
   }
} */

/*   const small = document.querySelectorAll('.pop');
  if(small.className = 'pop'){
     small.style.visibility ='visible';
  } */
/*    pops.forEach(item => {
      if(item.className = 'pop'){
         item.style.visibility ='visible';
      }
   }); */
/*  for (let  i= 0;  i< pops.length; i++) {
    const element = pops[i];
    if(element.className = 'pop'){
       element.style.visibility ='visible';
    }
 } */
/*   const small = formControl.querySelector('small');
	small.innerText = message; */

/* function smallError(small) {
   const smallControl = smallId;
   smallControl.className = 'pop active';
   console.log(small);
}
function smallSucces(small) {
   const smallControl = smallId;
   smallControl.className = 'pop';
   console.log(small);
} */