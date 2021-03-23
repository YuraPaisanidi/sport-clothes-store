const productsWomenJSON = `
[
    {
        "title": "Puma Sports Bra",
        "price": 12.00,
        "image": "bra.jpg"
    },
    {
        "title": "Reebok Long Sleave Top",
        "price": 18.00,
        "image": "long-sleave.jpg"
    },
    {
        "title": "Quicksilver Workout Top",
        "price": 12.00,
        "image": "workout-top.jpg"
    }
]
`;

const productsMenJSON = `
[
    {
        "title": "Adidas Compression Tee",
        "price": 33.00,
        "image": "adidas-tee.jpg"
    },
    {
        "title": "Reebok Fitness Jacket",
        "price": 52.00,
        "image": "reebok-jacket.jpg"
    },
    {
        "title": "Quicksilver Tech T-Shirt",
        "price": 21.00,
        "image": "quicksilver-t-shirt.jpg"
    }
]
`;

const productsShoesJSON = `
[
    {
        "title": "Nike Amanda Running Shoes",
        "price": 120.00,
        "image": "nike-shoes.jpg"
    },
    {
        "title": "Puma Basket Shoes",
        "price": 140.00,
        "image": "puma-shoes.jpg"
    },
    {
        "title": "Adidas Campus",
        "price": 130.00,
        "image": "adidas-shoes.jpg"
    }
]
`;

function renderProdWomen(productsWomen){
    const productsContainer = document.querySelector('.main-collection__tabs_content');
    productsContainer.innerHTML = '';
    for (const product of productsWomen){
        productsContainer.innerHTML += `
        <article class="main-collection__tabs_item">
                    <img src="img/${product.image}" alt="${product.title}" class="main-collection__tabs_image">
                    <a class="main-collection__tabs_name">${product.title}</a>
                    <p class="main-collection__tabs_price">$${product.price},00USD</p>
                    <button class="main-collection__tabs_button">Add to Cart</button>
                </article>
        `
    }
}

function renderProdMen(productsMen){
    const productsContainer = document.querySelector('.main-collection__tabs_content');
    productsContainer.innerHTML = '';
    for (const product of productsMen){
        productsContainer.innerHTML += `
        <article class="main-collection__tabs_item">
                    <img src="img/${product.image}" alt="${product.title}" class="main-collection__tabs_image">
                    <a class="main-collection__tabs_name">${product.title}</a>
                    <p class="main-collection__tabs_price">$${product.price},00USD</p>
                    <button class="main-collection__tabs_button">Add to Cart</button>
                </article>
        `
    }
}

function renderProdShoes(productsShoes){
    const productsContainer = document.querySelector('.main-collection__tabs_content');
    productsContainer.innerHTML = '';
    for (const product of productsShoes){
        productsContainer.innerHTML += `
        <article class="main-collection__tabs_item">
                    <img src="img/${product.image}" alt="${product.title}" class="main-collection__tabs_image">
                    <a class="main-collection__tabs_name">${product.title}</a>
                    <p class="main-collection__tabs_price">$${product.price},00USD</p>
                    <button class="main-collection__tabs_button">Add to Cart</button>
                </article>
        `
    }
}

renderProdWomen(JSON.parse(productsWomenJSON));

const womenContBtn = document.getElementById('tab-women-button');
const menContBtn = document.getElementById('tab-men-button');
const shoesContBtn = document.getElementById('tab-shoes-button');

womenContBtn.addEventListener('click', renderProdWomen(JSON.parse(productsWomenJSON)));
shoesContBtn.addEventListener('click', renderProdShoes(JSON.parse(productsMenJSON)));
menContBtn.addEventListener('click', renderProdMen(JSON.parse(productsShoesJSON)));

