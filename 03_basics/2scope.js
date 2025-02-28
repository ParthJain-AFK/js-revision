// let => block scope
// const => block scope 
// var => global scope

/* 
    think of a project as a map
    in map we can make a lots of Countrys, each Country will have its own rights , name and so on

    in coding each country will define is borders using ' {} ', meaning a law (variable) will and should work only inside of country {}

*/

if (true) { // border starts here
    
    let if1 = 100;  // each of this is a law
    const if2 = 200;
    var if3 = 300; // if3 = 300 (this too is an var declarations )

} // and it ends here

// console.log(if1); // let is an country law
// console.log(if2); // const too is an county law
// console.log(if3); // but var is an world law



let x = ' 1 2 3 '
const y = ' 3 2 1 '
var z = ' a b c '

if (true) {
    let x = 10; // this can be only be called in side the if statment => block scope
    const y = 20; // this can be only be called in side the if statment => block scope
    var z = 30 // this can be called anywhere => global scope

    // console.log(x);
    // console.log(y);
    
}

// console.log(x);
// console.log(y);
// console.log(z);

// the reason why var is not recommaned to be used is becasue what if someone else has alrady used an variable name in another file using var and u dont know that so it will be hard for you to find it or use that name 

/*******************************************************/

function One () { // lets call this parent function
    const isfun = 'YES'

    function Two () { // lets call this child function
        const isNotFun = 'NO'
        console.log(isfun); // block function can take variables from global
    }
    console.log(isNotFun);
    
    // golbal function can not take variable from block function

    // for child fun the parent fun is global function
    // that makes child an block function because of this we can only call child inside of parent function

    Two()
} // the parent is function is itself an block function 

One()


/*  basically there are three level of scope 
        one above the block ^
        the block itself    |
        one below the block v

    if u are in multi level nest of code this will be how the scope is gonna work 
*/

if (true) {
    const na = 'na'
    if (ture) {
        const me = 'me'
        if (ture) {
            const name = 'name'
            console.log(na + me , name , ' 1');
        }
        console.log(na + me , name, ' 2');
    }
    console.log(na + me , name, ' 3');
}
console.log(na + me , name , ' 4');