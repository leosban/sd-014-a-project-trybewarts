const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const btnlogin = document.querySelector('.submit-botao-login');

function alertLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnlogin.addEventListener('click', alertLogin);
