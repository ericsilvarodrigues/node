// Atividade 3 - Criança Esperança

const read = require('readline-sync')
const colors = require('colors')

console.log("===== Criança Esperança =====")
console.log("[1] para doar R$ 10,00")
console.log("[2] para doar R$ 25,00")
console.log("[3] para doar R$ 50,00")
console.log("[4] para doar outros valores")
console.log("[5] para cancelar")

//Variáveis

let opcao = Number(read.question("Selecione uma opção: ").replace(",","."))
let um = 10
let dois = 25
let tres = 50 
let quatro = Number(read.question("Qual seria o outro valor a doar ?").replace(",","."))
let cinco = 0

//Processamentos
if(1){
  console.log( 10,00)
} else if (2){  
  console.log( 25.00)
} else if (3){
  console.log( 50.00)
} else if(4){
  console.log(`${quatro}`)
} else if(5){
  console.log(0)
}


