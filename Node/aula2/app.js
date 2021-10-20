/* *************** Exemplo 1 *********** 

const multiplicacao = require('./mod');
console.log(multiplicacao(2,2));
*/

/* *************** Exemplo 2 *********** 

//exportar o conteudo do mod - numero
const n = require('./mod');
console.log(n);

//exportar uma classe
const Cachorro = require('./mod');

const cachorrinho = new Cachorro('Dog');
cachorrinho.latir();
*/

/* *************** Exemplo 3 *********** 
//navegar entre as pastas
const Cachorro = require('./B/C/D/mod2');

const cachorrinho = new Cachorro('Dog');
cachorrinho.latir();
*/

/* *************** Exemplo 4 *********** 
//navegar entre as pastas - retroceder
//const Cachorro = require('../../')

const Cachorro = require('./Z/mod3');
const c1 = new Cachorro('Dog');
c1.latir();

console.log(Cachorro);
*/

/* *************** Exemplo 5 *********** */

//buscar arquivos - busca desde o local absuluto
//nome do arquivo atual 
console.log(__filename);

//nome da pasta atual
console.log(__dirname);

const path = require('path');
console.log(path.resolve(
    __dirname, '..', '..', 'arquivos', 'imagens'
));

console.log(path.resolve(
    __dirname, '.', '.', 'arquivos', 'imagens'
));
