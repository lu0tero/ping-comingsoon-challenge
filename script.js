/* Variables */
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const btnSubmit = document.querySelector('#btn-submit');
const smallTag = document.querySelector('#error-message');

form.addEventListener('submit', e=> {
    e.preventDefault();
    
    const emailValue = email.value;

    if (emailValue == "") {
        smallTag.innerText = "Email cannot be empty";
        email.classList.add('error');
        email.classList.remove('success');
    } else if (!validarEmail(emailValue)){
        smallTag.innerText = "Please provide a valid email address"
        email.classList.add('error');
        email.classList.remove('success');
    } else {
        email.classList.remove('error');
        console.log("Email registrado!");
        email.classList.add('success');
        smallTag.innerText = "";
    }
})

function validarEmail(emailValue) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(emailValue);
    }
    