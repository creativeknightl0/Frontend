/* Casing messages*/

let msg = 'Hello';
let yellMsg = msg.toUpperCase();
let calmdownMsg = msg.toLowerCase();
let greeting = ' Hello I am back! ';
let greetingTrim = greeting.trim();
let greetingTrimUppercase = greetingTrim.toUpperCase();

console.log('Normal message: ' + msg);
console.log('Loud message: ' + yellMsg);
console.log('Calm down message: ' + calmdownMsg);
console.log('Greeting message: ' + greetingTrimUppercase);

/* Indices and length */

let animals = "Dumbo Octopus";

console.log(animals[6]);
console.log(animals.length);
console.log("lol".length);
console.log("lol"[0]);
console.log("lol" + "lol");

let year = "1998";

console.log(year+1);

/* indexOf, slice and replace */
let str = "Heil big big!";

let indexOfStr = str.indexOf('big');
console.log(indexOfStr);

let strSlice = str.slice(0,1);
console.log(strSlice);

let strReplace = str.replace('big', '🙋‍♂️');
console.log(strReplace);

/* String literal */
let a = 'Hmm';
let qty = 5;

const completeSentence = a + ', ' + qty + ' pizzas';
console.log(completeSentence);

const completeSentenceWithStringLiteral = `${a}, ${qty} pizzas`;
console.log(completeSentenceWithStringLiteral);

/* Repeat */
const word = 'Joke';

const repeatWord = word.repeat(3);
console.log(repeatWord);

/* Null and undefined */
let b = null;
console.log(b);

let c;
console.log(c);

/* Math Object and Random Number */
const PI = Math.PI;
console.log(PI);

const power = Math.pow(5,2);
console.log(power);

const number = 5.10;

console.log('Floor number: ' + Math.floor(number));
console.log('Ceil number: ' + Math.ceil(number));
console.log('Round number: ' + Math.round(number));

const randNumber = Math.random();
console.log(randNumber);

// To make it come under 1 - 10
const perfectRandomNumber = Math.floor(randNumber * 10 + 1);
console.log(perfectRandomNumber);