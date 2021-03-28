class Cart {
  constructor() {
    this.productService = new ProductsService();
    this.cartContainer = document.querySelector("#shoppingCartModal");
    this.cart = JSON.parse(localStorage["cart"] || "{}");
    this.addEventListeners();
  }
  addEventListeners() {
    document
      .querySelector(".openCartLink")
      .addEventListener("click", () => this.renderCart());
    // this.cartContainer.querySelector(".order");
    // .addEventListener('click', ev => this.order(ev));
  }
  saveCart() {
    localStorage['cart'] = JSON.stringify(this.cart);
  }
  async renderCart() {
    let total = 0;
    let cartDomSting = `  <div class="modal-body__prod">
                                <p class="modal-body__prod_title">Products</p>
                                <div class="modal-body__prod_wrapper">
                                    <div class="modal-body__prod_item">
                                        <img src="img/" alt="" class="modal-body__prod_image">
                                        <p class="modal-body__prod_name"></p>
                                    </div>
                                    <div class="modal-body__prod_amount">
                                    </div>
                                </div>`;

    for (const id in this.cart) {
      const product = await this.productService.getProductById(id);
      total += product.price * this.cart[id];
      cartDomSting += `
                        <div class="modal-body__prod" data-id="${id}>
                        <p class="modal-body__prod_title">Products</p>
                        <div class="modal-body__prod_wrapper">
                            <div class="modal-body__prod_item">
                                <img src="img/${product.image}" alt="${product.title}" class="modal-body__prod_image">
                                <p class="modal-body__prod_name">${product.title} (art.${product.id})</p>
                            </div>
                            <div class="modal-body__prod_amount">
                                <button class="amount-btn minus" data-id=${id}>-</button>
                                <input type="number" readonly value="${this.cart[id]}">
                                <button class="amount-btn plus" data-id=${id}>+</button>
                                <p class="modal-body__prod_price">$${product.price}.00USD</p>
                            </div>
                            <i class="far fa-trash-alt modal-body__prod_clear"></i>
                        </div>
                        <p class="modal-body__prod_sum">Total: $${total}USD</p>`;
    }
    total = total.toFixed(2);
    cartDomSting += `
                  <div class="row">
                      <div class="col-5"><strong>TOTAL</strong></div>
                      <div class="col-3"><strong>$${total}</strong></div>
                  </div>            
          </div>`;
    this.cartContainer.querySelector(".modal-dialog").innerHTML = cartDomSting;
    this.cartContainer
      .querySelectorAll(".plus")
      .forEach((el) =>
        el.addEventListener("click", (ev) =>
          this.changeQuantity(ev, this.addProduct)
        )
      );
    this.cartContainer
      .querySelectorAll(".minus,")
      .forEach((el) =>
        el.addEventListener("click", (ev) =>
          this.changeQuantity(ev, this.deleteProduct)
        )
      );
  }
  changeQuantity(ev, operation) {
    const button = ev.target;
    const id = button.dataset.id;
    operation.call(this, id);
    this.renderCart();
  }
  addProduct(id) {
    this.cart[id] = (this.cart[id] || 0) + 1;
    this.saveCart();
  }
  deleteProduct(id) {
    if (this.cart[id] > 1) {
      this.cart[id] -= 1;
    } else {
      delete this.cart[id];
    }
    this.saveCart();
  }
  // async order(ev) {
  //   if ((await this.cartLengthAndCost()).count === 0) {
  //     window.showAlert('Please choose products to order', false);
  //     return;
  //   }
  //   const form = this.cartContainer.querySelector('.form-contacts');
  //   if (form.checkValidity()) {
  //     ev.preventDefault();
  //     fetch('order', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         clientName: document.querySelector('#client-name').value,
  //         clientEmail: document.querySelector('#client-email').value,
  //         cart: this.cart
  //       })
  //     })
  //       .then(response => {
  //         if (response.status === 200) {
  //           return response.text();
  //         } else {
  //           throw new Error('Cannot send form');
  //         }
  //       })
  //       .then(responseText => {
  //         form.reset();
  //         this.cart = {};
  //         this.saveCart();
  //         this.updateBadge();
  //         this.renderCart();
  //         window.showAlert('Thank you! ' + responseText);
  //         this.cartContainer.querySelector('.close-btn').click();
  //       })
  //       .catch(error => showAlert('There is an error: ' + error, false));
  //   } else {
  //     window.showAlert('Please fill form correctly', false);
  //   }
  // }
}
