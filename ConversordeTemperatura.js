/**
 * Conversor de Fahrenheit para Celsius
 */

const read = require(`readline-sync`)
const colors = require(`colors`)

//Variáveis 

let Fahrenheit = Number(read.question("Qual a temperatura em Fahrenheit ?").replace(",","."))

//processamento
let Celsius = (Fahrenheit - 32) /1.8

//saída
console.log(`A temperatura em Celsius: ${Celsius}`)
