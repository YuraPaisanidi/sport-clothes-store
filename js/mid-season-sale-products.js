const productsJSON = `
[
    {
        "title": "Adidas Cloudfoam Trainers",
        "price": 60.00,
        "image": "trainers.jpg"
    },
    {
        "title": "Reebok Workout Shorts",
        "price": 25.00,
        "image": "shorts.jpg"
    },
    {
        "title": "Puma Fitness Shoes in Grey",
        "price": 60.00,
        "image": "sneakers.jpg"
    },
    {
        "title": "Puma Essential Tank Top",
        "price": 43.00,
        "image": "top.jpg"
    },
    {
        "title": "Nike Classic Polo T-Shirt",
        "price": 23.00,
        "image": "polo.jpg"
    }

]
`;


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

renderProducts(JSON.parse(productsJSON));