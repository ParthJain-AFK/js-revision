const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // here 'this' points towards the user. so when this line of code run this.username => user.username 
        
        console.log(this); // as u can this in terminal this (inside the object points towards the object with active(current) stored data)
    }

}

// user.welcomeMessage()


user.username = "sam"
// user.welcomeMessage() // now that we changed the username to sam it points to user object which has sam as the value

// console.log(this); // in old time JS could only be run in browser. and in browser we have an object which containes thinks like logo, ads , search bar , where we click , what we type and so on and on

// but now we are running it here(node) and not in browser. because of that we are given empty object



function This() {
    console.log(this);
}
// This() // so there are lots of shit in 'this'

 
/***NOW on Arrow Function and So So*/

function type1(){
    let username = "urName"
    console.log(this.username);
}
// type1() // so this dosnt work inside the function



const type2 = function () {
    let username = "hitesh"
    console.log(this.username);
}
// console.log(type2);


const A1 = (num1, num2) => {
    return num1 + num2
}
// console.log(A1(1,1));

// implicit return
const A2 = (num1, num2) =>  num1 + num2 // in case where the function is small and can be written in one line we can just do this here we dont need '{} and return' 
console.log(A2(2,2));


const A3 = (num1, num2) => ( num1 + num2 ) // same as A2(line 54) we just added () to high light what we want or if we want to expland the function
console.log(A3(3,3));


const A4 = () => ({username: "hitesh", age: 23, gender: 'F'}) // like this 
// const A4 = () => {username: "hitesh", age: 23, gender: 'F'} // this is wrong way to add object inside and arrow function 
console.log(A4())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {}) // this is how and when mostly the arrow function is used