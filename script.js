// interação de login
const loginInput = document.querySelector('#Login');
const passwordInput = document.querySelector('#Senha');
const buttonLogin = document.querySelector('#botaoLogin');

function loginInteraction() {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', loginInteraction);

// interação botao de enviar
const checkbox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

function clickSend(e) {
  if (e.target.checked) { // Source: https://stackoverflow.com/questions/18110865/how-to-disable-enable-a-button-with-a-checkbox-if-checked/18110998
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkbox.addEventListener('change', clickSend);
