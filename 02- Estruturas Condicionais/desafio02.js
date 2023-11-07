const precoEtanol = 2.47;
const precoDiesel = 6.18;
const precoGasolina = 5.54;
let tipoDeCombustivelDoCarro = 'Diesel';
const gastoMedioDeCombustivelPorKm = 11;
let distanciaEmKmDaViagem = 650;
let litrosConsumidos = distanciaEmKmDaViagem / gastoMedioDeCombustivelPorKm;

if (tipoDeCombustivelDoCarro === 'Gasolina') {
    console.log('O Valor Da Viagem Com Gasolina Será: R$' + (litrosConsumidos * precoGasolina).toFixed(2));
} else if (tipoDeCombustivelDoCarro === 'Etanol') {
    console.log('O Valor Da Viagem Com Etanol Será: R$' + (litrosConsumidos * precoEtanol).toFixed(2));
} else if (tipoDeCombustivelDoCarro === 'Diesel') {
    console.log('O Valor Da Viagem Com Diesel Será: R$' + (litrosConsumidos * precoDiesel).toFixed(2));
} else {
    console.log('Tipo de Combustível não reconhecido. Por favor, insira um tipo de combustível válido.');
}
