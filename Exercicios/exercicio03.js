const precoEtiqueta = 100.00;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log('À Vista no Débito você recebe 10% de desconto. Valor Total = R$' + (precoEtiqueta - (precoEtiqueta * 0.1)));
} else if (formaDePagamento === 2) {
    console.log('À Vista no Dinheiro ou Pix você recebe 15% de desconto. Valor Total = R$' + (precoEtiqueta - (precoEtiqueta * 0.15)));
} else if (formaDePagamento === 3) {
    console.log('Parcelado em até Duas Vezes. Valor Total = R$' + precoEtiqueta);
} else if (formaDePagamento === 4) {
    console.log('Acima de Duas Vezes terá um acréscimo de 10%. Valor Total = R$' + (precoEtiqueta + (precoEtiqueta * 0.1)));
} else {
    console.log('Opção Inválida');
}
