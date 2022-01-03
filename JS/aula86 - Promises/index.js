/*
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};
*/

// ----------------------------------------------------------------------
// Exemplo sem Promise - seria necessario uma função de callback para executar cada frase na ordem correta.
// ----------------------------------------------------------------------

/*
function esperaAi(msg, tempo, callback){
    setTimeout(() => {
        console.log(msg);
        if(callback) callback();
    }, tempo);
};

esperaAi('Frase 1', rand(1, 3), function(){
    esperaAi('Frase 2', rand(1, 3), function(){
        esperaAi('Frase 3', rand(1, 3));
    });
});
*/

// ----------------------------------------------------------------------
// Exemplo com Promise
// ----------------------------------------------------------------------
/*
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { //resolve -> codigo foi executado com sucesso, reject -> codigo contem erros será rejeitado
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
};
*/

//then - sera executado quando o resolve for executado
//catch - sera executado quando o reject for executado
/*
esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3))
    })
    .catch();
*/