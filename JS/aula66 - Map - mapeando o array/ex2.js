// ----------------------------------------------------------------------
// -- Exercicio 2 ---------------------------------------------------------

/** 
 * - Para cada elemento:
 * - Retorne apenas uma string com o nome da pessoa
 * - Remova apenas a chave "nome" do objeto
 * - Adicione uma chave id em cada objeto 
 * */ 

/*
 const pessoasMap = [
    { nome: 'Luiz', idade: 62 }, //indice 0
    { nome: 'Maria', idade: 23 }, //indice 1
    { nome: 'Eduardo', idade: 55 }, //indice 2
    { nome: 'Leticia', idade: 19 }, //indice 3
    { nome: 'Rosana', idade: 32 }, //indice 4
    { nome: 'Wallace', idade: 47 } //indice 5
];
*/
// ----------------------------------------------------------------------
// -- 1 - Retorne apenas uma string com o nome da pessoa 
/*
const nomes = pessoasMap.map(function(valor){
    return valor.nome;
});
console.log(nomes);
*/

/*
const nomes = pessoasMap.map(obj => obj.nome);
console.log(nomes);
*/

// ----------------------------------------------------------------------
// -- 2 - Remova apenas a chave "nome" do objeto
/*
const idades = pessoasMap.map(function(obj){
    delete obj.nome; //deletando a chave nome do objeto
    return obj;
});
console.log(idades);
*/

/*
const idades = pessoasMap.map(function(obj) {
    return { idade : obj.idade };
});
console.log(idades);
*/

// No caso do arrow function o objeto tem chaves, e ele faz o papel das chaves da função, entao precisa inserir os parenteses para se tornar uma expressão.
/*
const idades = pessoasMap.map(obj => ({ idade : obj.idade })); 
console.log(idades);
*/

// ----------------------------------------------------------------------
// -- 3 - Adicione uma chave id em cada objeto 
/*
const comIds = pessoasMap.map(function(obj, indice){
    obj.id = indice;
    return obj;
});
console.log(comIds);
*/

/*
const comIds = pessoasMap.map(function(obj, indice){
    obj.id = (indice + 1) * 1000; //para desconsiderar o 0 no array
    return obj;
});
console.log(comIds);
*/

/*
// Nos exemplos acima, estamos alterando o array original, para evitar isso:
const comIds = pessoasMap.map(function(obj, indice){
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});
console.log(pessoasMap);
console.log(comIds); //nao afetou o array original
*/