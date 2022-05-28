const menuBtn = document.querySelector('.menu-btn');
const hamburgerMenu = document.querySelector('.hamburger-container')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    hamburgerMenu.classList.toggle('is-active')
})
