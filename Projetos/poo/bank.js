const color = require('colors')

class Conta {

    constructor(numero, nome, saldo) {
        this._numero = numero;
        this._nome = nome;
        this._saldo = saldo
    }

    //Encapsulamento das variaveis
    getNome() {
        return this._nome;
    }

    getSaldo() {
        return this._saldo;
    }

    getNumero() {
        return this._numero;
    }


    exibirSaldo() {
        console.log(`O saldo da conta do ${this.getNome()} é R$ ${this.getSaldo().toFixed(2)}.`.magenta);
    }

    exibirConta() {
        console.log(`O Cliente: ${this.getNome()} da conta: ${this.getNumero()}`);
    }

    depositar(valor) {
        this._saldo += valor;
        console.log(`A conta de ${this._nome} recebeu um valor de R$ ${valor.toFixed(2)}`.green);
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`A conta de ${this._nome} realizou um saque de R$ ${valor.toFixed(2)}`.green);
        } else {
            console.log(`Operação de saque da conta ${this._nome} no valor de R$ ${valor.toFixed(2)} negada! Saldo insuficiente`.red);
        }
    }

    pix(valor, conta) {
        if (valor <= this._saldo) {
            //retira o valor da conta manipulada
            this._saldo -= valor;
            //chama o metodo depositar para a conta selecionada
            conta.depositar(valor)
            console.log(`Transferencia por PIX para a conta ${conta.getNome()} com valor de R$ ${valor.toFixed(2)} efetuada com sucesso`.green)
        } else {
            console.log(`Operação de transferenia da conta ${this._nome} para ${conta.getNome()} no valor de R$ ${valor.toFixed(2)} negada! Saldo insuficiente`.red)
        }
    }

    transferenciaPoup(valor, contaPoup){
        if (valor <= this._saldo) {
            //retira o valor da conta manipulada
            this._saldo -= valor;
            //chama o metodo depositar para a conta selecionada
            contaPoup.depositar(valor)
            console.log(`Transferencia por PIX para a conta ${contaPoup.getNome()} com valor de R$ ${valor.toFixed(2)} efetuada com sucesso`.green)
        } else {
            console.log(`Operação de transferenia da conta ${this._nome} para ${contaPoup.getNome()} no valor de R$ ${valor.toFixed(2)} negada! Saldo insuficiente`.red)
        }
    }

}





class ContaPoupanca extends Conta {
    constructor(numero, nome, saldo) {
        super(numero, nome, saldo);
    }

    exibirContaPoupanca() {
        console.log(`O Cliente ${this.getNome()} da conta poupanca ${this.getNumero()}`);
    }

    exibirSaldoPoupanca() {
        console.log(`Saldo da conta poupanca de ${this.getNome()} é R$ ${this.getSaldo()}`.magenta)
    }

}


console.clear()
console.log("'########:::::'###::::'##::: ##::'######:::'#######::::: ")
console.log(" ##.... ##:::'## ##::: ###:: ##:'##... ##:'##.... ##::::")
console.log(" ##:::: ##::'##:. ##:: ####: ##: ##:::..:: ##:::: ##::::")
console.log(" ########::'##:::. ##: ## ## ##: ##::::::: ##:::: ##::::")
console.log(" ##.... ##: #########: ##. ####: ##::::::: ##:::: ##::::")
console.log(" ##:::: ##: ##.... ##: ##:. ###: ##::: ##: ##:::: ##::::")
console.log(" ########:: ##:::: ##: ##::. ##:. ######::. #######:::::")
console.log("--------------------------------CONTAS----------------------------------------")
//criando contas


const leandro = new Conta(1, "Leandro Ramos", 10000)
const sirlene = new Conta(2, "Sirlene Aparecida", 19000)
const robson = new Conta(3, "Robson Vaamond", 20000)
const robsonPoupanca = new ContaPoupanca(1, "Robson Vaamond", 1000)

leandro.exibirConta()
leandro.exibirSaldo();

console.log("")

sirlene.exibirConta()
sirlene.exibirSaldo();

console.log("")

robson.exibirConta()
robson.exibirSaldo();

console.log("")

robsonPoupanca.exibirContaPoupanca()
robsonPoupanca.exibirSaldoPoupanca();



console.log('')
console.log("----------------------------PAGAMENTOS E TRANSFERENCIAS-------------------------------------")

leandro.depositar(300)
sirlene.sacar(400)
robson.pix(600, leandro)
robson.transferenciaPoup(400, robsonPoupanca)


sirlene.sacar(1000000)

robson.pix(600000000, robsonPoupanca)

console.log('')
console.log("--------------------------------SALDO GERAL--------------------------------------")
leandro.exibirSaldo()
sirlene.exibirSaldo()
robson.exibirSaldo()
robsonPoupanca.exibirSaldoPoupanca()
