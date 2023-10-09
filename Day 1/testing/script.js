let show = "Regular Show";
let charPosition = 2;

console.log(`The name of the show is ${show}.`);
console.log(`charAt() method with argument ${charPosition}: ${show.charAt(charPosition)}`);
console.log(`charCodeAt() method with argument ${charPosition}: ${show.charCodeAt(charPosition)}`);
console.log(`charCodeAt() method with argument ' is the best': ${show.concat(" is the best")}`);
console.log(`endsWith() with argument 'Show': ${show.endsWith("Show")}`);
console.log(`includes() with argument 'eg': ${show.includes("eg")}`);
console.log(`indexOf() with argument 'e': ${show.indexOf("e")}`);