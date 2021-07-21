const email = document.getElementById('email');
const password = document.getElementById('senha');
const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
});
