const form = document.querySelector('#form');
const formControl = document.querySelectorAll('.form-control');
const email = document.querySelector('.email');

// Firificar campos vazios 

function showError(input) {
  input.classList.remove('sucess');
  input.classList.add('ative');

}

function showSuccess(input) {
  input.classList.remove('ative');
  input.classList.add('sucess');

}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input);
      
    } else {
      showSuccess(input);
    }
  });
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    
  } else {
    showError(input);
    
  }

}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkEmail(email);
  checkRequired(formControl);
  if(document.querySelectorAll('.sucess').length == 5) {
    form.submit();
  }
});