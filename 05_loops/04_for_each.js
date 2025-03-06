const al = ['a' , 'b' , 'c' , 'd' ]



/*
there is an inbuild loop function in an array just like '.length'

forEach loop all the basics info like it knows the length of an array, it knows how many loops after it needs tostop

to use all these we have to declare an function inside the forEach()

u can do  that in various ways

al.forEach(function count(value) {  
})
we dont actually need to name the function 

al.forEach(function(value) {  
})
.forEach knows that we are gonna make a function inside it, so we dont even need the word function

al.forEach((value) => {  
})
just an arrow will do

first element inside the function will have the current value of the array
while the second element will have the current index 
*/
al.forEach((value , i) => {
    // console.log(value);
    // console.log(i);
})

function log(...oo) {
    console.log(oo)
}

// so if u want u can make an global function and give the forEach its refrence and then rest can be done by the forEach loop. good in case u want to use the same function in another place

// al.forEach(log)



al.forEach ((v , i , arr) => {
    // log(v , i , arr);
    // console.log(v,i,arr);
    
})


const obj = [
    {
        Lname: 'javascript',
        file: 'js'
    },
    {
        Lname: 'java',
        file: 'java'
    },
    {
        Lname: 'python',
        file: 'py'
    }
]


obj.forEach((v) => {
    // console.log(v.Lname);
    // console.log(v.file);
    // console.log(Object.entries(v));
    // console.log([v.Lname , v.file]);
}) 
// this how u can update ur webside.


/* 
forEach loops dosnt return anything 

const rt = al.forEach((v) => {
    return v
})
console.log(rt);
*/
