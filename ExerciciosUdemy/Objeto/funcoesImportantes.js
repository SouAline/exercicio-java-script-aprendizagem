const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); // tras os atibutos
console.log(Object.values(pessoa)); // tras os valores
console.log(Object.entries(pessoa)); // tras um array de pessoa com chave e valor separado por virgula

Object.entries(pessoa).forEach(([chave, valor]) => {
  // vai em objeto pessoa, recebe a chave e o valor e imprime como solicitado
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "10/12/2022",
});
console.log(pessoa);

//Object.assign
const destino = { a: 1 };
const objeto1 = { b: 2 };
const objeto2 = { c: 3, a: 4 };
const objeto = Object.assign(destino, objeto1, objeto2);
//concatena todos os objetos que foram passados no parametro de assingn
console.log(objeto);

Object.freeze(objeto); // não permite adicionar outros valores ao parametro adicionado nos parenteses. objeto é congelado
objeto.c = 144;
console.log(objeto);
