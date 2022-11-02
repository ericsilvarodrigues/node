/**
 * Números
 */

const peso = 62.0 //62,0 gera um BUG
console.log(typeof(peso))
const altura = 1.77
console.log(typeof(peso))
console.log(typeof(altura))
//dica para saber se o número é inteiro 
console.log(Number.isInteger(peso)) //True ou False
console.log(Number.isInteger(altura)) //True ou False

const imc = peso /( altura*altura)
console.log(`iMC: ${imc.toFixed(2)}`) //tofixed(2)

//ATENÇÃO 
console.log(10/2)
console.log("10"/"m") //NaN (Not Number)
console.log(0.1+0.2)
console.log(0.1+0.7)
console.log(0.2+0.3)