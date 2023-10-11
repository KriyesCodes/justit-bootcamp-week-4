// Array

// Declaring an Array
let coffeeOrder = [
  "James - Americano",
  "Hannah - Latte",
  "Alex - Frappuccino"
];

// Log entire array
console.log(coffeeOrder);

// Log items by index
console.log(coffeeOrder[0]);
console.log(coffeeOrder[1]);
console.log(coffeeOrder[2]);

// length property
// console.log(coffeeOrder.length);

// Update individual array itmes
coffeeOrder[1] = "Hannah - Tea";
console.log(coffeeOrder);

// Add items to an array vis the index
coffeeOrder[3] = "Christian - Water";
console.log(coffeeOrder);

// Array Methods

//  .pop method - removes the last item from the array
coffeeOrder.pop();
console.log(coffeeOrder);

// .push(item) method - add an item to the end of the array
coffeeOrder.push("Christian - Apple Juice");
console.log(coffeeOrder);

// QUICK TIP: console.table()
console.table(coffeeOrder);