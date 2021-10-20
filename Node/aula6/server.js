/** --- EXPRESS -----
 *  - ajuda na criaçao de rotas
 *  http://meusite.com/ <- GET -> Entregue a pagina / 
 *  http://meusite.com/sobre <- GET -> Entregue a pagina(ou rota) / sobre
 *  http://meusite.com/contato <- GET -> Entregue a pagina(ou rota) / contato
 * 
 *          Criar, ler, atualizar e apagar
 *  CRUD -> Create, Read, Update, Delete
 *          POST,  GET,  PUT, DELETE
 */

const express = require('express');
const app = express();

//rotas - servidor
//entregar alguma coisa
// parametros: rota / funçao (requisicao - o que esta pedindo, resposta - o que vou mandar para o servidor)
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST"> 
        Nome: <input type="text" name="nome">
        <button> Enviar</button>
        </form>
        `);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
})

//Criar alguma coisa
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

//servidor ira ouvir uma porta
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta');
});

