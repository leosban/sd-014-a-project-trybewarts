const buttonTrybewartsLogin = document.getElementById('trybewarts-login-button');
const emailTrybewarts = document.getElementById('trybewarts-email');
const passwordTrybewarts = document.getElementById('trybewarts-password');

function verifyEmailTrybewarts() {
  if (emailTrybewarts.value === 'tryber@teste.com') {
    return true;
  }
  return false;
}

function verifyPasswordTrybewarts() {
  if (passwordTrybewarts.value === '123456') {
    return true;
  }
  return false;
}

buttonTrybewartsLogin.addEventListener('click', () => {
  if (verifyEmailTrybewarts() && verifyPasswordTrybewarts()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
