const allNum = {
    iWin: 0,
    uWin: 0,
    tie: 'tr',
    scoreBord: function () {
        return `ur win ${this.uWin}, my win ${this.iWin}, tie ${this.tie}`;
    }
};

for (const key in allNum) {
    if (allNum.hasOwnProperty(key) && typeof allNum[key] !== 'function') {
        console.log(allNum[key] , `~${typeof(key)} ${typeof[key]}~` , allNum.hasOwnProperty(key) );
    }
    if (typeof allNum[key] === 'function') {
        console.log('its function');
    }
}

console.log(`=======================================`);


const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function () {
        console.log('function inside object');
    }
};

function callProduct2(product2) {
    
        function call(key) {
            // how we can call a key from within object
            console.log(key.name);
            console.log(key['name']);
            console.log(key['delivery-time']);
            console.log(key.rating.stars);
            key.fun()
        }

        console.log(product2);
        call(product2)

        const jsonString = JSON.stringify(product2) //truning an object into an JSON
        console.log(JSON.parse(jsonString)); // truning JSON into an OBJECT
}
// callProduct2(product2)

console.log(`=======================================`)

const Product3 = {
    message: 'abt object',
    price: 123
}
function callProduct3 (Product3) {
// there are two ways to give a variable direct path to an key of an object with the same name... example 1
    const message = Product3.message
    const price = Product3.price

// example two '{} by using this we tell search from key with simular name a then assigne them to a global variable with the same name    
// const { message, price } = Product3
}

// callProduct3(Product3)

console.log(`=======================================`)

const Product4 = {
    // message: message,
    message: undefined,
    // message, // just like lin 65 we can just say 'message' and it will understand it as that message equals to message from the said scope

    // price: price
    price: undefined,
    // price, // read line 73

    // method: function () {
    //     console.log('method');
    // } 
    method() {
        console.log('method');
    }
}

function callProduct4 (product4) {
    product4.message = 'hellow , wold';
    product4.price = 'its AGE = 99';
    product4.method()
    console.log(product4);
}
// callProduct4(Product4)




















const BB = {
    name: 'basketball',
    price: 1095
}
console.log(BB);
BB.price = BB.price + 500
BB['deliver-time'] = '3 day';
console.log(JSON.stringify(BB));

const FB = {
    name: 'football',
    price: 2095
}
function comparePrice(p1, p2) {
    if (p1.price > p2.price) {
        console.log(JSON.stringify(p1));
    } else {
        console.log(JSON.stringify(p2));
    }
}
comparePrice(BB, FB);

function isSameP(p1, p2) {
    if (!p1 || !p2) {
        return false; // Return false if either p1 or p2 is falsy 
    }
    return ((p2.price === p1.price) && (p2.name === p1.name))
    // vvv this is the original
    //     function isSameP(p1, p2) {
    //     if ((p2.price === p1.price) && (p2.name === p1.name)) { return true }
    //     else if ((!p1 || !p2) || ((p2.price !== p1.price) && (p2.name !== p1.name))) { return false }
    // }

}
console.log(JSON.stringify(isSameP(FB, BB)));
console.log(isSameP(BB, BB));
const tolower = 'dASDASDS';
console.log(tolower.toLowerCase());
console.log((tolower.repeat)(3));