function escreverMeuNome(name) {
    return 'Seu Nome é : ' + name;

}



function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('Luan ')  +  'Você é Maior de Idade');
    } else {
        console.log(escreverMeuNome('Alice ')  +  'Você é Menor de Idade');
    }
}

verificarIdade(18);
verificarIdade(15);
