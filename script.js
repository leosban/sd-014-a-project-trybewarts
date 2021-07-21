const loginForm = document.querySelector('.trybewarts-login');

function studentLogin(event) {
  event.preventDefault();
  const fields = {};
  // Inspiração: https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values
  const formData = new FormData(loginForm).entries();
  [...formData].forEach(([field, value]) => {
    console.log(`${field} : ${value}`);
    fields[field] = value;
  });
  if (fields.login !== 'tryber@teste.com' || fields.senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginForm.addEventListener('submit', studentLogin);
