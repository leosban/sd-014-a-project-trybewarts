const email = document.querySelector('#login');
const senha = document.querySelector('#senha');
const btnLogin = document.querySelector('#btn-login');
const btnSubmit = document.querySelector('#submit-btn');
const chkBox = document.querySelector('#agreement');

function validateLogin(e) {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') alert('Olá, Tryber!');
  else alert('Login ou senha inválidos.');
}

function checkButton(e) {
  if (e.target.checked === true) btnSubmit.disabled = false;
  else btnSubmit.disabled = true;
}

btnLogin.addEventListener('click', validateLogin);
chkBox.addEventListener('click', checkButton);
