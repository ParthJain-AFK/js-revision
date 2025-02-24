let num = 15.6;

const rounded = Math.round(num); // Math.round() rounds a number to the nearest whole number
console.log(rounded); //15.6 will be rounded to 16 as this is closer

console.log('-------------');

const floored = Math.floor(num); // Math.floor() rounds a number down to the nearest integer
console.log(floored); // 15.6 will be rounded to 15 as this is nearest whole number which is also smaller to 15.6

console.log('-------------');;

const randomNum = Math.random();// Math.random() returns a random decimal number between 0 (smallest) and 1 (largest)
console.log(randomNum); 

console.log('-------------');

const maxNum = Math.max(3, 7, 15, 2); // Math.max() returns the largest(biggest) number from the given numbers
console.log(maxNum); 

console.log('-------------');

const minNum = Math.min(3, 7, 15, 2);// Math.min() returns the smallest number from the given numbers
console.log(minNum); 

console.log('-------------');

const isNaNCheck = Number.isNaN(num);// Number.isNaN() checks if the value is NaN (Not a Number)
console.log(isNaNCheck); // 15.6 is a number so its false

console.log('--------------------------------');

let a = 5; 
let b = 10;
let sum = a + b; // we can '-' or '*' or '/' or anything 

console.log(`${a} + ${b} = ${sum}`); // Using template literals to create a string representation of the sum

console.log('-------------');

const numObj = new Number(123.45); // This is a Number object, not a primitive number
const numPrimitive = 123.45; // This is a primitive number
console.log(typeof numObj);
console.log(typeof numPrimitive);
