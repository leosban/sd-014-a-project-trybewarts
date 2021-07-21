const loginBtn = document.querySelector('.loginBtn');
const loginInput = document.querySelector('#login-input');
const passwordInput = document.querySelector('#password-input');

loginBtn.addEventListener('click', function () {
  if (loginInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!')
  }
})