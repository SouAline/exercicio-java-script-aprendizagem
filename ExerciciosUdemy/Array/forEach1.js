const aprovados = ["Aline", "Joao", "Maria", "Luciano"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
}); //nesta function é executado um laço for e para cada indice desse array ele executa o que é solicitado na função, neste caso imprimir o nome e o indice de cada elemento

aprovados.forEach((nome) => console.log(nome)); //nesse caso ele imprime cada nome
