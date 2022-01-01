// ** Regras **

// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// Não pode começar o nome de uma constantes com números.
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive - letras maiusculas e minusculas fazem diferença
// Não podemos modificar o valor de uma constante.
// Não utilize VAR, utilize CONST.

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
/*
//Precisa iniciar a constante com um valor.
//const nome = 'João';
let nome = 'João'
nome = 'Otavio'
console.log(nome);
*/

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
/*
// String = texto | Number = número
// Pegar o valor de uma variavel/constante e atribuir a outra constante/variavel
const primeiroNumero = 5; //Number
const primeiroNumeroString = '5'; //String
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; //modificando o valor inicial da variavel

console.log(`Resultado: ${resultado}, resultadoDuplicado: ${resultadoDuplicado}, resultadoTriplicado: ${resultadoTriplicado}`);

console.log(typeof primeiroNumero);
console.log(typeof primeiroNumeroString);

console.log(typeof (primeiroNumero + segundoNumero)); //somar
console.log(typeof (primeiroNumero + primeiroNumeroString)); //concatenar
*/