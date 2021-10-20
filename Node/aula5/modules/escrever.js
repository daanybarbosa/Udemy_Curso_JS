const fs = require('fs').promises;
//const path = require('path');
//const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt'); //caminho absoluto da pasta + voltando uma pasta + criar o arquivo final teste.txt 
//const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

/* ------ informacao movida para o app.js ------ 
//ira incluir essas informacoes no arquivo .json
const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'},
];
const json = JSON.stringify(pessoas, '', 2);//formatar o arquivo json, com '' (espaço) e 2 de identaçao
*/

//fs.writeFile(caminhoArquivo, 'Frase 1', {flag: 'w', encoding: 'utf8'}); //caminho absoluto da pasta + conteudo do arquivo + flag apagar tudo que estiver dentro do arquivo e sobreescreve o que esta sendo solicitado e o padrao utf8
//fs.writeFile(caminhoArquivo, 'Frase 1\n', {flag: 'w'}); //caminho absoluto da pasta + conteudo do arquivo + flag w apagar tudo que estiver dentro do arquivo e sobreescreve o que esta sendo solicitado e o padrao utf8
//fs.writeFile(caminhoArquivo, 'Frase 1 \n', {flag: 'a'}); //caminho absoluto da pasta + conteudo do arquivo + flag a ira adicionar ao arquivo existente 
//fs.writeFile(caminhoArquivo, json, {flag: 'a'});

//funçao para receber os dados do arquivo app.js
module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'}); //flag 'w' apaga, 'a' append/adiciona
};