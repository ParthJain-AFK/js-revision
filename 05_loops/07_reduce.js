const num = [1, 2, 3]
/* this is what reduce dose
0+1 =1
1+2 =3
3+3 =6
*/

// const ex = num.reduce(() => {},0)

// const initialValue = 0 // this is just for visualization
// const example = num.reduce((accumulator , currentValue) => accumulator + currentValue ,initialValue)

// accumulator = acc , currentValue = currV 
// we put 0 just after telling what type math we want to 
// do with an array using an ','. this 0 = to acc for 
// the first time this loop runs. 
// current value means the value on the index which this loop is running on. then add acc to currV and make it equal to acc( acc = acc + currV)
// in the next loop acc is no more 0 but is sum of last known acc and last value

const sum = num.reduce((acc , currV) => acc+currV,0)
// 
// console.log(`typeof ${typeof sum} -->  ${sum}`);



const myTotal = num.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 10)
// console.log(myTotal);

const Total = num.reduce( (acc, curr) => acc+curr, 0)
// console.log(Total);




const shoppingCart = [
    {
        itemName: "1item",
        price: 150
    },
    {
        itemName: "2item",
        price: 500
    },
    {
        itemName: "3item",
        price: 1200
    },
    {
        itemName: "4item",
        price: 40
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`priceToPay --> ${priceToPay}`);