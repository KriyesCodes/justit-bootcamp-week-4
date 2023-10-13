// Objects

// Objects Syntax
// Key: Value - Pairs
const person = {
  name: "Kriyes",
  age: 20
};

// CoffeeShop

const coffeeShop = {
  name: "Costa",
  branchNumber: 250,
  specialOffers: true,
  drinks: [
    "Americano",
    "Latte",
    "Tea"
  ]
};

console.log(coffeeShop);

// Accessing data using dot notation
console.log(coffeeShop.name);

// Accessing data using bracket notation
console.log(coffeeShop["branchNumber"]);

// Combining dot and bracket notation
console.log(coffeeShop.drinks[0]);

// Add items to an existing object
coffeeShop.muffins = ["Blueberry", "Chocolate"];
console.log(coffeeShop.muffins);

// Try not to change built in js objects
// Math.add = (num1, num2) => num1 + num2;

// console.log(Math.add(2, 3));

// Overwrite / change data is an existing object
coffeeShop.branchNumber = 100;
console.log(coffeeShop);

// Add special offers
coffeeShop.breakfastOffer = "Free Bagel with my coffee!";
coffeeShop.lunchOffer = "Free coffee with any Sandwich!";

let offer = "No current offer";
let time = 1300;

if (time < 1100) {
  offer = coffeeShop.breakfastOffer;
  console.log(offer);
}
else if (time < 1500) {
  offer = coffeeShop.lunchOffer;
  console.log(offer);
}

// Methods
coffeeShop.open = function () {
  return "We are open come on in!";
};

console.log(coffeeShop.open());

coffeeShop.close = function () {
  return "Sorry we are closed come back tomorrow!";
};

console.log(coffeeShop.close());

console.log(coffeeShop);

// Alarm objects
const alarm = {
  weekendAlarm: "Sleep in its the weekend!",
  weekdayAlarm: "Get up at 6am",
  checkDay: function (day) {
    switch (true) {
      case (day === "Saturday"):
        return this.weekendAlarm;
      case (day === "Sunday"):
        return this.weekendAlarm;
      default:
        return this.weekdayAlarm;
    }

  }
}

console.log(alarm.checkDay("Saturday"));
console.log(alarm.checkDay("Sunday"));
console.log(alarm.checkDay("Monday"));