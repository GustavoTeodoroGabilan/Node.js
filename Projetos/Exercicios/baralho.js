let nipe = ["♣️","♦️","♠️","♥️"]
let numeros = ["A","2","3","4","5","6","7","8","9","X"]

let nipeEscolhido = nipe[Math.floor(Math.random()*4)]
let numeroEscolhido = numeros[Math.floor(Math.random()*10)]

console.log(nipeEscolhido)
console.log(numeroEscolhido)

console.log("___________________")
console.log(`|  ${numeroEscolhido}              |`)
console.log(`|  ${nipeEscolhido}              |`)
console.log(`|                 |`)
console.log(`|                 |`)
console.log(`|                 |`)
console.log(`|                 |`)
console.log(`|             ${nipeEscolhido}   |`)
console.log(`|             ${numeroEscolhido}   |`)
console.log("___________________")
