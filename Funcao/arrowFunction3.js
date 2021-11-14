let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)//imprime false
comparaComThisArrow(module.exports)//imprime true

comparaComThisArrow = comparaComThisArrow.bind(obj)//mesmo com bind ele não aponta p/ outro
comparaComThisArrow(obj) //imprime false
comparaComThisArrow(module.exports)//imprime true