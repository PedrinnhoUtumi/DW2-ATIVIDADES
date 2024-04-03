//CRIANDO ARRAY
let v1 = [1, 2, 3]
let v2 = new Array(1, 2, 3)
let v3 = new Array(3)

console.log("v1: ", v1)
console.log("v2: ", v2)
console.log("v3: ", v3)

console.log("v1[1]: ", v1[1])
console.log("v2[1]: ", v2[1])
console.log("v3[1]: ", v3[1])

//INSERÇÃO
v1.push(4)
v1.unshift(0)
v1[10] = 5
console.log(v1)

//REMOÇÃO
v1.shift()
v1.pop()
delete v1[1]
console.log(v1)

//CÓPIA
let copia1 = v2
copia1[0] = 100
console.log("copia: ", copia1)
console.log("v2: ", v2)

let copia2 = [...v1]
copia2[0] = 100
console.log("copia: ", copia2)
console.log("v1: ", v1)

//DESESTRUTURAÇÃO
let v = [1, 2, 3]
let [a, b] = v
console.log("a: ", a)
console.log("b: ", b)

//MÉTODOS
let vetor = [1, 2, 3 , 4, 5]
console.log(vetor)
vetor.reverse()
console.log(vetor)
vetor.fill(2)
console.log(vetor)
let copia = vetor.map((elemento) => elemento - 1)
console.log(copia)