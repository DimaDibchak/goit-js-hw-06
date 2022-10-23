const inputElement = document.querySelector('#validation-input');

 function inputCheck ({target}) {

    if ( target.value.length === Number(inputElement.getAttribute('data-length'))) {
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
    } else {
        inputElement.classList.add('invalid');
    }
 }

inputElement.addEventListener('blur', inputCheck);

