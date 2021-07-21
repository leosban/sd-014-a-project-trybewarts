const email = document.querySelectorAll('input')[0];
const senha = document.querySelectorAll('input')[1];
const botao = document.querySelector('button');

function alerta() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botao.addEventListener('click', alerta);
