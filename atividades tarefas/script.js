const input = document.getElementById("tarefa");
const botao = document.getElementById("criar");
const containerTarefas = document.getElementById("containerTarefas");
const img = document.getElementById("img")
const tarcriada = document.getElementById("tarcriada")
const tarconcluida = document.getElementById("tarconcluida")

let lista = []
let listaconcluidas = []

function criarDivTarefa(descricao) {
    let divTarefa = document.createElement("div")
    divTarefa.classList.add("divtarefa")
    divTarefa.innerHTML = `
            <div id="tar">
                <input type="checkbox" id="check" name="check"> ${descricao}            
            </div>
        `
    let check = divTarefa.querySelector("#check")
    check.addEventListener("change", function () {
        if (check.checked) {
            listaconcluidas.push(descricao)
            lista.pop()
            divTarefa.style.textDecoration = "line-through"
            tarconcluida.innerText = `Tarefas concluídas ${listaconcluidas.length}`
            tarcriada.innerText = `Tarefas criadas ${lista.length}`
        } else {
            lista.push(descricao)
            
            listaconcluidas.pop()
            divTarefa.style.textDecoration = "none"
            tarconcluida.innerText = `Tarefas concluídas ${listaconcluidas.length}`
            tarcriada.innerText = `Tarefas criadas ${lista.length}`
        }
    });
    let lixo = document.createElement('img')
    lixo.src = "hover=false, type=delete.png"
    lixo.style.cursor = "pointer"
    lixo.addEventListener("click", function (event) {
        if (check.checked) {
            divTarefa.remove()
            listaconcluidas.pop()
            tarconcluida.innerText = `Tarefas concluídas ${listaconcluidas.length}`
            verificarImagem()
        } else {
            divTarefa.remove()
            lista.pop()
            tarcriada.innerText = `Tarefas criadas ${lista.length}`
            verificarImagem()
        }
    })
    img.remove()
    divTarefa.appendChild(lixo)
    return divTarefa
}

function adicionarTarefa(descricao) {
    var divTarefa = criarDivTarefa(descricao)
    containerTarefas.appendChild(divTarefa)
}

botao.addEventListener("click", function (event) {
    event.preventDefault()
    let descricao = input.value.trim()
    if (descricao !== "") {
        adicionarTarefa(descricao)
        lista.push(descricao)
        tarcriada.innerText = `Tarefas criadas ${lista.length}`
    }
    input.value = ""
})

function verificarImagem() {
    if (lista.length === 0 && listaconcluidas.length === 0) {
        containerTarefas.appendChild(img)
    } else {
        if (img.parentNode) {
            img.parentNode.removeChild(img)
        }
    }
}

botao.addEventListener("click", function send_to_localStorage() {
    localStorage.setItem('itens', JSON.stringify(lista))
})