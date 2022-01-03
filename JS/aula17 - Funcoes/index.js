/**
 * Função executa uma ação.
 * - mesmas regras da criação de variaveis.
 * 
 */

// ----------------------------------------------------------------------
// Exemplo 1
// ----------------------------------------------------------------------
/*
//nome - parametro que essa função pode receber
function saudacao(nome){
    console.log(`Bom dia ${nome}!`)
}

//executar essa função
//pode colocar o argumento que sera chamado na função
saudacao('Daniele'); 
saudacao('Bruno'); 
*/

// ----------------------------------------------------------------------
// Exemplo 2
// ----------------------------------------------------------------------
/*
//A função nao retorna valor nenhum, se nao for especificado o que a função terá que retornar.
//no exemplo, a função ira retorar 123456.
//Não é recomendavel fazer uma função que retorne algo completamente diferente do que é esperado.
function saudacao(nome){
    console.log(`Bom dia ${nome}!`)
    return 123456;
}

const variavel = saudacao('Daniele'); 
console.log(variavel);
*/

// ----------------------------------------------------------------------
// Exemplo 3
// ----------------------------------------------------------------------
/*
function saudacao(nome){
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Daniele'); 
console.log(variavel);
*/

// ----------------------------------------------------------------------
// Exemplo 3
// ----------------------------------------------------------------------
/*
//function soma(x, y){
function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
};

//console.log(soma(2, 2));
//console.log(resultado); //Erro - O corpo da função é protegido

//const resultado = soma(2, 2); //Cria uma nova variavel independente do que está dentro da função
//const resultado = soma(); //NaN - vairavel nao possui valor declarado.
//const resultado = soma('Daniele', 'Silva')
const resultado = soma(4); //ira assumir o valor de x e y ira permanecer com o valor de 1
console.log(resultado);
*/

// ----------------------------------------------------------------------
// Exemplo 4
// ----------------------------------------------------------------------
/*
//Função anonima
const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

/*
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/
