const openMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.desktop');
const menuItems = document.querySelectorAll('.menu-item');

const worksSection = document.querySelector('.works');

// Toggle mobile menu
openMenu.addEventListener('click', () => {
  openMenu.classList.toggle('hide');
  mobileMenu.classList.toggle('show');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    openMenu.classList.toggle('hide');
  });
});

// Adds project dynamically to page
const worksList = [
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImg: './images/Tonic.png',
    technologies: ['html', 'css', 'javascript'],
    liveURL: 'https://dewslyse.github.io/Portfolio-mv/',
    sourceURL: 'https://github.com/dewslyse/Portfolio-mv',
    clientName: 'Canopy',
    jobTitle: 'Back End Dev',
    jobYear: '2015',
  },
  {
    title: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImg: './images/stories.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveURL: 'https://dewslyse.github.io/Portfolio-mv/',
    sourceURL: 'https://github.com/dewslyse/Portfolio-mv',
    clientName: 'Facebook',
    jobTitle: 'Full Stack Dev',
    jobYear: '2015',
  },
  {
    title: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featuredImg: './images/facebook-360.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveURL: 'https://dewslyse.github.io/Portfolio-mv/',
    sourceURL: 'https://github.com/dewslyse/Portfolio-mv',
    clientName: 'Facebook',
    jobTitle: 'Full Stack Dev',
    jobYear: '2015',
  },
  {
    title: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImg: './images/uber.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveURL: 'https://dewslyse.github.io/Portfolio-mv/',
    sourceURL: 'https://github.com/dewslyse/Portfolio-mv',
    clientName: 'Uber',
    jobTitle: 'Lead Developer',
    jobYear: '2018',
  },
];

function techs(techs) {
  return `
    <ul class="tags">
      ${techs.map((tech) => `<li class="tag">${tech}</li>`).join('')}
    </ul>
  `;
}

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

worksSection.innerHTML = `
  ${worksList.map(workCard).join('')}
`;