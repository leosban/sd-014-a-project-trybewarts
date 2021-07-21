const email = document.querySelector('#login');
const senha = document.querySelector('#senha');
const btnLogin = document.querySelector('#btn-login');

function validateLogin(e) {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') alert('Olá, Tryber!');
  else alert('Login ou senha inválidos.');
}

btnLogin.addEventListener('click', validateLogin);
