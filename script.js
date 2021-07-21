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

// Função para habilitar botão de envio ... REQUISITO 18
document.getElementById('agreement').addEventListener('click', (e) => {
  document.getElementById('submit-btn').disabled = !e.target.checked;
}); // Referência da estrutura da função = https://stackoverflow.com/questions/33973512/enable-submit-button-when-select-checkbox

document.getElementById('textarea').onkeyup = function characterCounter() {
  document.getElementById('counter').innerHTML = `${500 - this.value.length}`;
};
