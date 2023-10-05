/**
 * Estudo das funções
 * Funções simples com parâmetros e retorno
*/

//sintaxe comum

function somar(num1, num2){
    return (console.log(num1+num2)); //retorna o resultado da operação
}

somar(2,5) //chama a função e passa os dois parametros

//função atribuida

let somarA = function(num1, num2){
    return (console.log(num1+num2));
}

somarA(5, 5)

//arrow function

let somarAF = (num1, num2) =>{
    return (console.log(num1 + num2));
}

somarAF(6, 6)