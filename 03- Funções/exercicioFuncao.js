function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
  
if (imc < 18.5) {
    return 'Você Está Abaixo do Peso!';
} else if (imc >= 18.5 && imc < 25) {
    return 'Você Está com o Peso Normal!';
} else if (imc >= 25 && imc < 30) {
    return 'Você Está Acima do Peso!';
} else if (imc >= 30 && imc < 40) {
    return 'Você Está Obeso!';
} else {
    return 'Você Está com Obesidade Grave!';
}
}



// Main
(function () {
 const peso = 98;
 const altura = 1.83;

 const imc = calcularImc(peso, altura);
 console.log(classificarImc(imc));
})();



    




