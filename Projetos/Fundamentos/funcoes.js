/**
 * Estudo das funções
*/

//função simples

function hello(){
    console.log("hello function")
}

//para executar a função basta escrever o nome da função junto com parenteses
hello()

//funções atribuidas
//função anonima
const hello2 = function(){
    console.log("hello function atribuida")
}

hello2()

//função atribuida simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function")
}

hello3()

console.log(typeof(hello3))
