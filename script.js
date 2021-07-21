const catchEmail = document.getElementById('login');
const catchPassword = document.getElementById('password');
const catchBtnLogin = document.getElementById('btn-login');

function getAcess(event) {
  console.log(catchEmail, catchPassword);
  if (catchEmail.value === 'tryber@teste.com' && catchPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

catchBtnLogin.addEventListener('click', getAcess);
