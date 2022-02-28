//Toggle mobile menu
const toggleMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.desktoppp');
const closeMenu = document.querySelector('.bars');


toggleMenu.addEventListener('click', function () {
    console.log("Test");
    mobileMenu.classList.toggle('visible');
    closeMenu.classList.toggle('visible');
})