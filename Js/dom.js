// Function to update the total price
function updateTotalPrice() {
  var items = document.getElementsByClassName("item");
  var totalPrice = 0;

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var quantity = parseInt(item.querySelector("input").value);
    var price = 10; // Replace with the actual price of the item

    totalPrice += quantity * price;
  }

  document.getElementById("total-price").textContent = "$" + totalPrice;
}

// Function to handle quantity changes
function handleQuantityChange(quantityInput, increase) {
  var currentValue = parseInt(quantityInput.value);

  if (increase) {
    quantityInput.value = currentValue + 1;
  } else {
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }

  updateTotalPrice();
}

// Function to handle item deletion
function handleDeleteItem(deleteButton) {
  var item = deleteButton.closest(".item");
  item.remove();
  updateTotalPrice();
}

// Function to handle item liking
function handleLikeItem(likeButton) {
  likeButton.classList.toggle("liked");
}

// Attach event listeners
var plusButtons = document.getElementsByClassName("plus-btn");
var minusButtons = document.getElementsByClassName("minus-btn");
var deleteButtons = document.getElementsByClassName("delete-btn");
var likeButtons = document.getElementsByClassName("like-btn");

for (var i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function () {
    var quantityInput = this.parentNode.querySelector("input");
    handleQuantityChange(quantityInput, true);
  });
}

for (var i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function () {
    var quantityInput = this.parentNode.querySelector("input");
    handleQuantityChange(quantityInput, false);
  });
}

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    handleDeleteItem(this);
  });
}

for (var i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function () {
    handleLikeItem(this);
  });
}
