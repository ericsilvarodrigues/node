/**
 * Cálculadora Conversora de Dolar para Real 
 */

const read = require('readline-sync')
const colors = require('colors')

//Variáveis

let ValoremReal= Number(read.question("Qual o valor em Real deseja converter ? R$ ").replace(",","."))

//Processamento
let ValorConvetido = ValoremReal /5.36


//Saída
    console.log(`Valor convertido em Real: USD$ ${ValorConvetido.toFixed(2)}`.rainbow)








