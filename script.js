const botao = document.getElementById('btn-logar');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

botao.addEventListener('click', function(event) {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.')
  }
})
