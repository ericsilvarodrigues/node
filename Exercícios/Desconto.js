/** 
 * Cálculando o valor do desconto 
 */

const read = require('readline-sync')
const colors = require('colors')

//Variáveis 

let total = Number(read.question("Qual o valor da compra? ").replace(",","."))
    console.log(`Valor da compra: ${total}`.yellow)
let desconto = Number(read.question("Digite o valor do desconto? ").replace(",","."))
    console.log(`Desconto: ${desconto}`.blue)
//processamento 

let totalDesconto = total -(desconto * (total) /100)

//saída
   console.log(`Total de desconto: ${totalDesconto}`.green)


