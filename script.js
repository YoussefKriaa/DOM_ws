// Get all the plus buttons
var plusButtons = document.querySelectorAll('.plus');

// Add click event listeners to each plus button
for (var i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener('click', function() {
    // Get the corresponding quantity element
    var quantityElement = this.parentNode.querySelector('p');
    // Get the current quantity value
    var currentQuantity = parseInt(quantityElement.textContent);
    // Increment the quantity by 1
    currentQuantity += 1;
    // Update the quantity element with the new value
    quantityElement.textContent = currentQuantity;

    // Update the price and total
    updatePriceAndTotal(this, currentQuantity);
  });
}

// Get all the minus buttons
var minusButtons = document.querySelectorAll('.minus');

// Add click event listeners to each minus button
for (var i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener('click', function() {
    // Get the corresponding quantity element
    var quantityElement = this.parentNode.querySelector('p');
    // Get the current quantity value
    var currentQuantity = parseInt(quantityElement.textContent);

    // Make sure the quantity doesn't go below 0
    if (currentQuantity > 0) {
      // Decrement the quantity by 1
      currentQuantity -= 1;
      // Update the quantity element with the new value
      quantityElement.textContent = currentQuantity;

      // Update the price and total
      updatePriceAndTotal(this, currentQuantity);
    }
  });
}

// Function to update the price and total
function updatePriceAndTotal(button, quantity) {
  // Get the parent row of the button
  var row = button.closest('tr');
  // Get the unit price and price elements
  var unitPriceElement = row.querySelector('.unitPrice');
  var priceElement = row.querySelector('.price');
  // Get the unit price value
  var unitPrice = parseInt(unitPriceElement.textContent);
  // Calculate the new price
  var price = unitPrice * quantity;
  // Update the price element with the new value
  priceElement.textContent = price;

  // Calculate the total price
  var total = 0;
  var priceElements = document.querySelectorAll('.price');
  for (var i = 0; i < priceElements.length; i++) {
    total += parseInt(priceElements[i].textContent);
  }
 }
 // Get all the like buttons
var likeButtons = document.querySelectorAll('.like');

// Add click event listeners to each like button
for (var i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function() {
    // Toggle the active class on the like button
    if (this.style.color === 'red') {
      this.style.color = '';
    } else {
      this.style.color = 'red';
    }
  });
}
// cssdvsffsvwcvcxvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Get all the delete buttons
var deleteButtons = document.querySelectorAll('.delete');

// Add click event listeners to each delete button
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', function() {
    // Get the parent row of the button
    var row = this.closest('tr');

    // Get the quantity and price elements
    var quantityElement = row.querySelector('p');
    var priceElement = row.querySelector('.price');

    // Get the current quantity and price values
    var currentQuantity = parseInt(quantityElement.textContent);
    var currentPrice = parseInt(priceElement.textContent);

    // Check if the quantity is already 0 for the deleted item
    if (currentQuantity !== 0) {
      // Update the quantity to 0
      quantityElement.textContent = '0';

      // Update the price to 0
      priceElement.textContent = '0';

      // Update the total price by subtracting the deleted item's price
      var totalPriceElement = document.getElementById('total');
      var totalPrice = parseInt(totalPriceElement.textContent);
      totalPrice -= currentPrice;
      totalPriceElement.textContent = totalPrice;
    }
  });
}
