function login() {
  const botaoLogar = document.getElementById('botao-logar');

  botaoLogar.addEventListener('click', function () {
    const inputLogin = document.getElementById('input-login');
    const inputSenha = document.getElementById('input-senha');
    if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
login();