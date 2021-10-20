const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    //visualizar qual usuario esta logando
    //console.log(req.session.user);

    // checar se o usuario esta logado
    if(req.session.user) return res.render('login-logado');
    res.render('login');
};

/* Registrar/Cadastrar o usuario */
exports.register = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.register(); //ira validar os dados
        //res.send(req.body);
        //res.send(login.body);

        //ira verificar os erros
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso');
        req.session.save(function(){
            return res.redirect('back');
        });


        //res.send(login.errors); //ira mostrar os erros dentro do login
        //res.send(login.user);

    } catch(e) {
        console.log(e);
        return res.render('404');
    }
};

/* Logar/Entrar o usuario */
exports.login = async function(req, res){
    try{
        const login = new Login(req.body);
        await login.login();

        if(login.errors.length > 0 ){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('back');
            });
            return;
        }

        // checar se a variavel user existe dentro  do Login
        if(!login.user){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Você entrou no sistema.');
        // ira identificar que o usuario entrou no sistema
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('back');
        });
    } catch(e){
        console.log(e);
        return res.render('404');
    }
};


exports.login = (req, res) => {
    res.send('Login');
};

// LOGOUT
exports.logout = function(req, res){
    req.session.destroy();
    res.redirect('/');
}