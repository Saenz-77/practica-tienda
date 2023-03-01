const displayEmail = document.querySelector('.nav-mail');
const menuDesk = document.querySelector('.menu-desk');

displayEmail.addEventListener('click', manejarMenu);

function manejarMenu(){
    menuDesk.classList.toggle('inactive')
}