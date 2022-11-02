/**
 * Strings
 */

const professor = "José de Assis"
//indice           0123456789...
console.log(typeof(professor))
console.log(professor)
//Obtendo o valor de um caractere da string
console.log(professor.charAt(5))
//Para obter o valor do índice de uma string
console.log(professor.indexOf("é"))  
//Obter uma sequência à partir do índice
console.log(professor.substring(8))
//É possível alterar o conteúdo da string   
console.log(professor.replace("José", "Zé"))//(Original,novo)
//Dica: replace(",",".")

/**** Concatenação ****/
const x = 2
const y = Number("3")//converter uma string em um número
console.log(typeof(x))
console.log(typeof(y))
console.log("Valor de x:" + x)  
console.log("2" + x)//concatena   
console.log("3" - x)// subtrai (o mesmo para */)
console.log("Professor: " + professor)
//evitra o uso do + na concatenação
//para concatenar usar crases ``
console.log(`professor: ${professor}`)
