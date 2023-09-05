/**
 * App para calcular a media de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync')
//importação do pacote colors
const colors = require('colors')

//variáveis
let nome, disciplina
let nota1, nota2, media



console.clear()                                                           
console.log(".--.      .     .        ")       
console.log("|   )     |    _|_   o ")         
console.log("|--:  .-. | .-. |    .  .--.--.") 
console.log("|   )(   )|(.-' |    |  |  |  | ")
console.log("'--'  `-' `-`--'`-'-' `-'  '  `-")

//entrada 
nome = read.question("Digite seu nome: ")
disciplina = read.question("Digite a disciplina: ")
nota1 = Number(read.question("Digite a nota 1: "))
nota2 = Number(read.question("Digite a nota 2: "))

//processamento
media = (nota1 + nota2) / 2





//saída
console.clear()
console.log("------------Ficha do Aluno---------------".bold)
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`Nota1: ${nota1}`)
console.log(`Nota2: ${nota2}`)
console.log(`Nota final: ${media}`)
if (media<2){
    console.log("Reprovado".bgRed.white)
}else if (media>2 && media<6){
        console.log("Recuperação".bgYellow.white)

    }else{
        console.log("Aprovado".bgGreen.white)
    }
console.log("-------------------------------------------")
