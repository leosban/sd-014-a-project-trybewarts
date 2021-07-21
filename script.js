const btnLogar = document.querySelector('#btn');
const login = document.getElementById('login').value;
const senha = document.getElementById('senha').value;
let loginPattern = 'tryber@teste.com';
let senhaPattern = '123456';

btnLogar.addEventListener('click', (event) => {
  event.preventDefault();
  if (login === loginPattern && senha === senhaPattern) {
    window.alert('Olá, Tryber!')
  } else {
    window.alert('Login ou senha inválidos.')
  }
})
