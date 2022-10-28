/**
 * Fundamentos do JS
*/

//A linguagem JS trabalha com sentenças
//; é opcional
//Você pode usar '' ou "" mas não pode usar "' (ambos deve ser iguais)
console.log ("Hello JS")
//Linguagem JS também trabalha com blocos 
{
    console.log("Bloco")
}

//Variáveis no JS não são tipadas
//var let const (são usados para alocação de memória)

var nome = "Eric"
var idade = 20
var vip = true
console.log("Nome:"+ nome)
console.log("Tipo de variável:" + typeof(nome))
console.log ("idade:" + idade)
console.log("Tipo de variável:" + typeof(idade))
console.log("Vip:" + vip)
console.log("Tipo de variável:"+ typeof(vip))

//------------------------------------------------------
// problemas no uso do var para declarar uma variável
var teste ="hello" //criar uma variável 
teste = "Olá mundo" //Alterar variável
var teste = "BUG1"  // redeclarar a variável (não pode)
console.log(teste)

//let resolve esse problema 
let teste2 = "Hello2" //criar uma variável
teste2 = "Olá mundo 2"
//let teste2 = "BUG2" //o let protege a variável não permitindo a criação de
//uma segunda variável com o mesmo nome
console.log(teste2)

//constante 
const pi = 3.1415
//pi = 2 //constante não pode ser alterada
console.log("Valor de PI:" + pi)





