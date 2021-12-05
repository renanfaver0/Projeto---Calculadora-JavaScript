// Código para calcular o IMC ao clicar no botão de calcular 
function calcular(peso, altura) {

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').innerHTML = imc.toFixed(2);
}

// Código para puxar informações do container
var button = document.getElementById("action-btn");

button.addEventListener("click", function () {

    var container = document.getElementById("container");

    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }

});

// Código para puxar informações do container2
button.addEventListener("click", function () {

    var container = document.getElementById("container2");

    if (container.style.display === "block") {
        container.style.display = "none";
    } else {
        container.style.display = "block";
    }

});



