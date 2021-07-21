// requisito 3

const login = document.getElementById('login');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', () => {
  if ((login.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
});
