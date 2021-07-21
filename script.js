const senha = document.getElementById('senha');
const login = document.getElementById('login');
const btnLogin = document.getElementById('btn-logar');

function loginSenha() {
  if (senha.value === '123456' || login.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}; btnLogin.addEventListener('click', loginSenha); 