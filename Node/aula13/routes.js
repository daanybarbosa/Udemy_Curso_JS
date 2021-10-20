const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

//middleware
//next - executar o proximo middleware
// function meuMiddleware(req, res, next){
//     //sessão
//     req.session = { nome: 'Daniele', sobrenome:'Silva'};
//     // console.log();
//     // console.log('Passei no seu middleware');
//     // console.log();
//     next(); //executar o proximo middleware
// };

// Rotas da home
route.get('/', homeController.paginaInicial);
//route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
    // console.log();
    // console.log('Ainda estou aqu...');
    // console.log(`'ultimo middleware' Olha o que tem na req.session.nome ${req.session.nome}`);
//});
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;