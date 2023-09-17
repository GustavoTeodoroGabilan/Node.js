//*Arquivo que representa uma classe ContaCorrente
//Criando uma classe{ atributos }
//os atributos sao as caracteristicas que os clientes recebem
//exporta essa classe para outro arquivo
export class ContaCorrente {
    agencia;
    cliente;


    _saldo = 0;

    //operação, como um escopo de qual operação sera feita dentro do sacar
    //Tudo de dentro dos parenteses são consideradps parametros
    sacar(valor) {
        //faz a operação na conta corrente que estou mexendo, sendo ela de qualquer cliente que eu esteja manipulando
        if (this._saldo >= valor) {
            //tirar do mesmo nome do parametro
            this._saldo -= valor
            //mostra o valor para quem chamou a função
            return valor
        }
    }

    depositar(valor) {
        if (valor <= 0) return

        //? o _ é uma didatica utilizada entre os programadores para demonstrar os atributos que não devem ser alterados fora da classe, mas não os torna privado

        this._saldo += valor

    }
    //objeto utilizado como parametro
    //conta é para saber para quem vou transferir
    transferir(valor, conta) {
        //adicionando dinamicamente o atributo cidade a classe conta
        //TODO: conta.cidade = "São Paulo"
        //atribui o valor sacado da sua conta
        const valorSacado = this.sacar(valor)
        //adiciona o valor depositado a outra conta
        conta.depositar(valorSacado)
    }
}