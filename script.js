function verificaLogin() {
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');

  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
document.getElementById('gobut').addEventListener('click', verificaLogin);

function enableSend() {
  const agree = document.getElementById('agreement');
  const send = document.getElementById('submit-btn');
  if (agree.checked === true) {
    send.disabled = false;
  } else {
    send.disabled = true;
  }
}
document.getElementById('agreement').addEventListener('change', enableSend);

function countChar() {
  let idcount = document.getElementById('counter');
  let charCount = document.getElementById('textarea').value.length;
  let newCount = 500 - charCount;
  idcount.innerText = newCount;
}
document.getElementById('textarea').addEventListener('change', countChar);
document.getElementById('textarea').addEventListener('keyup', countChar);
