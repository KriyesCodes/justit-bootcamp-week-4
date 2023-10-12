// Functions

greeting(); // functions declared like below are hoisted

// declaring a function

function greeting() {
  console.log("Wazzzzzzzup");
}

// calling / invoking a function

greeting();

// user status function

let userOnline = false;

function toggleUserStatus() {
  if (!userOnline) {
    userOnline = true;
    console.log("Signed in user");
  }
  else {
    userOnline = false;
    console.log("Signed out user");
  }
}

toggleUserStatus();

// Parameters and Arguments

function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 20);

// Functions that call other functions

function double(num) {
  return num * 2;
}

function quadruple(num) {
  return double(num) * 2;
}

console.log(quadruple(10));