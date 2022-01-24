//Usando a notação literal
const objeto1 = {};

// Objetoem JS
console.log(typeof Object, typeof new Object());
const objeto2 = new Object();
console.log(objeto2);

//funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome; //essa variavel fica global
  this.getPrecoDesconto = () => {
    return preco * (1 - desc);
  };
}

const produto1 = new Produto("Caneta", 7.99, 0.15);
const produto2 = new Produto("Notebook", 2998.99, 0.25);
console.log(produto1.getPrecoDesconto(), produto2.getPrecoDesconto());

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const funcionario1 = criarFuncionario("João", 7980, 4);
const funcionario2 = criarFuncionario("Maria", 11487, 1);
console.log(funcionario1.getSalario(), funcionario2.getSalario());

//Objeto.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
