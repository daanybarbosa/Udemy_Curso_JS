/**
 * Reduce()
 * - É uma função geralmente usada para reduzir o array a um unico objeto
 * - por exemplo, temos uma lista de numeros, iremos utilizar o reduce para reduzir o array a um unico valor que seria a soma de todos os valores (valor total) 
 * 
 */

// ----------------------------------------------------------------------
// -- Exercicio 1 -------------------------------------------------------
/**
 * Some todos os numeros (reduce)
 * Retorne um array com os pares (filter)
 * Retorne um array com o dobro dos valores (map)
 */

//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// ----------------------------------------------------------------------
// ---- Some todos os numeros (reduce) ----------------------------------

// Reduce(acumulador, valor, indice, array)
// - acumulador é o contador desse array
/*
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    //console.log(acumulador, valor);
    return acumulador;
}, 0); //0 é o valor inicial do acumulador. - é opcional
console.log(total); 
*/

// ----------------------------------------------------------------------
// ---- Retorne um array com os pares (filter) --------------------------
/*
const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []); // array -> concatenou os dados
console.log(total); 
*/ 

// ----------------------------------------------------------------------
// ---- Retorne um array com os pares (filter) --------------------------
/*
// caso queira os impares
const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 !== 0) acumulador.push(valor);
    return acumulador;
}, []); // array -> concatenou os dados
console.log(total); 
*/

// ----------------------------------------------------------------------
// ---- Retorne um array com o dobro dos valores (map) ------------------
/*
const total = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador;
}, []); 
console.log(total); 
*/

// ----------------------------------------------------------------------
// ---- Some todos os numeros pares (reduce) ----------------------------
/*
const total = numeros.reduce(function(acumulador, valor){
    if(valor % 2 === 0){
        acumulador += valor;
    }
    return acumulador;
},0); //adicionado o 0 para iniciar o contador(acumulador), pois estava considerando na soma o primeiro elemento do array
console.log(total);
*/

// ----------------------------------------------------------------------
// ---- Some todos os numeros impares (reduce) --------------------------
/*
const total = numeros.reduce(function(acumulador, valor){
    if(valor % 2 !== 0){
        acumulador += valor;
    }
    return acumulador;
},0); //adicionado o 0 para iniciar o contador(acumulador), pois estava considerando na soma o primeiro elemento do array
console.log(total);
*/