/**
 * Cálculadora de Imposto
 */

const read = require('readline-sync')
const colors = require('colors')

//Variáveis 

let produto = Number(read.question("Qual o valor em do produto? ").replace(",","."))


//Procesamento

let valorComImposto = (produto * 0.30) + produto

//Saida
console.log(`Valor do produto: ${produto}`.blue)
console.log(`Valor total com o imposto de 30%: ${valorComImposto}`.green)

