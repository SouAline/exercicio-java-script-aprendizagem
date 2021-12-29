const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()//gera problema, conflito entre OO e funcional

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//bind() amarra um determinado obj para ele ser o dono da executa quando aquele metodo for chamado, com o uso dessa função bind() o this sempre será chamado, o bind chama outra função que faz essa amarração. o bind sempre aonta para o this