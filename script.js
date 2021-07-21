function setButtonLoginSubmit() {
  // obtém o seletor do botão e acrescenta o event listener pra ele
  document.getElementById('login-submit').addEventListener('click', () => {
      // puxa os valores escritos dentro dos inputs de login
    const loginNome = document.getElementById('login-nome').value;
    const loginSenha = document.getElementById('login-senha').value;
    if (loginNome === 'tryber@teste.com' && loginSenha === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
    // se for o login/senha padrão, retorna um "olá, tryber", caso não, retorna "...inválidos"
  });
}
setButtonLoginSubmit();
