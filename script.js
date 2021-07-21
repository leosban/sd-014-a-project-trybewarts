const enviar = document.querySelector('#enviar');
const login = document.querySelector('#login');
const senha = document.querySelector('#senha');

function alertOla() {
  alert('Olá, Tryber!');
}

function alertErro() {
  alert('Login ou senha inválidos.');
}

function botaoEnviar(evento) {
  evento.preventDefault();
  const valorLogin = login.value;
  const valorSenha = senha.value;
  alert("Olá");
  console.log(valorLogin);
  console.log(valorSenha);
  if (valorLogin === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

enviar.addEventListener('click', botaoEnviar);
