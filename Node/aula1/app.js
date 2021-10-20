/* ************* Exemplo 1 ************** 

//requerer/exportar o modulo exports
//const mod1 = require('./mod1');

//ira exportar apenas a funçao falaNome
//const falaNome = require('./mod1').falaNome;
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;

//exportar apenas os objetos
const { nome, sobrenome, falaNome } = require('./mod1');

//ira exibir todo o conteudo do mod1
//console.log(mod1);

//ira exibir apenas o conteudo da funçao falaNome
//console.log(mod1.falaNome());
console.log(falaNome()); //ira exportar a funçao direto
console.log(nome, sobrenome);
*/

/* ************* Exemplo 2 ************** */

//modulo criado pelo proprio node - nao requer o caminho 
const path = require('path');
const axios = require('axios');

//modulo criado por mim requer o caminho do modulo
const { Pessoa } = require('./mod1'); 
const mod1 = require('./mod1');

// const p1 = new Pessoa('Daniele');
// console.log(p1);

//exportando os dados do module axios
// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));

//sobreescrever os dados do construtor Jão
const p1 = new Pessoa('Jão');
console.log(p1);
console.log(mod1);