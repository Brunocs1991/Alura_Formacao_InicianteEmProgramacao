var inputBusca = document.querySelector('#busca-paciente');
inputBusca.addEventListener('input', function (event) {
    var pacientes = document.querySelectorAll('.paciente');
    var classeInvisivel = 'invisivel';
    if(this.value) {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var nome = paciente.querySelector('.info-nome').textContent;
            var regExp = new RegExp(this.value, 'i')

            if(!regExp.test(nome)) {
                paciente.classList.add(classeInvisivel);
            } else {
                paciente.classList.remove(classeInvisivel);
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove(classeInvisivel);
        }
    }


});