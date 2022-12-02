//Atividade 2

const read = require('readline-sync')
const colors = require('colors')

//Variáveis 

let AnoNascimento = Number(read.question("Qual o seu ano de nascimento ?").replace(",","."))
let AnoAtual = Number(read.question("Difite o ano atual ?").replace(",","."))

//Processamento

let idade = (AnoAtual-AnoNascimento) 
console.log(`Sua idade é de ${idade} anos`)

let semanas =( idade*12*4)
console.log(`Sua idade em semanas sera ${semanas}`)

