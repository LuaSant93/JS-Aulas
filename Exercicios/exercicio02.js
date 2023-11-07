let peso = 98;
let altura = 1.83;
let imc = peso / Math.pow(altura,2);




if (imc < 18.5) {
    console.log('Você Está Abaixo do Peso!');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você Está com o Peso Normal!');
} else if (imc >= 25 && imc < 30) {
    console.log('Você Está Acima do Peso!');
} else if (imc >= 30 && imc < 40) {
    console.log('Você Está Obeso!');
} else {
    console.log('Você Está com Obesidade Grave!');
}


