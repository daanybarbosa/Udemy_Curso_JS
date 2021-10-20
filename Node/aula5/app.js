const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')

/*
//ira incluir essas informacoes no arquivo .json
const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'},
];
const json = JSON.stringify(pessoas, '', 2);//formatar o arquivo json, com '' (espaço) e 2 de identaçao

//funçao - colocar o caminhoArquivo e onde serao salvos os dados do arquivos
escreve(caminhoArquivo, json);
*/

async function leArquivo(caminho){
    const dados = await ler(caminho);
    //return dados;
    renderizaDados(dados);
}

// const dadosArquivo = leArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));

function renderizaDados(dados){
    //console.log(dados);

    //desconverter de json para javascript
    dados = JSON.parse(dados); 
    //irao voltar a ser um objeto
    dados.forEach(val => console.log(val.nome));
}

leArquivo(caminhoArquivo);