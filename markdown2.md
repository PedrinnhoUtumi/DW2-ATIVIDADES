<h1>VARIÁVEIS</h1>

## O que elas são?
São elementos que irão receber determinados valores, oferecidos ou pelo usuário ou pelo programador

### Var
É um escopo de função ou escopo global, ou seja, se for de função, a variável var só poderá ser usada dentro da função. Caso seja global, podem ser acessadas a qualquer momento dentro do javascript.

### Let
Variável de escopo de bloco local, podendo ser acessada somente dentro do bloco em que foi criada. Um bloco é, basicamente, tudo que há dentro de chaves "{}". Podem ser reatribuidas

### Const
Variável de escopo de bloco também, porém, por ser uma constante, esta não pode ser reatribuida nem redeclarado. Entretanto, elas podem ser atualizadas ou removidas caso a constante seja um objeto ou um array 

## Exemplos

### Var
``` javascript
var origem = document.getElementById('moeda_origem').value.toLowerCase()
var destino = document.getElementById('moeda_destino')
var qntde = document.getElementById('quantidade')
var resultado = document.getElementById('resultado')

// Variáveis acima são de escopo Global
// Variáveis abaixo são de escopo de função

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
 ``` 

### Let
``` javascript
for (let i = 2; i < 23; i++){
    console.log(i)
}
``` 

### Const
``` javascript
const pi = 3.14

function calculaarea(r){
    return pi * r ** 2
}

const r = 7;
const area = calculaarea(r);
console.log('área: ', area)
// Saída
// área: 153.86 
``` 

## Exercício de fixação

### Var
 
#### Dado um array, some os elementos e imprima o resultado

``` javascript
var lista = [1, 2, 3, 4, 5];
var soma = 0;

for (var i = 0; i < lista.length; i++){
    soma += lista[i];
};

console.log("soma dos números: ", soma)
// Saída:
// soma dos números: 15
```

### Let

#### Usando o let keyword, imprima os números de 1 a 5
``` javascript
for (let i = 1; i <= 5; i++){
    console.log(i)
}
// Saída:
// 1, 2, 3, 4, 5
```

### Const

#### Crie uma função para calcular a área de um círculo, usando a constante pi
``` javascript
const pi = 3.14

function calculaarea(r){
    return pi * r ** 2
}

const r = 7;
const area = calculaarea(r);
console.log('área: ', area)
// Saída
// área: 153.86 
```
