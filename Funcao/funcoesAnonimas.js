const soma = function (x, y) {//funcao anonima não tem nome
    return x + y
}
//funcao acima é anonima e recebe dois parametros e o seu retorno é a soma de ambos

//função anonima abaixo é armazenada em uma variavel do tipo const,ela receb três parametros, a, b e operação soma(caso a operação não seja usada ela assumi a const soma acima)  
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirResultado(3, 4)//imprime 7,  pois o parametro passado é somado atraves da função soma que é assumida atraves de operação

//passanod ua function para dentro de outra function
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})//imprime -1


imprimirResultado(3, 4, (x, y) => x * y)//arrow function é sempre anonima, imprime 12

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()