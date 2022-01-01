//               -5       -4       -3         -2       -1
//                0        1        2          3        4 
//const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

// ***************************************************************************************************************
/** 
 * **** splice() 
 * - Essa função mexe no array original 
 * - nomes.splice(indice, delete, elem1, elem2, elem3) -> parametros: 
 *      1 - indice de inicio, 
 *      2 - qtos elementos quer remover do array
 *      3 - elementos que quer adicionar
 * 
 * a função splice tambem retorna o elemento que foi removido, assim como o pop.
 * a diferença que retorna o array ao inves do proprio elemento.
 * ela pode remover mais de um elemento
 * 
 *  */ 

//const removidos = nomes.splice(4, 1);
//const removidos = nomes.splice(3, 2); //ira remover dois ultimos elementos
//const removidos = nomes.splice(-2, 1); //ira remover o elemento do indice -2
//const removidos = nomes.splice(-2, 2); //ira remover os dois ultimos elementos
//const removidos = nomes.splice(-2, Number.MAX_VALUE); //ele ira começar do -2 e vai remover ate o infinito (numero maximo) do javascript
//const removidos = nomes.splice(-2, 0); //nao ira remover nenhum indice

//const removidos = nomes.splice(3, 0, 'Luiz'); //nao ira remover nenhum indice, e ira incluir um novo elemento no indice 3
//const removidos = nomes.splice(3, 1, 'Luiz'); //ira remover o Gabriel do indice 3, e ira incluir o Luiz.
//const removidos = nomes.splice(3, 2, 'Luiz'); //ira remover o Gabriel e a Julia, e ira incluir o Luiz
//const removidos = nomes.splice(3, 2, 'Luiz', 'Otavio'); //ira remover os dois elementos Gabriel e Julia, e ira incluir o Luiz e Otavio

//console.log(nomes, removidos);
//console.log(Number.MAX_VALUE);


// ***************************************************************************************************************
// **** pop() - simulando a função pop() 

//  const removidos = nomes.splice(-1, 1); //ira remover um elemento na posicao -2
//  console.log(nomes, removidos);

// ***************************************************************************************************************
// **** shift() - simulando a função shift() 

//  const removidos = nomes.splice(0, 1); //ira remover a partir do primeiro elemento
//  console.log(nomes, removidos);

// ***************************************************************************************************************
// **** push() - adicionar um elemento no final do array. 

//  nomes.splice(nomes.length, 0, 'Daniele', 'Bruno', 'Rafael'); //ira incluir os tres elementos no final do array
//  console.log(nomes);

// ***************************************************************************************************************
// **** unshift() 
/*
 //nomes.splice(0, 0, 'Daniele', 'Bruno'); // serao adicionados no começo do array
 nomes.splice(2, 0, 'Daniele', 'Bruno'); //os dois elementos foram adicionados no indice 2 do array
 console.log(nomes);
 */