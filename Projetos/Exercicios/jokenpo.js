const read = require("readline-sync")
const colors = require("colors")

let escolha, pc

console.clear()
console.log("_______ JoKenPo _______")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
escolha = Number(read.question("Digite a opção desejada:"))

pc = Math.floor(Math.random() * 3 + 1)

console.clear()
if (escolha == 1) {
    console.log(`Jogador escolheu pedra`)
} else if (escolha == 2) {
    console.log("Jogador escolheu papel")
} else {
    console.log("Jogador escolheu tesoura")
}

if (pc == 1) {
    console.log(`Computador escolheu pedra`)
} else if (pc == 2) {
    console.log("Computador escolheu papel")
} else {
    console.log("Computador escolheu tesoura")
}

if (escolha == pc) {
    console.log("EMPATE!".yellow)
} else if (escolha == 1 && pc == 3 || escolha == 2 && pc == 1 || escolha == 3 && pc == 2) {
    console.log("JOGADOR VENCE!!".green)
} else {
    console.log("COMPUTADOR VENCE!!".red)
}
