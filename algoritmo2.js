/*2 Dada uma sequência de n números, imprimi-la na ordem inversa à da leitura*/
let quantidade = parseInt(prompt("Quantos números?"))
var inteiros = 0 
const numeros = []

for (let i=0; i<quantidade; i++)
  numeros[i] = prompt()
numeros.reverse()
document.writeln(`Numeros: ${numeros}`)