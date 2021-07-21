/* eslint-disable no-unused-vars */
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function validateLogin() {
  if (email.value === 'tryber@teste.com'
  && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
