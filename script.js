const enviar = document.querySelector('#enviar');
const login = document.querySelector('#login');
const senha = document.querySelector('#senha');

function botaoEnviar(evento) {
  evento.preventDefault();
  const valorLogin = login.value;
  const valorSenha = senha.value;
  if (valorlogin === 'tryber@teste.com' && valorSenha === 123456) {
    alert('Olá, Tryber!');
  }
}

enviar.addEventListener('click', botaoEnviar);