const saudacao = 'opa' // contexo léxico é o contexo onde seu local foi definida fisicamente no seu codigo

function exec() {
    const saudacao = 'Falaaaa' // contexo lexico 2 
    return saudacao
}

//objeto são grupos aninhados de chave e valor
const cliente = {
    nome: 'Pedro',
    idade: 33,
    peso: 90,
    endereço: {
        logradouro: 'Rua blablabla',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec)
