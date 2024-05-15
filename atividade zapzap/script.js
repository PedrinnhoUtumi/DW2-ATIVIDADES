const telefoneRegex = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/;
const sara = document.getElementById("bt-icon")
const sara2 = document.getElementById("bt-icon2")
const sara3 = document.getElementById("copiar")


function check_number() {
    const number = document.getElementById('numero')
    if (telefoneRegex.test(number.value)) { 
        number.classList.add('correct')
        number.classList.remove('error')
        console.log("vc")
    }else {
        number.classList.add('error')
        number.classList.remove('correct')
        console.log("eu")
    }
}   

function create_link(event){
    if (event.target === sara ){
        sara3.style.display = "flex"
        console.log("arrasei")
    }
}

document.getElementById('bt-icon').addEventListener('click', check_number);
document.getElementById('bt-icon2').addEventListener('click', check_number);
