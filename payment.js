window.onload = function() {
    var cartItemsElement = document.getElementById('cartItems');
    var totalAmountElement = document.getElementById('totalAmount');
    var payButton = document.getElementById('payButton');

    // Retrieve cart items from localStorage
    var cartItems = JSON.parse(localStorage.getItem('data')) || [];

    // Calculate total amount using the existing calculation function
    var totalAmount = calculation(cartItems);

    // Update cart items and total amount in the page
    cartItemsElement.innerHTML = generateCartItemsHTML(cartItems);
    totalAmountElement.textContent = "$" + totalAmount.toFixed(2);

    // Event listener for pay button
    payButton.addEventListener('click', function() {
        // Here you can implement the payment process
        // For the sake of this example, let's just display a message
        alert("Payment successful!");
        // Redirect to a thank you page or another appropriate page
        window.location.href = "thankyou.html";
    });
};

// Function to generate HTML for cart items
function generateCartItemsHTML(items) {
    var html = "";
    items.forEach(function(item) {
        let { id, name, price, desc, img, item: quantity } = item;
        html += `<div id="product-id-${id}" class="item">
                    <img width="220" src="${img}" alt="">
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${desc}</p>
                        <div class="price-quantity">
                            <h2>$ ${price} </h2>
                            <div class="quantity">${quantity}</div>
                        </div>
                    </div>
                </div>`;
    });
    return html;
}

// Function to calculate total amount based on cart items
function calculation(items) {
    return items.reduce((total, item) => total + (item.price * item.item), 0);
    
}

window.onload = function() {
    var paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Here you can implement the payment processing logic
        // For demonstration purposes, let's display an alert indicating successful payment
        alert("Payment successful!");
    });
};



