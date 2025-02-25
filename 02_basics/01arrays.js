const array1 = [1 , 'a' , 2 , 'b' , 3 , 'c' , 4 , 'd']; // we declare an arrya using []. in it we can store many values (each value is called elements).

console.log(array1);
console.log(array1[2]); //each element has its own address. 
console.log(array1.length);

const array2 = new Array (1,'b') // dont need to use [] as the Array is an inbuilt fun and will do it


const arrPush = array1.push(5) // we added another value(element) to the origian array
console.log(arrPush); 

const arrPop = array1.pop() // removed the value(V) on the last index(i)
console.log(arrPop);

const arrUnshift = array1.unshift(9) // added V at the start of the array
const arrShift = array1.shift() // removed V at the start of the array
console.log(arrUnshift , arrShift);

const arrJoin = array1.join() // returns the array in the format of string
console.log(arrJoin);
console.log(typeof arrJoin);



const a = [0,1,2,3,4,5]
console.log('original - ' , a);

const sliceA = a.slice(0,4);// we are slicing or cutting arrya. from index 0 to index 3 (we tell stop before reaching index 4). it dosnt not affect the origianl array
console.log('slice    - ', sliceA);
console.log('         - ' , a);

const spliceA = a.splice(0,4) // we are slicing or cutting array. from i 0 to i 4(we telling it to stop after raching index 4). it affects the origianl array 
console.log('splice   - ' , sliceA);
console.log('         - ' , a);




console.log(array1.includes('a')); // askes if the V is in the array.
console.log(array1.indexOf(3)); // askes the i of any V. if that value is not in array it false in numerical manner
console.log(Array.isArray('iKnowJavaScript'))
console.log(Array.from('iKnowJavaScript'))

/**********************************************/
const b = ['thor','spiderman','iron-man']
const dc = ['BATMAN','superman','flash']

b.push(dc) // this will add the whole array into one index. this will add to original array
console.log(b);

const supherheros = b.concat(dc) // this will add each element into an new index. this will give new array only
console.log(supherheros);


const allHeros = [...b , ...dc , ...array1] // we can use this too
console.log(allHeros);


const obj = [1 , 'b' , true , null , [0,1,2] , function hellow() {console.log('hellow world');} , 'anything can be put in an array']
console.log(obj.length);


const nest = [1,2,[3,4,[5,6,[7,8]]]] // as u can see there are arr inside arr and so on
const noNest = nest.flat(Infinity) // this will just make one new array which will have all the elements on its own index
console.log(noNest);
