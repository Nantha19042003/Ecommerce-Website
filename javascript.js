
let cart = [];

function updateCartCount() {
  document.getElementById("cart-count").innerText = "Cart: " + cart.length;
}

document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll(".btn-add-to-cart");

  addButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const item = this.closest(".card").querySelector(".card-title").innerText;
      cart.push(item);
      updateCartCount();
      alert(item + " added to cart!");
    });
  });

  updateCartCount();
});
