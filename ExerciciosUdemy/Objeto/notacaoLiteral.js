const a = 1;
const b = 2;
const c = 3;

const objeto1 = { a: a, b: b, c: c };
const objeto2 = { a, b, c }; //quando o nome do atributo não muda

console.log(objeto1, objeto2);

const nomeAtributo = "nota";
const valorAtributo = 7.8;

const objeto3 = {};
objeto3[nomeAtributo] = valorAtributo;
console.log(objeto3);

const objeto4 = { [nomeAtributo]: valorAtributo };
console.log(objeto4);

const objeto5 = {
  funcao: function () {
    //...
  },
  funcao2() {
    //..
  }, //As duas formas dessa funcao funcionam
};
console.log(objeto5);
