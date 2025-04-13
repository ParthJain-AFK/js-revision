const user = {
    // username , age , online are all variable-- its just that in object we declare them like this
    username: 'placeHolderForName',
    age: 99,
    online: true,

    /*
    these are three ways to declare function inside of an objects   
    getUserDetails: function () {}
    getUserDetails: function getUserDetails(){}
    */
    getUserDetails() {
        // console.log(username); //username is not defined
        
        // console.log(this);
        // this words says that u should look at the scope which is above us for things
        
        // now it know that it should look for username in scope which is above the current scope (aka function)  
        return (`${this.age}, ${this.online}`) // try returning some other values too
    },
}


// console.log(username); // username is not defined
console.log(user.username); // we get the value stored in the name variable
console.log(user.getUserDetails()); // we have to call it with () because its function