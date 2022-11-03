/**
 * Aplicativo que diz se é maior ou menor de idade
 */

const read = require("readline-sync")
const colors = require("colors")

//variáveis
let idade = Number(read.question("Qual a sua idade ?").replace(",","."))

//processamento
if(idade < 18){
    console.log("Menor de idade".blue)
}else{
    console.log("Maior de idade".gray)
}

