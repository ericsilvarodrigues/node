/**
 * Cálculador do Preço de Venda
 */

const read = require('readline-sync')
const colors = require('colors')

let custo = Number(read.question("Qual o preco do produto? ").replace(",","."))
    console.log(`Custo: ${custo} `.red)

let lucro = Number(read.question("Margem de lucro? ").replace(",","."))
    console.log(`Lucro(%): ${lucro}`.yellow)

//processamento
let venda = custo + (custo * lucro) /100

//saída 
    console.log(`Preço de venda: ${venda}`.green)

