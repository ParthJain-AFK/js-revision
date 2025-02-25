// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    "age": 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // most commanly used but can not use incase key is in the from of a string
// console.log(JsUser["email"]) // using this allows to call everything be it string , key or ,symbol
// console.log(JsUser["full name"]) // like this for string
// console.log(JsUser[mySym]) // like this for symbol

JsUser.email = "hitesh@chatgpt.com" // we can change the value of key 
// Object.freeze(JsUser) // puts a lock on the object making it so that nothing can be changed in the object after this
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this keyword is used as a reference for variable (key) whithin an speficy object. function donsnt know which object is being referenced to so we use this as an example so when it knows it chan put it( changing this.name to JsUser.name)
} 

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


/*****************************************************/

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
} // its possible to nest an object

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // first object inside '()' is used to store objects into new one without changing any original object

const obj3 = {...obj1, ...obj2} // spread oprater
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com1"
    },
    {
        id: 1,
        email: "h@gmail.com2"
    },
    {
        id: 1,
        email: "h@gmail.com3"
    },
]

// console.log(users[1].email);



// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // gives all keys

// console.log(Object.values(tinderUser)); // gives values of all keys 

// console.log(Object.entries(tinderUser)); // turns key:value into [key , value](an array with i[0] being key and i[1] being value)

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // basically .includes gives boolean

/********************************************/

const course = {
    coursename: "js course",
    price: "99.99",
    courseInstructor: "selfStudy"
}

// course.courseInstructor

const {courseInstructor} = course // think of it like this. const courseInstructor = course.courseInstructor. now because the name of variable and the key inside of object is same we put an '{}' which say that This is what u are looking for and which is what it will be called

const {courseInstructor: instructor} = course // just like object where we put key:value here we can put it like this {value:key} this new key can be called all over the palce now

// console.log(courseInstructor); 
console.log(instructor);

/*
// this is an example of JSON.. what we get from API  
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// some time we can git responce in this format
[
    {},
    {},
    {}
]