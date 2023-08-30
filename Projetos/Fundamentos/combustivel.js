/**
 * APP ETANOL X GASOLINA
 */

const read = require('readline-sync')
const colors = require('colors')

let gasolina, etanol
console.clear()
console.log("Bem vindo a recomendação de combustivel")

gasolina = (read.question("Digite o valor da gasolina: ").replace(",", "."))
etanol = (read.question("Agora digite o valor do etanol: ").replace(",", "."))

gasolina = gasolina * 0.7


console.clear()
if (etanol <= gasolina) {
    console.log("=================================")
    console.log("||    O valor do " + "etanol".bgCyan + "        ||")
    console.log("||     esta mais " + "barato".bgGreen + "        ||")
    console.log("=================================")
} else {
    console.log("=================================")
    console.log("||    O valor da " + "gasolina".bgCyan + "      ||")
    console.log("||     esta mais " + "barato".bgGreen + "        ||")
    console.log("=================================")
}
