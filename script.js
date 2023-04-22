import loadMoreProjects from './projectTemplates.js';

// Toggle mobile menu
const openMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.desktop');
const menuItems = document.querySelectorAll('.menu-item');

openMenu.addEventListener('click', () => {
  openMenu.classList.toggle('hide');
  mobileMenu.classList.toggle('show');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    openMenu.classList.toggle('hide');
  });
});

// Initial load
loadMoreProjects();

// Check if email is lower case
const email = document.querySelector('#email');
const fName = document.querySelector('#name');
const message = document.querySelector('#message');
const error = document.querySelector('.error-msg');
const submit = document.querySelector('#submit');

const isFormValid = (e) => {
  if (email.value.toLowerCase() !== email.value) {
    error.innerHTML = 'Form not submitted. Enter email in lower case';
    e.preventDefault();
  } else {
    error.innerHTML = '';
  }
};

submit.addEventListener('click', isFormValid);

// Local Storage
const inputs = document.querySelectorAll('#name, #email, #message');

function storedData() {
  if (localStorage.getItem('formData')) {
    const formInput = JSON.parse(localStorage.getItem('formData'));
    fName.value = formInput.fullName;
    email.value = formInput.emailAddress;
    message.value = formInput.formMsg;
  }
}

storedData();

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const formData = {
      fullName: fName.value,
      emailAddress: email.value,
      formMsg: message.value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  });
});
