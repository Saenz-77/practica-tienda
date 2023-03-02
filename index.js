const displayEmail = document.querySelector('.nav-mail');
const menuDesk = document.querySelector('.menu-desk');
const menuHambur = document.querySelector('.menu-principal');
const mobile = document.querySelector('.mobile');
const navCar = document.querySelector('.nav-car');
const products = document.querySelector('.products');
const cards = document.querySelector('.cards');

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

const productsList = [];
productsList.push({
    name: 'articulo',
    price: '100.000',
    img: './logos/innogital.png'
})
productsList.push({
    name: 'articulo',
    price: '100.000',
    img: './logos/innogital.png'
})

function renderProducts(arr){
    for (productos of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        const img = document.createElement('img');
        img.setAttribute('src', productos.img);

        const info = document.createElement('div');
        info.classList.add('info');

        const productDiv = document.createElement('div');

        const productCost = document.createElement('p');
        productCost.innerText = '$' + productos.price;
        
        const productName = document.createElement('p');
        productName.innerText = productos.name;
        
        
        const figure = document.createElement('figure');
        const imgCar = document.createElement('img');
        imgCar.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productDiv.append(productCost, productName);
        figure.appendChild(imgCar);
        info.appendChild(productDiv);
        info.appendChild(figure);
        productCard.appendChild(img);
        productCard.appendChild(info);

        cards.appendChild(productCard);
    }
}

renderProducts(productsList)