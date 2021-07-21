const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btn = document.getElementById("btn-login");

function login() {
  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}

btn.addEventListener("click", login);
