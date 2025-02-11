// Store the cart as an array
let cart = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    // Update cart count and total price
    cartCount.textContent = cart.length;

    // Calculate total price
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
    });
    cartTotal.textContent = '$' + totalPrice.toFixed(2);
}

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };

    // Add product to cart array
    cart.push(product);

    // Update the cart display
    updateCartDisplay();

    // Show a confirmation alert
    alert(`${productName} has been added to your cart.`);
}

// Function to display the cart (simple version)
function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartDetails = 'Your Cart:\n';
        cart.forEach((item, index) => {
            cartDetails += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
        });

        // Display cart items
        cartDetails += `\nTotal: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`;
        alert(cartDetails);
    }
}
