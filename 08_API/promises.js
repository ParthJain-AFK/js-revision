const Prom1 = new Promise((resolve , reject) => {
    /* do an async task
    database call , network , ect. */
    setTimeout(() => {
        // console.log('did it P1');
        resolve()    
    }, 1000);
})
Prom1.then(() => {
    console.log('resolved P1');
})


new Promise ((res , rej) => {
    setTimeout(() => {
        // console.log('P2 did it');
        res()
    }, 1000);
}).then(() => {
    console.log('P2 resolved');
})


const Prom3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        // resolve({name : 'userName' , gender: 'human'})
    }, 1000);
})
Prom3.then((object) => {
    // console.log(object);
    console.log(object.name);
    
})


const prom4 = new Promise((resolve , reject) => {
    setTimeout(() => {
        let condition = true; //  change this to understand
        if (!condition) {
            resolve({name : 'GiantKing' , gender: 'Giant'})
        } else {
            reject('ERROR: u are gay')
        }
    }, 1000);
})


prom4.
then((result) => {
    // console.log(result.name)
    return result.name;
}).
then((name) => {
    console.log(name , ', prom4')
}).
catch((ERROR) => {
    console.log(ERROR , ', prom4')
}).
finally(() => console.log('prom4 is done '))



const prom5 = new Promise(function (resolve , reject) {
    setTimeout(() => {
        let condition = true; //  change this to understand
        if (!condition) {
            resolve({name : 'elf' , gender: 'who cares'})
        } else {
            reject('ERROR: u are not straight')
        }
    }, 1000);
})

async function prom5Async() {
    /* if we are getting ERROR instead of object then this wont work
    const responce = await prom5
    console.log( responce); 
    so we gotta use try catch */
    try {
        const responce = await prom5
    console.log( responce); 
    } catch (error) {
        console.log(error);
    }
}

prom5Async()


async function getUser() {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(responce);
        
        const data = await responce.json()
        // console.log(data);
        
    } catch (error) {
        console.log('E:' , error);
    }
}
getUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) => {
    return responce.json()
}).then((responce) => {
    console.log(responce);
})
.catch((error) => {
    console.log('E:' , error);  
})
.finally(function() {
    console.log('its done ----------');
})