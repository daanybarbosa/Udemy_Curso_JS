//next - executar o proximo middleware
exports.paginaInicial = (req, res) => {
//exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente')
    //ira renderizar o template ejs
    res.render('index');
    //console.log(`'pagina inicial' Olha o que tem na req.session.nome ${req.session.nome}`)
    //next();
    return;
};
exports.trataPost = (req, res) => {
//exports.trataPost = (req, res, next) => {
    //res.send(`Ei, sou sua nova rota de Post.`)
    res.send(req.body);
    //next();
    return;
};