/**
 * Proibido Votar ou não 
 */

 const read = require("readline-sync")
 const colors = require("colors")
 
 //variáveis
 let idade = Number(read.question("Qual a sua idade ? ").replace(",","."))
 
 //processamento
 if(idade < 17){
     console.log("Menor de idade".blue)
 }else if(idade > 17 & idade < 71){
     console.log("VOTO OBRIGATÓRIO!".red)
 }else{
     console.log("VOTO FACULTATIVO".yellow)
 }
     
 
 
 