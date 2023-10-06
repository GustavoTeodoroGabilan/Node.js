const emojic = require("emojic")

class Carro {

    constructor(ano, cor, ligado) {
        this.ano = ano;
        this.cor = cor;
        this.ligado = ligado;
    }

    criarCarro() {
        console.log("🚗")
        console.log(`Carro de ${this.ano}`)
        console.log(`Carro de cor ${this.cor}`)
    }

    ligar() {
        if (this.ligado === false) {
            this.ligador = true
            console.log("✔️ esta ligado")

        } else {
            console.log("✔️ ja esta ligado")
        }
    }


    desligar() {
        if (this.ligado === true) {
            this.ligado = false
            console.log("❌ esta desligado")
        } else {
            console.log("❌ ja esta desligado")
        }
    }

    acelerar() {
        if (this.ligado === true) {
            console.log("🚗🌫️ Esta andando");
        } else {
            console.log("🚗 o carro esta desligado")
        }
    }
}

class Aviao extends Carro {

    constructor(ano, cor, envergadura, voando) {
        super(ano, cor)
        this.envergadura = envergadura
        this.voando = Number(voando)
    }

    criarAviao() {
        console.log("✈️")
        console.log(`Avião de ${this.ano}`)
        console.log(`Avião da cor ${this.cor}`)
        console.log(`Avião com envergadura de ${this.envergadura} metros`)
    }

    aterrizar() {
        if (this.voando == true) {
            this.voando = false
            console.log("🛫✔️ o avião aterrizou")
        } else {
            console.log("🛫❌ O avião não esta voando para aterrizar")
        }
    }

    acelerar() {
        if (this.voando == true) {
            console.log("🌫️✈️ o avião esta acelerando");
        } else {
            console.log("✈️ o avião não esta voando, portanto não pode acelerar")
        }
    }
}
console.clear()
const carro1 = new Carro(2018, "vermelho", true)
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.desligar()


console.log("----------------------------------------------")
const carro2 = new Carro(2020, "azul", false)
carro2.criarCarro()
carro2.desligar()
carro2.ligar()

console.log("----------------------------------------------")
const aviao1 = new Aviao(2020, "cinza", 30, true)
aviao1.criarAviao()
aviao1.aterrizar()
aviao1.acelerar()