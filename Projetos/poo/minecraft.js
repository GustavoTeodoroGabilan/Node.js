/**
 * POO - Fundamentos da Programação Orientada a Objetos
 * Exemplo: Jogo Minecraft
 */

//Classe modelo (abstraçãop) - Onde sera criado o objeto
//class = cria a classe (nome da classe começa com maiusculo)
class Bloco {
    //atributos
    //um construtor para adicionar atributos
    constructor(resistencia, textura) {
        //this = atribui ao atributo utilizado no momento
        this.resistencia = resistencia
        this.textura = textura
    }
    //ações (métodos)
    criarBloco() {
        console.log("--------------------------------------")
        console.log("┎───────────┒")
        console.log("│           │")
        console.log("│           │")
        console.log("│           │")
        console.log("│           │")
        console.log("┖───────────┚")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar() {
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}

//criando uma classe com uma herança
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista) {
        //super = puxa da classe pai
        super(resistencia, textura)
        this.conquista = conquista
    }
    //metodos
    criarEnxada() {
        console.log("--------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`);
    }

    arar() {
        console.log("._._._. Terra arada!")
        if (this.conquista === true)
            console.log("☀ Conquista obtida!")
    }

    //polimorfismo
    //utilizamos o minerar e reatribuimos seu comportamento
    minerar(){
        console.log("✞ Dano atribuido")
    }

}



//Criação de objetos (Mundo)
console.clear()

console.log("███╗   ███╗██╗███╗   ██╗███████╗ ██████╗██████╗  █████╗ ███████╗████████╗")
console.log("████╗ ████║██║████╗  ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝")
console.log("██╔████╔██║██║██╔██╗ ██║█████╗  ██║     ██████╔╝███████║█████╗     ██║  ")
console.log("██║╚██╔╝██║██║██║╚██╗██║██╔══╝  ██║     ██╔══██╗██╔══██║██╔══╝     ██║   ")
console.log("██║ ╚═╝ ██║██║██║ ╚████║███████╗╚██████╗██║  ██║██║  ██║██║        ██║   ")
console.log("╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝  ")


//Criando um bloco de terra
//criamos uma contante para o primeiro bloco
//new Bloco = cria um novo objeto da classe modelo
//(1, "terra") = parametros (resistencia, textura)

const bloco1 = new Bloco(1, "terra")
//com o ponto, é possivel ver e acessar os metodos e atributos
//objeto que utiliza do metodo criarBloco (Sempre fechar com parenteses)
bloco1.criarBloco()

//Criando um bloco de madeira
const bloco2 = new Bloco(2, "madeira")
bloco2.criarBloco()
bloco2.construir()

//Criando um bloco de terra
const bloco3 = new Bloco(5, "pedra")
bloco3.criarBloco()
bloco3.minerar()

const minerioFerro = new Bloco(6, "ferro")
minerioFerro.criarBloco()
minerioFerro.minerar()


//--------------------------------------------
//Enxadas
const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada(4, "pedra", false)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada(6, "ferro", true)
enxada3.criarEnxada()
enxada3.arar()

const enxada4 = new Enxada(10, "diamante", true)
enxada4.criarEnxada()
enxada4.minerar()