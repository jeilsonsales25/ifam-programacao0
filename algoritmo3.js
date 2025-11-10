/*Escreva um algoritmo que leia e mostre um vetor de n elementos inteiros. a seguir,
conte quantos valores pares existem no vetor.*/
let quantidade = parseInt(prompt("Quantos números?"))
var pares = 0, impares = 0 
const numeros = []
 
for (let i=0; i<quantidade; i++){
    numeros[i] = prompt()
    if(numeros[i] % 2 == 0)
        pares++
}

document.writeln(`<br>Quantidade de números pares: ${pares}`)