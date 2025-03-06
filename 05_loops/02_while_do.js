/*********** WHILE ***********/
let i = 0

while (i <= 10) {
    // console.log(`${i}`);
    // i++
    i = i +2
}

i = 0 // resetting the value of i to 0 becasue the value of i was 10 thx to the last while loop

let hero = ['Batmn' , 'superman' , 'ironman' , 'spiderman']
while (i < hero.length) {
    // console.log(hero[i]);
    i += 1
}



/***********Do WHILE LOOP***********/
// use this in case u wanna run the code at least once
 
i = 0;
do {
    // console.log(`${i*10} is the score`);
    i += 2
} while (i <= 20);

do {
    // console.log(`i = ${i} but this code still run one time`);
} while (i<=15);