document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.querySelector(".close");
    const cartBtn = document.getElementById("cart-btn");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let product = this.closest(".product");
            let name = product.getAttribute("data-name");
            let price = parseFloat(product.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
    }

    cartBtn.addEventListener("click", () => {
        cartModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        cartModal.style.display = "none";
    });
});
