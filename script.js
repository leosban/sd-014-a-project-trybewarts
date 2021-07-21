const loginInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');

// Função para validar senha ... REQUISITO 3
function senhaCheck() {
  if (senhaInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

// Função para validar login ... REQUISITO 3
function loginCheck() {
  if (loginInput.value !== 'tryber@teste.com') {
    alert('Login ou senha inválidos.');
  } else {
    senhaCheck.call();
  }
}

const loginButton = document.querySelector('#login');
loginButton.addEventListener('click', loginCheck);
