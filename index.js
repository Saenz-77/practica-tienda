const displayEmail = document.querySelector('.nav-mail');
const menuDesk = document.querySelector('.menu-desk');
const menuHambur = document.querySelector('.menu-principal');
const mobile = document.querySelector('.mobile');
const navCar = document.querySelector('.nav-car');
const products = document.querySelector('.products');

displayEmail.addEventListener('click', manejarMenu);
menuHambur.addEventListener('click', menuMobile);
navCar.addEventListener('click', menuProducts);

function manejarMenu(){
    const isProductsClosed = products.classList.contains('.inactive');

    if (!isProductsClosed){
        products.classList.add('inactive');
    }
    menuDesk.classList.toggle('inactive');
}

function menuMobile(){
    const isProductsClosed = products.classList.contains('.inactive');

    if (!isProductsClosed){
        products.classList.add('inactive');
    }
    mobile.classList.toggle('inactive');
}

function menuProducts(){
    const isMobileMenuClosed = mobile.classList.contains('.inactive');
    const isMenuEmailClosed = menuDesk.classList.contains('inactive');


    if (!isMobileMenuClosed){
        mobile.classList.add('inactive');
    }
    if (!isMenuEmailClosed){
        menuDesk.classList.add('inactive');
    }
    
    products.classList.toggle('inactive');
}