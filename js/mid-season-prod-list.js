class ProductList {
    constructor(cart) {
      this.cart = cart;
      this.container = document.querySelector(".mid-season-sale__cards");
      this.productService = new ProductsService();
      this.productService
        .getProducts()
        .then(() => this.renderProducts())
        .then(() => this.addEventListeners());
    }
    async renderProducts() {
      let productListDomString = "";
      const products = await this.productService.getProducts();
      [...products]
        .forEach((product) => {
          productListDomString += `<div class="card mid-season-sale__item">
                                      <img src="img/${product.image}" class="card-img-top mid-season-sale__item_image" alt="${product.title}">
                                      <div class="card-body">
                                      <a class="card-title mid-season-sale__item_name ">${product.title}</a>
                                      <p class="card-text mid-season-sale__item_price">$${product.price},00USD</p>
                                      <a href="#" class="btn btn-primary mid-season-sale__item_button" data-id="${product.id}">Add to Cart</a>
                                      </div>
                                  </div>`;
        });
      this.container.innerHTML = productListDomString;
    }
    async addEventListeners() {
        document
        .querySelectorAll('.mid-season-sale__item_button')
        .forEach(button =>
            button.addEventListener('click', event =>
            this.handleProductBuyClick(event)
            )
        );
    }     handleProductBuyClick(event) {
            const button = event.target;
            const id = button.dataset.id;
            this.cart.addProduct(id);
        }
}