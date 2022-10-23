const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');

inputElement.addEventListener ('input', ({target}) => {
    spanElement.textContent = target.value || 'Anonymous'; 
})