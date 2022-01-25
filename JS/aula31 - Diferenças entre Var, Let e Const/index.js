/**
 * LET tem escopo de bloco { ... bloco }
 * - só ira respeitar se estiver dentro do bloco 
 * 
 * VAR só tem escopo de função 
 *  - só ira respeitar se tiver dentro da função, porém mesmo dentro da função VAR não ira respeitar se estiver dentro de outro bloco, por exemplo de IF
 */

// ----------------------------------------------------------------------
// Exemplo 1
// ----------------------------------------------------------------------
/* 
const verdadeira = true;

let nome = 'Daniele'; //criando
var nome2 = 'Daniele'; //criando

//Escopo de Bloco 
if(verdadeira) {
    let nome = 'Bruno'; //criando
    var nome2 = 'Rafael'; //redeclarando

    if(verdadeira){
        var nome2 = 'Ronaldo'; //redeclarando
        let nome = 'Outra coisa'; 
    }
}

console.log(nome, nome2); //Daniele e Ronaldo
 */

// ----------------------------------------------------------------------
// Exemplo 2
// ----------------------------------------------------------------------
/* 
//var sobrenome = 'Silva';
const verdadeira = true;

function falaOi(){
    //var nome = 'Daniele'; //essa variavel só pode ser exibida dentro do escopo da função
    //console.log(nome); 

    var sobrenome = 'Silva';
    //console.log(sobrenome); //verificou fora do bloco da função e exibiu o valor

    if(verdadeira){
        let nome = 'Daniele';
        console.log(sobrenome);
    }

    console.log(nome); //mesmo declarado na mesma função, nome que está dentro de if, nao pode ser acessado.
};

//console.log(nome); //Erro - nome foi declarado dentro do bloco da função
falaOi();
 */