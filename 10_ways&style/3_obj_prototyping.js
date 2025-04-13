/*
function            boolean            array          string           
    |                  |                |               |
        all of the above go through OBJECT(this)  
        |
        null
*/

let name1 = 'IronMan'
let name2 = 'HULK     '
let TorF = true


// console.log(name1.length + ' ironMan ,' , name2.length + ' hulk');

// there are four words in name 2 but its showing 9? hmm, we have to use this everytime on every name. so we can just create other methods to make it give us real length


function realLenth(str) {
    console.log(`${str.trim().length},  ${str.trim}`);
}
// realLenth(name2)


// this is one way we can do this. but what if we want this function to work with other thing without any problems??
// its then we use prototyping

let hero = ['spiderMan' , 'thor' , 'DrStrange' , 'BATMAN']

let heroPower = {
    spiderMan: 'web-sling',
    thor: 'thuder',
    DrStrange: 'Magic',
    BATMAN: 'BATMAN',

    getpower: function (num) {
        console.log(`the power of ${hero[num]} is ${this[hero[num]]}`);
    }
}

heroPower.getpower(2)
// but what if i want somthing like this
// heroPower.realname()
// not only in heroPower but in every other object that we create
// in that create we will have to create a proper prototype in object '{}' NOTE: open browser -> inspect -> console -> make a object 'heroPower' -> call that object 'heroPower' -> click on the return -> click on object. this is where we are gonna add the 'realname' prototype

Object.prototype.realname = function () {
// what we did here is. we called object it self gave it a method called realname which can now we called with any type of value
    console.log('it has realname');
}


heroPower.realname()
name1.realname()
TorF.realname()


// now we want a method simiular to realLenth line 19 we can just make it like this
String.prototype.trueLength = function () {
    console.log(`${this.trim().length} -> ${this}`)
    console.log();
    
}
name1.trueLength()
// TorF.trueLength() we made the prototype trueLenth only for string, while we made realname for the OBJECT it self we allows all other thing to inheritance that method

'2 + 2 is 4 and not 5, freedom is slavery    '.trueLength()
console.log('2 + 2 is 4 and not 5, freedom is slavery    '.length);
