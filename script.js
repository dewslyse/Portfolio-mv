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

// Adds project dynamically to page
// Project details
const worksList = [
  {
    title: 'Covid-19 Tracking App',
    description: 'A Single Page Application that allows users to track the novel coronavirus, SARS-CoV-2 across the globe. Covid-19 data can be filtered to the country level.',
    popupDescription: 'A Single Page Application for tracking covid-19 cases. Within the app, users can retrieve country-specific data by by searching for or by clicking on a corresponding country. The app uses Covid-19 data provided by Narrativa technologies.',
    featuredImg: './images/covid-app.webp',
    popupImg: './images/covid-app-popup.webp',
    technologies: ['reactjs', 'redux', 'api', 'scss', 'javascript'],
    liveURL: 'https://covid-dewslyse.netlify.app/',
    sourceURL: 'https://github.com/dewslyse/mv-covid-stats',
    clientName: 'Microverse',
    jobTitle: 'Capstone',
    jobYear: '2022',
  },
  {
    title: 'MicroTV web app',
    description: 'Get the latest information about your favourite TV shows from the MicroTV web app. Like and add comments to the shows you love.',
    popupDescription: 'Get the latest information about your favourite TV shows from the MicroTV web app. Like and add comments to the shows you love. The application uses data from the TVmaze API.',
    featuredImg: './images/microTV.webp',
    popupImg: './images/microTV-popup.webp',
    technologies: ['javascript', 'webpack', 'api', 'scss', 'css'],
    liveURL: 'https://dewslyse.github.io/JS-capstone/',
    sourceURL: 'https://github.com/dewslyse/JS-capstone',
    clientName: 'Microverse',
    jobTitle: 'Capstone',
    jobYear: '2022',
  },
  {
    title: 'Conservation Summit 2022',
    description: 'A forum for conservation professionals and students who are passionate about addressing biodiversity conservation and climate change challenges for a better future.',
    popupDescription: 'This is a capstone project for the first module of the Microverse curriculum. In this project, I built a dummy website for a biodiversity conservation conference. <br> A forum for conservation professionals and students who are passionate about addressing biodiversity conservation and climate change challenges for a better future.',
    featuredImg: './images/capstone1.webp',
    popupImg: './images/capstone1-popup-img.webp',
    technologies: ['html', 'scss', 'javascript', 'css'],
    liveURL: 'https://dewslyse.github.io/Capstone1-mv/',
    sourceURL: 'https://github.com/dewslyse/Capstone1-mv',
    clientName: 'Microverse',
    jobTitle: 'Capstone',
    jobYear: '2022',
  },
  {
    title: 'Bookstore app',
    description: 'A user-friendly bookstore app built with react and redux. Users can easily add and remove books from their libraries.',
    popupDescription: 'A user-friendly bookstore app built with react and redux. Users can easily add and remove books from their libraries.',
    featuredImg: './images/bookstore.webp',
    popupImg: './images/bookstore-popup.webp',
    technologies: ['reactjs', 'redux', 'api', 'scss', 'javascript', 'scss'],
    liveURL: 'https://bookstore-dewslyse.netlify.app/',
    sourceURL: 'https://github.com/dewslyse/mv-bookstore',
    clientName: 'Microverse',
    jobTitle: 'Project',
    jobYear: '2022',
  },
];

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
            <a class="popup-btn" href="${worksList[i].liveURL}">See live <span><img src="./images/live.png" alt=""></span></a>
            <a class="popup-btn" href="${worksList[i].sourceURL}">See source <span><img src="./images/github-blue.png" alt=""></span></a>
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