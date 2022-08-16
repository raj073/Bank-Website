//step-1: Add event handler with the submit button

document.getElementById('btn-login').addEventListener('click', function () {
    //Step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-mail');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'raj@gmail.com' && password === '4321') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please Provide Valid E-mail and Password');
    }
})