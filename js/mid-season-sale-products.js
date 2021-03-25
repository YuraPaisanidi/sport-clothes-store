function renderProducts(products) {
    const productsContainer = document.querySelector('.mid-season-sale__cards');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += `
        <div class="card mid-season-sale__item">
                <img src="img/${product.image}" class="card-img-top mid-season-sale__item_image" alt="${product.title}">
                <div class="card-body">
                  <a class="card-title mid-season-sale__item_name ">${product.title}</a>
                  <p class="card-text mid-season-sale__item_price">$${product.price},00USD</p>
                  <a href="#" class="btn btn-primary mid-season-sale__item_button">Add to Cart</a>
                </div>
              </div>`
    }
}

async function fetchAndRenderProd() {
    const response = await fetch('json/productsMidSeason.json');
    const products = await response.json();
    renderProducts(products);
}

fetchAndRenderProd();