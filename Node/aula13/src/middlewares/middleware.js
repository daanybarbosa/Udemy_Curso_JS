/* Exemplo 1 
module.exports = (req, res, next) => {
    console.log();
    console.log('Passei no middlware global');
    console.log();
    next();
}
*/

/* Exemplo 2
module.exports = (req, res, next) => {

    if(req.body.cliente){
        //caso o cliente escreva daniele, ira alterar o valor para nao use daniele
        req.body.cliente = req.body.cliente.replace('daniele', 'NÃO USE DANIELE');
        console.log();
        console.log(`Vi que voce postou ${req.body.cliente}`);
        console.log();
    }
    next();
}
*/

exports.middlewareGlobal = (req, res, next) => {
    next();
};

exports.outromiddlewareGlobal = (req, res, next) => {
    console.log('Sou seu outro middleware');
    next();
};