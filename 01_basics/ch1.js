const accID = 134679; // we make it const(constant), think of this as an safe, which once made can not be changed. and inside of it we put these *numbers*

let email = 'learner@gamil.com'; // we let some thing be called email. it can be an number or a string(line made up of words inside of quots '' or "") this can be changed later on menaing we stop let email be 'learner@gamil.com' and let it be 'wotEver@gamil.com'

var accPass = 'myPass'; // this is let but it dose not have a size. so think of it like this when we let something be called email only those who know we let somthing be called email whill call it email, but those who dont know will call it my its real name. ex instead of email it will be called 'learner@gamil.com'. but var telles everyone that this is 'learner@gamil.com' now called email. { its called scope }

city = "myHome"
// this is var but dont use it

accID = 258; // press "ctrl + /" to comment this and remove the error from the log
// ^^ we try to change it but this is not allowed because accID is an const.

// let var can be changed


console.log(accID);
console.log(email);
console.log(accPass);
console.log(city);
// instead of this u can do this 
console.table([accID , email , accPass , city])