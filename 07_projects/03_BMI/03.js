
const form = document.querySelector('form')

form.addEventListener('submit' , (sub) => {
    sub.preventDefault()

    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const results = document.querySelector('#results')


    
    if (height ==='' || height < 0 || isNaN(height) && weight ==='' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Enter Your Height and Weight'
    } else if (weight ==='' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Enter Your Weight'
    } else if (height ==='' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Enter Your Height'
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
})
