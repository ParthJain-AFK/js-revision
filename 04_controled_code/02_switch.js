/* 

// this thing is like if else but faster and in case where u know what u gonna get. "switch" acts like if and "key" is the place where we put the outside value which we evaluate using comparison. "case" is the place where we do the comparison 
switch (key) {
    case value:
                    // in case the comparison is correct then we write the code here
        break;      // this is like a full stop to the if statment. like saying dont read or evaluate anything and move on with global code

    default:  // this is like an else. in situation  where any of comparison is wrong and no code is being ran then we run the cude under default 
        break; // read like 7
}

*/


const month = 12

switch (month) { // bringing the month in switch statment
    case 1: // asking if month == 1.. this is wrong 
        console.log('jen'); // we gonna skip this
        break;
    case 2:// asking if month == 1.. this is wrong 
        console.log('feb'); // we gonna skip this
        break;
    case 3:// asking if month == 1.. this is wrong 
        console.log('mar'); // we gonna skip this
        break;
    case 4:// asking if month == 1.. this is wrong 
        console.log('april'); // we gonna skip this
        break;

    default: 
        console.log('if nothing then this'); // non of the case from above were right so we gonna run this 
        break; // and stop the switch statment here
}

const monthName = 'mar'

switch (monthName) { // bringing the monthName as a key
    case 'jen': // its like this if (monthName == 'jen')
        console.log('jen'); // no its not so are not gonna run this code
        break;
    case 'feb': // its like this if (monthName == 'feb')
        console.log('feb');  // no its not so are not gonna run this code
        break;
    case 'mar': // its like this if (monthName == 'mar')
        console.log('mar'); // it is so we are gonna run this code
        break; // and then we are gonna stop or destroy the switch statment from runnnig further
    case 'april': // use less
        console.log('april'); // use less
        break; // use less

    default: // use less
        console.log('if nothing then this'); // use less
        break; // use less
}