document.querySelector('#cart-number').innerHTML = localStorage.getItem('cart-list')?.split(",").length || 0