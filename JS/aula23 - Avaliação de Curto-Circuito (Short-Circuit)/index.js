/**
 * && -> todas as expressões precisam ser verdadeiras para retornar verdadeiro/true
 * false && true -> false "o valor mesmo"
 * 
 * || -> todas as expressões precisam ser falsas para retornar falso/false.
 * false || false -> vai retornar "o valor verdadeiro"
 *  
 * 
 * FALSY -> valores avaliam em falso
 * - false
 * - 0
 * - '' "" ``
 * - null / undefined
 * - NaN
 * 
 * FALSE -> falso literal
 * 
 */

//ira checar todas as expressoes e se todas forem verdadeira, ira retornar a ultima que foi checada como verdadeira.
//console.log('Daniele' && true && 'Bruno'); 

//ira retornar a expressao falsa.
//console.log('Daniele' && true && NaN); 

// ----------------------------------------------------------------------
// Avaliação de Curto-Circuito
// ----------------------------------------------------------------------

// -- Exemplo 1 ---------------------------------------------------------
/*
function falaOi(){
    return 'Oi';
};

//const vaiExecutar = false; //false
//const vaiExecutar = undefined; //false
const vaiExecutar = 'Joao'; //true

console.log(vaiExecutar && falaOi());
*/

// -- Exemplo 2 ---------------------------------------------------------
//console.log(0 || false || null || 'Daniele' || true); //true

//Caso esteja null, será considerado a corPadrao por ser a expressao verdadeira
//Caso tenha uma corUsuario tenha algum valor, será considerada essa expressao como verdadeira
/*
//const corUsuario = null; 
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)
*/

// -- Exemplo 3 ---------------------------------------------------------
/*
const a = 0;
const b = null;
const c = 'false'; //String - verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
*/