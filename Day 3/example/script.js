// // Array

// // Declaring an Array
// let coffeeOrder = [
//   "James - Americano",
//   "Hannah - Latte",
//   "Alex - Frappuccino"
// ];

// // Log entire array
// console.log(coffeeOrder);

// // Log items by index
// console.log(coffeeOrder[0]);
// console.log(coffeeOrder[1]);
// console.log(coffeeOrder[2]);

// // length property
// // console.log(coffeeOrder.length);

// // Update individual array itmes
// coffeeOrder[1] = "Hannah - Tea";
// console.log(coffeeOrder);

// // Add items to an array vis the index
// coffeeOrder[3] = "Christian - Water";
// console.log(coffeeOrder);

// // Array Methods

// //  .pop method - removes the last item from the array
// coffeeOrder.pop();
// console.log(coffeeOrder);

// // .push(item) method - add an item to the end of the array
// coffeeOrder.push("Christian - Apple Juice");
// console.log(coffeeOrder);

// // QUICK TIP: console.table()
// console.table(coffeeOrder);

// Loops
let colours = [
  "Red",
  "Blue",
  "Orange",
  "Yellow",
  "Purple",
  "Green"
];

// Increment Operator - ++
// let a = 1;
// let b = a++;
// console.log(a);
// console.log(b);

// console.log("-----");

// let c = 1;
// console.log(++c);
// c = 1;
// console.log(c++);

// For loop

// for (let i = 0; i < 5; i++) {
//   console.log(`Index value is currently ${i}`);
// }

// for (let i = 0; i < colours.length; ++i) {
//   console.log(colours[i]);
// }

// While loop

// let number = 0;

// while (number < 10) {
//   console.log(number);
//   number++;
// }

// While Loop 2
let cards = ["Diamond", "Heart", "Club", "Spade"];
let currentCard = "";

while (currentCard !== "Spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

console.log("GAME OVER");

// Do While loop
let num = 10;

do {
  console.log(num);
} while (num < 1)

// Break keyword in loop

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// For loop - array

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
]

for (let day of weekdays) {
  console.log(day);
}


weekdays.forEach(day => {
  console.log(day);
});