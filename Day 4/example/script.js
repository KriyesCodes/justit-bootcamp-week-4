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

userStatus();

// Parameters and Arguments

function add(num1, num2) {
  console.log(num1 + num2);
}