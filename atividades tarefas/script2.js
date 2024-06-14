document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("tarefa");
    const botao = document.getElementById("criar");
    const containerTarefas = document.getElementById("containerTarefas");
    const img = document.getElementById("img");
    const tarcriada = document.getElementById("tarcriada");
    const tarconcluida = document.getElementById("tarconcluida");

    let lista = [];
    let listaconcluidas = [];

    function criarDivTarefa(tarefa) {
        let divTarefa = document.createElement("div");
        divTarefa.classList.add("tarefa");

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                marcarComoConcluida(tarefa, divTarefa);
            } else {
                desmarcarComoConcluida(tarefa, divTarefa);
            }
        });

        let tarefaDescricao = document.createElement('span');
        tarefaDescricao.textContent = tarefa.descricao;

        let lixo = document.createElement('img');
        lixo.src = "delete.png";
        lixo.alt = "delete icon";
        lixo.addEventListener('click', function() {
            removerTarefa(tarefa, divTarefa);
        });

        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(tarefaDescricao);
        divTarefa.appendChild(lixo);

        return divTarefa;
    }

    function adicionarTarefa(tarefa) {
        var divTarefa = criarDivTarefa(tarefa);
        containerTarefas.appendChild(divTarefa);
    }

    function marcarComoConcluida(tarefa, divTarefa) {
        divTarefa.classList.add('tarefa-concluida');
        listaconcluidas.push(tarefa);
        tarconcluida.innerText = `Concluídos ${listaconcluidas.length}`;
    }

    function desmarcarComoConcluida(tarefa, divTarefa) {
        divTarefa.classList.remove('tarefa-concluida');
        listaconcluidas = listaconcluidas.filter(item => item.descricao !== tarefa.descricao);
        tarconcluida.innerText = `Concluídos ${listaconcluidas.length}`;
    }

    function removerTarefa(tarefa, divTarefa) {
        containerTarefas.removeChild(divTarefa);
        lista = lista.filter(item => item.descricao !== tarefa.descricao);
        listaconcluidas = listaconcluídas.filter(item => item.descricao !== tarefa.descricao);
        tarcriada.innerText = `Tarefas criadas ${lista.length}`;
        tarconcluida.innerText = `Concluídos ${listaconcluídas.length}`;
    }

    botao.addEventListener("click", function(event) {
        event.preventDefault();

        let descricao = input.value.trim();
        if (descricao !== "") {
            let tarefa = {
                descricao: descricao,
                concluida: false
            };
            adicionarTarefa(tarefa);
            lista.push(tarefa);

            tarcriada.innerText = `Tarefas criadas ${lista.length}`;
        }
        input.value = "";
    });

    document.addEventListener("click", function(event) {
        if (lista.length === 0) {
            containerTarefas.appendChild(img);
        }
    });
});
