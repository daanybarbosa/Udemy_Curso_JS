require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// --- conectar ao banco de dados - com dotenv configurado
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto');
    })
    //catch - caso ocorra algum erro
    .catch(e => console.log(e));

//conectar ao session - ira salvar a sessão na memoria 
const session = require('express-session');    
//const MongoStore = require('connect-mongo')(session);
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

//conteudo estatico - pasta public
app.use(express.static(path.resolve(__dirname, 'public'))) //caminho absoluto 

//configurar a sessão
const sessionOptions = session({
    secret: 'zxcvbnm()',
    //store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        //tempo q vai durar o cookie/qt tempo a sessao vai durar
        //milésimos de segundos * segundos * horas * horas * dias = 7 dias
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING})
});

app.use(sessionOptions);
app.use(flash());

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



