const formElement = document.querySelector('.login-form');
function formSubmit (event) {
    event.preventDefault();

    const { elements : {email, password}} = event.currentTarget;
    
    if ( !email.value || !password.value) {
        alert('All fields must be filled in');
    } else {
        const informationfield = {
            [email.value] : password.value,
        }
        console.log(informationfield);
        formElement.reset();
    }
} 
formElement.addEventListener('submit', formSubmit);
