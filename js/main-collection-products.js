const womenContBtn = document.getElementById('tab-women-button');
const menContBtn = document.getElementById('tab-men-button');
const shoesContBtn = document.getElementById('tab-shoes-button');

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

function renderProdMen(){
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

function renderProdShoes(){
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
    womenContBtn.classList.remove('active');
    menContBtn.classList.remove('active');
    shoesContBtn.classList.add('active');
}

async function fetchAndRenderProdWomen() {
    const response = await fetch('json/productsWomen.json');
    const productsWomen = await response.json();
    renderProdWomen(productsWomen);
    womenContBtn.classList.add('active');
    menContBtn.classList.remove('active');
    shoesContBtn.classList.remove('active');
}

async function fetchAndRenderProdMen() {
    const response = await fetch('json/productsMen.json');
    const productsMen = await response.json();
    renderProdWomen(productsMen);
    womenContBtn.classList.remove('active');
    menContBtn.classList.add('active');
    shoesContBtn.classList.remove('active');
}

async function fetchAndRenderProdShoes() {
    const response = await fetch('json/productsShoes.json');
    const productsShoes = await response.json();
    renderProdWomen(productsShoes);
    womenContBtn.classList.remove('active');
    menContBtn.classList.remove('active');
    shoesContBtn.classList.add('active');
}

fetchAndRenderProdWomen();

womenContBtn.addEventListener('click', fetchAndRenderProdWomen);
menContBtn.addEventListener('click', fetchAndRenderProdMen);
shoesContBtn.addEventListener('click', fetchAndRenderProdShoes);

