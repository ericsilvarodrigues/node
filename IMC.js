/**
 * Cálculo do IMC
 */

const read = require('readline-sync')
const colors = require('colors')

//variáveis 

console.log("===== Cálculo do IMC =====")
let peso  = Number(read.question("Qual o seu peso? ").replace(",","."))
let altura = Number(read.question("Qual a sua altura? ").replace(",","."))
//processamento
let imc = peso / (altura * altura)
//saída
console.log(`imc : ${imc.toFixed(2)}`)


