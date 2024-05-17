const other_Regex = /\d{11}/
const criar = document.getElementById("bt-icon")
const enviar = document.getElementById("bt-icon2")
const copia_div = document.getElementById("copiar")
const number = document.getElementById('numero')
const span_click = document.getElementById('click')

function check_number() {
    if (other_Regex.test(number.value)) {
        number.classList.add('correct')
        number.classList.remove('error')
        return true
    } else {
        number.classList.add('error')
        number.classList.remove('correct')
        return false
    }
}


function create_link() {
    let numeros = ""
    for (let n of number.value) {
        switch (n) {
            case '(':
            case ')':
            case '-':
            case ' ':
                break;
            default:
                numeros += n;
        }
    }
    if (check_number()) {
        const link_copiar = `https://wa.me/${numeros}`
        copia_div.style.display = "flex"
        span_click.style.display = "flex"
        copia_div.innerText = link_copiar
        let format = `(${numeros.substring(0, 2)}) ${numeros.substring(2, 7)}-${numeros.substring(7, 12)}`
        number.value = format
    } else {
        copia_div.style.display = "none"
        span_click.style.display = "none"
    }
}

function copy(){
    navigator.clipboard.writeText(copia_div.innerText)
    span_click.innerText = "Texto copiado para área de transferência"    
}

number.addEventListener('input', check_number)
number.addEventListener('click', () => {
    if (span_click.style.display == "flex" || copia_div.style.display == "flex"){
        span_click.style.display = "none"
        copia_div.style.display = "none"
    }
})
criar.addEventListener('click', create_link)
enviar.addEventListener('click', create_link)
copia_div.addEventListener('click', copy)
enviar.addEventListener('click', () => {
    if (check_number()){
        window.open(copia_div.innerText, "_blank")
    } else {
        alert("digite um número válido")
    }
})