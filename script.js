const loginInfo = document.querySelector('#input-login');
const passInfo = document.querySelector('#input-password');
const submitLogPas = document.querySelector('#btn-submit');

function LogCheck(login, password) {
  window.alert('aw ye');
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    return window.alert('Olá, Tryber!');
  }
  else {
    return window.alert('Login ou senha inválidos')
  }
}

submitLogPas.addEventListener('click', LogCheck);