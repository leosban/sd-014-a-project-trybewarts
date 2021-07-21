const inputLogin = document.getElementsByTagName('input')[0];
const inputSenha = document.getElementsByTagName('input')[1];
const btnEntrar = document.getElementsByTagName('button')[0];

function checkUser() {
  if (inputLogin.value === 'tryber@teste.com') {
    return true;
  }
  return false;
}

function checkPassword() {
  if (inputSenha.value === '123456') {
    return true;
  }
  return false;
}

function validateLogin() {
  if (checkUser() && checkPassword()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnEntrar.addEventListener('click', validateLogin);