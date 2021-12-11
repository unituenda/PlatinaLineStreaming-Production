let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const telephone = document.getElementById('numero');
const servico = document.getElementById('servico');
const local = document.getElementById('Local');
const hora = document.getElementById('Hora');

menu.onclick = () =>{
  menu.classList.toggle('fa-stream');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-stream')
  navbar.classList.remove('active')
}

/* scroll section active link */
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* change background header */
function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/* Show scrool top */
function scrollTop(){
  const  scrollTop = document.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop);

/* video popup */
const btn = document.getElementById('btn');
const video = document.querySelector('.vdo-container');
const close = document.querySelector('.close');

btn.addEventListener('click', () =>{
  video.classList.add('show');
});

close.addEventListener('click', () => {
  video.classList.remove('show')
});

$(document).ready(function(){
  /** */
  $('.features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive:{
      0:{
        items: 2,
      },
      600:{
        items: 3,
      },
      1000:{
        items: 4,
      }
    }
  })

})

/* */

/** */

// const textA = document.getElementById('textA');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email não válido');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} é requerido`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} maior de ${min} caracter`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} menor de ${max} caracter`
    );
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, telephone, hora]);
  checkLength(username, 8, 50);
  // checkLength(textA, 10, 150);
  checkLength(telephone, 5, 12);
  checkLength(local, 5, 120);
  checkLength(servico, 5, 120);
  checkEmail(email);
});
