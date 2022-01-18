// Closure é o escopo criado quando uam função é declarada
// Esse escopo  permite a função acessar e manipular as variaveis externas a função

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}
const minhaFuncao = fora();
console.log(minhaFuncao());

//imprime Local no console.
