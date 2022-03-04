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
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImg: './images/Tonic.png',
    popupImg: './images/tonic-popup-img.png',
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'ruby', 'ruby on rails'],
    liveURL: 'https://dewslyse.github.io/Portfolio-mv/',
    sourceURL: 'https://github.com/dewslyse/Portfolio-mv',
    clientName: 'Canopy',
    jobTitle: 'Back End Dev',
    jobYear: '2015',
  },
  {
    title: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImg: './images/stories.png',
    popupImg: './images/stories-popup-img.png',
    technologies: ['html', 'Ruby on rails', 'ruby', 'css', 'javascript', 'github'],
    liveURL: 'https://dewslyse.github.io/Portfolio-mv/',
    sourceURL: 'https://github.com/dewslyse/Portfolio-mv',
    clientName: 'Facebook',
    jobTitle: 'Full Stack Dev',
    jobYear: '2015',
  },
  {
    title: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImg: './images/facebook-360.png',
    popupImg: './images/facebook-popup-img.png',
    technologies: ['html', 'css', 'bootstrap', 'github', 'Ruby on rails', 'javascript'],
    liveURL: 'https://dewslyse.github.io/Portfolio-mv/',
    sourceURL: 'https://github.com/dewslyse/Portfolio-mv',
    clientName: 'Facebook',
    jobTitle: 'Full Stack Dev',
    jobYear: '2015',
  },
  {
    title: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImg: './images/uber.png',
    popupImg: './images/uber-popup-img.png',
    technologies: ['html', 'Ruby on rails', 'css', 'ruby', 'javascript', 'github'],
    liveURL: 'https://dewslyse.github.io/Portfolio-mv/',
    sourceURL: 'https://github.com/dewslyse/Portfolio-mv',
    clientName: 'Uber',
    jobTitle: 'Lead Developer',
    jobYear: '2018',
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
const fName = document.querySelector('#name');
const email = document.querySelector('#email');
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
// Local storage
const inputs = document.querySelectorAll('#name, #email, #message');

function storedData() {
  if (localStorage.getItem('formData'));

  const formInput = JSON.parse(localStorage.getItem('formData'));
  fName.value = formInput.fullName;
  email.value = formInput.emailAddress;
  message.value = formInput.formMsg;
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