class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc(){
     const imc = this.calcularImc();
     if (imc < 18.5) {
       return ('Você Está Abaixo do Peso!');
    } else if (imc >= 18.5 && imc < 25) {
       return ('Você Está com o Peso Normal!');
    } else if (imc >= 25 && imc < 30) {
      return  ('Você Está Acima do Peso!');
    } else if (imc >= 30 && imc < 40) {
      return ('Você Está Obeso!');
    } else {
      return ('Você Está com Obesidade Grave!');
    }

    }

}

const luan = new Pessoa('Luan', 98, 1.83);
console.log(luan.classificarImc());
const alice = new Pessoa('Alice', 40, 1.63);
console.log(alice.classificarImc());
