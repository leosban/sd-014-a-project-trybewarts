function addEventButtonLogin() {
  document.getElementById('button').addEventListener('click', (event) => {
    const t = document.getElementById('login').value === 'tryber@teste.com';
    const s = document.getElementById('senha').value === '123456';
    event.preventDefault();
    if (t && s) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function addEventCheck() {
  document.getElementById('agreement').addEventListener('click', () => {
    if (document.getElementById('agreement').checked) {
      document.getElementById('submit-btn').disabled = false;
    } else document.getElementById('submit-btn').disabled = true;
  });
}

window.onload = () => {
  addEventButtonLogin();
  addEventCheck();
};
