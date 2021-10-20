//variveis de ambiente configuradas no .env
require('dotenv').config(); 

const express = require('express');
const app = express();

//mongoose - banco de dados - retorna uma promisse 
const mongoose = require('mongoose');

// --- conectar ao banco de dados - com dotenv configurado
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto');
    })
    //catch - caso ocorra algum erro
    .catch(e => console.log(e));

//conectar ao session - ira salvar a sessão na memoria 
// - identificar o navegador do cliente ira salvar um cookie com um id no navegador do cliente  
const session = require('express-session');    

//MongoStore - as sessões serão salvas dentro da base de dados
const MongoStore = require('connect-mongo');

//flash - flash messages - mensagens auto destrutivas, assim que vc ler ela ela se auto-apaga
// - bastante utilizado para exibir mensagens de erros, feedbacks para os usuarios
// - sao salvas na session 
const flash = require('connect-flash');


//rotes - rotas da aplicação 
const routes = require('./routes');

//path - caminhos da aplicação 
const path = require('path');

//conectar ao helmet - deixa a aplicação mais segura
const helmet = require('helmet'); 

//conectar ao csrf/csurf - coloca um token nos formularios enviados da aplicação
const csrf = require('csurf'); 

//middleware - funções que sao executadas na rota
// - por exemplo, poderá checar se o usuario está logado, caso nao esteja logado nao tera acesso a determinada pagina
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

//conectar ao helmet
app.use(helmet()); 

//pode postar formularios para dentro da aplicaçao
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

//arquivos estaticos -  podem ser acessados diretamente, por exemplo, imagens, css, js, e etc 
app.use(express.static(path.resolve(__dirname, 'public'))) //caminho absoluto - conteudo estatico - pasta public

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

//views - sao os arquivos renderizados na tela, geralmente arquivos em html
app.set('views', path.resolve(__dirname, 'src', 'views'));

//view engine - é a engine utilizada para renderizar as paginas em html, nesse caso é o EJS 
app.set('view engine', 'ejs');

//configurar o csrf/csurf - deve se instalado antes ou depois dos middlewares
app.use(csrf()); 

//Nossos proprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

//chamando as rotas
app.use(routes);

//mandando a aplicação escutar as configuraçoes 
//capturar o sinal, qdo o app estiver pronto ele ira executar a funçao
app.on('pronto', () => {
    //servidor ira ouvir uma porta
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta');
    });
});



