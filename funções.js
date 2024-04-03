//FUNÇÃO NORMAL
function soma(a, b) {
    let tot = a + b
    return tot
}
console.log(soma(10, 20))

//FUNÇÃO DENTRO DE VARIÁVEL
const funcaosoma = function (a, b) {
    return a + b
}
console.log(funcaosoma(50, 50))

//FUNÇÃO ARROW
const funcaomultiplicacao = (a, b) => a * b
console.log(funcaomultiplicacao(2, 19))


function operacao(a, b, op) {
    if (op == "+") {
        return a + b
    } else if (op == "-") {
        return a - b
    } else if (op == "*") {
        return a * b
    } else if (op == "/") {
        return a / b
    } else {
        return undefined
    }
}
console.log(operacao(10, 12, "*"))

function operacao_2(a, b, op){
    let resultado = op(a, b)
    return resultado
}
console.log(operacao_2(10, 12, funcaosoma))