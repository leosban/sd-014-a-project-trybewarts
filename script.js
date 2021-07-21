const email = document.getElementById('email');
const password = document.getElementById('senha');
const buttonLogin = document.getElementById('button-login');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
});

agreement.onchange = function swap() { 
        submitBtn.disabled = !this.checked;
  };


