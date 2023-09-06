/**
 * Jogo do dado
 */
const read=require("readline-sync")

let lado

console.clear()

read.question("Pressione o ENTER para lançar o dado:")

lado = Math.floor(Math.random() * 6 + 1)

switch (lado){
    case 0:
        console.log("'+-------+'")
        console.log("'|       |'")
        console.log("'|   O   |'")
        console.log("'|       |'")
        console.log("'+-------+'")
        break
    case 1:
        console.log("'+-------+'")
        console.log("'| O     |'")
        console.log("'|       |'")
        console.log("'|     O |'")
        console.log("'+-------+'")
        break
    case 2:
        console.log("'+-------+'")
        console.log("'| O     |'")
        console.log("'|   O   |'")
        console.log("'|     O |'")
        console.log("'+-------+'")
        break
    case 3:
        console.log("'+-------+'")
        console.log("'| O   O |'")
        console.log("'|       |'")
        console.log("'| O   O |'")
        console.log("'+-------+'")
        break
    case 4:
        console.log("'+-------+'")
        console.log("'| O   O |'")
        console.log("'|   O   |'")
        console.log("'| O   O |'")
        console.log("'+-------+'")
        break
    case 5:
        console.log("'+-------+'")
        console.log("'| O   O |'")
        console.log("'| O   O |'")
        console.log("'| O   O |'")
        console.log("'+-------+'")
}