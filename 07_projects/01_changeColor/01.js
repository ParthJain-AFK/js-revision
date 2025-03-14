const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach((button) => {
    console.log(button);
    button.addEventListener('click' , (b) => {
        const id = b.target.id
        switch (id) {
            case 'grey':
                body.style.background = 'grey';
                break;
            
            case 'white':
                body.style.background = b.target.id;
                break;
            
            case 'blue':
                body.style.background = b.target.id;
                break;
            
            case 'yellow':
                body.style.background = b.target.id;
                break;
        }
    })
})