/*
1: Fazer o js criar as div;
2: Transformar o que ta no input em objetos do JSON
3: Colocar eles na div criada
*/

const input = document.getElementById("tarefa");
const botao = document.getElementById("criar");
const containerTarefas = document.getElementById("containerTarefas");
const img = document.getElementById("img")
const checkbox = document.getElementById("checkbox")
const tarcriada = document.getElementById("tarcriada")
const tarconcluida = document.getElementById("tarconcluida")

let lista = []
let listaconcluidas = []

document.addEventListener("DOMContentLoaded", function() {

    function criarDivTarefa(descricao) {
        let lixo = document.createElement('img')
        lixo.src = "hover=false, type=delete.png"
        img.remove()
        var divTarefa = document.createElement("div")
        checkbox.style.visibility = "visible"
        divTarefa.appendChild(checkbox) 
        divTarefa.textContent = descricao
        divTarefa.appendChild(lixo)
        divTarefa.style.width = "50vw"
        divTarefa.style.height = "10vh"
        divTarefa.style.marginBottom = "1%"
        divTarefa.style.borderRadius = "10px"
        divTarefa.style.display = "flex"
        divTarefa.style.alignItems = "center"
        divTarefa.style.justifyContent = "space-around"
        divTarefa.style.backgroundColor = "var(--cor-cinza)"
        divTarefa.style.color = "var(--cor-branco)"
        return divTarefa
    }

    function adicionarTarefa(descricao) {
        var divTarefa = criarDivTarefa(descricao);
        containerTarefas.appendChild(divTarefa);
    }

    botao.addEventListener("click", function(event) {
        event.preventDefault(); 

        let descricao = input.value.trim(); 
        if (descricao !== "") {
            adicionarTarefa(descricao);
            lista.push(descricao)

            
            tarcriada.innerText = `Tarefas criadas ${lista.length}`
        }
        input.value = ""
    });
    document.addEventListener("click", function(event){
        if (lista.length == 0) {
            containerTarefas.appendChild(img)
        }
    })
    // containerTarefas.addEventListener("click", function(event){
    //     if (divTarefa != ""){
    //         let i = 0
    //         i += 1
    //         containerTarefas.style.cursor = "pointer"
    //         containerTarefas.textContent = ""
    //         containerTarefas.appendChild(img)
    //         listaconcluidas.push(i)
    //         tarconcluida.innerText = `Tarefas concluidas ${listaconcluidas.length}`

    //     }

    // })
});


