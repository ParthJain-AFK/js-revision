/*
this is how we write for loop

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for every index which is lower than the length of an array run this code and then increase the value of index

*/

let Arr = [1,2,3,4,5,6,7]

for (let i = 0; i < Arr.length; i++) {
    const logMessage = `i = ${i} and value on this index ${Arr[i]}` 
    // console.log(logMessage);
}
// console.log(i); // because of scope we can't access i or 
// console.log(logMessage); // because of scope we can't access logMessage or 



/* this is now this code ran
let i = 0
if (i < Arr.length) {
    const logMessage = `i = ${i} and value on this index ${Arr[i]}` 
    console.log(logMessage);
    i++ // remmember we tallked about what this is 
    //  i-- , --i , ++i , i++ 
}
and then we run this if code until the condition is wrong
*/


// we can have if , function , object and loop it self inside an loop
// examples are given below
for (let i = 0; i <= Arr.length; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 has be detected");
    }
    //console.log(element);
}

for (let i = 0; i < Arr.length; i++) { // outer loop only ends when the inner loop is completed. 
    // console.log(`Outer loop value: ${i}`)
   for (let j = 0; j < (Arr.length-1); j++) { // after this loop ends all  its memory (j) is deleted and when its called back again it starts with j-0
    // console.log(`Inner loop value ${j} and outer loop ${i}`);
   }
}

// we can make table 
for (let i = 1; i <=10;i++) {
    // console.log(`table of ${i}`)
    
    for (let j = 1; j<=10; j++) {
        // console.log(`${i}*${j} = ${i*j}`);
    }   
}



// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 8) {
        console.log(`Detected 8`);
        break // this says that break the loop even if index is lower than 20
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 11) {
        console.log(`Detected 11`);
        continue // this says that continue the loop but dont run the code under continue 
    }
   console.log(`Value of i is ${index}`); // because we said continue we will skipe this 
    
}


// mostly how we use the loop
let myArray = ['batman','superman','ironman','spiderman','hulk']
console.log('number of heros ' + myArray.length);

for (let i = 0; i <myArray.length; i++) {
    const element = myArray[i];
    console.log(`Hero Name, ${myArray[i]}`) 
}