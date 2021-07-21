const submitButton = document.querySelector('#btn-login');
const emailInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');

// requisito 3: Validação de email e senha ao clicar no botão
submitButton.addEventListener('click', function () {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
} )

// requisito 14: Cria as opções de avaliação (de 1 a 10)
function createRadioButtons () {
  const formRate = document.querySelector('.form-rate')

  for (let index = 1; index <= 10; index += 1) {
    radioLabel = document.createElement('label')
    radioButton = document.createElement('input')

    radioLabel.innerText = index;
    radioButton.type = "radio";
    radioButton.name = "rate";
    radioButton.value = index;

    formRate.appendChild(radioLabel);
    formRate.appendChild(radioButton);
  }
}

createRadioButtons();