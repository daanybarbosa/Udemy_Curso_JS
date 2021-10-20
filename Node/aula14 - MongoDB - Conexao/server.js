require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

/* ----- conectar ao banco de dados - Conexão direta (sem o dotenv configurado)
const connectionString = 'mongodb+srv://daanybarbosa:Dani123@cursojs01.b2g4u.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    //.then(() => console.log('Agora que a conexao ocorreu'));
    .then(() => {
        console.log('Conectei a base de dados.');
        //ira fazer o app se conectar ao BD primeiro e depois ira executar a porta
        //app ira emitir um evento - o servidor apenas vai executar se a conexão for feita
        app.emit('pronto');
    })
    //catch - caso ocorra algum erro
    .catch(e => console.log(e));
*/

// --- conectar ao banco de dados - com dotenv configurado
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //console.log('Conectei a base de dados.');
        app.emit('pronto');
    })
    //catch - caso ocorra algum erro
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

//conteudo estatico - pasta public
app.use(express.static(path.resolve(__dirname, 'public'))) //caminho absoluto 

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Nossos proprios middlewares
app.use(middlewareGlobal);
app.use(routes);

//capturar o sinal, qdo o app estiver pronto ele ira executar a funçao
app.on('pronto', () => {
    //servidor ira ouvir uma porta
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta');
    });
});



