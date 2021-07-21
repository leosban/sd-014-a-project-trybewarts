const loginBarra = document.querySelector('#login');
const senhaBarra = document.querySelector('#senha');
const buttonLogin = document.querySelector('#button-login');

function alertInvalido(params) {
    if (loginBarra.innerHTML !== "tryber@teste.com" && senhaBarra.innerHTML !== 123456) {
        alert('Login ou senha inválidos');
    }  
    else {
        alert('Olá, Tryber!');
    }  
}

buttonLogin.addEventListener("click",alertInvalido);