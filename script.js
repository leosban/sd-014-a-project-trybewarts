//interação de login
const loginInput = document.querySelector('#Login');
const passwordInput = document.querySelector('#Senha');
const buttonLogin = document.querySelector('#botaoLogin');

function loginInteraction () {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Login ou senha inválidos.')
  }
}


buttonLogin.addEventListener('click', loginInteraction);