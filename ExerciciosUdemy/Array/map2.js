const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome":"Caderno", "preco":13.90}',
  '{"nome": "Kit de lápis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

//Retornar um array apenas com os preços
//let resultado = carrinho.map(preco);
const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;
//Primeiro map chama a funcao que transforma o jason em objeto e o segundo map chama a funcao que acessa apenas o preco do objeto
const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);
