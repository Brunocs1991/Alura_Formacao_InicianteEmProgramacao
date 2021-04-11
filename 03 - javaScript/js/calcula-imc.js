var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var mensagem = '';

    var dadosPaciente = obtemDadosDoPaciente(paciente);
    var infoImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(dadosPaciente.peso);
    var alturaEhValida = validaAltura(dadosPaciente.altura);

    if (!pesoEhValido) {
        mensagem = "Peso inválido";
        console.log(mensagem);
        infoImc.textContent = mensagem;
        destacaErro(paciente);
    }

    if(!alturaEhValida) {
        mensagem = "Altura inválida";
        console.log(mensagem);
        infoImc.textContent = mensagem;
        destacaErro(paciente);
    }

    if(pesoEhValido && alturaEhValida) {
        dadosPaciente.imc = calculaImc(dadosPaciente.peso, dadosPaciente.altura);
        paciente.querySelector('.info-imc').textContent = dadosPaciente.imc;
    }
}

function obtemDadosDoPaciente(paciente) {
    return {
        nome: paciente.querySelector('.info-nome').textContent,
        peso: parseFloat(paciente.querySelector('.info-peso').textContent),
        altura: parseFloat(paciente.querySelector('.info-altura').textContent),
        gordura: paciente.querySelector('.info-gordura').textContent,
    }
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso) {
    if(peso && peso > 0 && peso < 1000) return true;
}

function validaAltura(altura) {
    if(altura && altura > 0 && altura < 3.00) return true;
}

function destacaErro(item) {
    item.classList.add('paciente-invalido')
}