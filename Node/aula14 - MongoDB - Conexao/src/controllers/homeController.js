/* ------ Exemplo ------ 

//importar o HomeModel
const HomeModel = require('../models/HomeModel');

//criar o banco de dados 
HomeModel.create({
    //titulo: 'Um titulo de testes',
    //descricao: 'Uma descricao de testes'
    titulo: 'Outra coisa qualquer',
    descricao: 'Outra descricao'
}) 
    .then(dados => console.log(dados)) //retornar com o documento criado
    .catch( e => console.log(e)); //ira exibir os erros 

//buscar no bando de dados - nesse caso ira buscar o banco todo
HomeModel.find()
    .then(dados => console.log(dados))
    .catch( e => console.log(e));

*/

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};