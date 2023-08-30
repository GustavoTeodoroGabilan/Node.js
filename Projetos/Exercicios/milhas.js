const read = require('readline-sync')

let milha, km

console.clear()
console.log("------------------------------------------")
console.log("Bem vindo ao conversor de milhas para km/h")
console.log("------------------------------------------")
milha = Number(read.question("Digite o valor em Milhas: ").replace(",","."))

km = milha*1.6

console.log("------------------------------------")
console.log(`       O valor de ${milha} em    `)
console.log(`           Km é ${km.toFixed(2)}km/h        `)
console.log("------------------------------------ ")
