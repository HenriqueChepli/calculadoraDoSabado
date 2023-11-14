
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let adicao = document.querySelector("#adicao");
let subtracao = document.querySelector("#subtracao");
let divisao = document.querySelector("#divisao");
let multiplicacao = document.querySelector("#multiplicacao");
let resultado = document.querySelector("#resultado");

adicao.addEventListener("click", function() {
    mais(Number(valor1.value), Number(valor2.value));
});

subtracao.addEventListener("click", function(){
    menos(Number(valor1.value), Number(valor2.value));
});

divisao.addEventListener("click", function(){
    sobre(Number(valor1.value), Number(valor2.value));
});

multiplicacao.addEventListener("click", function(){
    vezes(Number(valor1.value), Number(valor2.value));
});

function mais(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}
function menos(a, b) {
    let soma = a - b;
    resultado.innerHTML = soma;
}
function sobre(a, b) {
    let soma = a / b;
    resultado.innerHTML = soma;
}
function vezes(a, b) {
    let soma = a * b;
    resultado.innerHTML = soma;
}

let selectedLanguage = document.querySelector("#idioma");
selectedLanguage.addEventListener("change", function(){
    if(this.value == "br"){
        titulo.textContent = "Calculadora"
    }
    else if(this.value == "es"){
        titulo.textContent = "Calculadora"
    }
    else if(this.value == "en"){
        titulo.textContent = "Calculator"
    } 
});