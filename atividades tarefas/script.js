/*
1: Fazer o js criar as div;
2: Transformar o que ta no input em objetos do JSON
3: Colocar eles na div criada
*/

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("tarefa");
    const botao = document.getElementById("criar");
    const containerTarefas = document.getElementById("containerTarefas");
    const img = document.getElementById("img")

    function criarDivTarefa(descricao) {
        img.remove()
        var divTarefa = document.createElement("div");
        divTarefa.textContent = descricao;
        divTarefa.style.width = "100%"
        divTarefa.style.height = "10vh"
        divTarefa.style.margin = "5%"
        divTarefa.style.borderRadius = "10px"
        divTarefa.style.display = "flex"
        divTarefa.style.alignItems = "center"
        divTarefa.style.justifyContent = "space-around"
        divTarefa.style.backgroundColor = "var(--cor-cinza)"
        divTarefa.style.color = "var(--cor-branco)"
        return divTarefa;
    }

    function adicionarTarefa(descricao) {
        var divTarefa = criarDivTarefa(descricao);
        containerTarefas.appendChild(divTarefa);
    }

    botao.addEventListener("click", function(event) {
        event.preventDefault(); 

        var descricao = input.value.trim(); 
        if (descricao !== "") {
            adicionarTarefa(descricao);
            input.value = ""; 
        }
    });
});
