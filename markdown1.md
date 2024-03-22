# Tipos de Dados

## O que são?
Dados são, basicamente, informações que podem ser coletadas e/ou armazenadas.

## Tipos

### Objeto
São como contêineres que podem armazenar várias informações. Traduzindo para o mundo real, um objeto seria como uma pessoa, teria várias informações como nome, idade, data de nascimento, entre outros. E, assim como no mundo real, cada um é um, ou seja, não podem ter objetos iguais, cada objeto é único.

#### Exemplo
```javascript
let pessoa = {
    nome: "Pedro"
    sobrenome: "Utumi"
    idade: 17
    cidade: "Araruna"
    macho: true
}
console.log(pessoa)
```

### Array
Array é uma estrutura de dados que permite colocar vários elementos em uma única váriavel, assim como as listas, tuplas e dicionários no Python. Pode ser qualquer tipo de dado, além de poder ter vários tipos em uma única variável.

#### Exemplo
```javascript
let pessoa = ["Pedro", "Utumi", 17, "Araruna"]
console.log(pessoa)
```
### Tipos Primitivos

#### Boolean
É um tipo de váriavel que devolve ao programador apenas 2 valores: verdadeiro ou falso(true or false). Normalmente usado em expressões condicionais.

##### Exemplo
```javascript
let dw = true
if (dw) {
    console.log("to triste")
} else {
    console.log("Nunca fui triste nessa vida")
}
```

#### Number 
É um tipo de variável que representa valores numéricos, sejam eles inteiros ou então, quebrados. Normalmente usados em expressões matemáticas.

##### Exemplo
```javascript
let y = 10
let x = 2
console.log(x + y)
```

#### String 
É um tipo de variálet pedro;
console.log(pedro) vel que representa valores escritos, como palavras, frases, entre outros, envolvidos em aspas(simples ou dupla).

##### Exemplo
```javascript
let nome = "Sara"
console.log(nome)
```

#### Undefined
É um tipo de variável que representa a ausência de um valor válido. Ele retorna automaticamente se a váriavel estiver com um valor errado.

##### Exemplo
```javascript
let pedro;
console.log(pedro) 
// saída: undefined, pois não foi definido nenhum valor para a variável
```

#### Null
É um tipo de variável que representa a ausência de valor. Diferentemente de undefined, ele precisa ser explicitamente usado na hora da criação da variável, para indicar que a variável realmente não tem valor.

##### Exemplo 
```javascript
let pedro = null
console.log(pedro) 
```

## Operadores básicos(Retorna True se todas as expressões forem verdadeiras)

### Aritméticos
- Adição -> +
- Subtração -> -
- Multiplicação -> *
- Divisão -> /
- Exponeciação -> **
- Resto de Divisão -> %
- Incremento -> ++ (aumenta o número em 1)
- Decremento -> -- (diminui o número em 1)

```javascript
let x = 10
let y  = 20

// Operações aritméticas
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x ** 2)
console.log(y % x)
console.log(x++)
console.log(x--)
```

### De Comparação
- Igual -> == (Permite conversão de tipos)
- Diferente -> != (Permite conversão de tipos)
- Maior ou Maior Igual -> > ou >=
- Menor ou Menor Igual -> < ou <=
- Igual Estrito -> === (Não permite conversão de tipos)
- Diferente Estrito -> !== (Não permite conversão de tipos)

```javascript
console.log('5' == 5) // true
console.log(3 != 4) // true
console.log(5 > 4) // true
console.log(5 >= 5) // true
console.log(2 < 9) // true
console.log(2 <= 2) // true
console.log('5' === 5) // false
console.log('5' !== 5) // true
```

### Lógicos
- E Lógico -> && (Retorna True se todas as expressões forem verdadeiras)
- OU Lógico -> || (Retorna True se pelo menos uma das expressões for verdadeira)
- NÃO Lógico -> ! (Inverte o valor da expressão booleana)

```javascript
console.log(true && true)
console.log(true || false)
console.log(!true)
```

### Typeof
Ele devolve uma string com o tipo de dados da expressão fornecida 

```javascript
let x = 2
console.log(typeof x)
```