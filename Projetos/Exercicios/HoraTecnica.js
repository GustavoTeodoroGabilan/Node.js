const read = require('readline-sync')
console.clear()
const reserva = 30
let rem, custo, inv, horasTec

//
rem = Number(read.question("Digite a remuneração mensal pretendida: ").replace(",","."))

custo = Number(read.question("Digite o custo operacional: ").replace(",","."))

inv = Number(read.question("Digite o Investimento: ").replace(",","."))

horasTec = Number(read.question("Digite a horas trabalhadas por mês: "))

horasTec = (rem+(rem*reserva)/100+custo+(inv*rem)/100)/horasTec

console.log(horasTec)
