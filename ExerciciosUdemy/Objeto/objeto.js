// coleção dinamica de pares chave / valor
const produto = new Object();
produto.nome = "cadeira";
produto["marca do produto"] = "Generica";
produto.preco = 220;

console.log(produto);

delete produto.preco; //pode se utiliza o delete raa excluir valores do objeto
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 8900, // cj chave e valor
  proprietario: {
    // cj onde a chave possui como valor um objeto (que possui chave e valores)
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      // atributos que são arrays
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],
};

//para acessar uma propriedade
carro.proprietario.endereco.numero = 1000;
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
console.log(carro);
console.log(carro.condutores); //mesmo apos o delete ele mostra as propriedades do acrro e os condutores ele coloca como undefined
