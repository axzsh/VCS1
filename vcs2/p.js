let cartCount = 0;

function addToCart(name) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert(`${name} was added to your cart! 🛒`);
}

