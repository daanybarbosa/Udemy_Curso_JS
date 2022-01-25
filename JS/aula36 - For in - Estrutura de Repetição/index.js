/**
 * FOR IN -> ler os indices ou chaves do objeto 
 */

// ----------------------------------------------------------------------
// Exemplo 1
// ----------------------------------------------------------------------
/*
const frutas = ['Pera', 'Maça', 'Uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
};

for (let index in frutas){
    console.log(frutas[index]);
}
*/

// ----------------------------------------------------------------------
// Exemplo 2
// ----------------------------------------------------------------------
/*
const pessoa = {
    nome: 'Daniele',
    sobrenome: 'Silva',
    idade: 27
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

//para acessar a variavel dentro do Objeto
console.log(pessoa.nome);
console.log(pessoa['nome']);
const chave = 'nome';
console.log(pessoa[chave]);
*/