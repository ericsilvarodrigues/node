// Atividade 1 //

const read = require('readline-sync')
const colors = require('colors')

//Variáveis

let idade = Number(read.question("Qual a sua idade?").replace(",","."))
 
//Processamento

let meses = (idade * 12)
let dias = (idade * 365)
let horas = (idade *365) * 24
let minutos = idade * 60 *24*365


console.log(`Essa sera sua idade em 12 meses ${meses}`)
console.log(`Essa sera sua idade em 365 dias ${dias}`)
console.log(`Essa sera sua idade em horas  ${horas}`)
console.log(`Essa sera sua idade em minutos ${minutos}`)



