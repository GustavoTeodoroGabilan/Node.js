//variaveis e biblioteca
const read = require('readline-sync')
let x,y,valor

console.clear()
console.log("Bem vindo ao calculo de porcentagem")
//entrada
x = Number(read.question("Digite o valor inicial: "))
y = Number(read.question("Digite o valor que deseja fazer para a porcentagem: "))

//processamento
valor = (y*x)/100

//saida
console.clear()
console.log("===================================================")
console.log(`||        O valor final de ${y}% de ${x}            ||`)
console.log(`||                 é ${valor}                          ||`)
console.log("===================================================")
