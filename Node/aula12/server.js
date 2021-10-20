const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

//conteudo estatico - pasta public
//app.use(express.static('./public')); //caminho relativo
app.use(express.static(path.resolve(__dirname, 'public'))) //caminho absoluto 

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')
app.use(routes);

//servidor ira ouvir uma porta
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta');
});

