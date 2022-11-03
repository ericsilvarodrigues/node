const read = require('readline-sync')
const colors = require('colors')

//Variàveis

let remuneração = Number(read.question("Quanto deseja receber por mes ? ").replace(",","."))
    console.log(`Remuneração: ${remuneração}`.blue)
let custoperacional = Number(read.question("Qual sera o custo operacional ? ").replace(",","."))
    console.log(`Custo Operacional: ${custoperacional}`.bgRed)
let cargaHoraria = Number(read.question("Quantas horas voce deseja trabalhar ? ").replace(",","."))

//processamento 
let reserva = (30 * remuneração) /100
    console.log(`Reserva de 30%: ${reserva}`.green)
let investimento = (20 * remuneração) /100
    console.log(`Investimento de 20%: ${investimento}`.yellow)
let HoraTecnica = (remuneração + custoperacional + reserva + investimento) / cargaHoraria
    
//Saída 
    console.log(`Carga Horária Mensal: ${HoraTecnica.toFixed(2)}`.rainbow)
