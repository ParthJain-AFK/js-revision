/* for of
        array
             can log its value but not keys 
        string
             can but will give undefined for keys
        maps
             can for keys and value

*/
const arr = [1,'two',3,4,5,6]

for (const val of arr) {
    // console.log(val);
}

const hello = "HELLOW WORLD"
for (const [i , val] of hello) {
    // i <= ' ' ? console.log('-') : console.log(i);
}


/********** MAPS **********/
// its an object in which there are no preated value greate for removing repeated values and it has many uses

const map = new Map()
map.set(1, "one")
map.set(2, "Two")
map.set(3, "Three")
map.set(4, "Four")
map.set(5, "Five")
map.set(1, "one")

// console.log(map);

for (const [key , val] of map) {
    // console.log(key , val); // try to run both log at the same time
    // console.log(key , '-' , val);
}



// then what about objects
const info = {
    1 : 'one',
    2 : 'two',
    3 : 'three'
}


// this is not possible with an object
// for (const [key , val] of info) {
//     console.log(key , val);
// } 




/*for in
        object 
            yes it can show both (have to use this "[]" )
        arrays
            yes it can show both (have to use this "[]" )
        string 
            yes it can show both (have to use this "[]" )
*/

for (let key in info) {
    // console.log(key);
    // console.log(key, '->', info[key]);
}


const alphabet = ['a','b','c','d','e']
for (const i in alphabet) {
    // console.log(i)
    // console.log(i , '->' , alphabet[i]);
}

const nice = "its nice weather out there"
// console.log(nice.length);

for(const i in nice) {
    // console.log(i);
    console.log(nice[i]);
}













/*
did u see that?
an array and object are kinda same
object is writen like this and is visilaise also like this
    {
    a : 'a'
    b : 'b',
    c : 'c',
    d : 'd',
    e : 'e'
    } 

while an array is writen like this 
['a','b','c','d','e']
it can be visilaised like this 
    [
    0 : 'a'
    1 : 'b',
    2 : 'c',
    3 : 'd',
    4 : 'e'
    ]

*/