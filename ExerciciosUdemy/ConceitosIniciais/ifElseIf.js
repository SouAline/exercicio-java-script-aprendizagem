Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim; //se o this estiver entre o inicio e o fim então ele é true
};

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação");
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota invalida");
  }
};

imprimirResultado(10);
imprimirResultado(6);
imprimirResultado(4);
imprimirResultado(2);
imprimirResultado(-5);
