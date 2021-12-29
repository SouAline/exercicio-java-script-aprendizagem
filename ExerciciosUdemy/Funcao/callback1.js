//Callback nada mais é do que passar uma função onde essa função será chamada quando um evento acontecer. No exemplo abaixo é um loop.

const fabricantes = ["Mercedes", "Audi", "BMW"]//array de fabricantes
function imprimir(nome, indice) {//função com dois parametros
    console.log(`${indice + 1}.${nome}`)//impressão de 1.Mercedes...
}//obs:indice + 1 pois o indice de um array começa em zero

fabricantes.forEach(imprimir)//como fabricantes é um array eu posso utilizar a função forEach percorrendo os indices e imprimindo um a um 

//abaixo: a função forEach recebe somente um parametro que poderia ter qualquer nome e após ele imprime. Como é recebido somente um parametro ele tras somente o que esta armazenado na const acima (os nomes dos fabricantes) 
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)//imprime Mercedes, Audi, BMW
})

//Transformando em arrow
fabricantes.forEach(fabricante => console.log(fabricante))//imprime Mercedes, Audi, BMW
