const date = new Date() // we have an object or function named Date and we want simular object so instead of changing the original Date object we just store a copy of it in new variable. and when we make a changes in the new copy(date) it dosnt affect the orignal(Date)


function User (name , gender , age) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.greeting = function () {
        return (`hey! ${this.name} ${age}y ${this.gender}`)
    }
    return this
}


// here we want two diffrent users but both are effecting the original object
const ONE = User('one' , 'M' , 19)
console.log(ONE.greeting()); 
const two = User('two' , 'F' , 20)
console.log(ONE.greeting()); 
// even tho we created a new var without changing ONE we can see that in line 54 when awe log ONE again the date is not the same
// its because variable store string and number within them but as for object and function variable store path of object and function in them


// by using *new* we are telling variable to not just store path to function and object but instead just create a new function and object and save path of that
const THREE = new User('three' , 'G' , 19)
console.log(THREE);
const four = new User('four' , 'K' , 20)
console.log(THREE.greeting());


console.log(four.constructor); // it is referring the the original object from which the object four is created of (change the name of function to confirm)


// any object which is created and is later being used to create many other copy of it with diffrent value but same data is constructor

// Imagine a constructor is like a "factory machine" for making objects. When you want to create something, you use the machine. It makes sure every object has the basic parts (data and structure) you need, but you can choose different "colors" or "details" (values) for each object.












/*
## IMPORTANT NOTE


Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/