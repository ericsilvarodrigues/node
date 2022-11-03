/**
 * Cálculo do Etanol vs Gasolina
 */

const read = require('readline-sync')
const colors = require('Colors')

//Variáveis
let Etanol = Number(read.question("Qual o preco do etanol ?").replace(",","."))
    console.log(`Preço do Etanol: ${Etanol} `)
let Gasolina = Number(read.question("Qual o preco da gasolina ? ").replace(",","."))
    console.log(`Preço da Gasolina: ${Gasolina}`)

//Processamento
let porcentagem = Etanol / Gasolina
if(Etanol / Gasolina < 0.71){
    console.log("Abasteça com Etanol".rainbow)
} else {
    console.log("Abasteça com Gasolina".blue)
}
