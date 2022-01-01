// -- Exemplo 1 ---------------------------------------------------------
// Array literal   0          1        2
/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';

// Deletar um elemento do array sem alterar o index
delete nomes[2];

console.log(nomes);
*/

// ----------------------------------------------------------------------
// -- Exemplo 2 ---------------------------------------------------------
// String, Objetos, Funções, Números

//Construtor do array
/*
const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'João';

// Deletar um elemento do array sem alterar o index
delete nomes[2];

console.log(nomes);
*/

// ----------------------------------------------------------------------
// -- Exemplo 3 ---------------------------------------------------------
// Valor por referencia 
/*
const nomes = ['Eduardo', 'Maria', 'Joao'];
//const novo = nomes;

//ira fazer uma copia de nomes e faz a alteração
const novo = [...nomes]; 

//remover elementos do array
novo.pop(); 

console.log(nomes);
console.log(novo);

//tamanho do array
console.log(nomes.length);
*/

// ----------------------------------------------------------------------
// -- Exemplo 4 ---------------------------------------------------------
// Remover elementos de um array

/*
const nomes = ['Eduardo', 'Maria', 'Joao'];

//const novo = [...nomes];

//remove o ultimo elemento de um array, sem alterar o restante do indice 
//e retorna o valor removido
const removido = nomes.pop();

console.log(nomes, removido);
*/

// ----------------------------------------------------------------------
// -- Exemplo 5 ---------------------------------------------------------

/*
const nomes = ['Eduardo', 'Maria', 'Joao'];

//remove o primeiro elemento de um array, porem isso interfere no restante dos indices
const removido = nomes.shift();

console.log(nomes, removido);
*/

// ----------------------------------------------------------------------
// -- Exemplo 6 ---------------------------------------------------------
// Adicionar um elemento do array

/*
const nomes = ['Eduardo', 'Maria', 'Joao'];

//adicionar o nome no final do array
nomes.push('Joana');
nomes.push('Wallace');

//adiciona o nome no inicio do array
nomes.unshift('Daniele');
nomes.unshift('Bruno');

console.log(nomes);
*/

// ----------------------------------------------------------------------
// -- Exemplo 7 ---------------------------------------------------------
// Fatiar o array - pegar um determinado indice dentro do array

/*
//                 0         1        2        3          4
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

//ira exibir apenas os indices 1 e 2
const novo1 = nomes.slice(1, 3); 

// ira exibir do indice 1 ate -1 indice no final 
const novo2 = nomes.slice(1, -1); 

console.log(novo1);
console.log(novo2);
*/

// ----------------------------------------------------------------------
// -- Exemplo 7 ---------------------------------------------------------
//Converter um array em strings

/*
const nome1 = 'Daniele Barbosa da Silva';
const nome2 = 'Daniele, Barbosa, da, Silva';

// converter esse array em uma string, separando por espaço
const nomes1 = nome1.split(' ');

// converter esse array em uma string, separando por virgula
const nomes2 = nome2.split(',');

console.log(nomes1);
console.log(nomes2);
*/

// ----------------------------------------------------------------------
// -- Exemplo 7 ---------------------------------------------------------
// unir os valores e transforma-los em uma string 
/*
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
//const nome = nomes.join(' ');
const nome = nomes.join(', ');

console.log(nome);
*/