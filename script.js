const btnLogin = document.getElementById('btn-login');
const userName = document.getElementById('login');
const password = document.getElementById('senha');

function enter(event){
    event.preventDefault();
    if(userName.value === 'tryber@teste.com' && password.value === '123456'){
        alert ('Olá, Tryber!')
    }else{
        alert ('Login ou senha inválidos.')
    }
}

btnLogin.addEventListener('click',enter);
