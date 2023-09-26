/**
 * Exemplo de uso de estrutura switch case
 */

const read = require("readline-sync")
const colors = require("colors")

let escolha

console.clear()
console.log("Sistema Operacional")
console.log("")
console.log("1. Windows")
console.log("2. Linux")
console.log("3. MacIOS")

escolha = Number(read.question("Escolha um sistema operacional: "))

switch (escolha) {
    case 1:
        console.clear()
        console.log("Voce escolheu Windows!!")
        console.log("")
        console.log("                 ....iilllllllllllll")
        console.log("     ....iillll  lllllllllllllllllll")
        console.log(" iillllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log("")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" llllllllllllll  lllllllllllllllllll")
        console.log(" `^^^^^^lllllll  lllllllllllllllllll")
        console.log("       ````^^^^  ^^lllllllllllllllll")
        console.log("                      ````^^^^^^llll")
        break;
    case 2:
        console.clear()
        console.log("Voce escolheu Linux!!")
        console.log("")
        console.log("                 .88888888:.")
        console.log("                88888888.88888.")
        console.log("              .8888888888888888.")
        console.log("              888888888888888888")
        console.log("              88' _`88'_  `88888")
        console.log("              88 88 88 88  88888")
        console.log("              88:::,::,:::::8888")
        console.log("              88`:::::::::'`8888")
        console.log("             .88  `::::'    8:88.")
        console.log("            8888            `8:888.")
        console.log("          .8888'             `888888.")
        console.log("         .8888:..  .::.  ...:'8888888:.")
        console.log("        .8888.'     :'     `'::`88:88888")
        console.log("       .8888        '         `.888:8888.")
        console.log("      888:8         .           888:88888")
        console.log("    .888:88        .:           888:88888:")
        console.log("    8888888.       ::           88:888888")
        console.log("    `.::.888.      ::          .88888888")
        console.log("   .::::::.888.    ::         :::`8888'.:.")
        console.log("  ::::::::::.888   '         .::::::::::::")
        console.log("  ::::::::::::.8    '      .:8::::::::::::.")
        console.log(" .::::::::::::::.        .:888:::::::::::::")
        console.log(" :::::::::::::::88:.__..:88888:::::::::::'")
        console.log("  `'.:::::::::::88888888888.88:::::::::'")
        console.log("        `':::_:' -- '' -'-' `':_::::'`")
        break;
    case 3:
        console.clear()
        console.log("Voce escolheu MacIOS!!")
        console.log("             .:'")
        console.log("         __ :'__")
        console.log("      .'`  `-'  ``.")
        console.log("     :          .-'")
        console.log("     :         :")
        console.log("      :         `-;")
        console.log("       `.__.-.__.'")
        break;
    default:
        console.clear()
        console.log("Opção invalida!!")
        break;
}