/* Alt Shift F . Formata o Codigo no VsCode*/

const numero = 3;
const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0) {
    console.log('O Número é Inválido');
/* Pode Ser Coloca Quantos else if Necessarios.  */
} else if (numero === 5) {
    console.log('O Número é Inválido');
 } else if (numeroDivisivelPor5) {
    console.log('Sim o Número é Divisivel Por 5');
    /* else Sempre por último ! */ 
  } else {
    console.log('Não o Número Não é Divisivel Por 5');
}


