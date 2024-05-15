const telefoneRegex = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/;
const other_test = /\d{11}/
const criar = document.getElementById("bt-icon")
const enviar = document.getElementById("bt-icon2")
const copia_div = document.getElementById("copiar")
const number = document.getElementById('numero')
const span_click = document.getElementById('click')

function check_number() {
    if (telefoneRegex.test(number.value) || other_test.test(number.value)) {
        number.classList.add('correct')
        number.classList.remove('error')
        return true
    } else {
        number.classList.add('error')
        number.classList.remove('correct')
        return false
    }
}
//https://wa.me${variavel}
function create_link(event) {
    if (event.target === criar || check_number()) {
        copia_div.style.display = "flex"
        span_click.style.display = "flex"
    } else {
        copia_div.style.display = "none"
        span_click.style.display = "none"
    }
}

number.addEventListener('input', check_number);
criar.addEventListener('click', create_link);
enviar.addEventListener('click', create_link);
