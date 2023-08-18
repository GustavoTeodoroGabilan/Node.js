const read = require('readline-sync')

let custo, lucro, venda

console.clear()
console.log("------------------------------------------")
console.log("     Bem vindo a calculadora de lucro     ")
console.log("------------------------------------------")

custo = Number(read.question("Digite o valor do custo: ").replace(",","."))
lucro = Number(read.question("Digite o quanto de lucro deseja ganhar: ").replace(",","."))

venda = (custo*lucro)/100
venda += custo

console.log("-------------------------------------------------------------")
console.log(` custo: ${custo.toFixed(2)}  |   lucro: ${lucro}%   |   venda: ${venda.toFixed(2)}`)
console.log("-------------------------------------------------------------")
