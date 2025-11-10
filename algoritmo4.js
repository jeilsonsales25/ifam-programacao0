/*4 Escreva um algoritmo que leia dois vetores de 10 posições e faça a multiplicação dos
elementos de mesmo índice, colocando o resultado em um terceiro vetor. Mostre o
vetor resultante*/
let quantidade = parseInt(prompt("Quantos números?"))
var numero1 = 0, numero2 = 0 
const numeros = []
 
for (let i=0; i<quantidade; i++){
    numeros[i] = prompt()
    if(numero1*numero2 == 0)
        numero1++
    else
        numero2++
}

document.writeln(`${numero1} x ${numero2} = ${numero1*numero2}`)