// ***************************************************************************************************************
// ***************************************************************************************************************

// ********** EXERCICIO 2 **********
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a 

/*
const pessoas = [
    { nome: 'Luiz', idade: 62 }, //indice 0
    { nome: 'Maria', idade: 23 }, //indice 1
    { nome: 'Eduardo', idade: 55 }, //indice 2
    { nome: 'Leticia', idade: 19 }, //indice 3
    { nome: 'Rosana', idade: 32 }, //indice 4
    { nome: 'Wallace', idade: 47 } //indice 5
];
*/

// ***** Retorne as pessoas que tem o nome com 5 letras ou mais *****

// ** Função no modo tradicional **
//const pessoasComNomeGrande = pessoas.filter(function(valor){

/*
const pessoasComNomeGrande = pessoas.filter(function(obj){
    
    //console.log(valor); //objeto
    //console.log(valor.nome); //acessa o valor nome do objeto
    //console.log(obj.nome); //estamos recebendo um objeto e filtrando o nome

    //true - pessoas com 5 letras ou mais 
    return obj.nome.length >= 5; //tamanho do nome da pessoa
});
console.log(pessoasComNomeGrande);
*/

// ** Função com Arrow functions **
/*
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);
*/

// **** Retorne as pessoas com mais de 50 anos *****
/*
const pessoasComMaisDeCinquetaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDeCinquetaAnos)
*/

// **** Retorne as pessoas cujo nome termina com a ******
/*
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);
*/