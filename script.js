const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const butaoLogin = document.getElementById('button');

butaoLogin.addEventListener('click', efetivarLogin);

function efetivarLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
