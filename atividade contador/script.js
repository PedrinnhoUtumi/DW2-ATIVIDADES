const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let tipoCont = "caracteres"

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
    if (tipoCont == "palavras") {
        evento.target.innerText = "Contar Caracteres"
        tipoCont = "caracteres"
    } else {
        evento.target.innerText = "Contar Palavras"
        tipoCont = "palavras"
    }
}

btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input", handleInputTexto)