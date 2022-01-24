//pessoa -> 123{...}
const pessoa = { nome: "João" };
Object.freeze(pessoa); // nesse caso eu não consigo mais alterar o atributo nome do objeto pessoa

const pessoaConstante = Object.freeze({ nome: "Maria" });
console.log(pessoaConstante);

pessoaConstante.nome = "joao"; // Não vai alterar pois o atributo do seu objeto foi congelado anteriormente

const pessoaConstante2 = { nome: "Ana" };
pessoaConstante2.idade = 35; // adiciona atributo idade ao objeto
console.log(pessoaConstante2);
pessoaConstante2.nome = "Eliana"; // não dá erro mas não altera o nome visto que o objeto é uma constante
