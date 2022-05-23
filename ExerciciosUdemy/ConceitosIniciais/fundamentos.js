function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com" + nota);
  }
}
soBoaNoticia(8.1);
soBoaNoticia(6.1); // não vai imprimir

function seForVerdadeEuFalo(valor) {
  if (valor) {
    //Js vai transformar esse parametro em boolean
    console.log("É verdade..." + valor);
  }
}

seForVerdadeEuFalo(); //é false pois é considerado undefined
seForVerdadeEuFalo(null); //é false
seForVerdadeEuFalo(undefined); //é false
seForVerdadeEuFalo(NaN); //é false
seForVerdadeEuFalo(""); //é false
seForVerdadeEuFalo(0); //é false, zero é o unico numero que é falso
seForVerdadeEuFalo(-1); // é true
seForVerdadeEuFalo(" "); //é true pois está preenchido
seForVerdadeEuFalo([]); //é true
seForVerdadeEuFalo([1, 2]); //é true
seForVerdadeEuFalo({}); //é true pois é um objeto
//Muito útil quando se quer descobrir se uma string esta vazia ou não , por exemplo

function teste1(num) {
  if (num > 7) {
    console.log(num);
    console.log("final");
  }
}
teste1(6);
teste1(8);
