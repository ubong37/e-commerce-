// Form Validation
const form = document.getElementById("productForm");
if (form) {
  form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
      event.preventDefault();
    } else {
      alert("Form submitted successfully!");
    }
  });
}

// Cart Functionality
function addToCart(product, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  if (!cartItems || !totalPrice) return;

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.product + " - $" + item.price;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = "Total: $" + total;
}
displayCart();