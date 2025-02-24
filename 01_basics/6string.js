let sen = ' A bcd E fghi ';

const ithas = sen.includes('new');
console.log(ithas);
const has = sen.includes('new') ? 'it dose' : 'it dosnt';
console.log(has);
// by using .includes we check if the string as new word or not. if it has New and not new then it will be false
console.log('-------------');

const stA = sen.startsWith('A');
// .startswith checks if the string starts with word A 
//  if we asked for ('a') it will False
console.log(stA);

console.log('-------------');

const endA = sen.endsWith('A');
console.log(endA);
// .endsWith checks if the string ends with A 
// if we asked for ('a') it will False
console.log('-------------');

let updateSen = sen.replace('A' , 1) // first one is what we want to change and second one is to what
//.replace will remove A and palce 1
console.log(updateSen);

console.log('-------------');

let trimmedsen = sen.trim()//trimRight & trimLeft removes the space at start and end of the string
console.log(trimmedsen);

console.log('-------------');

let wordSen = sen.split(' ');
// string will be split into an arrya
// space ' ' we can chage that too a number like ('2') or a word ('b')
console.log(wordSen);

console.log('------------- sdaa');

let upperSen = sen.toUpperCase();//toLowerCase is also there
console.log(upperSen);

console.log('-------------');

let indx = sen.indexOf("g"); // will give us the index of on which index its start or is placed on
console.log(indx);

console.log('-------------');

let Fname = 'Parth'; let Lname = 'jain';
let Fullname = `${Fname} ${Lname}`; // we are using `` here and inside we are using ${} just like f in python
console.log(Fullname);

console.log('-------------');

const name_ = new String('Ru');// this is an object and not a string
const _name = 'Ru17'; // this is a string
console.log(typeof name_);
console.log(typeof _name);