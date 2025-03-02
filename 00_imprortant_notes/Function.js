/*basically this mini-hoisting*/


// console.log(addNum1(1)); 
const addNum1 = function (num) {
    return num + 2
}

// console.log(addNum2(3));
function addNum2(num) {
    return num + 3
}

// in both case we call function before making the actual function. But in case of fun1 we stored it into a variable. But in case of fun2 we just declared the function

// when we just declare the function it dosnt matter where and when we call it. as the function WILL already run at the start of Top of code {read Js_Execution.txt file (it is stored at the start in some place and then it can be called anywhere)}. in case of declaring the function stored in the variable then it can only we called after the code



/*************  IIFI (Immediately invoked function)  ****************/

// we wanna run the function immediately and to not be affected and create global pollution

// "()()" this here is and IIFI


// name IIFI. any function which as name 
(function IIFI(hellow) {
    console.log(`${hellow}! world`);
})('hellow'); // its best pracitce to use ";" and the end of IIFI


// anonymous IIFI. any function which donst have name
((world) => {
    console.log(`hellow! ${world}`);
})('world'); // why? try it (becasue some time it wont be able to get it when the function stops)