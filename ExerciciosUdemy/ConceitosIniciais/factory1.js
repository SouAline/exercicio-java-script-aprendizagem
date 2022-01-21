function criarProduto(nome, preco) {
  // parametros
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto("Notebook", 2199, 49));
console.log(criarProduto("Ipad", 5000, 89));
