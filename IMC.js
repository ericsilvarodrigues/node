/**
 * Cálculo do IMC
 */

const read = require('readline-sync')
const colors = require('colors')

//variáveis 

console.log("===== Cálculo do IMC =====")
let peso  = Number(read.question("Qual o seu peso? ").replace(",","."))
let altura = Number(read.question("Qual a sua altura? ").replace(",","."))
//processamento
let imc = peso / (altura * altura)
//saída
console.log(`imc : ${imc.toFixed(2)}`)

if(imc < 18.5){
    console.log("Abaixo do peso".green)
} else if(imc < 25){
    console.log("Peso Ideal".blue)
} else if(imc < 30){
    console.log("Levemente acima do peso".yellow)
} else if(imc < 35){
    console.log("Obesidade de 1 grau".magenta)
}

if(imc < 40){
    console.log("Obesidade de 2 grau".red)
} else{
    console.log("Obseidade de 3 grau".bgRed)
}



