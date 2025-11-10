/*Escreva um programa que calcule e mostre a tabuada (até 10x) de um número
qualquer, digitado pelo usuário. Mostre no vetor somente a multiplicação de n por (*)
i. Exemplo: n = 5 mostre 0,5,10,15,20,25,30,35,40,45,50*/
let valor = parseInt(prompt("DIGITE O VALOR"))
let i = 0
while(i<=10){
    document.writeln(`${valor*i}`)
    i++
}

