const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]; //mesmo sendo const eu posso manipular o qu eesta dentro mas não posso adicionar nada
pilotos.pop(); //retira o ultimo item do array
console.log(pilotos);

pilotos.push("Outro piloto"); //adiciona outro piloto no final do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro piloto
console.log(pilotos);

pilotos.unshift("Hamilton"); //adiciona no inicio do array
console.log(pilotos);

pilotos.splice(2, 0, "Bottas", "Massa"); //adiciona a partir do indice 2 os elementos indicados o zero foi adicionado pois eu não quero deletar ninguem
console.log(pilotos);

pilotos.splice(3, 1); //remove a partir do indice 3 um elemento
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(3); // A partir do indice 2 ele pega os itens e forma um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // A partir do indice 1 ele cria um novo array com os indices 1 até o indice 4 porém excluindo o 4
console.log(algunsPilotos2);