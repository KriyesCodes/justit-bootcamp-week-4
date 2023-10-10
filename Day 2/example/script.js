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

// Switch statement

let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Weekend is over, Happy Monday!");
    break;
  case "Tuesday":
    console.log("Another weekday...");
    break;
  case "Wednesday":
    console.log("Another weekday...");
    break;
  case "Thursday":
    console.log("Another weekday...");
    break;
  case "Friday":
    console.log("Another weekday...");
    break;
  default:
    console.log("WEEKEND LET'S GO!");
};


// Switch statement 2 - Grade Example

let testScore = 80;

switch (true) {
  case testScore >= 70:
    console.log("Distinction");
    break;
  case testScore >= 60:
    console.log("Merit");
    break;
  case testScore >= 50:
    console.log("Pass");
    break;
  default:
    console.log("Failed");
};