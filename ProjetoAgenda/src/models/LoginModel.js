const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body; //receber as informacoes do body
        this.errors = []; // flag de erros - se tiver erros nao vai criar o usuario
        this.user = null;
    }

    // metodo login
    async login(){
        this.valida();
        if(this.errors.length > 0) return;

        // ira verificar no banco se o e-mail existe
        this.user = await LoginModel.findOne({email: this.body.email});

        // se o usuario nao existir
        if(!this.user) {
            this.errors.push('Usuário não existe');
            return;
        }

        // ira validar a senha com hash
        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('Senha inválida');
            this.user = null; //garantir que o usuario ira permanecer nulo
            return;
        }
    }


    // metodo register
    async register() {
        this.valida();
        if (this.errors.length > 0) return; //ele recebe os dados puros do usuario

        // ira verificar se o usuario existe 
        await this.userExists();

        // ele ira checar novamente os dados do usuario
        // se o usuario existir, ele ira checar novamente se existe algum erro
        if (this.errors.length > 0) return; 

         // bcrypt - ira criar um hash na senha do usuario (torna-la mais segura)
         const salt = bcryptjs.genSaltSync();
         this.body.password = bcryptjs.hashSync(this.body.password, salt);

            // ira criar o usuario com as informações do body
            this.user = await LoginModel.create(this.body);
    };

    // ira verificar se o usuario existe
    async userExists(){
        //ira verificar no banco de dados se o e-mail existe - ira retornar um dado ou null
        //const user = await LoginModel.findOne({email: this.body.email});
        this.user = await LoginModel.findOne({email: this.body.email});

        //se o usuario for preenchido
        //if(user) this.errors.push('Usuário já existe.');
        if(this.user) this.errors.push('Usuário já existe.');
    };

    // Validação - metodo para validar o usuario
    valida() {
        this.cleanUp();

        //Validação
        // O e-mail precisa ser válido
        // Instalar o pacote validator
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        // A senha precisa ter entre 3 e 50 caracteres
        if (this.body.password.length < 3 || this.body.password.length >= 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }

    // Ira fazer um for no body e vai garantir que tudo dentro do body é String
    // body é os campos do formulario
    cleanUp() {
        for (const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        // garantir que o objeto tenha apenas os campos necessarios
        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    };
};

module.exports = Login;
