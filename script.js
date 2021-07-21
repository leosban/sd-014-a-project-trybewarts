const getUser = document.querySelector('#login');
const getPassword = document.querySelector('#senha');
const botaoLogin = document.querySelector('.btn-login');

function valideLogin() {
    getPassword.toString;
    if(getUser === 'tryber@teste.com' && getPassword === '123456') {
        alert("Olá, Tryber!");
    } else {
        alert("Login ou senha inválidos");
    }
}

botaoLogin.addEventListener('click', valideLogin);