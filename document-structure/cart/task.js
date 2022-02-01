const cart = document.querySelector(".cart__products")
const controls = Array.from(document.querySelectorAll(".product__quantity-controls"));

controls.forEach(control => {
   let cartBasket = false;
   control.querySelector(".product__quantity-control_inc").addEventListener("click",
      (e) => {
         control.querySelector(".product__quantity-value").textContent++;
      })
   control.querySelector(".product__quantity-control_dec").addEventListener("click",
      (e) => {
         if (Number(control.querySelector(".product__quantity-value").textContent) > 1) {
            control.querySelector(".product__quantity-value").textContent--;
         }
      })
   control.nextElementSibling.addEventListener("click", () => {
      let copy = document.createElement('div');
      const cartProduct = Array.from(cart.querySelectorAll(".cart__product"));
      if (cartBasket === false) {
         copy.innerHTML = `<div class="cart__product" data-id="${control.closest(".product").dataset.id}">
               <img class="cart__product-image" src="${control.closest(".product").querySelector(".product__image").src}">
               <div class="cart__product-count">${control.querySelector(".product__quantity-value").textContent}</div>
           </div>`
         cart.insertAdjacentElement("beforeend", copy);
         cartBasket = true;
      } else {
         for (let i = 0; i < cartProduct.length; i++) {

            if (control.closest(".product").dataset.id === cartProduct[i].dataset.id) {
               cartProduct[i].querySelector(".cart__product-count").textContent = Number(cartProduct[i].querySelector(".cart__product-count").textContent) +
                  Number(control.querySelector(".product__quantity-value").textContent)
            }

         }

      }

   })

})
