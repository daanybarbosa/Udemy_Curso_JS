/**
 * VALORES PRIMITIVOS
 * - valores imutaveis 
 * - Valores copiados
 * - String, number, boolean, undefined, null (bigint, symbol)
 */

// ----------------------------------------------------------------------
// Exemplo 1
// ----------------------------------------------------------------------
/*
let nome = 'Daniele';
nome = 'Bruno';
nome[0] = 'R'; //a String é imutavel 
console.log(nome, nome[0]);
*/

// ----------------------------------------------------------------------
// Exemplo 2
// ----------------------------------------------------------------------
/*
let a = 'A';
let b = a; //cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/

/**
 * VALORES POR REFERENCIA 
 * - Mutaveis 
 * - Valores passados por referência - referencia para o mesmo local na memoria 
 * - Array, Object, Function
 */

// ----------------------------------------------------------------------
// Exemplo 1
// ----------------------------------------------------------------------
/*
let a = [1, 2, 3]; //apontam para o mesmo local da memoria
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Daniele');
console.log(a, b, c);
*/

// ----------------------------------------------------------------------
// Exemplo 2
// ----------------------------------------------------------------------
/*
const a = {
    nome: 'Daniele',
    sobrenome: 'Silva'
};

//const b = a; //aponta para o mesmo local
const b = { ...a }; //espalha o valor de A, e torna B independente
a.nome = 'Bruno';

console.log(a);
console.log(b);
*/