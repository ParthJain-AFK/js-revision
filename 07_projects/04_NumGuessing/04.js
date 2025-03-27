function ranNumGen () {
    const randomN = parseInt((Math.random() * 100) + 1)
    console.log(randomN);
    return randomN;
    }
const RN = ranNumGen();

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const prevGuess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const Previous = document.querySelector('.Previous');

const p = document.createElement('p') 

let prevG = []    
let numGuess = 10
let playgame = true


if (playgame) {
    submit.addEventListener('click' , (e) => {
        e.preventDefault()
        const UG = parseInt(userInput.value);
        
        valiMess(UG)
        chancesLeft()
        history(UG)

        userInput.value = ''
    }) 
} else if (!playgame) {
    restart()    
}



function valiMess (UG) {

    if (isNaN(UG)) {
        lowOrHi.innerHTML = "Its not An number"
    } else if (UG < 0 || UG > 100) {
        lowOrHi.innerHTML = "guess a number from 0 to 100"
    } else if (UG === RN) {
        lowOrHi.innerHTML = "you are correct!"
        playgame = false;
        restart()
    } else if (UG < RN) {
        lowOrHi.innerHTML = "bigger than this"
    } else {
        lowOrHi.innerHTML = "Smaller than this"
    }

}



function history (UG) {
    if ((prevG.length) <  9 ) {

        prevG.push(UG)

        // prevGuess.innerHTML = prevG // we can just do this if we dont want custom message 

        prevGuess.innerHTML = ''

        prevG.forEach((v) => { 
            v = isNaN(v) ? "??" : v; // if (isNaN(v)) { v = "??" }
            const newGuess = document.createTextNode(`${v} ,`);
            prevGuess.appendChild(newGuess);
        });

    } else {
        lowOrHi.innerHTML = `the number was ${RN}`
        playgame = false
        restart()
    }
}



function chancesLeft () {
    if (numGuess > 0) {
        numGuess--
        remaining.innerHTML = `${numGuess} guesses left.`
    } 
    if (numGuess == 0) {
        document.querySelector('.Remaining').innerHTML = ''
        remaining.innerHTML = "No more guesses left." 
        restart()
        playgame = false;
    }
}


function restart() {
    // will refresh the whole page 

    p.classList.add('button')
    p.innerHTML = `Start New Game`
    startOver.appendChild(p)

    p.addEventListener('click', () => {
        location.reload(); 
    })
}

// both restart() and startNew() are doing same thing but in case u are planning to use localStorage startNew() is better choice and if u dont care about any stored date then restart() is better

function startNew () {
    // we are restting all variables and innerHTML to original

    RN = ranNumGen()
    prevG = []    
    numGuess = 10

    lowOrHi.innerHTML = '__'

    playgame = true
}


// not a best way to write code but its works.. have better way? write it then