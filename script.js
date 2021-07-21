const enviar = document.querySelector('#enviar');
const login = document.querySelector('#login');
const senha = document.querySelector('#senha');

// function botaoEnviar(evento) {
//   evento.preventDefault();
//   const valorLogin = login.value;
//   const valorSenha = senha.value;
//   if (valorLogin === 'tryber@teste.com' && valorSenha === 123456) {
//     alert('Olá, Tryber!');
//   }
// }

enviar.addEventListener('click', () => {
  event.preventDefault();
  const valorLogin = login.value;
  const valorSenha = senha.value;
  console.log(valorLogin);
  console.log(valorSenha);
  if (valorLogin === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
