/**
 * Cálculo da Média
 */

const read = require('readline-sync')
const colors = require('colors')

//Variáveis
let nota1 = Number(read.question("Digite a nota1: ").replace(",","."))
let nota2 = Number(read.question("Digite a nota2: ").replace(",","."))

//Processamento
let media = (nota1 + nota2) /2
    console.log(`Média: ${media}`)

if(media < 2) 





