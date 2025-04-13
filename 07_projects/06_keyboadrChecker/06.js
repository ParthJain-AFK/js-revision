// add a button to 06 and 07 .html file. allowing user to navigate between pages

let allPressedKey = [];
window.addEventListener('keydown', (e) => {
    e.stopPropagation()
    e.preventDefault()

    const key = e.key // e.key.toLocaleUpperCase();
    const keyC = e.code;
    console.log(e.code, 'e.code');
    console.log(key, 'e.key');

    let pressedKey;
    let mappedKey;

    const keyMap = {
        " ": "Spacebar", // Space key
        "ControlLeft": "LeftControl",
        "ControlRight": "RightControl",
        "CapsLock": "CapsLock",
        "ShiftLeft": "LeftShift",
        "ShiftRight": "ShiftRight",
        "AltLeft": "AltLeft",
        "AltRight": "AltRight",
        "Semicolon": "Semicolon",
    };


    if (keyC in keyMap) {
        mappedKey = keyMap[keyC];

    } else if (keyMap[key]) {
        mappedKey = keyMap[key];

    } else {
        mappedKey = keyC;

    }



    allPressedKey.push(e.key)
    const showkey = document.querySelector('.keyPressed');
    showkey.innerHTML = `<p className="history">${allPressedKey.join(' ')}</p>`;

    console.log(showkey);


    pressedKey = document.getElementById(mappedKey);
    if (pressedKey) {
        pressedKey.style.background = 'magenta';
        pressedKey.style.color = 'white';
    }


});


window.addEventListener('keyup', (e) => {
    console.log(e.code, 'e.code');
    console.log(e.key, 'e.key');

    if (e.code === "PrintScreen") {
        console.log(e.code);
        document.getElementById('PrintScreen').style.backgroundColor = 'magenta'
        document.getElementById('PrintScreen').style.color = 'white'
        e.preventDefault();
    }
});