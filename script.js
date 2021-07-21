const getBotao = document.getElementById('botao-login');
getBotao.addEventListener('click', () => {
  const getInputLogin = document.getElementById('login');
  const getInputSenha = document.getElementById('senha');
  if (getInputLogin.value === 'tryber@teste.com' && getInputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const getCheckbox = document.getElementById('agreement');
getCheckbox.addEventListener('click', () => {
  const getBotaoSubmit = document.getElementById('submit-btn');
  if (getCheckbox.checked === true) {
    getBotaoSubmit.disabled = false;
  } else {
    getBotaoSubmit.disabled = true;
  }
});
