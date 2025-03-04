// if

if (true) {
    console.log('the code inside "{}" will run in case of evaluation is ture "(here)"');
}

if (false) {
    console.log(`this code here will not run because the evaluation in side of '()' is false so anything inside here will be skiped`);
}

// the way to evaluation can happen through many ways

if (2===2) {
    console.log('this is true');
}

const gender = 'male'

if (gender == 'male') {
    console.log('this is true');
}

if (gender == 'female') {
    console.log(`this isn't true`);
}

// tell me what values are considered false and is false quals to 0 or 1?

const isUser = true

if (isUser) {
    console.log('this is true');
}

if (!isUser) {
    console.log(`this isn't true ${isUser}`);
}

const num = 32
if (num <= 50) {
    console.log(`its ${num} which is less than 50`);
}
console.log(`${num} bigger than 50`);
// look because the question of is num(32) smaller or equal to 50 is yes, we are runnnig line 41, and then we are running line 43


/*
things which we can use to evaluate weather its true or false 
    a < b -> is a less then b
    a < b -> is a bigger than b
    a <= b -> is a less or equal then b
    a >= b -> is a bigger or equal then b
    a == b -> is a equal to b
    a != b -> is a not equal to b
    a === b -> is the value and type of a same/equal to the value and type of b
    a !== b => is the value and type of a not same as or not equal to the value and type of b
*/

/***************IF ELSE***************/

const tem = 32
if (tem <= 50) {
    console.log(`${tem} is lower than 50`);
} else {
    // if the answer of this is no then we will skip line 63 and run line 66
    console.log(`${tem} is higher than 50`);
}

// we should now what answer we want.. in line 61 i wanted 'YES' as an answer so according to it i wrote else statment


/********* SCOPE in if else *********/

const score = 200

if (score > 100) {
    let power = "fly" // tell me what is the scope of this?
    console.log(`User power: ${power}`); 
}

// console.log(`User power: ${power}`) // will this work


 /*********/

const balance = 1000


// if (balance > 500) console.log("test") // this is implicit code, do this only for one line of code

// if (balance > 500) console.log("test"),console.log("test2"); // this is implicit code, dont do this 


if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    // its like saying if u dont like apple then do u like orange? if not that then grapes? not this either then do u like banana?

    // so else if is saying may be try this code

    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");
}

/***********REAL LIFE EXAMPLE***********/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) { // && is used when we have lots of condition to check. its like saying is userLoggedIn and debitCard correct?
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // || is used when there are many correct ans and many wrong but u care only about if there is one correct ans . its like saying is loggedInFromGoogle correct or is loggedInFromEmail correct? if any one of this is correct then run this code
    console.log("User logged in");
}