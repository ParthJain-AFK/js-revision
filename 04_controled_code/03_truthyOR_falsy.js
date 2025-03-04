const userEmail = []
// const userEmail = ""
// const userEmail = "user@.no.Email"

// try on of the above and see which one is seen as truthy(ture) and which one is falsy(false)

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


/*
falsy values
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values
    true, 1, -1 ,"0", 'false', " ", [], {}, function(){}
*/


// if (userEmail.length === 0) { // asking if the array has the length if yes then we run the code if no then we dont
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // turned objects key to an array using "Object.keys(emptyObj)" and then used ".length" 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined


let val1;
/*
val1 = 5 ?? 10 // in case the first given value is not an falsy (null undefined) that value will be stored 

val1 = null ?? 10 // in case the first given value is falsy (null undefined) then the next value which is truthy will be stored

val1 = undefined ?? 15 // in case the first given value is falsy (null undefined) then the next value which is truthy will be stored

val1 = null ?? 10 ?? 20 // in case the first given value is falsy (null undefined) then the next value which is truthy will be stored
*/
console.log(val1);




// Terniary Operator // it is recommended to use this in cases where we have this or that and not in this or that or else that

// condition ? true : false
// if the condition is true then the code just after '?' and before ':' will run and if the condition is false then code after ':' this will run


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// this statment can bee scene like this
/*
if (iceTeaPrice <= 80) {
    console.log("less than 80")
} else {
    console.log("more than 80")
}
*/