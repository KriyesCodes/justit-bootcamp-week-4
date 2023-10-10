/*
Task: 
1: Write a conditional check that checks whether a customer is old enough to be served alcohol at a bar. Declare a variable called age and write an if statement that checks whether age is 18 or above. If age is less than 18 log "Sorry, I can't serve you" to the console, if age is 18 or above log "No problem, what would you like to drink?"

2: Declare a variable called "Password". Write an if statement that checks how many characters are in the password, if the password has more than 8 characters log the password to the console, if the password has less than 8 characters log to the console that the password is too short.

3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, if so log "This number is divisible by 3 or 5" to the console. Otherwise log an alternate message to the console.

4: Create a variable that stores a number. If the number is divisible by 3, log "fizz" to the console. If the number is divisible by 5 log "buzz" to the console. If the number is divisible by both 3 and 5, log "fizz buzz" to the console. Otherwise log the number to the console.
*/

// task 1
console.log(`Task 1:
-----`);

let age = 19;
console.log(`Input: ${age}`);

if (age >= 18) {
  console.log("No problem, what would you like to drink?");
}
else {
  console.log("Sorry, I can't serve you");
}

// task 2
console.log(`Task 2:
-----`);

let password = "NB}IOBbObi8";
console.log(`Input: ${password}`);

if (password.length >= 8) {
  console.log(password);
}
else {
  console.log("Password is too short");
}

// task 3
console.log(`Task 3:
-----`);

let num = 9;
console.log(`Input: ${num}`);

if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5");
}
else {
  console.log("This number is neither divisible by 3 nor 5");
}

// task 4
console.log(`Task 4:
-----`);

num = 15;
console.log(`Input: ${num}`);

if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizz buzz");
}
else if (num % 3 === 0) {
  console.log("fizz");
}
else if (num % 5 === 0) {
  console.log("buzz");
}
else {
  console.log(num);
};