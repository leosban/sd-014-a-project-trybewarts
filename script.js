

function login() {
  const loginInput = document.getElementById('login');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('loginButton');
  const defaultLogin = {
    login: 'tryber@teste.com',
    password: '123456'
  };
  loginBtn.addEventListener('click', () => {
    if (loginInput.value === defaultLogin.login 
    && passwordInput.value === defaultLogin.password) {
      alert('Olá, Tryber!');
    }
    else {
      alert('Login ou senha inválidos.');
    }
  })
}
login();