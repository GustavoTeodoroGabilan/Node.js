/**
 * App para calcular a media de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//variáveis
let nome, disciplina
let nota1, nota2, media
const reprovado = false, aprovado=false


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

if (media>=6)
    aprovado=true
    else
    reprovado=true

//saída
console.clear()
console.log("------------Ficha do Aluno---------------")
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`Nota1: ${nota1}`)
console.log(`Nota2: ${nota2}`)
console.log(`Nota final: ${media}`)
console.log("-------------------------------------------")
