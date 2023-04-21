import worksList from "./projects.js";

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

// Technology list for page
function techs(techs) {
  return `
    <ul class="tags">
      ${techs.map((tech) => `<li class="tag">${tech}</li>`).slice(0, 3).join('')}
    </ul>
  `;
}

// Technology list for popups
const popupTechs = (techs) => `
    <ul class="tags">
      ${techs.map((tech) => `<li class="tag">${tech}</li>`).join('')}
    </ul>
  `;

// Dynamically render projects to page
function workCard(work) {
  return `
    <article class="card">
      <img class="card-img" src="${work.featuredImg}" alt="" aria-hidden="true">
      <div class="card-description">
        <h3 class="title color-caption">${work.title}</h3>
        <div class="profile">
          <div class="client">${work.clientName}</div>
          <div class="role color-gray">${work.jobTitle}</div>
          <div class="year color-gray">${work.jobYear}</div>
        </div>
        <p class="details">${work.description}</p>
        ${techs(work.technologies)}
        <button class="btn" type="button">See Project</button>
      </div>
    </article>      
  `;
}

const worksSection = document.querySelector('.works');

worksSection.innerHTML = `
  ${worksList.map(workCard).join('')}
`;

const projectBtn = document.querySelectorAll('.btn');
const main = document.querySelector('main');

// Project modal
let modal;
let modalBg;

function closeModal() {
  if (modal) {
    modal.remove();
  }
  if (modalBg) {
    modalBg.remove();
  }
}

const arr = [];

for (let i = 0; i < worksList.length; i += 1) {
  modal = document.createElement('div');
  arr.push(`
    <article class="popup">
      <div class="popup-header">
        <h3 class="title color-caption">${worksList[i].title}</h3>
        <img class="popup-close" src="./images/Icon-cancel-black.png" alt="">    
      </div>
      <div class="popup-profile">
        <div class="client">${worksList[i].clientName}</div>
        <div class="role color-gray">${worksList[i].jobTitle}</div>
        <div class="year color-gray">${worksList[i].jobYear}</div>
      </div>
      <img class="popup-img" src="${worksList[i].popupImg}" alt="" aria-hidden="true">
      <div class="popup-desc">
        <p class="popup-details">${worksList[i].popupDescription}</p>
        <div class="popup-desc-right">
          ${popupTechs(worksList[i].technologies)}
          <hr class="popup-line">
          <div class="popup-btn-gp">
            <a class="popup-btn" href="${worksList[i].liveURL}" target="_blank" rel="noopener noreferrer">See live <span><img src="./images/live.png" alt=""></span></a>
            <a class="popup-btn" href="${worksList[i].sourceURL}" target="_blank" rel="noopener noreferrer">See source <span><img src="./images/github-blue.png" alt=""></span></a>
          </div>
        </div>              
      </div>
    </article> 
    `);
}

projectBtn.forEach((btn, index) => {
  btn.addEventListener('click', (click) => {
    if (click.target.id === btn.id) {
      modal.innerHTML = arr[index];
      modalBg = document.createElement('div');
      modalBg.classList.add('popup-bg');
      modalBg.addEventListener('click', closeModal);
      main.appendChild(modalBg);
      modalBg.appendChild(modal);
    }
  });
});

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

// Pagination
const itemsPerPage = 2;
const pageCount = Math.ceil(worksList.length / itemsPerPage);
let currentPage = 1;

const paginate = (items, page, perPage) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return items.slice(start, end);
};

const render = (items) => {
  // render the items to the DOM
  const pagedWorks = document.querySelector('.pagination');

  pagedWorks.innerHTML = `
    ${items.map(workCard).join('')}
  `;
};

const update = () => {
  const paginatedData = paginate(worksList, currentPage, itemsPerPage);
  render(paginatedData);
};

// Handle pagination events
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

const disableBtn = (btn) => {
  // btn.classList.add("disabled");
  btn.setAttribute("disabled", true);
};

const enableBtn = (btn) => {
  // btn.classList.remove("disabled");
  btn.removeAttribute("disabled");
};

const pageBtnStatus = () => {
  if (currentPage === 1) {
    disableBtn(previousBtn);
  } else {
    enableBtn(previousBtn);
  }

  if (currentPage === pageCount) {
    disableBtn(nextBtn);
  } else {
    enableBtn(nextBtn);
  }
};

previousBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    update();
    pageBtnStatus();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pageCount) {
    currentPage++;
    update();
    pageBtnStatus();
  }
});

// initial render
update();
