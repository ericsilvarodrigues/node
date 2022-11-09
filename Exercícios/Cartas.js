/**
 * Exemplo de uso do vetor 
 */
//              0       1        2       3
let nipes = ["Ouros","Copas","Espadas","Paus"]
//            0   1 2 3 4 5 6 7 8 9     10      11     12
let faces = ["Az",2,3,4,5,6,7,8,9,10,"Valete","Dama","Rei"]

//Recuperando a carta Az de ouros 
console.log(`Carta: ${faces[0]} de ${nipes[0]}`)

//Recuperando a carta Dama de Copas
console.log(`Carta: ${faces[11]} de ${nipes[1]}`)

//Sorteio de um carta 
//Math.random -> gerador de número aleátorios
//Math.floor -> converter para números inteiros
let sorteioNipe = Math.floor(Math.random() * 4)
let sorteioFace = Math.floor(Math.random() * faces.length)
console.log(`Carta Sorteada: ${faces[sorteioFace]} de ${nipes[sorteioNipe]}`)


