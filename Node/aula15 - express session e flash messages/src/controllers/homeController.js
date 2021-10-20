exports.paginaInicial = (req, res) => {
    //adicionar coisas na session
    //req.session.usuario = { nome: 'Luiz', logado: true}; //esse dado ficara salvo por 7 dias ate a sessao morrer 
    //console.log(req.session.usuario);

    //req.flash - assim q recupera-las, em seguida elas somem
    // req.flash('info', 'Ola mundo!');
    // req.flash('error', 'asdadsa!');
    // req.flash('success', 'blaaaa!');
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));

    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};

