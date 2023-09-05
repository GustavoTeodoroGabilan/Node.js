const read = require('readline-sync')
const colors = require('colors')

/**
 * ELEITOR - Obrigatoriedade de votar
 */

let nome, idade, eleger, candidato1 = 0,
    candidato2 = 0,
    candidato3 = 0,
    nulo = 0,
    branco = 0,
    voto = 0

console.clear()
console.log("-----------------------------------------")
console.log("        Bem vindo ao eleitor online     ")
console.log("-----------------------------------------")

nome = (read.question("Por favor digite seu nome: "))
idade = Number(read.question("Agora digite sua idade: "))

if (idade < 16) {
    console.log("Infelizmente voce não pode votar ainda!!")
} else if (idade == 16 || idade == 17 || idade > 70) {
    console.log("Voce possui o voto facultativo, ou seja, não é obrigado a votar")
    eleger = Number(read.question("Deseja votar? (1 = sim / 2 não)"))
} else {
    console.log("Voce possui o voto obrigatorio")
    eleger == 1
}


if (eleger == 2 || eleger == 0) {
    console.log("Obrigado por utilizar nosso sistema")
} else {
    console.log("Vamos começar o processo de eleição")
    for (let i = 0; i < 10; i++) {
        voto = Number(read.question("Em qual candidato deseja votar? (1 = candidato1 / 2 = candidato2 / 3 = candidato3 / 4 = nulo / 5 = branco): "))
        switch (voto) {
            case 1:
                candidato1++
                break;
            case 2:
                candidato2++
                break;
            case 3:
                candidato3++
                break;
            case 4:
                nulo++
                break;
            case 5:
                branco++
                break;
        }
    }
}

console.log("-------------------------------------------------------------")
console.log("                   Resultado dos votos".green)
console.log(`                       candidato 1 = ${candidato1}`)
console.log(`                       candidato 2 = ${candidato2}`)
console.log(`                       candidato 3 = ${candidato3}`)
console.log(`                       votos nulos = ${nulo}`)
console.log(`                       votos brancos = ${branco}`)
console.log("-------------------------------------------------------------")