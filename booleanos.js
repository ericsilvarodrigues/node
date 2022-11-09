/**
 * Estudo das Variáveis Booleanas
 */

let sw = false
let lamp = true
//Variáveis 

console.log(typeof(sw))
console.log(sw)
console.log(typeof(lamp))
console.log(lamp)

//No JS é possível usar 0 ou 1 como false Booleano
sw = !!1 //(!0 !1 !!0 !!1
console.log(typeof(sw))
console.log(sw)
//Dica! É possível usar o tipo booleano como uma estrutura de controle condicional 
console.log(sw || "Lâmpada apagada")

