const aprovados = ["Aline", "Joao", "Maria", "Luciano"];
//nesta function é executado um laço for e para cada indice desse array ele executa o que é solicitado na função e neste caso imprimir o nome e o indice de cada elemento
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
//nesse caso ele imprime cada nome que está localizado no array APROVADOS
aprovados.forEach((nome) => console.log(nome));

const reprovados = ["Roberto", "Luisa", "Marcela", "Julio"];
reprovados.forEach(function (nome) {
  console.log(`${nome}`);
});
