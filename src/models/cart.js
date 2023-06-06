// Cart model

// Array to store cart items
let cartItems = [];

// Add item to cart
const addItem = (item) => {
  cartItems.push(item);
};

// Get all items in cart
const getAllItems = () => {
  return cartItems;
};

module.exports = { addItem, getAllItems };
