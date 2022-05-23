const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado("epa"); //cuidado pois o Js permite utilizar string no parametro  porém entra no else e imprime reprovado sempre
