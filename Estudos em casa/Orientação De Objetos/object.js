//*Criando uma classe{ atributos }
//os atributos sao as caracteristicas que os clientes recebem

//*importa do arquivo que esta a classe
//
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


//Cria um novo cliente
const cliente1 = new Cliente()

//Colocasse um "." para que eu consiga acessar qualquer atributo dele, ja que o cliente1 é uma variavel
cliente1.nome = "Gustavo"
cliente1.cpf = 11122233309

//Cria um novo cliente
const cliente2 = new Cliente()

//Coloca-se um "." para que eu consiga acessar qualquer atributo dele, ja que o cliente1 é uma variavel
cliente2.nome = "Ricardo"
cliente2.cpf = 88822233309

console.clear()

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001
//compus a classe para fazer parte de outra classe
contaCorrenteRicardo.cliente = cliente1
contaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente()
conta2.cliente = new Cliente()
conta2.cliente.nome = "Roberto"
conta2.agencia = 102

let valor = 200
//transfere 200 reais da contaCorrenteRicardo para a conta2
contaCorrenteRicardo.transferir(valor, conta2)

console.log(contaCorrenteRicardo)
//retornou graças ao return utilizado dentro da função
console.log(conta2)
