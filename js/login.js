document.getElementById('login-submit').addEventListener('click', function () {

    //get user e-mail
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check user e-mail & password
    if (userEmail == 'bank@gmail.com' && userPassword == '123456') {
        window.location.href = 'banking.html';
    }
});