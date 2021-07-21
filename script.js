function buttonLogin() {
  document.getElementById('login').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'tryber@teste.com' && password === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

buttonLogin();