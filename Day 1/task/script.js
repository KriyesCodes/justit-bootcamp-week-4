/*
Tasks:

1: Create a variable that stores your name and log a string to the console that personally greets you using template literals. 
2: Create variables storing your name, your favourite colour and your favourite film or tv series. Using template literals I want you to log a sentence including these values to the console.
3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. Without redeclaring new variables I would like you to assign a new value of what you ate today to the variables, and again log them to the console.
*/

let userName = "Kriyes";

console.log(`Welcome to the hell that is JavaScript ${userName}!`);

let favColor = "blue";
let favSeries = "Regular Show";

console.log(`My data about you shows that you like the color ${favColor} and your favourite series is ${favSeries}. These are excellent choices.`);

let breakfast = "full English breakfast";
let lunch = "fruit salad";
let dinner = "Nando's chicken"

console.log(`Furthermore, you ate ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner yesterday.`);

breakfast = "potato waffles and eggs";
lunch = "ham and cheese sandwich";
dinner = "leftover Nando's chicken";

console.log(`I can see that you have eaten ${breakfast} for breakfast today and you plan on eating ${lunch} for lunch, ending with ${dinner} for dinner.`);