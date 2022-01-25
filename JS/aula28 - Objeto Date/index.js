//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// ----------------------------------------------------------------------
// Exemplo 1
// ----------------------------------------------------------------------
/* 
//const data = new Date(); //data atual
const tresHoras = 60 * 60 * 3 * 1000; //o valor em JS são em milissegundos
const umDia = 60 * 60 * 24 * 1000; 

//const data = new Date(0); //data inicial - 01/01/1970 Timestamp unix ou época unix - como o nosso horario é GMT-0300 é subtraido 3 horas do horario global.
const data = new Date(0 + tresHoras + umDia);

console.log(data.toString()); */

// ----------------------------------------------------------------------
// Exemplo 2
// ----------------------------------------------------------------------

//const data = new Date(); //data atual
//                      ano, mes, dia, hora, minuto, segundos, milissegundos
//const data = new Date(2019, 03, 20, 15, 14, 27); //Sat Apr 20 2019 15:14:27 GMT-0300 (GMT-03:00)
//const data = new Date(2019, 03, 20, 15, 14, 27, 999); //Sat Apr 20 2019 15:14:27 GMT-0300 (GMT-03:00)
//const data = new Date(2019, 03, 20, 15, 14, 27, 1000); //Sat Apr 20 2019 15:14:28 GMT-0300 (GMT-03:00) - adicionou +1 segundo  
//const data = new Date(2019, 03, 20, 15, 14, 60); //Sat Apr 20 2019 15:15:00 GMT-0300 (GMT-03:00) - adicionou +1 minuto
//const data = new Date(2019, 03, 20, 15); //Sat Apr 20 2019 15:00:00 GMT-0300 (GMT-03:00) - ira omitir os minutos
//const data = new Date(2019, 03); //mes -> 0-11
//const data = new Date(2019, 03); //Mon Apr 01 2019 00:00:00 GMT-0300 (GMT-03:00) - ira considerar o 1 dia do mes - minimo para declarar
//const data = new Date(2019); //se nao passar o mes, ira considerar os milessimos de segundo

//String de data
//const data = new Date('2019-04-20 20:20:59'); //Sat Apr 20 2019 20:20:59 GMT-0300 (GMT-03:00)
//const data = new Date('2019-04-20T20:20:59.1000') //Sat Apr 20 2019 20:20:59 GMT-0300 (GMT-03:00) - com milissegundos
/* 
const data = new Date(1642526257061);

console.log(data.toString());

console.log('Dia ', data.getDate());
//console.log('Mês ', data.getMonth()) //mes começa do zero
console.log('Mês ', data.getMonth() + 1)  //mes começa do zero
console.log('Ano ', data.getFullYear())
console.log('Hora ', data.getHours())
console.log('Min ', data.getMinutes())
console.log('Seg ', data.getSeconds())
console.log('Ms ', data.getMilliseconds())
console.log('Dia da semana ', data.getDay()); //0 - Domingo, 6 - Sabado

console.log(Date.now()); //exibi a data atual em milissegundos
 */

// ----------------------------------------------------------------------
// Exemplo 3
// ----------------------------------------------------------------------
/* 
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
};

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil); 
*/