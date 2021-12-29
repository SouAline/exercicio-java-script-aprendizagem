//voce pode tratar funcao como sendo dado então voce pode passa uma funcao como parâmetro, pode ter uma função dentro da outra
//criar função de forma literal

function fun1() { }

//armazenar uma função em uma variavel
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar())

//Passar função como parâmetro, também ´e possivel criar função como parametro
function run(fun) {
    fun()
}
run(function () { console.log("Executaando..") })
//Uma função pode retornar/conter uma função

//Temos abaixo uma função que recebe dois parametros, mas ao inves de retornar o resultado ela retona mais uma função que recebe um parâmetro e só ai quando recebe o outro parâmetro é que vai ser invocado e executado.
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)

    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3) // variavel recebe a função soma
cincoMais(4) // aqui a variavel cincoMais é chamada e dentro dela tem a função soma já recebendo dois parametros e dentro dos parenteses entra o parametro da função que esta dentro da função soma.. 
