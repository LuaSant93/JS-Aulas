function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
 }
 
 function aplicarJuros(valor, juros) {
     return valor + (valor * (juros / 100));
 }
 
 const precoEtiqueta = 100.00;
 const formaDePagamento = 4;
 
 if (formaDePagamento === 1) {
     console.log('Pagamento no Débito Terá 10% de Desconto. Valor Total: ' + aplicarDesconto(precoEtiqueta, 10));
 } else if (formaDePagamento === 2) {
     console.log('Pagamento no Dinheiro ou Pix Terá 15% de Desconto. Valor Total: ' + aplicarDesconto(precoEtiqueta, 15));
 } else if (formaDePagamento === 3) {
     console.log('Parcelado em até Duas Vezes. Valor Total = R$' + precoEtiqueta);
 } else if (formaDePagamento === 4) {
     console.log('Acima de Duas Vezes terá um acréscimo de 10%. Valor Total = R$' + aplicarJuros(precoEtiqueta, 10));
 } else {
     console.log('Opção Inválida');
 }
 