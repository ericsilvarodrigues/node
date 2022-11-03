/**
 * Cálculo de Porcentagem
 */

const read = require('readline-sync')
const colors = require('colors')

//variáveis 

console.log("===== Cálculo da Porcentagem =====")
let x = Number(read.question("Digite o valor de X: ").replace(",","."))
let y = Number(read.question("Digite o valor de Y: ").replace(",","."))

//processamento
let valor = (x* y) /100

//saída 
console.log(`Valor:${valor}`)




