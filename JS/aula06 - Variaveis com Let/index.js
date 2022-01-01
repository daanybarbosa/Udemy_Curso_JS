/**
 * let = variavel
 * var = variavel (maneira mais antiga)
 * */

/*
let nome; //Declarando a variavel 
nome = 'João'; //Inicializando a variavel

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
*/

// ** Regras **
// Não podemos criar variaveis com palavras reservadas, ex:
// let if;

// Variaveis precisam ter nomes significativos, ex: 
//let n = 'Daniele'; //em codigos pequenos nao tem problema, porem conforme o codigo vai ficando mais complexo, isso atrapalha na identificação do codigo
//let nomeCliente = 'Daniele';
//console.log(nomeCliente);

//Não pode começar o nome de uma variavel com número
//let 1nome;
//console.log(1nome);

//Não podem conter espaços ou traços, utilizamos camelCase
//let nomeCompleto = 'Daniele Silva';
//console.log(nomeCompleto);

//Case-sensitive - letras maiusculas e minusculas fazem diferença
//let nomeCliente = 'Luiz';
//let nomecliente = 'Otavio';
//console.log(nomeCliente, nomecliente);

//Não podemos redeclarar variveis com let
//let nomeCliente = 'Luiz';
//nomeCliente = 'Otavio';
//console.log(nomeCliente); //ele sempre vai ler a ultima declaração

//Não utilize VAR, utilize LET.