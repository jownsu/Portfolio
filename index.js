// Navigation
// window.onscroll = function () {
    // scrollFunction();
//   };
  
//   function scrollFunction() {
//     if (
//       document.body.scrollTop > 100 ||
//       document.documentElement.scrollTop > 20
//     ) {
//       document.querySelector(".nav-h").style.cssText =
//         "height:66px; transition: all .4s ease; ";
//       document.querySelector("header").style.cssText =
//         "box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);";
//     } else {
//       document.querySelector(".nav-h").style.cssText = "height: 108px";
//       document.querySelector("header").style.cssText = "box-shadow: unset;";
//     }
//   }

window.addEventListener('load', function(){

    const ham = document.getElementById('ham');
    const hamBar = document.getElementById('hamBar');
    const nav = document.querySelector('.navigation__list');
    const a = document.querySelectorAll('.navigation__list a');

ham.addEventListener('click', function(){
    hamBar.classList.toggle('active');
    nav.classList.toggle('active');
});


a.forEach(item => item.addEventListener('click', function(){
    hamBar.classList.toggle('active');
    nav.classList.toggle('active');
}));

  window.addEventListener("scroll", reveal);
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;

      if (revealtop - 300 < windowheight - revealtop) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  //FORM VALIDATION
  const form = document.querySelector('form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  
  const name_error = document.querySelector('#name-error');
  const email_error = document.querySelector('#email-error');
  const message_error = document.querySelector('#message-error');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let hasError = false;
    if(name.value.trim() === ''){
        name_error.innerHTML = 'Name cannot be empty';
        hasError = true;
    }
    if(email.value.trim() === ''){
        email_error.innerHTML = 'Email cannot be empty';
        hasError = true;
    }

    if(email.value.split('@')[1] == null){
        email_error.innerHTML = 'Email is invalid';
        hasError = true;
    }
    else if(email.value.split('@')[1].split('.')[1] == null){
        email_error.innerHTML = 'Email is invalid';
        hasError = true;
    }

    if(message.value.trim() === ''){
        message_error.innerHTML = 'Message cannot be empty';
        hasError = true;
    }

    if(!hasError){
        e.target.submit();
    }

  });


})