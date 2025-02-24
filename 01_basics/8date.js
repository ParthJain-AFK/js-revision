// # Date

let D = new Date()

// console.log(typeof D);

/*
console.log(`${D.toString()} ---1`);
console.log(`${D.toDateString()} ---2`);
console.log(`${D.toISOString()} ---3`);
console.log(`${D.toJSON()} ---4`);
console.log(`${D.toLocaleDateString()} ---5`);
console.log(`${D.toLocaleString()} ---6`);
console.log(`${D.toLocaleTimeString()} ---7`);
 */

let myStoredDate = new Date (2025 , 3 , 4) // (year , month , date) , month starts from 0 to 11.
console.log(myStoredDate.toDateString());
// try to add time like 4:32:12AM 
console.log(myStoredDate.toLocaleString() + ' everything');
console.log(`${myStoredDate.getTime()} in millisecond`);
console.log(myStoredDate.getHours() + ' this is hr (12 = 00)');
console.log(myStoredDate.getMinutes() + ' this is minute');
console.log((myStoredDate.getMonth() + 1) + ' this is month');
console.log(myStoredDate.getDate() + ' this is date');
console.log(myStoredDate.getFullYear() + ' this is the year');


let formatedDate = new Date("01-6-2046")
// console.log(formatedDate.toLocaleString());



let timeStap = Date.now() // saving the time the code was run
console.log(timeStap); // this is in miliseconds

formatedDate.toLocaleString('default' , {
    weekday: "narrow",
    dateStyle: "full",
    year: "2-digit",
    // press 'ctrl + spacebar'
})
