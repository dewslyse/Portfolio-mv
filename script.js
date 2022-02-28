//Toggle mobile menu
const toggleMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.desktoppp');
const closeMenu = document.querySelector('.bars');
const listMenu = document.querySelector('.menu')


toggleMenu.addEventListener('click', function () {
    console.log("Test");
    mobileMenu.classList.toggle('visible');
    closeMenu.classList.toggle('visible');
    listMenu.classList.toggle('visible');
})