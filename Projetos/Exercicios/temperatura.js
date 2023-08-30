/**
 * Conversor de temperatura
 * Fahrenheit para Celsius
 */

const read = require('readline-sync')

let cel , fah

console.clear()
console.log("Bem vindo ao conversor de temperatura!!")
fah = Number(read.question("Digite a temperatura em Fahrenheit: "))

cel = (fah - 32) / 1.8

console.log
console.log(`A temperatura ${fah} Fº em Celsius é ${cel.toFixed(1)}Cº`)
