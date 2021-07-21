const botaoEnviar = document.querySelector("#enviar");
botaoEnviar.addEventListener("click", validarLogin);

function validarLogin() {
  const valorLogin = document.querySelector("#email").value;
  const valorSenha = document.querySelector("#senha").value;

  if (valorLogin !== "tryber@teste.com" || valorSenha !== "123456") {
    alert("Login ou senha inválidos.");
  } else {
    alert("Olá, Tryber!");
  }
}
