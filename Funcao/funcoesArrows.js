let dobro = function (a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a //função de uma unica linha deve ser usada assim
//quando se tem somente um parametor pode-se retirar os parenteses do mesmo
//quando se retira o corpo da funçao se tem o retorno implicito
console.log(dobro(Math.PI))

let ola = function () { //se colocar o bloco {} deve-se colocar o return
    return 'Olá'
}
ola = () => 'Olá'
console.log(ola())