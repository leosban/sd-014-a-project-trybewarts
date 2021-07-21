const loginButton = document.querySelector('#btn-login');
const emailInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');

// requisito 3: Validação de email e senha ao clicar no botão
function validateLogin() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', validateLogin);

// requisito 14: Cria as opções de avaliação (de 1 a 10)
function createRadioButtons() {
  const formRate = document.querySelector('.form-rate');

  for (let index = 1; index <= 10; index += 1) {
    const radioLabel = document.createElement('label');
    const radioButton = document.createElement('input');

    radioLabel.innerText = index;
    radioButton.type = 'radio';
    radioButton.name = 'rate';
    radioButton.value = index;

    formRate.appendChild(radioLabel);
    formRate.appendChild(radioButton);
  }
}

createRadioButtons();

// requisito 18: Validação de checkbox para habilitar botão
const submitButton = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');
submitButton.disabled = true;

function sendForm() {
  if (agreementCheck.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreementCheck.addEventListener('click', sendForm);

// requisito 21 (bônus): Contador de caractérias
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const counterMax = 500;

function counterText() {
  const number = counterMax - textarea.value.length;
  counter.innerText = number;
}

textarea.addEventListener('keyup', counterText);
