const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); // tras os atibutos
console.log(Object.values(pessoa)); // tras os valores
console.log(Object.entries(pessoa)); // tras um array de pessoa com chave e valor separado por virgula

Object.entries(pessoa).forEach(([chave, valor]) => {
  // vai em objeto pessoa, receve a chave e o valor e imprime como solicitado
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "10/12/2022",
});
console.log(pessoa);
