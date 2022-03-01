//Toggle mobile menu
const openMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.desktop');
const menuItems = document.querySelectorAll('.menu-item');

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('hide');
    mobileMenu.classList.toggle('show');
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
        openMenu.classList.toggle('hide');
    })
})

