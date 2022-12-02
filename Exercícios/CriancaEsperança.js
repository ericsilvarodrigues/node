// Atividade 3 - Criança Esperança

const read = require('readline-sync')
const colors = require('colors')

//Variáveis

console.log("===== Criança Esperança =====")
console.log("[1] para doar R$ 10,00")
console.log("[2] para doar R$ 25,00")
console.log("[3] para doar R$ 50,00")
console.log("[4] para doar outros valores")
console.log("[5] para cancelar")

let doar = Number(read.question("Selecione o número para doar o valor desejado").replace(",","."))

