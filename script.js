function validarEmailSenha() {
  const inputEmail = document.getElementById('js-email');
  const inputSenha = document.getElementById('js-senha');
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const button = document.getElementById('autenticacao');
button.addEventListener('click', validarEmailSenha);
