/*Crie uma lista com n números, some os elementos das posições ÍMPARES e mostre o
resultado*/
let quantidade = parseInt(prompt("Quantos números?"))
let somaImpares = 0
const numeros = []

for (let i = 0; i < quantidade; i++){
    numeros[i] = prompt()
    if(numeros[i] % 2 !== 0)
    somaImpares += quantidade
   // else
        //impares++
}

document.writeln(`<br>Soma dos números ímpares: ${somaImpares}`)
