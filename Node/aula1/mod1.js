/* ************* Exemplo 1 **************

const nome = 'Daniele';
const sobrenome = 'Silva';

const falaNome = () => nome + ' ' + sobrenome;

//visualizar o objeto Module
//console.log(module);

//exportando a chave nome - acessando o exports
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
//console.log(module.exports);

// atalho para exportar a chave - faz referencia ao module.exports
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.qualquerCoisa = 'O que eu quiser exportar';

//console.log(module.exports);
//console.log(exports);

*/

/* ************* Exemplo 2 ************** */
class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}
//exports.Pessoa = Pessoa;

const nome = 'Daniele';
const sobrenome = 'Silva';

//para sobrescrever as informacoes
module.exports = {
    nome, sobrenome, Pessoa
};

exports.outraCoisa = 'Qualquer coisa';
