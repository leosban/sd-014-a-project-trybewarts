let botaoLogin = document.getElementById('loginButton');
botaoLogin.addEventListener('click', function verificaLogin(event) {
  let inputTxtLogin = document.getElementById('login').value;
  let inputTxtSenha = document.getElementById('senha').value;
  if (inputTxtLogin == 'tryber@teste.com' | inputTxtSenha == '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Login ou senha inválidos.')
  }
})
