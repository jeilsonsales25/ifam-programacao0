/*1 Faça um programa que lê n números inteiros do teclado e armazene em um vetor. Ao
final imprima o vetor.*/
let quantidade = parseInt(prompt("Quantos numeros?"))
var inteiros = 0 
const numeros = []

for (let i=0; i<quantidade; i++)
  numeros[i] = prompt()

document.writeln(`Numeros: ${numeros}`)