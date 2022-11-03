/**
 * Cálculadora Conversora de Dolar para Real 
 */

const read = require('readline-sync')
const colors = require('colors')

//Variáveis

let ValoremDolar = Number(read.question("Qual o valor em Dolar deseja converter ? ").replace(",","."))

//Processamento
let ValorConvetido = 5.11 * ValoremDolar

//Saída
    console.log(`Valor convertido em Real: R$ ${ValorConvetido}`.rainbow)








