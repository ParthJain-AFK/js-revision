// function

// this is a small example of how we can do this but if we have to repeat this same thing many many times its gonna take lots of time 
let five = 5;
// console.log(five + 4);


// we make a function which will do same thing
function addTo5 (num) { // '(num)' is a an empty variable
    console.log(num + 5) // we are adding that to 5
}
// addTo5(4) // here we are executing the function in the brackets we are giving value of 4 to the empty variable 
//  addTo5(1) 
// we can change the value can run this function as manytime as we want


function log(log) {
    console.log(log);
}
// log('this is an function i am gonna use instead of console.log')


function doMath(num1 , num2) {
    let sum = num1 + num2 // this sum can not be sued out side of this function. unless we do somthing. this is called scope
    console.log(sum);
    return sum;
   
    // return num1 + num2 // only when we return an value we can set it as an variable. if we didnt return the value code will run but incase of line 30 we will get something we dont want. check ur self

    console.log('yo') // this will not retun becasue we are alrady returned an value
}

// const add = doMath(1,1)
// log('sum ' + add)


function logInUserMessage(userName) {
    return `${userName}, welcome`
}
// logInUserMessage('urName') // will we get the message in terminal?

// log(logInUserMessage()) // becasue we havnt defined the value inside userName we are gonna get?? 

function logInCheck(userName) { 
    if (userName === undefined) {
        log("ENTER a User Name");
        return;
    } else {
        return `${userName}, welcome`
    }
}

// log(logInCheck()) // give an value(argument)

function logInUser(userName) {
    if (!userName) { // this === 'userName === undefined'
        log("ENTER a User Name");
        return;
    }
    return `${userName}, welcome`

}
// log(logInUser('userName'))

function ErrorLogin(userName = 'error') { // we are not making userName = undefined but instead giving it an default value. so incase user dosnt deifine the value we already have an filler value
    return `${userName}, welcome`
}
// log(ErrorLogin())
// log(ErrorLogin('hi'))

function lotOfArgument(...Arg) { // in line 34 we can see that we had to use + or we could have used `` to pass 2 diffrent argument. to solve you this we can make one agrument and give it a rest opreater which is '...' (this is spread opreater too )
    return Arg
}

//log(lotOfArgument(10,100,1000)) // rest opreater allows us to pass finite amount of argument which will retun in an from of array

function argument(val1,val2,...val) {
    log(`val1 = ${val1} ,val2 = ${val2} `)
    return val
}

//log(argument(10,50,100,200,500)) // 10 and 50 is stored in val1 and val2 while rest will be stored in the ...val


const userF = {
    name: 'urNameF',
    gender: 'F'
}
const userM = {
    name: 'urNameM',
    gender: 'M'
}

function logUser (userObj) {
    log(`Name: ${userObj.name}, Gender: ${userObj.gender}`)
}

/*logUser(userF)
logUser(userM)
logUser({
    name: 'Aline',
    gender: 'non'
}) */
// we can pass object which is made for User and has key 'name and gender'


const arr1 = [200,300,400,500]
function arraI(anyArray , index = 0) {
    return anyArray[index]
}
log(arraI(arr1,1))
log(arraI([900,800,700,600],1))
// and we can pass array.. not only that we can pass function too