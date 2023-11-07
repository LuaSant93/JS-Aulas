const precoDaGasolina = 6.35;
const gastoPorLitroDoCarro = 11;
const distanciaDaViagemEmKm = 700;

const calculoDaViagem = (distanciaDaViagemEmKm / gastoPorLitroDoCarro * precoDaGasolina)

console.log("O Valor Total da Viagem Fica : R$ " + calculoDaViagem.toFixed(2));