const toggleBtn = document.getElementsByClassName('toggle-button');
const navbarLinks = document.getElementsByClassName('nav-bar');


toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})