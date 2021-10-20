/* ************** Exemplo 1 *********** 

//resertar o module
module.exports = function(x, y){
    return x * y;
}

//nao é indicado, mas da para exibir o resultado
//console.log(module.exports(2,2));
*/

/* *************** Exemplo 2 *********** */

//exportar um numero
module.exports = 2;

//exportar uma classe 
module.exports = class Cachorro {
    constructor(nome){
        this.nome = nome;
    }
    latir(){
        console.log(`${this.nome} está fazendo Au Au`)
    }
}