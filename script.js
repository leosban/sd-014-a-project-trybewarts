const login = document.getElementById('login');
const senha = document.getElementById('senha');
const logar = document.getElementById('logar');

function checarLogin() {
/*   event.preventDefault(); */
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
    /* return false; */
  } else {
    alert('Login ou senha inválidos.');
  }
}

logar.addEventListener('click', checarLogin);

/* function checarLogin(){
  if ((login.value=="" || login.value.indexOf('@')==-1 || login.value.indexOf('.')==-1) && (senha.value === "123456")) {
    alert("Login ou senha inválidos.");
    return false;
  } else {
    alert("Olá, Tryber!")
  }
} */

/* function checarSenha() {
  if (senha.value === "123456") {
    alert("Login ou senha inválidos.");
    return false;
  } else {
    alert("Olá, Tryber!")
  }
}
 */
