exports.middlewareGlobal = (req, res, next) => {
    //colocar o conteudo do homeController em todas as rotas do middleware
    //res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';

    //ira capturar as mensagens de flash com erros
    res.locals.errors = req.flash('errors');

    // ira capturar as mensagens de flash com sucesso (cliente cadastrado)
    res.locals.success = req.flash('success');

    // ira capturar as sessoes do usuario
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};
