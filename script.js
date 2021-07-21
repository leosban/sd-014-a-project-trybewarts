function validarLogin() {
  const valorLogin = document.querySelector('#login').value;
  const valorSenha = document.querySelector('#senha').value;

  if (valorLogin !== 'tryber@teste.com' || valorSenha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const botaoEnviar = document.querySelector('#enviar');
botaoEnviar.addEventListener('click', validarLogin);