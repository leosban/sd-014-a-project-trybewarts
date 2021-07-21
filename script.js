function login() {
  const botaoLogar = document.getElementById('botao-logar');

  botaoLogar.addEventListener('click', function () {
    let inputLogin = document.getElementById('input-login');
    let inputSenha = document.getElementById('input-senha');
    console.log(inputLogin.value);
    console.log(inputSenha.value);
    if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
      alert('Olá, Tryber!');
    }
    else {
      alert('Login ou senha inválidos.');
    }
  });
}

login();