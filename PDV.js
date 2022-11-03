/** 
 * Ponto de Vendas
 */

 const read = require('readline-sync')
 const colors = require('colors')
 
 //Variáveis 
 
 let total = Number(read.question("Qual o valor da compra? ").replace(",","."))
     console.log(`Valor da compra: ${total}`.yellow)
 let desconto = Number(read.question("Digite o valor do desconto? ").replace(",","."))
     console.log(`Desconto: ${desconto}`.blue)
 let dinheiro = Number(read.question("Valor pago em dinheiro? ").replace(",","."))
     console.log(`Valor pago em dinheiro: ${dinheiro}`.green)

//processamento
let totalDesconto = total -(desconto * (total) /100)
let troco = dinheiro - totalDesconto

//saída
    console.log(`Total de desconto: ${totalDesconto}`.red)
    console.log(`Troco: ${troco}`.magenta)