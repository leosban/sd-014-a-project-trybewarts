const btnLogin = document.getElementById('btn-login');
const userName = document.getElementById('login');
const password = document.getElementById('senha');

function enter(event){
    event.preventDefault();
    if(userName.value === 'tryber@teste.com' && password.value === '123456'){
        console.log('valido')
    }else{
        alert ('usuário ou senha inválido')
    }
}

btnLogin.addEventListener('click',enter);