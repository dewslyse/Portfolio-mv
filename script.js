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
    mobileMenu.classList.toggle('show');
    openMenu.classList.toggle('hide');
  });
});

function ProjectCard(title, description, featuredIMGURL, technologies, liveDemoURL, sourceURL) {
  this.title = title;
  this.description = description;
  this.featuredIMGURL = featuredIMGURL;
  this.technologies = technologies;
  this.liveDemoURL = liveDemoURL;
  this.sourceURL = sourceURL;
}

let card1 = new ProjectCard('syills', 'description text')

//for testing your future object. Pass in the variable in place of PROJECTCARD inside Object.entries().
for (let [property, value] of Object.entries(PROJECTCARD)) {
  console.log(`${property}: ${value}`);
}