let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItemsList.innerHTML = ''; 

    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total;
}

function showTips() {
    const tipsContent = document.getElementById('tips-content');
    tipsContent.style.display = tipsContent.style.display === 'block' ? 'none' : 'block';
}

function showSkinTypeResult() {
    const skinTypeAnswer = document.getElementById('skin-type-answer');
    const skinTypeResult = document.getElementById('skin-type-result');
    const selectedValue = skinTypeAnswer.value;

    let resultText = "";
    switch (selectedValue) {
        case "oily":
            resultText = "You have oily skin.";
            break;
        case "dry":
            resultText = "You have dry skin.";
            break;
        case "combination":
            resultText = "You have combination skin.";
            break;
        case "normal":
            resultText = "You have normal skin.";
            break;
        default:
            resultText = "Please select a skin type.";
    }
    skinTypeResult.textContent = resultText;
}

function startQuiz() {
    alert("Quiz functionality will be added soon!");
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('email');
    const subscribeMessage = document.getElementById('subscribe-message');
    const email = emailInput.value;

    if (email) {
        subscribeMessage.textContent = "Thank you for subscribing!"; 
        emailInput.value = ""; 
    } else {
        subscribeMessage.textContent = "Please enter a valid email address.";
    }
}
function showBilling() {
    const billingInfo = document.getElementById('billing-info');
    billingInfo.style.display = 'block'; 
}

function processPayment() {
    const billingName = document.getElementById('billing-name').value;
    const billingAddress = document.getElementById('billing-address').value;
    const billingPayment = document.getElementById('billing-payment').value;
    const orderSummary = document.getElementById('order-summary');
    const cartTotal = document.getElementById('cart-total').textContent;

    if (!billingName || !billingAddress) {
        alert("Please fill in all billing information.");
        return;
    }

    let summary = "<h2>Order Summary:</h2>";
    summary += `<p>Name: ${billingName}</p>`;
    summary += `<p>Address: ${billingAddress}</p>`;
    summary += `<p>Payment Method: ${billingPayment}</p>`;
    summary += "<h3>Items:</h3><ul>";

    cart.forEach(item => {
        summary += `<li>${item.name} - ₹${item.price}</li>`;
    });
    summary += `</ul><p><b>Total: ₹${cartTotal}</b></p>`;

    orderSummary.innerHTML = summary;
    cart = []; 
    updateCart(); 

    alert("Order placed successfully! (This is a simplified example)");
    document.getElementById('billing-info').style.display = 'none'; 
}