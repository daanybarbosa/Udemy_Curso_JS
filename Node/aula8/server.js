const express = require('express');
const app = express();

// ira tratar o objeto recebido pelo req.body
// evita o erro "undefined"
app.use(express.urlencoded({extended: true}));

// http://site.com/rota/params_de_url?query_strings&outra_query_string
//query_strings = recebe chave e valor
// http://facebook.com/profile/12345?campanha=googleads&nome_campanha=google

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST"> 
        Nome: <input type="text" name="nome"><br>
        Outro campo: <input type="text" name="outrocampo"><br>
        <button> Enviar o formulario </button>
        </form>
        `);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

/** colocar dois parametros na mesma rota
 * // ele esta recebendo o parametro idUsuarios 
 * /profiles/3
 * na url: http://localhost:3000/testes/123
 * 
 * // ele esta recebendo o query
 *  /profiles/?chave1-valor1&chave2-valor2&chave3-valor3
 * na url: http://localhost:3000/testes/?Nome=Daniele&Sobrenome=Silva&Idade=26 
*/

//app.get('/testes/:idUsuarios', (req, res) => {
    app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // /profiles/3
    console.log(req.params);
    // /profiles/?chave1-valor1&chave2-valor2&chave3-valor3
    console.log(req.query);
    //res.send(req.params.idUsuarios);
    //res.send(req.params);
    res.send(req.query);
})

//Criar alguma coisa
app.post('/', (req, res) => {
    //req.body = envia um formulario dentro da requisicao 
    console.log(req.body);
    res.send(`O que voce me enviou foi: ${req.body.nome} ${req.body.outrocampo}`);
})

//servidor ira ouvir uma porta
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta');
});

