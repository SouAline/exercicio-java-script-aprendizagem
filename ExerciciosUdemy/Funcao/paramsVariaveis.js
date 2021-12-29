function soma() { // mesmo a função não recebendo parametros você pode passar parametros 
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // imprime zero
console.log(soma(1)) // imprime um
console.log(soma(1.1, 2.1, 3.3))// imprime a soma 
console.log(soma('a', 'b', 'c')) //imprime zero mais a concatenação das letras