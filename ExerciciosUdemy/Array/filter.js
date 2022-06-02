const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "Ipad Pro", preco: 4199, fragil: true },
  { nome: "Copo de vidro", preco: 41, fragil: true },
  { nome: "Copo de plastico", preco: 41, fragil: false },
];
const caro = (produto) => produto.preco >= 50;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
