/*
Tasks: 

1: Create an array of your favourite Films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console.

2: Write a loop to generate 10 random numbers between 1-100 and log them to the console.

3: Write a loop that counts backwards from 20-0, logging each number to the console.

4: Generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible or not to the console.
*/

// Task 1
console.log("Task 1 \n -----");

let favShows = ["Rick and Morty", "Regular Show", "Steins;Gate", "Death Note"];

favShows.push("The Disastrous Life of Saiki K", "Moon Knight");

for (let show of favShows) {
  console.log(show);
}

// Task 2
console.log("Task 2 \n -----");

for (let i = 0; i < 10; ++i) {
  console.log(Math.floor(Math.random() * 100) + 1);
}

// Task 3
console.log("Task 3 \n -----");

for (let i = 20; i >= 0; --i) {
  console.log(i);
}

// Task 4
console.log("Task 4 \n -----");

for (let i = 0; i < 5; ++i) {
  let num = Math.floor(Math.random() * 50) + 1;

  if (num % 5 === 0)
    console.log(`${num} is divisible by 5`);
  else console.log(`${num} is NOT divisible by 5`);
}

