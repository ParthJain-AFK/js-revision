/* 
#   JavaScript is Dynamically-typed languages

- example 
    const canBeAnything = 100; => this is dynamic // this 'canBeAnything' can hold any type of value
    const canBeNum:number = 100; => this is static // this 'canBeNumber' can hold only number type value

    any language which askes to specify the type of an object or a variable (line 6) is static (strict) while language which can guess type without specifying (line 5) is dynamic (flexible)
*/


/* 
# Primitive ( can be called copy type to)
    7 types are :
        string
        number
        boolean
        null
        undefined
        symbol
        BigInt


# Non Primitive ( can be called Refrence type )
    3 types are :
        array
        objects
        function
*/


// example of few types

// symbol
    const userName = Symbol('myName')
    const userId = Symbol('myName')
    console.log(userId === userName);

// BigInt
    const bigIntger = 312313n
    console.log(typeof bigIntger);

//array 
    const numbers =  [1 , 2 , 'one' , 'two' ]

// object
    const object = {
        name: 'myName',
        age: 20,
        gender: "F/M"
    }

// function
    const fun = function() {
        console.log('hello! world');
        console.log(typeof fun);
    }

    fun() // calling the function is importat to run the code inside of the function