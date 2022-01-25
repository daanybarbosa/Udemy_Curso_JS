// ----------------------------------------------------------------------
// Exemplo 1
// ----------------------------------------------------------------------

/* 
const data = new Date('1987-04-26 00:00:00'); //2 - Terça 
let diaSemana = data.getDay();
//let diaSemana = 8;
let diaSemanaTexto;
 */

// Sem Switch / Case
/* 
if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';
}else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
}else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}else {
    diaSemanaTexto = 'Error';
}

console.log(diaSemana, diaSemanaTexto); 
*/

// Com Switch / Case
/* 
switch(diaSemana) {
    case 0: 
        diaSemanaTexto = 'Domingo';
        break; //para parar a condição
    case 1: 
        diaSemanaTexto = 'Segunda';
        break; 
    case 2: 
        diaSemanaTexto = 'Terça';
        break; 
    case 3: 
        diaSemanaTexto = 'Quarta';
        break; 
    case 4: 
        diaSemanaTexto = 'Quinta';
        break; 
    case 5: 
        diaSemanaTexto = 'Sexta';
        break; 
    case 6: 
        diaSemanaTexto = 'Sábado';
        break; 
    default:
        diaSemanaTexto = '';
        break; //opcional
}

console.log(diaSemana, diaSemanaTexto); 
 */

// ----------------------------------------------------------------------
// Exemplo 2
// ----------------------------------------------------------------------
/* 
function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana) {
        case 0: 
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto; //pode substituir o break
        case 1: 
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3: 
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4: 
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5: 
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto; 
        case 6: 
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto; 
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

const data = new Date('1987-04-26 00:00:00'); //2 - Terça 
let diaSemana = data.getDay();
//let diaSemana = 8;
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)

console.log(diaSemana, diaSemanaTexto);
 */