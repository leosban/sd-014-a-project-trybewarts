const btnLogar = document.querySelector('#btn');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
let loginPattern = 'tryber@teste.com';
let senhaPattern = '123456';

btnLogar.addEventListener('click', (event) => {
  event.preventDefault();
  if (login.value === loginPattern && senha.value === senhaPattern) {
    window.alert("Olá, Tryber!");
  } else {
    window.alert('Login ou senha inválidos.')
  }
})
