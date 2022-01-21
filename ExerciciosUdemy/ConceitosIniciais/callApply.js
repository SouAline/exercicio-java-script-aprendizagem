function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco, //nãoprecisa de parenteses nesse caso dentro de um objeto
};

global.preco = 20;
global.desc = 0.1;

console.log(getPreco()); // aqui ele executa a função utilizando o valor que foi passando atraves do "global.preco e globla.desc"
console.log(produto.getPreco()); // aqui ele imprime o valor do produto de valendo a funcao utilizando os valores que estão dentro do objeto.
