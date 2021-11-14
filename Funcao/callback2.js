const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//sem usar callback
let notasBaixas = []//recebe array vazio
for (let i in notas) {//para cada indice dentro de notas
    if (notas[i] < 7) {//se notas dentro do indice for menor que 7
        notasBaixas.push(notas[i])//notas baixas recebe a nota que esta no indice
    }
} console.log(notasBaixas)//imprime [ 6.5, 5.2, 3.6 ]

//com callback(dentro do filter é o callback de fato)

notasBaixas2 = notas.filter(function (nota) {
    return nota < 7//se a nota for menor que 7 a nota estara no array final
})//o array inicial não é alterado
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota > 7)
console.log("Exemplo 3 -->" + notasBaixas3)