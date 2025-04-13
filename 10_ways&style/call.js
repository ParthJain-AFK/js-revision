function newUser (userNamme , email , age , password) {
    SetName(userNamme)
    this.email = email
    this.age = age
    this.password = password
}

const pete = new newUser('Peter Parker' , 'abc@mail' , 19 , '123')
console.log(pete , 1111);
// we dont get the username? why, well its cus userName is set to the variable this.userName which only exist inside of the SetName function. 
// so even thoo we exute the setName and return it, the newUser function still wont get the name to solve this we can either create a global variable and have it be used in both function.. but it will greate global trash and people dont like it


function createNewUser (userNamme , email , age , password) {
    // here we can add two new things first is '.call' and then its 'this'
    SetName.call(this, userNamme)
    // what call dose is simple it say that after the said function have been exuted give all the variabls and information to 
    // inside the '()'  first we tell to who the function has to give all the information and there we used this later then variables
    
    
    this.email = email
    this.age = age
    this.password = password
    // console.log(this);
}
const bruce = new createNewUser('bruce banner' , 'hulk@mail' , 42 , 'smash')
console.log(bruce);



function SetName (userNamme) {
    // here we do things like if the userNamme alrady exist if so then do this or else do that
    this.userNamme = userNamme;
    // we set (its scope is??) variable to userNamme
    console.log('it working' , 44444);
    
    return this.userNamme
}

/*
call just makes it so before an function ends it self it passesdowns its property to the one call mentions. and call metioned this 
*/
