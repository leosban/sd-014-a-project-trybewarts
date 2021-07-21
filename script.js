function btnLogin() {
  document.getElementById('login').addEventListener('click', () => {
    const nomeDeUsuario = document.getElementById('nomeDeUsuario').value;
    const senhaDeUsuario = document.getElementById('senhaDeUsuario').value;
    if (senhaDeUsuario === '123456' && nomeDeUsuario === 'tryber@teste.com') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

function desabilitaBtn() {
  const btn = document.getElementById('submit-btn');
  btn.setAttribute('disabled', 'disabled');
}

function habilitaBtn() {
  document.getElementById('agreement').addEventListener('click', () => {
    const checkObrigatorio = document.getElementById('agreement');
    if (checkObrigatorio.checked) {
      const estadoBtn = document.getElementById('submit-btn');
      estadoBtn.removeAttribute('disabled', 'disabled');
    } else {
      desabilitaBtn();
    }
  });
}

window.onload = () => {
  btnLogin();
  desabilitaBtn();
  habilitaBtn();
};
