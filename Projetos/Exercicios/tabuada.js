/**
 * TABUADA USANDO FOR
 */
const read = require("readline-sync")

//Escolher a tabuada
console.clear()
let valor=0
valor = Number(read.question("Digite o valor da tabuada: "))

console.clear()
console.log("TABUADA DO "+ valor)
for(let i=1; i<11; i++){
    console.log(`${valor} X ${i} = ${valor * i}`)
}