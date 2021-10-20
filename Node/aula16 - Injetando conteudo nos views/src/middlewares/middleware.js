exports.middlewareGlobal = (req, res, next) => {
    //colocar o conteudo do homeController em todas as rotas do middleware
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
    next();
};
