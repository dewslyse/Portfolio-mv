import projectsList from './projectsList.js';

// Technology list for page. Limit to 3 technologies
const techs = (techs) => `
  <ul class="tags">
    ${techs.map((tech) => `<li class="tag">${tech}</li>`).slice(0, 3).join('')}
  </ul>
`;

// Technology list for popups
const popupTechs = (techs) => `
  <ul class="tags">
    ${techs.map((tech) => `<li class="tag">${tech}</li>`).join('')}
  </ul>
`;

// Project card template
const projectCard = (project) => `  
  <article class="card">
    <img class="card-img" src="${project.featuredImg}" alt="" aria-hidden="true">
    <div class="card-description">
      <h3 class="title color-caption">${project.title}</h3>
      <div class="profile">
        <div class="client">${project.clientName}</div>
        <div class="role color-gray">${project.jobTitle}</div>
        <div class="year color-gray">${project.jobYear}</div>
      </div>
      <p class="details">${project.description}</p>
      ${techs(project.technologies)}
      <button class="btn" type="button">See Project</button>
    </div>
  </article>   
`;

// Modal template
const main = document.querySelector('main');
let modal;
let modalBg;

const modalsList = projectsList.map((project) => {
  modal = document.createElement('div');
  return `
    <article class="popup">
      <div class="popup-header">
        <h3 class="title color-caption">${project.title}</h3>
        <img class="popup-close" src="./images/Icon-cancel-black.png" alt="">    
      </div>
      <div class="popup-profile">
        <div class="client">${project.clientName}</div>
        <div class="role color-gray">${project.jobTitle}</div>
        <div class="year color-gray">${project.jobYear}</div>
      </div>
      <img class="popup-img" src="${project.popupImg}" alt="" aria-hidden="true">
      <div class="popup-desc">
        <p class="popup-details">${project.popupDescription}</p>
        <div class="popup-desc-right">
          ${popupTechs(project.technologies)}
          <hr class="popup-line">
          <div class="popup-btn-gp">
            <a class="popup-btn" href="${project.liveURL}" target="_blank" rel="noopener noreferrer">See live <span><img src="./images/live.png" alt=""></span></a>
            <a class="popup-btn" href="${project.sourceURL}" target="_blank" rel="noopener noreferrer">See source <span><img src="./images/github-blue.png" alt=""></span></a>
          </div>
        </div>              
      </div>
    </article> 
  `;
});

const showModal = (index) => {
  modal.innerHTML = modalsList[index];

  if (!modalBg) {
    modalBg = document.createElement('div');
    modalBg.classList.add('popup-bg');
    main.appendChild(modalBg);
  }

  modalBg.innerHTML = '';
  modalBg.appendChild(modal);
};

const closeModal = () => {
  if (modalBg) {
    modalBg.remove();
    modalBg = null;
  }
};

// Event listener for closing modal with button
main.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-close')) {
    closeModal();
  }
});

// Load projects
const loadMoreBtn = document.querySelector('.load-more');
const projectsPerLoad = 3;
let currentIndex = 0;

const loadMoreProjects = () => {
  const projects = projectsList.slice(currentIndex, currentIndex + projectsPerLoad);
  currentIndex += projectsPerLoad;

  const worksSection = document.querySelector('.works');
  worksSection.insertAdjacentHTML('beforeend', `
    ${projects.map(projectCard).join('')}
  `);

  const projectBtn = document.querySelectorAll('.btn');
  projectBtn.forEach((btn, index) => {
    btn.addEventListener('click', (click) => {
      if (click.target.id === btn.id) {
        showModal(index);
      }
    });
  });

  if (currentIndex >= projectsList.length) {
    loadMoreBtn.style.display = 'none';
  }
};

loadMoreBtn.addEventListener('click', loadMoreProjects);

export default loadMoreProjects;