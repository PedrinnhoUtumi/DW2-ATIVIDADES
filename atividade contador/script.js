const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let texto = ""
let tipoCont = "caracteres"
let contador = 0
let totalPalavra = ""

function handleBtnContar(evento) {
    if (tipoCont == "palavras") {
        evento.target.innerText = "Contar Caracteres"
        tipoCont = "caracteres"
    } else {
        evento.target.innerText = "Contar Palavras"
        tipoCont = "palavras"
    }
}

function handleInputTexto(evento) { // Fazer outro
    contar(evento)   
    atualizarTela()
}

function contar(evento) {
    texto = evento.target.value
    if (tipoCont == "caracteres"){
        contador = texto.length        
    } else if (inputTexto.innerText == "") {
        contador = texto.split(" ").length
    }
}

function atualizarTela(){
    if (tipoCont == "palavras") {
        divContador.innerText = `${contador} palavras`
    } else {
        divContador.innerText = `${contador} caracteres`
    }
}

btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", handleInputTexto)