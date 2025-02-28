// basically this

console.log(addNum1(1)); 
const addNum1 = function (num) {
    return num + 2
}

console.log(addNum2(3));
function addNum2(num) {
    return num + 3
}

// in both case we call function before making the actual function. But in case of fun1 we stored it into a variable. But in case of fun2 we just declared the function

// when we just declare the function it dosnt matter where and when we call it. as the function WILL already run at the start of Top of code 

// in case of declaring the function stored in the variable then it can only we called after the code