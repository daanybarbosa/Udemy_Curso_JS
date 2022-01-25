// ----------------------------------------------------------------------
// Exemplo 1
// ----------------------------------------------------------------------
/*
//Ao inves de criar variaveis soltas, é mais pratico criar um unico objeto que tenha todos os dados referente a pessoa1
//const nome1 = 'Daniele';
//const sobrenome1 = 'Silva';
//const idade1 = 27;

//Objeto literal
const pessoa1 = {
    nome: 'Daniele',
    sobrenome: 'Silva',
    idade: 27
};

const pessoa2 = {
    nome: 'Bruno',
    sobrenome: 'Ribeiro',
    idade: 31
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
*/

// ----------------------------------------------------------------------
// Exemplo 2
// ----------------------------------------------------------------------
/*
//Criar uma função para criar a pessoa
//(nome, sobrenome, idade) -> parametros
function criaPessoa(nome, sobrenome, idade){
    return {
        //nome: nome,
        //sobrenome: sobrenome,
        //idade: idade

        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Daniele', 'Silva', 27);
const pessoa2 = criaPessoa('Bruno', 'Ribeiro', 31);
const pessoa3 = criaPessoa('Luiz', 'Miranda', 25);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/

// ----------------------------------------------------------------------
// Exemplo 3
// ----------------------------------------------------------------------
/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        //console.log(`${this.nome} ${this.sobrenome} está falando oi... `)
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
*/