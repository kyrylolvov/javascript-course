// Exporting module

// Importing from another document
import { addToCart, totalQuantity, totalPrice } from './shoppingCard.js';
console.log('Importing module');

addToCart('apples', 5);
console.log(totalPrice, totalQuantity);
