const telefoneRegex = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/;
const other_Regex = /\d{11}/
const criar = document.getElementById("bt-icon")
const enviar = document.getElementById("bt-icon2")
const copia_div = document.getElementById("copiar")
const number = document.getElementById('numero')
const span_click = document.getElementById('click')

number.addEventListener('input', () => {
    const maxLength = 15;
    if (number.value.length > maxLength) {
        number.value = number.value.slice(0, maxLength);
    }
});

function check_number() {
    if (telefoneRegex.test(number.value) || other_Regex.test(number.value)) {
        number.classList.add('correct')
        number.classList.remove('error')
        return true
    } else {
        number.classList.add('error')
        number.classList.remove('correct')
        return false
    }
}

function create_link(event) {
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
    const link_copiar = `https://wa.me/${numeros}`
    if (event.target === criar || check_number()) {
        copia_div.style.display = "flex"
        span_click.style.display = "flex"
        copia_div.innerText = link_copiar
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
criar.addEventListener('click', create_link)
enviar.addEventListener('click', create_link)
copia_div.addEventListener('click', copy)
enviar.addEventListener('click', () => {
    window.location.href = copia_div.innerText
})