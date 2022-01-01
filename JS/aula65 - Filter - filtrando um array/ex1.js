/** 
 * filter() 
 * - ira filtrar um array, porem ela nao altera o array original 
 * - o metodo filter, ira receber uma função de callback que ira interar sobre cada um dos elementos dentro do array
 * - ira sempre retornar um array com a mesma quantidade de elementos do array original ou menos do array original
 * 
 * - função de callback do filter 
 * - ira receber 3 parametros: valorDoElemento, indicesDoArray, valorDoArrayCompleto
 * - ele ira retornar um valor booleano (V/F) pra que esse elemento seja imbutido ou nao no nosso array
*/

// ***************************************************************************************************************
// ***************************************************************************************************************

// ********** EXERCICIO 1 **********
// Retorne os numeros maiores que 10
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// ***************************************************************************************************************
//Exemplo 1
/*
function callbackFilter(valor, indice, array){
    if (valor > 10){
        return true; //se o valor for maior que 10
    } else {
        return false; //se o valor for menor que 10
    }
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
*/

// ***************************************************************************************************************
//Exemplo 2
/*
function callbackFilter(valor){ //nesse caso nao é obrigatorio colocar todos os parametros, podendo apenas colocar o que esta sendo utilizado.
    return valor > 10;
};
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
*/

// ***************************************************************************************************************
//Exemplo 3 
/*
const numerosFiltrados = numeros.filter(function(valor){
    return valor > 10;
});
console.log(numerosFiltrados);
*/

// ***************************************************************************************************************
//Exemplo 4
/*
const numerosFiltrados = numeros.filter(valor => {
    return valor > 10;
});
console.log(numerosFiltrados);
*/

// ***************************************************************************************************************
//Exemplo 5
/*
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
*/

// ***************************************************************************************************************
//Exemplo 6
/*
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(`valor: ${valor}, indice: ${indice}, array: ${array}`)
    return valor > 10;
});
console.log(numerosFiltrados);
*/
