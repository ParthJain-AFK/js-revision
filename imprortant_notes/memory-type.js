/*
# There are two types - Stack and Heap

    *Stack
    Primitive type of variables use Stack memory

    *Heap
    Non-Primitive type of variables use heap memory

*/

// Stack

let A = 'ABCD'
let Num = A
console.log(Num);

Num = 1
console.log(A);
console.log(Num);

    // in stack the value is copied into the new variable and when the value of new variable is changed it dose not affect the original variable and its value

    // value is copied and with new address 

// Heap
let userOne = {
    name: 'ONE',
    age: 22,
    gender: 'M'
}

let userTwo = userOne
console.log(userTwo);

userTwo.name = 'TWO'
console.log(userOne);
console.log(userTwo);
    // in heap the value is not copied but instead new variable takes the address of the value which is stored in the variable one. so when we try to change something in the new variable we take the address which points to the original value and make change there

    // address of where the value is givne.