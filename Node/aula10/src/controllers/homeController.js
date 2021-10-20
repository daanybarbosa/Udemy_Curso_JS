exports.paginaInicial = (req, res) => {
    //ira renderizar o template ejs
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(`Ei, sou sua nova rota de Post.`)
};