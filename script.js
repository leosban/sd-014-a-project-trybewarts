let email = document.querySelectorAll("input")[0];
let senha = document.querySelectorAll("input")[1];
let botao = document.querySelector("button");

botao.addEventListener("click", alerta);

function alerta(){
    if(email.value == "tryber@teste.com" && senha.value == 123456){
        alert("Olá, Tryber!");
    }else{
        alert("Login ou senha inválidos.");
    }
}
