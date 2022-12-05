// Atividade 3 - Criança Esperança

const read = require('readline-sync')
const colors = require('colors')

console.log("===== Criança Esperança =====")
console.log("[1] para doar R$ 10,00")
console.log("[2] para doar R$ 25,00")
console.log("[3] para doar R$ 50,00")
console.log("[4] para doar outros valores")
console.log("[5] para cancelar")

//Variáveis

let opcao = Number(read.question("Selecione uma opção: ").replace(",","."))
let doacao = 0

//Processamentos

switch(opcao) {
  case 1:
    doacao = 10
  break;
  case 2:
    doacao = 25
  break;
  case 3:
    doacao = 30
  break;
  case 4:
    doacao = Number(read.question("Digite o valor da doação: R$"))
  break;
  case 5:
    doacao = 0
  break;
  default:
    console.log("Sua doação será considerada R$ 0,00")
  break;
    
  console.log("Obrigado pela sua doação !")
  console.log(`Sua doação foi ${doacao}`)
  
  
   
    
    
    
    
    
    
    
    
}
