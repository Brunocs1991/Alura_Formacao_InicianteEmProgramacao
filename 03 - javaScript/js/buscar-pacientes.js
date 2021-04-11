var buscarPaciente = document.querySelector('#buscar-paciente-integracao');
var mensagensErroAJAX = document.querySelector('#mensagens-erro-ajax');

buscarPaciente.addEventListener('click', function(event) {
    var apiLink = 'https://api-pacientes.herokuapp.com/pacientes';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', apiLink);
    xhr.send();
    xhr.addEventListener('load', function() {
       var status = xhr.status;
       if(status == 200) {
           mensagensErroAJAX.classList.add('invisivel');
           var resposta = xhr.responseText;
           var pacientes = JSON.parse(resposta);
           adicionaListaDePacientesNaTabela(pacientes);
       } else {
           mensagensErroAJAX.classList.remove('invisivel');
       }
    });

    function adicionaListaDePacientesNaTabela(pacientes) {
        for(var i = 0; i < pacientes.length; i++) {
            adicionaPacienteNaTabela(pacientes[i]);
        }
    }
});
