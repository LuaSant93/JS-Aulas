let nota1 = 9;
let nota2 = 0;
let nota3 = 0;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Você Foi Reprovado . Estude Mais !")

} else if (media >= 5 && media <= 7) {
    console.log("Você Esta de Recuperação . Estude Mais !")
} else if (media > 7 && media <= 9) {
    console.log("Meus Parabéns Você Esta Aprovado !")
} else {
    console.log('Você Tirou 10 , Parabéns Pelo Seu Esforço , Continue Asssim !')
}