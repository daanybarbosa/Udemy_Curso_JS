function meuEscopo(){
    const form = document.querySelector('.form'); //ira buscar no corpo inteiro do html - selecionar pela a classe form
    const resultado = document.querySelector('.resultado');

    // ----------------------------------------------------------------------
    // Exemplo 1
    // ----------------------------------------------------------------------
    /*
    //quando pressionar o botao "Enviar"
    form.onsubmit = function(evento){
        //ira interromper o evento de atualizar a pagina, salvando as informações no escopo
        evento.preventDefault(); 
        alert(1);
        console.log('Enviado')
    };
    */

    // ----------------------------------------------------------------------
    // Exemplo 2
    // ----------------------------------------------------------------------
    /*
    let contador = 1;
    function recebeEventoForm(evento){
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;
    }

    //parametros: evento - submit, function - recebeEventoForm
    form.addEventListener('submit', recebeEventoForm);
    */

    // ----------------------------------------------------------------------
    // Exemplo 3
    // ----------------------------------------------------------------------

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //Object
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

    }

    //parametros: evento - submit, function - recebeEventoForm
    form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();
