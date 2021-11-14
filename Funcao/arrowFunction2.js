function pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++ //*incrementa a idade em +1 pois idade recebeu zero
        console.log(this.idade)
    }, 1000) //temporizador do intervalo é 1s
}

new pessoa