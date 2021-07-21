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
