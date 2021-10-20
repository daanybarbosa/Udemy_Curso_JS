exports.middlewareGlobal = (req, res, next) => {
    //colocar o conteudo do homeController em todas as rotas do middleware
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

//Middleware - CSRF - TOKEN - Error
exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};
