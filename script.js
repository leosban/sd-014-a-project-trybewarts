const getUser = document.querySelector('#login');
const getPassword = document.querySelector('#senha');


function valideLogin() {      
    if(getUser.value === 'tryber@teste.com' && getPassword.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Login ou senha inválidos.');
    }
}
const botaoLogin = document.querySelector('.btn-login');
botaoLogin.addEventListener('click', valideLogin);