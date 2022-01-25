/**
 * FOR OF - ler o valor do objeto 
 */

//const nome = 'Daniele Silva';
const nome = ['Daniele', 'Otavio', 'Henrique'];

// For classico
//for (let i = 0; i < nome.length; i++ ){
//    console.log(nome[i]); //ira exibir cada letra 
//}

//For IN
//for(let i in nome){
//    console.log(nome[i]);
//}

//For OF
for (let valor of nome){
    console.log(valor);
}