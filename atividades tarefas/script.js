/*
1: Fazer o js criar as div;
2: Transformar o que ta no input em objetos do JSON
3: Colocar eles na div criada
*/

const input = document.getElementById("tarefa");
const botao = document.getElementById("criar");
const containerTarefas = document.getElementById("containerTarefas");
const img = document.getElementById("img")
const tarcriada = document.getElementById("tarcriada")
const tarconcluida = document.getElementById("tarconcluida")

let lista = []
let listaconcluidas = []

document.addEventListener("DOMContentLoaded", function() {
    function criarDivTarefa(descricao) {
        let divTarefa = document.createElement("div")
        divTarefa.classList.add("divtarefa") 
        divTarefa.innerHTML= `
            <div id="tar">
                <input type="checkbox" id="check" name="check"> ${descricao}            
            </div>
        `
        let check = document.getElementById("check")
        console.log(check)
        let lixo = document.createElement('img')
        lixo.src = "hover=false, type=delete.png"
        lixo.style.cursor = "pointer"
        lixo.addEventListener("click", function(event){
            divTarefa.remove()
            lista.pop()
            tarcriada.innerText = `Tarefas criadas ${lista.length}`
            console.log("sdadadasdsadsa")
        })
        img.remove()
        divTarefa.appendChild(lixo)
        return divTarefa
    }

    function adicionarTarefa(descricao) {
        var divTarefa = criarDivTarefa(descricao)
        containerTarefas.appendChild(divTarefa)
    }

    botao.addEventListener("click", function(event) {
        event.preventDefault()
        let descricao = input.value.trim() 
        if (descricao !== "") {
            adicionarTarefa(descricao)
            lista.push(descricao)
            tarcriada.innerText = `Tarefas criadas ${lista.length}`
        }
        input.value = ""
    })

    document.addEventListener("click", function(event){
        if (lista.length == 0) {
            containerTarefas.appendChild(img)
        }
    })
})
