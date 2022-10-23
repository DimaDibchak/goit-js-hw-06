const inputElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

inputElement.addEventListener('input', ({target}) => {
    textElement.style.fontSize = `${target.value}px`;
})