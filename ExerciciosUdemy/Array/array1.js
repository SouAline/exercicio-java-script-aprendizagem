let aprovados = new Array("Bia", "Carlos", "Ana"); //como array é um objeto voce pode instanciar
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Anna"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); //Aqui ele mostra undefined

aprovados[3] = "Paulo"; // substitui um elemento no indice indicado
aprovados.push("Abia");
console.log(aprovados.length);
aprovados[9] = "Joao"; // inclui o indice 9 com o Joao e os indices anteriores e não existe o js ele deixa vazio
console.log(aprovados);
aprovados.sort(); //altera a ordem do array
console.log(aprovados);
delete aprovados[1]; //coloca undefined no indice 1
console.log(aprovados[1]);

aprovados = ["aline", "marcia", "joao", "Frederico", "mariana", "francesca"];
aprovados.splice(1, 1); //deleta a partir do indice 1,  1 elementos
console.log(aprovados);
aprovados = ["aline", "marcia", "joao", "Frederico", "mariana", "francesca"];
aprovados.splice(1, 2, "Adicionando 1", "Adicionando 2", "Adiconando 3"); //a partir do indice 1 ele exclui 2 elementos e adiciona os restante alterando seus indices
console.log(aprovados);
console.log(aprovados[4]);
