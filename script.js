const capLogin = document.getElementById('login');
const capBotaun = document.getElementById('botaun');
const capPassword = document.getElementById('password'); 
capBotaun.addEventListener('click', validaLogin);

function validaLogin(marcoPolo){
    if(capLogin.value !== 'tryber@teste.com' && capPassword.value !== '123456'){
        alert('Login ou senha inválidos.');
    }else{
        alert('Olá, Tryber!');
    }
} 