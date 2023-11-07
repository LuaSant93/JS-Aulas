/*
//Coleção de Dados . Objeto Literal, Sem Classe .
const alunos = ['Luan', 'Roseni', 'Alice'];
//Adicionar Mais Um Item
alunos.push('Luão');
//Adicionar Com a Posição Escolhida.
alunos[4] = 'Anselmo';
// Não é de Costume mais podem ser Add Numeros e Strigns
alunos.push(10);
//.pop Retira o Ultimo / .shift Retira o Primeiro. 
console.log(alunos); */

/*.lenght Mostra o Tamanho da Lista
console.log(notas.length); */


const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}

const media = soma / notas.length;
console.log(media);