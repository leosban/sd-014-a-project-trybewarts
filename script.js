const loginId =  document.getElementById('header-login');
const senhaId = document.getElementById('header-senha');
const btnAutenticatiohn = document.getElementById('header-btn')

function invalidLoginAlert () {
  if (loginId.value === 'tryber@teste.com' || senhaId.value === '123456'){
    alert('Olá, Tryber!')
  }else{
    alert('Login ou senha inválidos.')
  }
}
btnAutenticatiohn.addEventListener('click', invalidLoginAlert);