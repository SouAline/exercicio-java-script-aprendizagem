//estrategia para gerar valor padrão
function soma1(a, b, c) { // função para imprimir a soma quando os paramentros não forem as letras a, b, c
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1()) // imprime 3
console.log(soma1(3)) // imprime 5
console.log(soma1(1, 2, 3)) // imprime 6
console.log(soma1(0, 0, 0)) // imprime 3 -> que é a soma do valor setado caso não receba as letras e valores abaixo de 1

//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1//operador ternario do if 
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
//se a for diferente de undefined ele rebe o valor de a, se não, a recebe 1
//dentro de arguments existem o valor 1, se sim pegue esse valor, se não b recebe 1
//se a variavel c for igual a NaN retorne o valor padrao 1 se não retorne o valor de  
console.log(soma2()) // imprime 3
console.log(soma2(3)) // imprime 5
console.log(soma2(1, 2, 3))//imprime 6
console.log(soma2(0, 0, 0))// imprime zero

//valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3())//imprime 3
console.log(soma3(3))//imprime 5
console.log(soma3(1, 2, 3))//imprime 6
console.log(soma3(0, 0, 0))//imprime 0