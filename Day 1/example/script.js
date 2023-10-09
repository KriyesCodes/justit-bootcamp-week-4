// Properties - Data or information about the object

// Methods - Things the object can do

console.log("Hello World");

// Data Types:

// String - Represents characters enclosed in quote marks
console.log("I am a string!");

// Numbers
console.log(100);

// Boolean - True or False
console.log(true);
console.log(false);

// REMEMBER numbers inside quote marks are strings
console.log("1000");

// Null - An abscence of any value
console.log(null);

// Undefined - Data without a defined type
console.log(undefined);

// NaN - Not a number
console.log(NaN);

// Variables:

// var - variable declaration keyword
// AVOID USING VAR!!!

var variable = "Var is a method of declaring variables that you should avoid";

//  = - Single equals - Assignment Operator - Used to assign a value

console.log(variable);

/*
Trash
Multiline
Comment
*/

// Let - Declaring variables that will change

let changeable = "A value stored in a 'let' variable can be changed to another value";

console.log(changeable);

changeable = "A new value";

console.log(changeable);

// const - Variable with value that won't change

const constant = "A variable that can not be re-assigned";

console.log(constant);

// constant = "Change"; This will cause an error

// Properties and Methods:

let exampleString = "Hello World";

// .length - property that returns the number of characters in a string

console.log(exampleString.length);

// Method

// Remember that a method must be followed by parenthesis in order to invoke it

console.log(exampleString.toUpperCase()); // logs "HELLO WORLD"

// toUpperCase returns a new string, it does not change the value of the string the method is used on

console.log(exampleString); // logs "Hello World"

console.log(exampleString.slice(0, 5).toUpperCase());

// Math Library:

// In-built JavaScript Mathematical methods:

let rand = Math.random();

console.log("Random Number Generated: " + rand);

rand = rand * 10;

console.log("Random times 10: " + rand);

console.log("Rounding: " + Math.round(rand));

console.log("Ceiling: " + Math.ceil(rand));

console.log("Flooring: " + Math.floor(rand));

console.log(Math.round(2.5));

// Accessing Variables / Template Literals

let firstName = "Rick";
let lastName = "Sanchez";

console.log("My name is" + " " + firstName + " " + lastName);

// Template Literals
console.log(`My name is ${firstName} ${lastName}!`);