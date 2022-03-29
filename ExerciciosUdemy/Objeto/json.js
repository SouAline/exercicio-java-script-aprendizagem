const objeto = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
imprimir = JSON.stringify(objeto); //stringify transforma "objeto" em JSON
console.log(
  ` O resultado fica: ${imprimir} se percebe que a função não foi trazida`
);

console.log(JSON.parse('{"a": 1, "b": 2, "c": true, "d":{}, "e": [] }'));
