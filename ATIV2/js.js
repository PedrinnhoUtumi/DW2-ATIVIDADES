var origem = document.getElementById('moeda_origem').value.toLowerCase()
var destino = document.getElementById('moeda_destino')
var qntde = document.getElementById('quantidade')
var resultado = document.getElementById('resultado')

function calcula(){
    if (origem.value != 'real'){
        alert('Impossível calcular')
    } else { 
    if(destino.value == 'euro'){
        var euros = 5.43
        var dinheiro = qntde.value / euros
        resultado.textContent = 'euros: ' + dinheiro
    } else {
        var dolares = 4.99
        var dol = qntde.value / dolares
        resultado.textContent = 'dolar: ' + dol
    }}
}