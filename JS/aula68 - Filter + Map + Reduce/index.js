/** 
 * Combinar Filter + Map + Reduce 
 * - Retorne a soma do dobro de todos os pares
 * -> Filtrar pares
 * -> Dobrar os valores
 * -> Reduzir (somar tudo)
 * 
 * */

// ----------------------------------------------------------------------
// ---- Função tradicional ----------------------------------------------

/* 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(ac, valor){
    return ac + valor;
});

// [ 50, 80, 2, 8, 22 ] -> Pares
// [ 100, 160, 4, 16, 44 ] -> Dobrar os valores
// 324 -> Soma de tudo 
console.log(numerosPares);
*/

// ----------------------------------------------------------------------
// ---- Função Arrow Function--------------------------------------------
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

// 324 -> Soma de tudo 
console.log(numerosPares);
*/