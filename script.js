const validEmail = 'tryber@teste.com';
const validPassword = '123456';

function validaLogin(email, password) {
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', () => {
    const emailValue = document.getElementById('input-email').value;
    const passwordValue = document.getElementById('input-password').value;

    if (emailValue === email && passwordValue === password) {
      alert('Olá, Tryber');
    } else {
      alert('Login ou senha inválidos');
    }
  });
}
validaLogin(validEmail, validPassword);
