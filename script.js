let entrarBotao = document.querySelector('.botaoEntrar');
function logar() {
  entrarBotao.addEventListener('click', validarLogin);
  function validarLogin() {
    let loginBotao = document.querySelector('#login').value;
    let senhaBotao = document.querySelector('#senha').value;
    let email = 'tryber@teste.com';
    let senha = '123456';
    if (loginBotao === email && senhaBotao === senha) {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  };
}
logar();
