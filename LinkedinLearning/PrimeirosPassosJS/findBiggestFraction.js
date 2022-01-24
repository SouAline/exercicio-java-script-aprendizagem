function findBiggestFraction(a, b) {
  var result;
  a > b ? (result = ["FirstFraction", a]) : (result = ["SecondFration", b]); // operador ternário if
  return result;
}

var firstFraction = 3 / 4;
var secondFraction = 5 / 7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("O resultado da primeira fração é: ", firstFraction);
console.log("O resultado da segunda fração é: ", secondFraction);
