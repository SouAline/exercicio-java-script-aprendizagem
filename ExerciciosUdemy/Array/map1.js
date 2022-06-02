const numeros = [1, 2, 3, 4, 5];
// For com proposito, no caso do map ele internamente tem um for
let resultado = numeros.map(function (e) {
  return e * 2;
});

const soma10 = (e) => e * 10;
const triplo = (e) => e * 10;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;
resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
