
class Pessoa {
   nome;
   idade;
   anoDeNascimento;

   constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
   }

   descrever() {
    console.log(`Meu Nome é ${this.nome} e minha idade é ${this.idade}`);
   }
}

function compararPessoas(p1, p2) {
   if (p1.idade > p2.idade) {
      console.log(`${p1.nome} é Mais Velho(a) Que ${p2.nome}`);
   } else if (p2.idade > p1.idade) {
   console.log(`${p2.nome} é Mais Velho(a) Que ${p1.nome}`);
   } else {
      console.log(`${p1.nome} e ${p2.nome} Tem a Mesma Idade`)
   }
} 


const luan = new pessoa('Luan', 30);
const alice = new pessoa('Alice', 11);

compararPessoas(luan, alice);