document.getElementById('entrar').addEventListener('click', () => {
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');
  if (login.value !== 'tryber@test.com' && senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
})

document.getElementById('agreement').addEventListener('click', () => {
  const botao = document.getElementById('submit-btn');
  if (document.getElementById('agreement').checked === true) {
    
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
})