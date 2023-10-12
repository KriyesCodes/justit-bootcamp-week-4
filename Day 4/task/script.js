/*
Tasks:

1: Write a function that takes in your name as an argument and logs a personalised greeting to you in the console.

2: Write a function that takes in a number as an argument and check whether it is odd or even and logs the result to the console.

3. Write a function that replicates the functionality of Cash Machine / ATM. The ATM should have parameters of pin number and withdrawal amount that are compared to variables of account balance and stored pin number. If the pin passed as an argument is correct and the withdrawal amount is less than the account balance, approve the transaction. If the pin is wrong or the withdrawal amount is greater than the account balance, deny the transaction.

4: Research arrow functions to familiarise yourself with the differences between them and function declarations. I would then like you to write some example arrow functions and convert a function from a declaration to an arrow function. 
*/

// Task 1
console.log("Task 1 \n -----");

function greet(name) {
  console.log(`Hello there ${name}!`);
}

greet("kriyes");

// Task 2
console.log("Task 2 \n -----");

function oddOrEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  }
  else {
    console.log(`${num} is odd`);
  }
}

oddOrEven(96);
oddOrEven(7);

// Task 3
console.log("Task 3 \n -----");

let availableFunds = 500;

function withdrawMoney(pin, requestAmount) {
  const correctPin = 2093;

  console.log(`Initiating withdrawal process with pin ${pin} and request amount ${requestAmount}:`);

  if (pin === correctPin) {
    console.log("Pin is correct. Processing...\n");

    if (availableFunds === 0 || requestAmount > availableFunds) {
      console.log(`Withdrawal Denied. Not enough available funds. Funds available: £${availableFunds}`);
    }
    else if ((Math.round(requestAmount * 100) / 100) <= 0) {
      console.log("Withdrawl Denied. Cannot withdraw a negative, zero, or amount less than 1p.");
    }
    else {
      availableFunds = Math.round(availableFunds * 100 - requestAmount * 100) / 100;
      console.log(`Withdrawal Successful. £${requestAmount} has been withdrawn. Funds remaining: £${availableFunds}`);
    }
  }
  else {
    console.log("Access Denied. Pin is incorrect")
  }
}

withdrawMoney(1111, 20);
withdrawMoney(2093, 700);
withdrawMoney(2093, -200);
withdrawMoney(2093, 0);
withdrawMoney(2093, 0.004);
withdrawMoney(2093, 200);
withdrawMoney(2093, 96.05);


// Task 4
console.log("Task 4 \n -----");

const greetArrow = (name) => {
  console.log(`Hello there ${name}!`);
}

greetArrow("kriyes");

const oddOrEvenImplicitReturn = (num) => console.log((num % 2) ? `${num} is odd` : `${num} is even`);

oddOrEvenImplicitReturn(5);
oddOrEvenImplicitReturn(8);

