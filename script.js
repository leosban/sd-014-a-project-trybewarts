const btnLogin = document.getElementById('btn-login');
const userName = document.getElementById('login');
const password = document.getElementById('senha');

function enter(event){
    event.prevenDefault()
    if(userName.value === 'tryber@teste.com' && password.value === '123456'){
        console.log('valido')
    }
}

btnLogin.addEventListener('click',enter);
