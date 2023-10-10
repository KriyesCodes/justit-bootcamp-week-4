// Conditions

// If / Else
let weather = "Rain";

if (weather == "Sunny") {
  console.log("Go touch grass");
}
else if (weather == "Rain") {
  console.log("Lofi and chill day");
}
else {
  console.log("Sadness");
};

// Comparison Operators
// == - equal to
let a = 10;
console.log(a == 10);

// === - strictly equal to
// checks the value and the data type
console.log(a === 10);

// != - not equal to

console.log(a != "10");

// !== - not equal value or data type

console.log(a !== "10");

// > - greater than

// < - less than

//  >= - greater than or equal to

// <= - less than or equal to

// Logical Operators

// || - or

// && - and

// ! - not

// Traffic Light Example
let trafficLight = "Green";

// If the traffic light is red or amber, log "Stop!", otherwise log "Go!"

if (trafficLight === "Red" || trafficLight === "Amber") {
  console.log("Stop!");
}
else {
  console.log("Go!");
};

// if (trafficLight !== "Green") {
//   console.log("Stop!");
// }
// else {
//   console.log("Go!");
// };

// Number Comparison

let num = 8;

if (num > 5 && num < 10) {
  console.log(`${num} is between 5 and 10`);
}
else {
  console.log(`${num} is not between 5 and 10`);
};