const btnLogar = document.getElementById('btn-logar');

function verficaSenha() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}btnLogar.addEventListener('click', verficaSenha);
