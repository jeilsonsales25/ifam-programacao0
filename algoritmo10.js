/*Crie um código que pergunte a nota em n disciplinas e faça a média. Informe se o
estudante estaria aprovado de módulo caso, a média geral fosse maior ou igual a seis.*/
let quantidade = parseInt(prompt("Quantos disciplinas?"))
const numeros = []
let media = soma(numeros)/ quantidade 
for (let i=0; i<quantidade; i++){
    numeros[i] = prompt()
    if(media>=6){
        alert("aprovado")
    }else
        alert(reprovado)
}
