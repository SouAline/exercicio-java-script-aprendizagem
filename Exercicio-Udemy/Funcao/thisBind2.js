function pessoa() {
    this.idade = 0
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new pessoa // imprime NaN 
//Quem esta disparando a função é um temporizador e não o obj pessoa

function pessoa1() {
    this.idade = 0
    setInterval(function () {
        this.idade++//incrementa o 0 em + um
        console.log(this.idade)
    }.bind(this), 1000)
}
new pessoa1 // imprime a sequencia de numeros