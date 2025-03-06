const num = [1,2,3,4,5,6,7,8,9,10]

const n1 = num.map((v) => v + 10) // map allows us to tansform the each value in an array and return it as a totally new array. the transformation can be just a simple math or just making an string all upper case or lower



// const n1 = num.map((v) => { return v + 10})
// console.log(n1);


const n2 = []
num.forEach((n) => {
    n2.push( n + 10 )
})
// console.log(n2);


// const al = ['a','b','c','d','e']
// const a1 = al.map( (v) =>  v.toUpperCase() )
// console.log(a1);

const n3 = num.map((n) => n+10)
// console.log(n3);
const n4 = n3.map((n) => n+2)
// console.log(n4);
//now we used .maps two diffrent times and this caused some pollution. so we can just use this method

const n5 = num.map((n) => n+10).map((n) => n+2)
// console.log(n5);

// but lets say we also wanna use a filter. so instead of creating whole new variable we can just add it to some same code (line, 28 -> 33 )

const n6 = num.map((n) => n+10).map((n) => n+2).filter((n) => n%2 == 0) // this is called chaining
console.log(n6);

// % is used to get Remainder
// n%2 means if n is divided by 2 and the Remainder equals to 0 then the condition has been met