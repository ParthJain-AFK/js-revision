console.log(2+2); // + is used for addition
console.log(2-2); // - is used for subtraction
console.log(2*2); // * is used for multiplication
console.log(2**3); // ** is used for power 2 to the power of 3
console.log(2/2); // / is used for Division
console.log(2%3); // % is for remainder




let str1 = 'hello!'
let str2 = ' world' // see i left some space first
let str3 = str1 + str2 // we can add to string togother but we can not subtrac them using math. but u can try it
console.log(str3);



let value = 3;
let negValue = -value
console.log(negValue);


/* 
++ means we are adding 1 
-- means we are subtrac 1
*/

let x = 3;
const y = x++; // this makes y equal x which is equals to 3
// so now that y equals to x, we will make x equals to 4 (aka 3+1)
console.table(x , y);
// Expected output: "x = 4, y = 3"

let a = 3;
const b = ++a; // this makes a = 4(aka3+1) before making b = a.
// so now that its b quals a which is equals to 4
console.table(a , b);
// Expected output: a = 4, b = 4